Ext.define('App.view.FormAddRecord', {
	extend 		: 'App.view.Form',
	alias 		: 'widget.formAddRecord',
	title 		: 'Form Add Record',
	defaultType : 'textfield',
	width 		: 300,
	padding 	: 10,

	initComponent: function() {
		self = this;
		this.callParent();
	},

	buttons 	: [
		{
			text : 'Add',
			handler: function() {
				var form = this.up('formPane');
				var	iValues = form.getValues();

				console.log(form.getValues());

				form.store.create(iValues);
				form.getForm().reset()
			}
		}
	]
});