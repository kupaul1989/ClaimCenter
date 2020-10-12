package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/ViewSMSDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ViewSMSDVExpressions {
  @javax.annotation.Generated("config/web/pcf/twilio/ViewSMSDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ViewSMSDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber) at ViewSMSDV.pcf: line 27, column 55
    function valueRoot_11 () : java.lang.Object {
      return sms.ClaimContactID.Claim
    }
    
    // 'value' attribute on TextInput (id=ToNumner) at ViewSMSDV.pcf: line 14, column 31
    function valueRoot_2 () : java.lang.Object {
      return sms
    }
    
    // 'value' attribute on TextInput (id=ToNumner) at ViewSMSDV.pcf: line 14, column 31
    function value_0 () : java.lang.String {
      return sms.ToNumber
    }
    
    // 'value' attribute on TextInput (id=FormNumber) at ViewSMSDV.pcf: line 18, column 33
    function value_3 () : java.lang.String {
      return sms.FromNumber
    }
    
    // 'value' attribute on TextAreaInput (id=MessageBody) at ViewSMSDV.pcf: line 23, column 34
    function value_6 () : java.lang.String {
      return sms.MessageBody
    }
    
    // 'value' attribute on TextInput (id=ClaimNumber) at ViewSMSDV.pcf: line 27, column 55
    function value_9 () : java.lang.String {
      return sms.ClaimContactID.Claim.ClaimNumber
    }
    
    property get sms () : TwilioSMS {
      return getRequireValue("sms", 0) as TwilioSMS
    }
    
    property set sms ($arg :  TwilioSMS) {
      setRequireValue("sms", 0, $arg)
    }
    
    
  }
  
  
}