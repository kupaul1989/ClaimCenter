/**
 * By default splitter has 5px. Make it wider with 9px
 *
 * @UpgradedSencha - moved from base gw package to theme per Sencha consultant recommendation
 */
Ext.define('GWBaseTheme.resizer.Splitter', {
  override: 'Ext.resizer.Splitter',

  beforeRender: function () {
    this.callParent(arguments);
    this[this.vertical ? 'width' : 'height'] = 9;
  }
});
