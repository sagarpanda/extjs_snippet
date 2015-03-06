/**
 * @class App.store.Users
 * @extends Ext.data.Store
 * This our users store definition
 * am
 * mks
 */
Ext.define('App.store.Users', {
    extend: 'Ext.data.Store',    
	requires:['App.model.User'], //step one
	
	autoLoad: true,
    model:'App.model.User'
});