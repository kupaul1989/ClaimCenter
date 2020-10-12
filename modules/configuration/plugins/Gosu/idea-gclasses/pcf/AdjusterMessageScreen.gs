package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/AdjusterMessageScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class AdjusterMessageScreen extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($twilioMessages :  TwilioSMS[], $util :  exv.twilio.common.MessageUtil) : void {
    __widgetOf(this, pcf.AdjusterMessageScreen, SECTION_WIDGET_CLASS).setVariables(false, {$twilioMessages, $util})
  }
  
  function refreshVariables ($twilioMessages :  TwilioSMS[], $util :  exv.twilio.common.MessageUtil) : void {
    __widgetOf(this, pcf.AdjusterMessageScreen, SECTION_WIDGET_CLASS).setVariables(true, {$twilioMessages, $util})
  }
  
  
}