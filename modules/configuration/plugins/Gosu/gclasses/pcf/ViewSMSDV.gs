package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/ViewSMSDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ViewSMSDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($sms :  TwilioSMS) : void {
    __widgetOf(this, pcf.ViewSMSDV, SECTION_WIDGET_CLASS).setVariables(false, {$sms})
  }
  
  function refreshVariables ($sms :  TwilioSMS) : void {
    __widgetOf(this, pcf.ViewSMSDV, SECTION_WIDGET_CLASS).setVariables(true, {$sms})
  }
  
  
}