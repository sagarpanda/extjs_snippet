Ext.define('App.controller.User', {
	extend 	: 'Ext.app.Controller',
	models 	: ['User'],
	stores 	: ['User'],
	views 	: ['UserForm', 'UserList'],

	refs 	: [
		{
			ref 	: 'userGrid',
			selector: 'grid'
		}, {
			ref 	: 'userFrm',
			selector: 'form'
		}, {
			ref 	: 'formAddBtn',
			selector: 'userForm button[action=add]'
		}, {
			ref 	: 'formSaveBtn',
			selector: 'userForm button[action=save]'
		}, {
			ref 	: 'formCancelBtn',
			selector: 'userForm button[action=cancel]'
		}, {
			ref 	: 'formDeleteBtn',
			selector: 'userForm button[action=delete]'
		}
	],

	init 	: function() {

        console.log('UserController: init');

		this.control({
			'userList' 	: {
				viewReady: function() {
					console.log('grid view ready');
				},
				selectionchange : function(model, records) {
					console.log(records);
					this.getUserFrm().loadRecord(records[0]);
					this.showSaveBtn();
				}
			},

			'userForm button[action=add]':{
				click: function(btn, evt){
					var form = this.getUserFrm();
					var	iValues = form.getValues();

					console.log(form.getValues());

					if (form.getForm().isValid()) {
						//this.getUserStore().create(iValues);
						this.getUserStore().add(iValues);
						this.getUserStore().sync();
						form.getForm().reset();
					};
				}
			},

			'userForm button[action=save]':{
				click: function(btn, evt){
					var form 	= this.getUserFrm();
					var iRecord = form.getRecord();
					var	iValues = form.getValues();

					console.log(form.getValues());

					iRecord.set(iValues);
					this.getUserStore().save({
						callback: function(){
							console.log(arguments);
						}
					});
				}
			},

			'userForm button[action=cancel]':{
				click: function(btn, evt){
					this.getUserFrm().getForm().reset();
					this.getUserGrid().getSelectionModel().deselectAll(true);
					this.showAddBtn();
				}
			},

			'userForm button[action=delete]':{
				click: function(btn, evt){
					var form 	= this.getUserFrm();
					var iRecord = form.getRecord();

					this.getUserGrid().getSelectionModel().deselectAll(true);
					this.getUserStore().remove(iRecord);
					this.getUserStore().sync();
					this.getUserFrm().getForm().reset();
					this.showAddBtn();
				}
			}
		});
	},

	showAddBtn: function() {
		this.getFormAddBtn().show();
		this.getFormSaveBtn().hide();
		this.getFormCancelBtn().hide();
		this.getFormDeleteBtn().hide();
	},

	showSaveBtn: function() {

		this.getFormAddBtn().hide();
		this.getFormSaveBtn().show();
		this.getFormCancelBtn().show();
		this.getFormDeleteBtn().show();
	}
});