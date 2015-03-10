Ext.define('App.view.User', {

	extend 		: 'Ext.grid.Panel',
	alias		: 'widget.user',

	title 		: 'User List',
    height	    : 300,
    //width		: 400,
    //store       : { type: 'user' },
    store       : userStore,

    columns : [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone' }
    ],

    bbar: new Ext.PagingToolbar({
		store 		: userStore,
		displayInfo : true
	})

});