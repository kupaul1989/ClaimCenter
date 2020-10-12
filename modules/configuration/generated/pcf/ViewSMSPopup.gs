package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/ViewSMSPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ViewSMSPopup extends com.guidewire.pl.web.codegen.LocationBase {
  private static function config () : com.guidewire.pl.web.navigation.LocationConfig {
    return __configOf(pcf.ViewSMSPopup, LOCATION_CONFIG_CLASS)
  }
  
  static function createDestination (sms :  TwilioSMS) : pcf.api.Destination {
    return __newDestination(config(), {sms}, 0)
  }
  
  static function push (sms :  TwilioSMS) : pcf.api.Location {
    return __newDestination(config(), {sms}, 0).push()
  }
  
  
}