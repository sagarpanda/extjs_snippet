/**
 * @class MyApp.music.Song
 * @extends Ext.app.Model
 
 *
 * Song class
 *
 *
 **/

Ext.define("MyApp.music.Song",{
	extend	: "Ext.data.Model",

	fields	: ["title","duration","description","author"]
});