Ext.define('App.Checkbox', {
    
    extend     : 'Ext.form.Panel',
    height     : 200,
    padding    : 5,
    title      : '',
    overflowY  : 'auto',

    constructor: function(opt) {
        if (opt.data) {
            this.data = opt.data;
        }else{
            this.data = [];
        };
        this.defaultType = 'checkboxfield';
        this.callParent(arguments);
    },

    initComponent: function() {

        this.items = this.createItems(this.data);
        this.callParent(arguments);
    },

    createItems: function(d) {
    
        var cbItems = [];
        for (var i = 0; i < d.length; i++) {
            cbItems.push({
                padding     : '0 0 0 5',
                boxLabel    : d[i],
                name        : 'topping',
                inputValue  : (i+1),
                id          : Ext.id()
            });
        };
        return cbItems;
    }

});