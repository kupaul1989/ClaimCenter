package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/SendSMSPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SendSMSPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/twilio/SendSMSPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SendSMSPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on TextInput (id=messageText) at SendSMSPopup.pcf: line 39, column 93
    function label_3 () : java.lang.Object {
      return message.Type == MessageType.TC_INCOMING ? message.MessageBody : null
    }
    
    // 'value' attribute on TextInput (id=messageText) at SendSMSPopup.pcf: line 39, column 93
    function value_4 () : java.lang.String {
      return message.Type == MessageType.TC_INCOMING ? null : message.MessageBody
    }
    
    property get message () : entity.TwilioSMS {
      return getIteratedValue(1) as entity.TwilioSMS
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/twilio/SendSMSPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SendSMSPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (claimContact :  ClaimContact) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=SendSMS) at SendSMSPopup.pcf: line 58, column 43
    function action_8 () : void {
      util.onSendOfSMS(sms, CurrentLocation)
    }
    
    // 'action' attribute on ToolbarButton (id=Camcel) at SendSMSPopup.pcf: line 62, column 41
    function action_9 () : void {
      CurrentLocation.cancel()
    }
    
    // 'def' attribute on PanelRef at SendSMSPopup.pcf: line 52, column 30
    function def_onEnter_10 (def :  pcf.SendSMSDV) : void {
      def.onEnter(sms)
    }
    
    // 'def' attribute on PanelRef at SendSMSPopup.pcf: line 52, column 30
    function def_refreshVariables_11 (def :  pcf.SendSMSDV) : void {
      def.refreshVariables(sms)
    }
    
    // 'initialValue' attribute on Variable at SendSMSPopup.pcf: line 16, column 45
    function initialValue_0 () : exv.twilio.common.MessageUtil {
      return new exv.twilio.common.MessageUtil()
    }
    
    // 'initialValue' attribute on Variable at SendSMSPopup.pcf: line 23, column 25
    function initialValue_1 () : TwilioSMS {
      return util.createCoversationMessage(claimContact)
    }
    
    // 'sortBy' attribute on IteratorSort at SendSMSPopup.pcf: line 35, column 30
    function sortBy_2 (message :  entity.TwilioSMS) : java.lang.Object {
      return util.getSortingDateForPreviousMessage(message)
    }
    
    // 'title' attribute on Popup (id=SendSMSPopup) at SendSMSPopup.pcf: line 10, column 70
    static function title_12 (claimContact :  ClaimContact) : java.lang.Object {
      return "Messges to "+claimContact.Contact.DisplayName
    }
    
    // 'value' attribute on InputIterator at SendSMSPopup.pcf: line 32, column 44
    function value_7 () : entity.TwilioSMS[] {
      return util.getPreviousCoversation(claimContact)
    }
    
    override property get CurrentLocation () : pcf.SendSMSPopup {
      return super.CurrentLocation as pcf.SendSMSPopup
    }
    
    property get claimContact () : ClaimContact {
      return getVariableValue("claimContact", 0) as ClaimContact
    }
    
    property set claimContact ($arg :  ClaimContact) {
      setVariableValue("claimContact", 0, $arg)
    }
    
    property get sms () : TwilioSMS {
      return getVariableValue("sms", 0) as TwilioSMS
    }
    
    property set sms ($arg :  TwilioSMS) {
      setVariableValue("sms", 0, $arg)
    }
    
    property get util () : exv.twilio.common.MessageUtil {
      return getVariableValue("util", 0) as exv.twilio.common.MessageUtil
    }
    
    property set util ($arg :  exv.twilio.common.MessageUtil) {
      setVariableValue("util", 0, $arg)
    }
    
    
  }
  
  
}