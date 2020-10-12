package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/TwilioMessageLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TwilioMessageLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($twilioMessages :  TwilioSMS[], $util :  exv.twilio.common.MessageUtil, $ActionVisible :  Boolean, $SendTimeVisible :  Boolean, $ReceivedTimeVisible :  Boolean) : void {
    __widgetOf(this, pcf.TwilioMessageLV, SECTION_WIDGET_CLASS).setVariables(false, {$twilioMessages, $util, $ActionVisible, $SendTimeVisible, $ReceivedTimeVisible})
  }
  
  function refreshVariables ($twilioMessages :  TwilioSMS[], $util :  exv.twilio.common.MessageUtil, $ActionVisible :  Boolean, $SendTimeVisible :  Boolean, $ReceivedTimeVisible :  Boolean) : void {
    __widgetOf(this, pcf.TwilioMessageLV, SECTION_WIDGET_CLASS).setVariables(true, {$twilioMessages, $util, $ActionVisible, $SendTimeVisible, $ReceivedTimeVisible})
  }
  
  
}