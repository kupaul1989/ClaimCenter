package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/newgroup/NewGroup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewGroup extends com.guidewire.pl.web.codegen.LocationBase {
  private static function config () : com.guidewire.pl.web.navigation.LocationConfig {
    return __configOf(pcf.NewGroup, LOCATION_CONFIG_CLASS)
  }
  
  static function createDestination () : pcf.api.Destination {
    return __newDestination(config(), {}, 0)
  }
  
  static function createDestination (Parent :  Group) : pcf.api.Destination {
    return __newDestination(config(), {Parent}, 1)
  }
  
  static function drilldown () : pcf.api.Location {
    return __newDestination(config(), {}, 0).drilldown()
  }
  
  static function drilldown (Parent :  Group) : pcf.api.Location {
    return __newDestination(config(), {Parent}, 1).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go () : pcf.api.Location {
    return __newDestination(config(), {}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Parent :  Group) : pcf.api.Location {
    return __newDestination(config(), {Parent}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain () : pcf.api.Location {
    return __newDestination(config(), {}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Parent :  Group) : pcf.api.Location {
    return __newDestination(config(), {Parent}, 1).goInMain()
  }
  
  static function printPage () : pcf.api.Location {
    return __newDestination(config(), {}, 0).printPage()
  }
  
  static function printPage (Parent :  Group) : pcf.api.Location {
    return __newDestination(config(), {Parent}, 1).printPage()
  }
  
  static function push () : pcf.api.Location {
    return __newDestination(config(), {}, 0).push()
  }
  
  static function push (Parent :  Group) : pcf.api.Location {
    return __newDestination(config(), {Parent}, 1).push()
  }
  
  
}