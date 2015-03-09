Ext.define('App.CbPane', {

    extend     : 'App.Checkbox',
    alias      : 'widget.CbPane',
    width      : 200,
    title      : 'My Order',

    clickHandler: function(pane) {
        var cbs = this.query('[checked="true"]');

        for (var i = 0; i < cbs.length; i++) {

            cbs[i].belogsTo = this.id;
            cbs[i].setValue(false);

            var p = Ext.getCmp(pane);
            p.add(cbs[i]);
            
            this.remove(cbs[i]);
        };
    },
    
    bbar: [
        {
            text    : 'Internal',
            handler : function(elm, evt) {
                var formPane = this.up('CbPane');
                formPane.clickHandler.call(formPane, 'CbHoldInternal');
            }
        },
        {
            text    : 'External',
            handler : function(elm, evt) {
                var formPane = this.up('CbPane');
                formPane.clickHandler.call(formPane, 'CbHoldExternal');
            }
        }
    ] // end of bbar
});