/**
 * @class MyApp.models.Book
 * @extends Ext.data.Model
 
 *
 * Description
 *
 *
 **/

Ext.define("MyApp.models.Book",{
	extend	: "Ext.data.Model",
	
	fields	: ["id","title","author","description","pages"]
});