/**
 * @class MyApp.controller.main.Main
 * @extends Ext.app.Controller
 
 *
 * Controller for the main viewport
 */

Ext.define('MyApp.controller.main.Main',{
	extend      : 'Ext.app.Controller',

	init   : function(){
		var me = this;
		
		me.control({
			//'#mainmenu #startbutton menuitem' : {
			'toolbar[itemId=mainmenu] button[itemId=startbutton] menuitem' : {
				click : me.openModule
			}
		});
	},

	openModule : function(menuoption){
		var me = this;

		Ext.Msg.wait('Loading...');

		if(MyApp.DEVELOPMENT){
			Ext.require(menuoption.controller,function(){
				me.initializeModule(menuoption);
			});
		}else{
			Ext.Loader.loadScript({
				url		: menuoption.packageFile,
				onLoad	: function(){
					me.initializeModule(menuoption);
				}
			});
		}
	},

	initializeModule : function(menuoption){
		var me = this,
			maintabs = Ext.ComponentQuery.query('#maintabs')[0];

		Ext.Msg.hide();

		var controller = me.application.controllers.get(menuoption.controller);
		
		if(!controller){
			controller = Ext.create(menuoption.controller, {
				id			: menuoption.controller,
				application	: me.application
			});
			
			controller.container = me.createContainer(menuoption);
			maintabs.add(controller.container);
			controller.addContent();

			me.application.controllers.add(controller);
			controller.init(me.application);
			controller.onLaunch(me.application);
		}else{
			if(controller.container.isDestroyed){
				controller.container = me.createContainer(menuoption);
				maintabs.add(controller.container);
				controller.addContent();
			}
		}

		maintabs.show();
		maintabs.setActiveTab(controller.container);
	},

	createContainer : function(menuoption){
		return Ext.widget({
			xtype		: 'container',
			title		: menuoption.text,
			iconCls		: menuoption.iconCls,
			closable	: true,
			layout		: 'fit'
		});
	}
});