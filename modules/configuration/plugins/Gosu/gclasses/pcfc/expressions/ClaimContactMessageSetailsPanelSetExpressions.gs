package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/ClaimContactMessageSetailsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimContactMessageSetailsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/twilio/ClaimContactMessageSetailsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimContactMessageSetailsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=Inbox) at ClaimContactMessageSetailsPanelSet.pcf: line 22, column 18
    function def_onEnter_0 (def :  pcf.TwilioMessageLV) : void {
      def.onEnter(twilioMessages.where(\msg -> (msg.Type == MessageType.TC_INCOMING)), util, false, true, false)   
    }
    
    // 'def' attribute on PanelRef at ClaimContactMessageSetailsPanelSet.pcf: line 33, column 181
    function def_onEnter_2 (def :  pcf.TwilioMessageLV) : void {
      def.onEnter(twilioMessages.where(\msg -> (msg.Type == MessageType.TC_OUTGOING) and (msg.Status == TwilioDeliveryStatus.TC_DELIVERED)), util, false, false, true)
    }
    
    // 'def' attribute on PanelRef (id=Inbox) at ClaimContactMessageSetailsPanelSet.pcf: line 22, column 18
    function def_refreshVariables_1 (def :  pcf.TwilioMessageLV) : void {
      def.refreshVariables(twilioMessages.where(\msg -> (msg.Type == MessageType.TC_INCOMING)), util, false, true, false)   
    }
    
    // 'def' attribute on PanelRef at ClaimContactMessageSetailsPanelSet.pcf: line 33, column 181
    function def_refreshVariables_3 (def :  pcf.TwilioMessageLV) : void {
      def.refreshVariables(twilioMessages.where(\msg -> (msg.Type == MessageType.TC_OUTGOING) and (msg.Status == TwilioDeliveryStatus.TC_DELIVERED)), util, false, false, true)
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