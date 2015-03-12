Ext.define('App.view.Viewport', {
    extend  : 'Ext.Viewport',    
    layout  : 'fit',
    
    requires: [
        'App.view.UserForm',
        'App.view.UserList'
    ], 
    
    initComponent: function() {
        var me = this;
        console.log('Viewport: initComponent');
        Ext.apply(me, {
            items: [
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'userForm'
                        }, {
                            xtype: 'userList'
                        }
                    ]
                }
            ]
        });
                
        me.callParent(arguments);
    }
});