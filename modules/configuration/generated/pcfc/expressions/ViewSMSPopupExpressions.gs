package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/ViewSMSPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ViewSMSPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/twilio/ViewSMSPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ViewSMSPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (sms :  TwilioSMS) : int {
      return 0
    }
    
    // 'def' attribute on PanelRef at ViewSMSPopup.pcf: line 18, column 30
    function def_onEnter_0 (def :  pcf.ViewSMSDV) : void {
      def.onEnter(sms)
    }
    
    // 'def' attribute on PanelRef at ViewSMSPopup.pcf: line 18, column 30
    function def_refreshVariables_1 (def :  pcf.ViewSMSDV) : void {
      def.refreshVariables(sms)
    }
    
    override property get CurrentLocation () : pcf.ViewSMSPopup {
      return super.CurrentLocation as pcf.ViewSMSPopup
    }
    
    property get sms () : TwilioSMS {
      return getVariableValue("sms", 0) as TwilioSMS
    }
    
    property set sms ($arg :  TwilioSMS) {
      setVariableValue("sms", 0, $arg)
    }
    
    
  }
  
  
}