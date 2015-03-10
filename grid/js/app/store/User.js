var userStore = Ext.create('Ext.data.Store', {

    alias   : 'store.user',
    model   : 'App.model.User',

    autoLoad: true,
    pageSize: 10,
    remoteSort: true,

    /*data    : {"items":[
        { "id": 1, "name": "Username1",  "email":"username1@gmail.com",  "phone":"9988776651"  },
        { "id": 2, "name": "Username2",  "email":"username2@gmail.com",  "phone":"9988776651"  },
        { "id": 3, "name": "Username3",  "email":"username3@gmail.com",  "phone":"9988776651"  },
        { "id": 4, "name": "Username4",  "email":"username4@gmail.com",  "phone":"9988776651"  },
        { "id": 5, "name": "Username5",  "email":"username5@gmail.com",  "phone":"9988776651"  },
        { "id": 6, "name": "Username6",  "email":"username6@gmail.com",  "phone":"9988776651"  }
    ]},

    proxy: {
        type: 'memory',
        data: MyStore,
        reader: {
            type: 'json',
            root: 'items'
        }
    }*/

    proxy   : {
        type    : 'ajax',
        url     : 'http://sagarpanda.com/services/user.php',
        reader  : {
            type    : 'json',
            root    : 'items',
            totalProperty : 'total'
        } 
    }

});