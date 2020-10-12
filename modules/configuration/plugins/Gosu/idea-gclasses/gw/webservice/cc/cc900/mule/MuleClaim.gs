package gw.webservice.cc.cc900.mule

uses gw.api.database.Query
uses gw.api.database.Relop
uses gw.xml.ws.annotation.WsiExportable

uses java.math.BigDecimal


@WsiExportable(("http://guidewire.com/cc/ws/gw/webservice/cc/cc900/mule/MuleClaim"))
@Export
class MuleClaim {
  var _claimNumber : String as ClaimNumber
  var _lossDate : Date as LossDate
  var _policyNumber : String as PolicyNumber
  var _policyTypeName : String as PolicyTypeName
  var _totalIncurred : BigDecimal as TotalIncurred
  var _totalIncurredCurrency : Currency as TotalIncurredCurrency
  var _remainingReserves : BigDecimal as RemainingReserves
  var _remainingReservesCurrency : Currency as RemainingReservesCurrency
  var _claimSecurityType : String as ClaimSecurityType
  var _litigationIndicator : Boolean as LitigationIndicator
  var _fraudIndicator : Boolean as FraudIndicator

  // typelists
  var _status : String as Status

  construct()
  {
  }

  construct(ccClaim : Claim)
  {
    _claimNumber = ccClaim.ClaimNumber
    _lossDate = ccClaim.LossDate
    _policyNumber = ccClaim.Policy.PolicyNumber
    _policyTypeName = ccClaim.Policy.PolicyType.DisplayName
    var tempIncurred =  ccClaim.ClaimRpt.TotalIncurredNet
    if (tempIncurred != null) {
      _totalIncurred = tempIncurred.Amount
      _totalIncurredCurrency = tempIncurred.Currency
    }

    var tempReserves = ccClaim.ClaimRpt.RemainingReserves
    if (tempReserves != null) {
      _remainingReserves = tempReserves.Amount
      _remainingReservesCurrency = tempReserves.Currency
    }

    _claimSecurityType = ccClaim.PermissionRequired.Code

    _litigationIndicator = Query.make(Matter).compare(Matter#Claim, Relop.Equals, ccClaim).select().Count > 0

    _fraudIndicator = ccClaim.FraudIndicator

    _status = ccClaim.State.Description
  }

}