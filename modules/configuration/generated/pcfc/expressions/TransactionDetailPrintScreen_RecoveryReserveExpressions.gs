package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/financials/transactions/print/TransactionDetailPrintScreen.RecoveryReserve.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TransactionDetailPrintScreen_RecoveryReserveExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/financials/transactions/print/TransactionDetailPrintScreen.RecoveryReserve.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TransactionDetailPrintScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TransactionDetailPrintScreen.RecoveryReserve.pcf: line 12, column 75
    function def_onEnter_0 (def :  pcf.TransactionRecoveryReserveDV) : void {
      def.onEnter(Transaction as RecoveryReserve)
    }
    
    // 'def' attribute on PanelRef at TransactionDetailPrintScreen.RecoveryReserve.pcf: line 12, column 75
    function def_refreshVariables_1 (def :  pcf.TransactionRecoveryReserveDV) : void {
      def.refreshVariables(Transaction as RecoveryReserve)
    }
    
    property get Transaction () : Transaction {
      return getRequireValue("Transaction", 0) as Transaction
    }
    
    property set Transaction ($arg :  Transaction) {
      setRequireValue("Transaction", 0, $arg)
    }
    
    
  }
  
  
}