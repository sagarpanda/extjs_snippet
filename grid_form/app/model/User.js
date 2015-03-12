Ext.define('App.model.User',{
    extend 	: 'Ext.data.Model',
    fields 	: [ { name:'id', type: 'int' }, 'name', 'email', 'phone' ]
});