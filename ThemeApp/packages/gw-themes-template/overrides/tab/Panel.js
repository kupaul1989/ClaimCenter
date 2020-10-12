Ext.define('GWBaseTheme.tab.Panel', {
    override: 'Ext.tab.Panel',
    border: false,
    bodyBorder: false,
    
    initBorderProps: Ext.emptyFn,

    initBodyBorder: function() {
        // The superclass method converts a truthy bodyBorder into a number and sets
        // an inline border-width style on the body element.  This prevents that from
        // happening if borderBody === true so that the body will get its border-width
        // the stylesheet.
        if (this.bodyBorder !== true) {
            this.callParent();
        }
    },

  // @UpgradedSencha - the applyDefaults method was made private in the base class... so do the same here
  privates: {
    // Make every item inside tabpanel have border and bodyBorder
    // false, unless otherwise specified.
    applyDefaults: function (config) {
      config = this.callParent([config]);

      Ext.applyIf(config, {
        border: false,
        bodyBorder: false
      });

      return config;
    }
  }
});