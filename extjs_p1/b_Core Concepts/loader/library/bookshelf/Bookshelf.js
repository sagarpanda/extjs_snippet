/**
 * @class MyApp.library.bookshelf.BookShelf
 
 *
 * Description
 *
 *
 **/

Ext.define("MyApp.library.bookshelf.Bookshelf",{
	requires	: ["Ext.util.MixedCollection"],
	uses		: ["MyApp.models.Book"],
	
	constructor	: function(){
		this.books = Ext.create("Ext.util.MixedCollection");
	},

	getBook		: function(index){
		return this.books.get(index);
	},
	
	addBook		: function(data){
		var book = Ext.create("MyApp.models.Book",data);
		this.books.add(book);
	}
});