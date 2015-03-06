/**
 * @class MyApp.Category
 * @extends Ext.data.Model
 
 
 *
 * The invoice category model
 *
 *
 **/

Ext.define("MyApp.Category",{
	extend	: "Ext.data.Model",
	
	fields	: [
		{name:"id"},
		{name:"name"},
		{name:"description"}
	]
	
});