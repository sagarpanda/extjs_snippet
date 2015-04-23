Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('Ext.ux', 'js/ux');

Ext.application({
	name: 'App',
	appFolder: 'js/app',
	requires: [
		'App.view.User'
	],
	launch: function() {
		Ext.create('Ext.container.Viewport', {
			
		    items: [{
		    	xtype 	: 'user'
		    }],
		    renderTo: Ext.getBody()
		});
	}
});