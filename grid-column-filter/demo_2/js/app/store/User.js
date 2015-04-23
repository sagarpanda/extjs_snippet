Ext.define('App.store.User', {

    extend  : 'Ext.data.Store',
    alias   : 'store.user',
    model   : 'App.model.User',

    autoLoad: true,
    pageSize: 10,
    remoteSort: true,

    proxy   : {
        type    : 'ajax',
        url     : 'services/user.php',
        reader  : {
            type    : 'json',
            root    : 'items',
            totalProperty : 'total'
        } 
    }

});