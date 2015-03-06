/**
 * @class MyApp.data.validations
 * Description
 */
Ext.define('MyApp.data.validations',{
	override	: 'Ext.data.validations',
	singleton	: true,

	creditcardMessage	: 'Invalid credit card number',

	creditcardRe			: /^[\d]{16}$/,

	creditcard	: function(config,value){
		return Ext.data.validations.creditcardRe.test(value);
	}
});