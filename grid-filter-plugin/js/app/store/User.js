Ext.define('App.store.User', {

    extend  : 'Ext.data.Store',
    alias   : 'store.user',
    model   : 'App.model.User',

    autoLoad: true,
    pageSize: 200,
    remoteSort: true,

    /*data    : {"items":[
        { "id": 1, "name": "Username1",  "email":"username1@gmail.com",  "phone":"9988776651"  },
        { "id": 2, "name": "Username2",  "email":"username2@gmail.com",  "phone":"9988776651"  },
        { "id": 3, "name": "Username3",  "email":"username3@gmail.com",  "phone":"9988776651"  },
        { "id": 4, "name": "Username4",  "email":"username4@gmail.com",  "phone":"9988776651"  },
        { "id": 5, "name": "Username5",  "email":"username5@gmail.com",  "phone":"9988776651"  },
        { "id": 6, "name": "Username6",  "email":"username6@gmail.com",  "phone":"9988776651"  }
    ]},*/

    proxy: {
        type    : 'ajax',
        //url : 'http://sagarpanda.com/services/user.php',
        api     : {
            create  : 'http://sagarpanda.com/services/user.php?act=create',
            read    : 'http://sagarpanda.com/services/user.php?act=read',
            update  : 'http://sagarpanda.com/services/user.php?act=update',
            destroy : 'http://sagarpanda.com/services/user.php?act=delete',
        },
        reader  : {
            type: 'json',
            root: 'items'
        },
        write   : {
            type: 'json'
        }
    }
});