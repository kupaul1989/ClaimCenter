package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/NewClaimPolicyGeneralPanelSet.Trav.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class NewClaimPolicyGeneralPanelSet_Trav extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Policy :  Policy) : void {
    __widgetOf(this, pcf.NewClaimPolicyGeneralPanelSet_Trav, SECTION_WIDGET_CLASS).setVariables(false, {$Policy})
  }
  
  function refreshVariables ($Policy :  Policy) : void {
    __widgetOf(this, pcf.NewClaimPolicyGeneralPanelSet_Trav, SECTION_WIDGET_CLASS).setVariables(true, {$Policy})
  }
  
  
}