Ext.onReady(function(){

	Ext.create('Ext.container.Viewport', {
		title 	: 'Window',
		items 	: [
			{ 
				xtype : 'formAddRecord'
			}, { 
				xtype : 'formEditRecord'
			}
		],
        renderTo: Ext.getBody()
	});
});