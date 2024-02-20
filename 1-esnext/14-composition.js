// shout: 'message' -> 'MESSAGE'
const shout = (message) => message.toUpperCase();
console.log(shout("hello world"));

// exclamate: 'message' -> 'message!'
const punctuate = (mark) => (message) => message + mark;
console.log(punctuate("!")("hello world"));
const exclamate = punctuate("!");
console.log(exclamate("hello world"));

// htmlize: 'message' -> '<p>message</p>'
const htmlize = (tag) => (message) => `<${tag}>${message}</${tag}>`;
console.log(htmlize("p")("hello world"));
const pize = htmlize("p");
console.log(pize("hello world"));

// 'hello world' -> '<p>HELLO WORLD!</p>

console.log(
  //
  pize(
    //
    exclamate(
      //
      shout(
        //
        "hello world"
      )
    )
  )
);

{
  let result = "hello world";
  result = shout(result);
  result = exclamate(result);
  result = pize(result);
  console.log(result);
}

{
  const fns = [shout, exclamate, pize];
  const result = fns.reduce((acc, fn) => fn(acc), "hello world");
  console.log(result);
}

{
  // (f | g)(x) = g(f(x))
  const pipe = (fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
  const fns = [shout, exclamate, pize];
  const x = "hello world";

  const uberFunction = pipe(fns);

  console.log(uberFunction(x));
}

{
  // (f o g)(x) = f(g(x))
  const compose = (fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
  const fns = [pize, exclamate, shout];
  const x = "hello world";

  const uberFunction = compose(fns);

  console.log(uberFunction(x));
}
