package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/twilio/SendSMSPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class SendSMSPopup extends com.guidewire.pl.web.codegen.LocationBase {
  private static function config () : com.guidewire.pl.web.navigation.LocationConfig {
    return __configOf(pcf.SendSMSPopup, LOCATION_CONFIG_CLASS)
  }
  
  static function createDestination (claimContact :  ClaimContact) : pcf.api.Destination {
    return __newDestination(config(), {claimContact}, 0)
  }
  
  static function push (claimContact :  ClaimContact) : pcf.api.Location {
    return __newDestination(config(), {claimContact}, 0).push()
  }
  
  
}