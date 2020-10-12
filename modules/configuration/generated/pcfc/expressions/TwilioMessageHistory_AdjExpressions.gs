package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/TwilioMessageHistory_Adj.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TwilioMessageHistory_AdjExpressions {
  @javax.annotation.Generated("config/web/pcf/twilio/TwilioMessageHistory_Adj.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TwilioMessageHistory_AdjExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'def' attribute on ScreenRef at TwilioMessageHistory_Adj.pcf: line 17, column 58
    function def_onEnter_2 (def :  pcf.AdjusterMessageScreen) : void {
      def.onEnter(twilioMessages, util)
    }
    
    // 'def' attribute on ScreenRef at TwilioMessageHistory_Adj.pcf: line 17, column 58
    function def_refreshVariables_3 (def :  pcf.AdjusterMessageScreen) : void {
      def.refreshVariables(twilioMessages, util)
    }
    
    // 'initialValue' attribute on Variable at TwilioMessageHistory_Adj.pcf: line 11, column 45
    function initialValue_0 () : exv.twilio.common.MessageUtil {
      return new exv.twilio.common.MessageUtil()
    }
    
    // 'initialValue' attribute on Variable at TwilioMessageHistory_Adj.pcf: line 15, column 27
    function initialValue_1 () : TwilioSMS[] {
      return util.getMessagesForUser(User.util.CurrentUser)
    }
    
    // Page (id=TwilioMessageHistory_Adj) at TwilioMessageHistory_Adj.pcf: line 7, column 34
    static function parent_4 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    override property get CurrentLocation () : pcf.TwilioMessageHistory_Adj {
      return super.CurrentLocation as pcf.TwilioMessageHistory_Adj
    }
    
    property get twilioMessages () : TwilioSMS[] {
      return getVariableValue("twilioMessages", 0) as TwilioSMS[]
    }
    
    property set twilioMessages ($arg :  TwilioSMS[]) {
      setVariableValue("twilioMessages", 0, $arg)
    }
    
    property get util () : exv.twilio.common.MessageUtil {
      return getVariableValue("util", 0) as exv.twilio.common.MessageUtil
    }
    
    property set util ($arg :  exv.twilio.common.MessageUtil) {
      setVariableValue("util", 0, $arg)
    }
    
    
  }
  
  
}