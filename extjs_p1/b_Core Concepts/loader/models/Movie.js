/**
 * @class MyApp.models.Movie
 * @extends Ext.data.Model
 
 *
 * Description
 *
 *
 **/

Ext.define("MyApp.models.Movie",{
	extend	: "Ext.data.Model",
	
	fields	: ["title","director","duration","description"] 
});