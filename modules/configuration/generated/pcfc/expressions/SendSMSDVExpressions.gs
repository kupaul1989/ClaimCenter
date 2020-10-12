package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/SendSMSDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SendSMSDVExpressions {
  @javax.annotation.Generated("config/web/pcf/twilio/SendSMSDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SendSMSDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextAreaInput (id=MessageBody) at SendSMSDV.pcf: line 27, column 34
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      sms.MessageBody = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextAreaInput (id=MessageBody) at SendSMSDV.pcf: line 27, column 34
    function valueRoot_3 () : java.lang.Object {
      return sms
    }
    
    // 'value' attribute on TextAreaInput (id=MessageBody) at SendSMSDV.pcf: line 27, column 34
    function value_0 () : java.lang.String {
      return sms.MessageBody
    }
    
    property get sms () : TwilioSMS {
      return getRequireValue("sms", 0) as TwilioSMS
    }
    
    property set sms ($arg :  TwilioSMS) {
      setRequireValue("sms", 0, $arg)
    }
    
    
  }
  
  
}