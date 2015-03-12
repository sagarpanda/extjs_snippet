Ext.define('App.view.FormEditRecord', {
	extend 		: 'App.view.Form',
	alias 		: 'widget.formEditRecord',
	title 		: 'Form Edit Record',
	defaultType : 'textfield',
	width 		: 300,
	padding 	: 10,

	initComponent: function() {

		var self = this;
		this.callParent();

		this.store.load({
			callback: function(records, operation, success){
				self.loadRecord(records[0]);
			}
		});
	},

	buttons 	: [
		{
			text : 'Save',
			handler: function() {
				var form = this.up('formPane');
				var iRecord = form.getRecord();
				var	iValues = form.getValues();

				console.log(form.getValues());

				iRecord.set(iValues);
				form.store.save();
			}
		}
	]
});