Ext.define('App.store.Form', {
    extend 	: 'Ext.data.Store',
    autoLoad: false,
    fields 	: [ 'id', 'name', 'email', 'phone'],
    
	//data    : { "id": 1, "name": "Username1",  "email":"username1@gmail.com",  "phone":"9988776651"  },

	/*data    : [
		{ "id": 1, "name": "Username1",  "email":"username1@gmail.com",  "phone":"9988776651"  },
		{ "id": 2, "name": "Username2",  "email":"username1@gmail.com",  "phone":"9988776651"  },
		{ "id": 3, "name": "Username3",  "email":"username1@gmail.com",  "phone":"9988776651"  },
		{ "id": 4, "name": "Username4",  "email":"username1@gmail.com",  "phone":"9988776651"  },
		{ "id": 5, "name": "Username5",  "email":"username1@gmail.com",  "phone":"9988776651"  },
	],*/

	proxy: {
	    type: 'ajax',
	    url : 'http://sagarpanda.com/services/user.php',
	    reader: {
	        type: 'json',
	        root: 'items'
	    },
	    write: {
	        type: 'json'
	    }
	}
});