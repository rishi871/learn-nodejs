
let events = require('events');
let utils = require('util');

let Person = function(name){
    this.name = name;
}

utils.inherits(Person, events.EventEmitter); //class Person extends events.EventEmitter


let rishi = new Person('rishi');
let jain = new Person('jain');
let rivaan = new Person('rivaan');

let people = [rishi, jain, rivaan];

people.forEach(function(Person){
    Person.on('speak', function(msg) {
        console.log(Person.name + ' said ' + msg);
    })
});

jain.emit('speak', 'hey dude');