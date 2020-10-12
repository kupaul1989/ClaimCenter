package exv.twilio.common


class TwilioSystemPayload {

  function createdSMSPayload(sms : TwilioSMS) : String {
    var toNumber = sms.ToNumber
    var fromNumber = sms.FromNumber
    var messageBody = sms.MessageBody
    if(sms.TypeOfMsg == TwilioSMSType.TC_CONVERSATION) {
      var user = User.util.CurrentUser
      messageBody = messageBody + "\n\n-"+ user+", "+user.GroupUsers.first().Group.Organization
    }
    return "Body="+ messageBody + "&To="+ toNumber + "&From=" + fromNumber
  }
}