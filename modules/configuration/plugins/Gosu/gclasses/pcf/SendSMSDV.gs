package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/SendSMSDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class SendSMSDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($sms :  TwilioSMS) : void {
    __widgetOf(this, pcf.SendSMSDV, SECTION_WIDGET_CLASS).setVariables(false, {$sms})
  }
  
  function refreshVariables ($sms :  TwilioSMS) : void {
    __widgetOf(this, pcf.SendSMSDV, SECTION_WIDGET_CLASS).setVariables(true, {$sms})
  }
  
  
}