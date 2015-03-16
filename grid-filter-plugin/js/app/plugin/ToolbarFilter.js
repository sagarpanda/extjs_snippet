Ext.define('Core.ux.panel.grid.ToolbarFilter', {
    extend: "Ext.AbstractPlugin",
    alias: "plugin.simplegridfilter",
 
    fieldName: 'name',
    /**
     * This method add filter input at the end of top toolbar elements
     * or if top toolbar doesnt exist, create new one with filter input
     *
     * @param component The ext panel cmp
     */
    init: function (component) {
        var me = this,
            toolbar = component.down('toolbar[dock=top]'),
            items = [
                //{xtype: 'tbfill'},
                {
                    xtype: 'textfield',
                    itemId: 'filter',
                    fieldLabel: 'Search',
                    enableKeyEvents: true,
                    listeners: {
                        //specialkey: me.filterFn,
                        // keyup event only fires if enableKeyEvents is set to true.
                        keyup : me.filterFn,
                        scope: this
                    }
                }
            ];
 
        if (toolbar == null) {
            component.addDocked(
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: items
                });
        }
        else
            toolbar.add(items);
    },
    
    filterFn: function(field, e) {
        var me = this, value = field.getValue();
 
        //if (e.getKey() === e.ENTER) {
            var store = field.up('grid').getStore();
            //store.load({params:{"search":value}});
            store.clearFilter(true);
            store.filter(me.fieldName, value);
        //}
    }
});