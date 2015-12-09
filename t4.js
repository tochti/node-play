function run(no) {
  console.log('#' + no);
  sleep(1000);
}

[1, 2, 3].forEach(function(no) {
  run(no);
});
