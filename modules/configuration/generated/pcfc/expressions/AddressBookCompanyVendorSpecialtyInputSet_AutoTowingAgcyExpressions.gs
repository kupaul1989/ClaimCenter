package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/addressbook/AddressBookCompanyVendorSpecialtyInputSet.AutoTowingAgcy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressBookCompanyVendorSpecialtyInputSet_AutoTowingAgcyExpressions {
  @javax.annotation.Generated("config/web/pcf/addressbook/AddressBookCompanyVendorSpecialtyInputSet.AutoTowingAgcy.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressBookCompanyVendorSpecialtyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=BusinessLicense) at AddressBookCompanyVendorSpecialtyInputSet.AutoTowingAgcy.pcf: line 15, column 68
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      (CompanyVendor as AutoTowingAgcy).AutoTowingLicense = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=BusinessLicense) at AddressBookCompanyVendorSpecialtyInputSet.AutoTowingAgcy.pcf: line 15, column 68
    function valueRoot_3 () : java.lang.Object {
      return (CompanyVendor as AutoTowingAgcy)
    }
    
    // 'value' attribute on TextInput (id=BusinessLicense) at AddressBookCompanyVendorSpecialtyInputSet.AutoTowingAgcy.pcf: line 15, column 68
    function value_0 () : java.lang.String {
      return (CompanyVendor as AutoTowingAgcy).AutoTowingLicense
    }
    
    property get CompanyVendor () : CompanyVendor {
      return getRequireValue("CompanyVendor", 0) as CompanyVendor
    }
    
    property set CompanyVendor ($arg :  CompanyVendor) {
      setRequireValue("CompanyVendor", 0, $arg)
    }
    
    
  }
  
  
}