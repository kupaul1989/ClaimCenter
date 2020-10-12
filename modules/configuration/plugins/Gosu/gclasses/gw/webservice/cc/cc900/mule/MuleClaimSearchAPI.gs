package gw.webservice.cc.cc900.mule

uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.api.server.AvailabilityLevel


@gw.xml.ws.annotation.WsiWebService("http://guidewire.com/cc/ws/gw/webservice/cc/cc900/pcintegration/MuleClaimSearchAPI")
@gw.xml.ws.annotation.WsiAvailability(AvailabilityLevel.MAINTENANCE)
class MuleClaimSearchAPI {

  function findClaimsByClaimantID(contactPublicId : String) : MuleClaim[] {
    var contactQuery = Query.make(Contact)
    contactQuery.compare(Contact#PublicID, Relop.Equals, contactPublicId)
    var contact = contactQuery.select().AtMostOneRow
    var claimContacts = findClaimContactByContact(contact)
    var claims = new ArrayList<Claim>()
    for (claimContact in claimContacts) {
      claims.add(claimContact.Claim)
    }
    var muleClaims = getClaimInformation(claims)
    return muleClaims
  }

  private function findClaimContactByContact(contact : Contact) : ClaimContact[] {
    var claimContactQuery = Query.make(ClaimContact)
    claimContactQuery.compare(ClaimContact#Contact, Relop.Equals, contact)
    var claimContacts = claimContactQuery.select().toTypedArray()
    return  claimContacts.where(\cContact -> cContact.Roles.hasMatch(\role -> role.Role == ContactRole.TC_INSURED))
  }

  private function getClaimInformation(claims : ArrayList<Claim>) : MuleClaim[] {
    var muleClaims = new ArrayList<MuleClaim>()
    for (claim in claims) {
      var muleClaim = new MuleClaim(claim)
      muleClaims.add(muleClaim)
    }
    return muleClaims.toTypedArray()
  }

}