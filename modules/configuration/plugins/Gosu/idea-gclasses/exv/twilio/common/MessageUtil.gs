package exv.twilio.common

uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.api.util.DateUtil
uses pcf.SendSMSPopup

uses javax.servlet.http.HttpServletRequest

class MessageUtil {

  function createNotificationMessage(claimContact: ClaimContact) : TwilioSMS {
      var twilioSMS = new TwilioSMS()
      twilioSMS.ToNumber = claimContact.Contact.PrimaryPhoneValue
      twilioSMS.FromNumber = claimContact.Claim.AssignedUser.Contact.PrimaryPhoneValue
      twilioSMS.Type = MessageType.TC_OUTGOING   // respect to adjuster
      twilioSMS.TypeOfMsg = TwilioSMSType.TC_NOTIFICATION
      twilioSMS.Status = TwilioDeliveryStatus.TC_INITIATED
      twilioSMS.ClaimContactID = claimContact
      claimContact.addToMessages(twilioSMS)
      return twilioSMS
  }

  function createCoversationMessage(contact : ClaimContact) : TwilioSMS {
    var twilioSMS = new TwilioSMS()
    twilioSMS.ToNumber = contact.Contact.PrimaryPhoneValue
    twilioSMS.FromNumber = User.util.CurrentUser.Contact.PrimaryPhoneValue
    twilioSMS.TypeOfMsg = TwilioSMSType.TC_CONVERSATION
    twilioSMS.Type = MessageType.TC_OUTGOING       // respect to adjuster
    twilioSMS.ClaimContactID = contact
    contact.addToMessages(twilioSMS)
    return twilioSMS
  }

  function onSendOfSMS(twilioSMS : TwilioSMS, location : SendSMSPopup) {
    twilioSMS.Status = TwilioDeliveryStatus.TC_INITIATED
    twilioSMS.addEvent("SendConversationSMS")
    createNoteOnSendSMS(twilioSMS)
    location.commit()
  }

  function createAndSaveIncomingMessage(request: HttpServletRequest) : TwilioSMS {
    var sms:TwilioSMS
    try{
      gw.transaction.Transaction.runWithNewBundle(\ bundle -> {
        sms = new TwilioSMS()
        sms.MessageSid= request.getParameter("MessageSid")
        sms.FromNumber = request.getParameter("From")
        var toNumber = request.getParameter("To")
        sms.ToNumber = toNumber.substring(2,5)+"-"+toNumber.substring(5,8)+"-"+toNumber.substring(8)
        sms.MessageBody = request.getParameter("Body")
        sms.TypeOfMsg = TwilioSMSType.TC_CONVERSATION
        sms.Type = MessageType.TC_INCOMING          // respect to adjuster
        sms.Status = TwilioDeliveryStatus.TC_DELIVERED
        sms.ReceivedTime = DateUtil.currentDate()

        var contact = getContactByPrimaryPhone(sms.FromNumber)
        var claimContacts = getClaimContactsForContact(contact)
        if(claimContacts != null and claimContacts.Count == 1) {
          var claimContact = claimContacts.first()
          sms.ClaimContactID = claimContact
          claimContact.addToMessages(sms)
          createNoteOnSMSReceived(sms)
        }
      },"su")
    } catch (e : Exception){
      print(e.Message)
    }
    return sms
  }

  function getContactByPrimaryPhone(phone : String) : Contact {
    var updatedPhoneValue = phone.replace("+91", "0")
    var contactQueryObj = Query.make(Person)
    contactQueryObj.compare(Person#CellPhone, Relop.Equals, updatedPhoneValue)
    var contact = contactQueryObj.select().AtMostOneRow
    return contact
  }

  function getClaimContactsForContact (contact : Contact) : ClaimContact[] {
    var claimContactqueryObj = Query.make(ClaimContact)
    claimContactqueryObj.compare(ClaimContact#Contact, Relop.Equals, contact)
    var claimContacts = claimContactqueryObj.select().toTypedArray()
    var claimContactsOnOpenClaim = claimContacts.where(\cc -> cc.Claim.State == ClaimState.TC_OPEN)
    return claimContactsOnOpenClaim
  }

  function getPreviousCoversation(claimContact : ClaimContact) : TwilioSMS[] {
    var userPhone = User.util.CurrentUser.Contact.PrimaryPhoneValue
    var claimContactMessages = claimContact.Messages.where(\msg -> msg.TypeOfMsg == TwilioSMSType.TC_CONVERSATION and !msg.New)
    var previouesMessages = claimContactMessages.where(\message -> message.ToNumber == userPhone or message.FromNumber == userPhone)
    return previouesMessages
  }

  function getMessagesForUser(user  : User) : TwilioSMS[] {
    var phone = user.Contact.PrimaryPhoneValue
    var smsQueryObj = Query.make(TwilioSMS)
    smsQueryObj.or(\ query -> {
      query.compare(TwilioSMS#ToNumber, Relop.Equals, phone)
      query.compare(TwilioSMS#FromNumber, Relop.Equals, phone)
    })
    return smsQueryObj.select().toTypedArray()
  }

  function updateMessageStatus(messageSid : String, status : String)   {
    var queryObj = Query.make(TwilioSMS)
    queryObj.compare(TwilioSMS#MessageSid  ,Relop.Equals, messageSid);
    var targetMessage = queryObj.select().AtMostOneRow
    gw.transaction.Transaction.runWithNewBundle(\bundle -> {
      targetMessage = bundle.add(targetMessage)
      targetMessage.Status = TwilioDeliveryStatus.get(status)
      if (targetMessage.Status == TwilioDeliveryStatus.TC_DELIVERED) {
        targetMessage.ReceivedTime = DateUtil.currentDate()
      }
    }, "su")
  }

  function createNoteOnSendSMS(sms : TwilioSMS) {
    var claim = sms.ClaimContactID.Claim
    var receiver = getContactByPrimaryPhone(sms.ToNumber)
    var note = new Note()
    note.Author = User.util.CurrentUser
    note.Subject = "Twilio SMS ("+ sms.FromNumber+" -> "+sms.ToNumber+" )"
    note.Body = "SMS has been initiated to "+receiver+" from "+claim.AssignedUser
    note.Claim = claim
    claim.addToNotes(note)
  }

  function createNoteOnSMSReceived (sms : TwilioSMS) {
    var claim = sms.ClaimContactID.Claim
    var sender = getContactByPrimaryPhone(sms.FromNumber)
    var note = new Note()
    note.Author = User.util.CurrentUser
    note.Subject = "Twilio SMS ("+ sms.FromNumber+" -> "+sms.ToNumber+" )"
    note.Body = "SMS has been received from "+sender
    note.Claim = claim
    claim.addToNotes(note)
  }

  function getSortingDateForPreviousMessage(sms : TwilioSMS) : Date {
    if(sms.Type == MessageType.TC_INCOMING) {
      return sms.ReceivedTime
    }
    return sms.SendTime
  }

  function getClaimListForContact(contact : Contact) : Claim[] {
    var claimContacts = getClaimContactsForContact(contact)
    var totalClaims = new ArrayList<Claim>()
    for(claimContact in claimContacts) {
      totalClaims.add(claimContact.Claim)
    }
    return totalClaims.toTypedArray()
  }

  function claimNumberSelectionOnChange(sms : TwilioSMS, claimNumber : String) {
    var claim = Claim.finder.findClaimByClaimNumber(claimNumber)
    var contact = getContactByPrimaryPhone(sms.FromNumber)
    var claimContacts = getClaimContactsForContact(contact)
    sms.ClaimContactID = claimContacts.firstWhere(\cContact -> cContact.Claim == claim)
  }
}
