Ext.define('App.view.User', {

	extend 		: 'Ext.grid.Panel',
	alias		: 'widget.user',

    requires    : [
        'Ext.ux.grid.FiltersFeature'
    ],

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
        this.callParent(arguments);
    },

    features: [
        {
            ftype   : 'filters',
            encode  : true,
            filters : [
                {
                    type        : 'string',
                    dataIndex   : 'name'
                }, {
                    type        : 'string',
                    dataIndex   : 'email'
                }
            ]
        }
    ],

    columns : [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { 
            text      : 'Phone', 
            dataIndex : 'phone',
            filter    : {
                type    : 'string'
            }
        }
    ]

});