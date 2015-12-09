var EventEmitter = require('events');
var emitter = new EventEmitter();

emitter.on('neverEnd', function() {
  console.log('help, let me out');
});

