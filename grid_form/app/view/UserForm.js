Ext.define('App.view.UserForm', {
	extend 		: 'Ext.form.Panel',
	alias 		: 'widget.userForm',
	title 		: 'User Form',
	defaultType : 'textfield',
	width 		: 340,
	padding 	: 10,

	initComponent: function() {

        console.log('UserForm: initComponent');
		this.callParent();

	},

	items 		: [
		{
			name 		: 'name',
			fieldLabel 	: 'Name',
			padding 	: 5
		}, {
			name 		: 'email',
			fieldLabel 	: 'E-mail',
			padding 	: 5,
        	allowBlank 	: false
		}, {
			name 		: 'phone',
			fieldLabel 	: 'Phone',
			padding 	: 5
		}, {
			name 		: 'id',
			fieldLabel 	: 'id',
			hidden		: true,
			padding 	: 5
		}
	],

	buttons 	: [
		{
			text 	: 'Add',
			action 	: 'add',
		}, {
			text 	: 'Delete',
			action 	: 'delete',
			hidden 	: true
		}, {
			text 	: 'Cancel',
			action 	: 'cancel',
			hidden 	: true
		}, {
			text 	: 'Save',
			action 	: 'save',
			hidden 	: true
		}
	]
});