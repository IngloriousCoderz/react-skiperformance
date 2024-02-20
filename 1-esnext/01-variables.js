var a = 2;
a = "2";

console.log(a);

/* hoisting */

var b = 3;

/* global scoping */

{
  var c = 4;
}

function fun() {
  var c = 4;
}

{
  let a = 2;
}

const d = 5;
d = 6;
