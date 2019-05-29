var EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        this.message = 'boom';
    }
    
    alert() {
        setInterval(() => { 
            this.emit('boom', this.message);
        }, 1000);
    }
}

var gym = new Gym();
gym.on('boom', (message) => 
{
    console.log("Athlete is working out");
});

gym.alert();

