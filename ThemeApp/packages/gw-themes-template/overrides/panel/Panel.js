Ext.define('GWBaseTheme.panel.Panel', {
    override: 'Ext.panel.Panel',
    initComponent: function() {
        var me = this;
        
        // specific ic rules for inline-details UI
        if (me.ui === 'inline-details') {
            if (!Ext.isDefined(me.initialConfig.bodyPadding)) {
                me.bodyPadding = 10;
            }
        }
        
        me.callParent(arguments);
    },
    
    onAdd: function(item) {
        this.callParent(arguments);
        
        // specific rules for tabpanels inside list-details UI
        if (item.isXType && item.isXType('tabpanel')) {
            item.addCls(Ext.baseCSSPrefix + 'list-details-tabpanel');
        }
    }
});