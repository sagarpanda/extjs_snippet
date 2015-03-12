	Ext.define('App.view.Form', {
		extend 		: 'Ext.form.Panel',
		alias 		: 'widget.formPane',
		title 		: 'My Form',
		defaultType : 'textfield',
		width 		: 300,
		padding 	: 10,

		initComponent: function() {

			this.store = Ext.create('App.store.Form');
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
				padding 	: 5
			}
		]
	});