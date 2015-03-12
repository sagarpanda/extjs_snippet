Ext.define('App.view.UserList', {

	extend 		: 'Ext.grid.Panel',
	alias		: 'widget.userList',

	title 		: 'User List',
    height	    : 300,
    padding     : 10,
    //width		: 400,
    //store       : { type: 'user' },

    initComponent: function() {
        console.log('UserList: initComponent');
        var me = this;
        //this.store = Ext.create('App.store.User');
        this.store = 'User';
        this.bbar  = {
            xtype : 'pagingtoolbar',
            store : me.store,
            displayInfo : true
        };
        this.callParent(arguments);
        //this.store.load();
    },

    columns : [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ]

});