package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/TwilioMessageLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TwilioMessageLVExpressions {
  @javax.annotation.Generated("config/web/pcf/twilio/TwilioMessageLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TwilioMessageLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TypeKeyCell (id=TypeOfMessage) at TwilioMessageLV.pcf: line 33, column 46
    function action_12 () : void {
      ViewSMSPopup.push(sms)
    }
    
    // 'action' attribute on TypeKeyCell (id=TypeOfMessage) at TwilioMessageLV.pcf: line 33, column 46
    function action_dest_13 () : pcf.api.Destination {
      return pcf.ViewSMSPopup.createDestination(sms)
    }
    
    // 'label' attribute on TextCell (id=ToNumber) at TwilioMessageLV.pcf: line 45, column 33
    function label_22 () : java.lang.Object {
      return "To" 
    }
    
    // 'value' attribute on TypeKeyCell (id=TypeOfMessage) at TwilioMessageLV.pcf: line 33, column 46
    function valueRoot_15 () : java.lang.Object {
      return sms
    }
    
    // 'value' attribute on TextCell (id=Claim) at TwilioMessageLV.pcf: line 67, column 30
    function valueRoot_40 () : java.lang.Object {
      return sms.ClaimContactID.Claim
    }
    
    // 'value' attribute on TypeKeyCell (id=TypeOfMessage) at TwilioMessageLV.pcf: line 33, column 46
    function value_11 () : typekey.TwilioSMSType {
      return sms.TypeOfMsg
    }
    
    // 'value' attribute on TextCell (id=MessageBody) at TwilioMessageLV.pcf: line 37, column 36
    function value_16 () : java.lang.String {
      return sms.MessageBody
    }
    
    // 'value' attribute on TextCell (id=FormNumber) at TwilioMessageLV.pcf: line 41, column 35
    function value_19 () : java.lang.String {
      return sms.FromNumber
    }
    
    // 'value' attribute on TextCell (id=ToNumber) at TwilioMessageLV.pcf: line 45, column 33
    function value_23 () : java.lang.String {
      return sms.ToNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Status) at TwilioMessageLV.pcf: line 50, column 53
    function value_27 () : typekey.TwilioDeliveryStatus {
      return sms.Status
    }
    
    // 'value' attribute on DateCell (id=SendTime) at TwilioMessageLV.pcf: line 56, column 38
    function value_31 () : java.util.Date {
      return sms.SendTime
    }
    
    // 'value' attribute on DateCell (id=ReceivedTime) at TwilioMessageLV.pcf: line 62, column 42
    function value_35 () : java.util.Date {
      return sms.ReceivedTime
    }
    
    // 'value' attribute on TextCell (id=Claim) at TwilioMessageLV.pcf: line 67, column 30
    function value_38 () : String {
      return sms.ClaimContactID.Claim.ClaimNumber
    }
    
    // 'visible' attribute on DateCell (id=SendTime) at TwilioMessageLV.pcf: line 56, column 38
    function visible_30 () : java.lang.Boolean {
      return SendTimeVisible
    }
    
    // 'visible' attribute on DateCell (id=ReceivedTime) at TwilioMessageLV.pcf: line 62, column 42
    function visible_34 () : java.lang.Boolean {
      return ReceivedTimeVisible
    }
    
    property get sms () : TwilioSMS {
      return getIteratedValue(1) as TwilioSMS
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/twilio/TwilioMessageLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TwilioMessageLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on RowIterator at TwilioMessageLV.pcf: line 45, column 33
    function label_3 () : java.lang.Object {
      return "To" 
    }
    
    // 'value' attribute on RowIterator at TwilioMessageLV.pcf: line 33, column 46
    function sortValue_0 (sms :  TwilioSMS) : java.lang.Object {
      return sms.TypeOfMsg
    }
    
    // 'value' attribute on RowIterator at TwilioMessageLV.pcf: line 37, column 36
    function sortValue_1 (sms :  TwilioSMS) : java.lang.Object {
      return sms.MessageBody
    }
    
    // 'value' attribute on RowIterator at TwilioMessageLV.pcf: line 67, column 30
    function sortValue_10 (sms :  TwilioSMS) : java.lang.Object {
      return sms.ClaimContactID.Claim.ClaimNumber
    }
    
    // 'value' attribute on RowIterator at TwilioMessageLV.pcf: line 41, column 35
    function sortValue_2 (sms :  TwilioSMS) : java.lang.Object {
      return sms.FromNumber
    }
    
    // 'value' attribute on RowIterator at TwilioMessageLV.pcf: line 45, column 33
    function sortValue_4 (sms :  TwilioSMS) : java.lang.Object {
      return sms.ToNumber
    }
    
    // 'value' attribute on RowIterator at TwilioMessageLV.pcf: line 50, column 53
    function sortValue_5 (sms :  TwilioSMS) : java.lang.Object {
      return sms.Status
    }
    
    // 'value' attribute on RowIterator at TwilioMessageLV.pcf: line 56, column 38
    function sortValue_7 (sms :  TwilioSMS) : java.lang.Object {
      return sms.SendTime
    }
    
    // 'value' attribute on RowIterator at TwilioMessageLV.pcf: line 62, column 42
    function sortValue_9 (sms :  TwilioSMS) : java.lang.Object {
      return sms.ReceivedTime
    }
    
    // 'value' attribute on RowIterator at TwilioMessageLV.pcf: line 26, column 31
    function value_41 () : TwilioSMS[] {
      return twilioMessages
    }
    
    // 'visible' attribute on RowIterator at TwilioMessageLV.pcf: line 56, column 38
    function visible_6 () : java.lang.Boolean {
      return SendTimeVisible
    }
    
    // 'visible' attribute on RowIterator at TwilioMessageLV.pcf: line 62, column 42
    function visible_8 () : java.lang.Boolean {
      return ReceivedTimeVisible
    }
    
    property get ActionVisible () : Boolean {
      return getRequireValue("ActionVisible", 0) as Boolean
    }
    
    property set ActionVisible ($arg :  Boolean) {
      setRequireValue("ActionVisible", 0, $arg)
    }
    
    property get ReceivedTimeVisible () : Boolean {
      return getRequireValue("ReceivedTimeVisible", 0) as Boolean
    }
    
    property set ReceivedTimeVisible ($arg :  Boolean) {
      setRequireValue("ReceivedTimeVisible", 0, $arg)
    }
    
    property get SendTimeVisible () : Boolean {
      return getRequireValue("SendTimeVisible", 0) as Boolean
    }
    
    property set SendTimeVisible ($arg :  Boolean) {
      setRequireValue("SendTimeVisible", 0, $arg)
    }
    
    property get twilioMessages () : TwilioSMS[] {
      return getRequireValue("twilioMessages", 0) as TwilioSMS[]
    }
    
    property set twilioMessages ($arg :  TwilioSMS[]) {
      setRequireValue("twilioMessages", 0, $arg)
    }
    
    property get util () : exv.twilio.common.MessageUtil {
      return getRequireValue("util", 0) as exv.twilio.common.MessageUtil
    }
    
    property set util ($arg :  exv.twilio.common.MessageUtil) {
      setRequireValue("util", 0, $arg)
    }
    
    
  }
  
  
}