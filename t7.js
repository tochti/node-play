setTimeout(function() {
  for (var i = 0; i < 1000000000; i++) {
    if ((i % 500000000) == 0) {
      console.log(Math.log(i));
    }
  }
  console.log('you are always to late!');
}, 1);

setTimeout(function() {
  console.log('sorry!');
}, 2);
