var EventEmitter = require('events');
var emitter = new EventEmitter();

function listenTimer() {
  var listener = function() {
    console.log('still listing');
  };

  emitter.on('goBabyGo', listener);

  setTimeout(function() {
    emitter.removeListener('goBabyGo', listener);
  }, 1300);

}

listenTimer();

[500, 1000, 1500, 2000].forEach(function(time) {
  setTimeout(function() {
    console.log('call event goBabyGo');
    emitter.emit('goBabyGo');
  }, time);
});

console.log('-- EOF --');

