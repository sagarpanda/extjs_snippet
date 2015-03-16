Ext.define('App.view.User', {

	extend 		: 'Ext.grid.Panel',
	alias		: 'widget.user',

	title 		: 'User List',
    height	    : 300,
    //width		: 400,
    //store       : { type: 'user' },

    initComponent: function() {
        var me = this;
        this.store = Ext.create('App.store.User');
        this.bbar  = {
            xtype : 'pagingtoolbar',
            store : me.store,
            displayInfo : true
        };
        this.tbar  = [{
            xtype : 'textfield',
            //fieldLabel: 'Search',
            emptyText: 'Search',
            listeners: {
                specialkey: me.filterFn,
                scope: me
            }
        }];
        this.callParent(arguments);
    },

    columns : [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ],

    filterFn: function(field, evt){
        var value = field.getValue();
 
        if (evt.getKey() === evt.ENTER) {
            var store = this.getStore();
            store.load({params:{"search":value}});
            //store.clearFilter(true);
            //store.filter('name', value);
        }
    }

});