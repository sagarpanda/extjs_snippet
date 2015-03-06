// Define the Cookbook.Vehicle class
Ext.define('Cookbook.Vehicle', {

    config: {
        manufacturer: 'Unknown Manufacturer',
        model: 'Unknown Model',
        topSpeed: 0
    },
    
    constructor: function(manufacturer, model, topSpeed){
        // initialise our config object
        this.initConfig();
        
        if (manufacturer) {
            this.setManufacturer(manufacturer);
        }
        if (model) {
            this.setModel(model);
        }
        if (topSpeed) {
            this.setTopSpeed(topSpeed);
        }
        
        return this;
    },
    
    travel: function(distance){
        alert('The ' + this.getManufacturer() + ' ' + this.getModel() + ' travelled ' + distance + ' miles at ' + this.getTopSpeed() + 'mph');
    }
    
}, function(){
    console.log('Vehicle Class defined!');
});
