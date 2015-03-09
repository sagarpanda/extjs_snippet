Ext.onReady(function(){
 
    Ext.create('Ext.panel.Panel', {

        title       : 'My Window',
        layout      : 'column',
        width       : 720,
        renderTo    : Ext.getBody(),
        items       : [
            {
                xtype: 'panel',
                border: false,
                items: [
                    {
                        xtype   : 'CbPane',
                        title   : 'Titles',
                        data    : [ 'Title 01', 'Title 02', 'Title 03', 'Title 04', 'Title 05', 'Title 06', 'Title 07' ]
                    }, {
                        xtype   : 'CbPane',
                        title   : 'Labels',
                        data    : [ 'Label 01', 'Label 02', 'Label 03', 'Label 04', 'Label 05', 'Label 06', 'Label 07' ]
                    }
                ]
            },
            {
                xtype: 'panel',
                border: false,
                columnWidth: 1,
                padding: 5,
                items: [
                    {
                        xtype   : 'CbHoldPane',
                        title   : 'Internal',
                        id      : 'CbHoldInternal',
                        width   : '100%',
                        height  : 200
                    }, {
                        xtype   : 'CbHoldPane',
                        title   : 'External',
                        id      : 'CbHoldExternal',
                        height  : 200
                    }
                ]
            }
        ]
    });
 
});