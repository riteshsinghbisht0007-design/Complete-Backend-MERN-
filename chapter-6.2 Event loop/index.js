(function lib() {
  function first() {
    console.log("first");
    second();
  }

  function second() {
    console.log("second");
    third();
  }

  function third() {
    setTimeout(() => console.log("timer"), 0);
    console.log("Third");
    //console.trace();
  }
})();
