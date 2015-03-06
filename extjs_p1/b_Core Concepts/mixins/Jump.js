/**
 * @class MyApp.skating.Jump
 
 *
 * The jump class. Figure skating jumps are a major element of competitive figure skating.
 *
 *
 **/

Ext.define("MyApp.skating.Jump",{
	
	waltz	: function(){
		console.log("Waltz: A one-half rotation jump that forms the basis for the axel jump.");
	},
	
	axel	: function(){
		console.log("Axel: A single axel actually has 1.5 rotations");
	},
	
	split	: function(){
		console.log("Split: With either a flip, lutz, or loop entry and split or straddle position in the air.");
	},
	
	combination	: function(){
		console.log("This is combination jump!");
	}
});