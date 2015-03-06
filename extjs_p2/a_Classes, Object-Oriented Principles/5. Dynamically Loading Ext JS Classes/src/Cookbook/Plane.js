// Define the Cookbook.Plane class
Ext.define('Cookbook.Plane', {

    extend: 'Cookbook.Vehicle',
    
    config: {
        maxAltitude: 0
    },
    
    constructor: function(manufacturer, model, topSpeed, maxAltitude){
        // initialise our config object
        this.initConfig();
        
        if (maxAltitude) {
            this.setMaxAltitude(maxAltitude);
        }
        
        // call the parent class' constructor
        this.callParent([manufacturer, model, topSpeed]);
        
        return this;
    },
    
    takeOff: function(){
        alert('The ' + this.getManufacturer() + ' ' + this.getModel() + ' is taking off.');
    },
    land: function(){
        alert('The ' + this.getManufacturer() + ' ' + this.getModel() + ' is landing.');
    },
    
    travel: function(distance){
        this.takeOff();
        
        // execute the base class’ generic travel method
        this.callParent(arguments);
        
        alert('The ' + this.getManufacturer() + ' ' + this.getModel() + ' flew at an altitude of ' + this.getMaxAltitude() + 'feet');
        
        this.land();
    }
    
}, function(){
    console.log('Plane Class Defined!');
});
