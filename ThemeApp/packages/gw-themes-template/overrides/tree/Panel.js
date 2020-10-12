Ext.define('GWBaseTheme.tree.Panel', {
    override: 'Ext.tree.Panel',
    initComponent: function() {
        var me = this,
            initialConfig = me.initialConfig;

        if (me.ui === 'tree-navigation') {
            if(!Ext.isDefined(initialConfig.lines)) {
                me.lines = false;
            }
            if(!Ext.isDefined(initialConfig.border)) {
                me.border = false;
            }
        }
        
        me.callParent(arguments);
    }
});