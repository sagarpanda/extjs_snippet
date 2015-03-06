var invoiceStore = Ext.create('Ext.data.Store', {
    autoLoad: true,
    autoSync: true,
    model: 'Invoice',
    groupField: 'Client',
    proxy: {
        type: 'ajax',
        url: 'invoices.json',
        reader: {
            type: 'json',
            root: 'rows'
        },
        writer: {
            type: 'json',
            writeAllFields: false
        }
    }
});
