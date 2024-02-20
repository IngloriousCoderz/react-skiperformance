function* doSomething() {
  yield 1;
  yield 2;
  return 3;
}

const it = doSomething();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
