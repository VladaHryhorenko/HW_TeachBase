//Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей 
const Shipyard = function(body = 'wood', speed = '150', color = 'black', size = 'middle') {
    this.size = size;
    this.speed = speed;
    this.color = color
    this.repaintShip = function(color) {
        this.color = color;
    };
    this.repair = function() {
        if(this instanceof MotorShipyard) {
            console.log('rapair motor ships')
        }
        if(this instanceof SailShipyard) {
            console.log('rapair sail ships')
        }
    }
    this.build = function() {
        if(this instanceof MotorShipyard) {
            console.log('build motor ship')
        }
        if(this instanceof SailShipyard) {
            console.log('build sail ship')
        }
    }
    this.exchange = function() {
        if(this instanceof MotorShipyard) {
            return new MotorShipyard();
        }
        if(this instanceof SailShipyard) {
            return new SailShipyard();
        }
    }
}

const MotorShipyard = function(enginePower = '500', bodyMaterial = 'olovo') {
    this.enginePower = enginePower;
    this.bodyMaterial = bodyMaterial;
}

const SailShipyard = function(amountOfMasts = '3', sailArea = '14') {
    this.amountOfMasts = amountOfMasts;
    this.sailArea = sailArea;
}

MotorShipyard.prototype = new Shipyard();
SailShipyard.prototype = new Shipyard();

let motorship = new MotorShipyard();
motorship.bodyMaterial = 'metal';
motorship.enginePower = '700';
console.log(motorship);
motorship.build();

let sailship = new SailShipyard();
sailship.amountOfMasts = 4;
sailship.sailArea = 20;
console.log(sailship);
sailship.build();
sailship.repaintShip('red');
console.log(sailship);