var EventEmitter = require('events');
var emitter = new EventEmitter();

function run1() {
  console.log('Enter #1');
  emitter.on('go1', function() {
    console.log('it\'s me #1');
  });
  console.log('Leave #1');
}

function run2() {
  console.log('Enter #2');
  emitter.emit('go1');
  console.log('Leave #2');
}

run1();
run2();
