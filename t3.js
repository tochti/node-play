var EventEmitter = require('events');
var emitter = new EventEmitter();

function run(tmp) {
  return function() {
    var no = tmp;
    [1, 2, 3, 4].forEach(function(x) {
      console.log(no + ': ' + x);
    });
  };
}

emitter.on('go', run(1));
emitter.on('go', run(2));
emitter.on('go', run(3));

emitter.emit('go');
