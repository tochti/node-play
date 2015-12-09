function run(no) {
  console.log('#' + no);
  [1, 2, 3].forEach(function(no) {
    console.log('\t->' + no);
  });
}

[1, 2, 3].forEach(function(no) {
  run(no);
});
