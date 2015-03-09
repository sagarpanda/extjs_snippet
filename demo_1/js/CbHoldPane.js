Ext.define('App.CbHoldPane', {

    extend: 'App.Checkbox',
    alias : 'widget.CbHoldPane',

    bbar: [
        {
            text: 'Remove',
            handler: function(elm, evt) {
                var pane = this.up('CbHoldPane');
                var cbs = pane.query('[checked="true"]');
                //console.log(cbs);
                for (var i = 0; i < cbs.length; i++) {

                    cbs[i].setValue(false);
                    var belogsTo = cbs[i].belogsTo;
                    // find place to insert
                    var children = Ext.getCmp(belogsTo).items.items;
                    var index = 0;
                    for (var j = 0; j < children.length; j++) {
                        if (children[j].inputValue > cbs[i].inputValue) {
                            Ext.getCmp(belogsTo).insert(j, cbs[i]);
                            break;
                        };
                    };
                    if (j == children.length) {
                        Ext.getCmp(belogsTo).add(cbs[i]);
                    };

                    pane.remove(cbs[i]);
                };
            } // end of handler
        }
    ]// end of bbar
});