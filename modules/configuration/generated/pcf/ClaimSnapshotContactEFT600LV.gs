package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/snapshot/600/ClaimSnapshotContactEFT600LV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSnapshotContactEFT600LV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($Contact :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotContactEFT600LV, SECTION_WIDGET_CLASS).setVariables(false, {$Contact})
  }
  
  function refreshVariables ($Contact :  dynamic.Dynamic) : void {
    __widgetOf(this, pcf.ClaimSnapshotContactEFT600LV, SECTION_WIDGET_CLASS).setVariables(true, {$Contact})
  }
  
  
}