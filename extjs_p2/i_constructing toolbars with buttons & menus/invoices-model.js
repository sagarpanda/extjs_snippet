Ext.define('Invoice', {
    extend: 'Ext.data.Model',
    idProperty: 'InvoiceID',
    fields: [{
        name: 'InvoiceID',
        type: 'string'
    }, {
        name: 'Client',
        type: 'string'
    }, {
        name: 'Description',
        type: 'string'
    }, {
        name: 'Date',
        type: 'date',
        dateFormat: 'c'
    }, {
        name: 'Amount',
        type: 'float'
    }, {
        name: 'Currency',
        type: 'string'
    }, {
        name: 'Status',
        type: 'string'
    }]
});
