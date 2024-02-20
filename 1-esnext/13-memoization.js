{
  function factorial(n) {
    console.log("computing");
    return Array(n)
      .fill(null)
      .reduce((acc, item, index) => {
        return acc * (index + 1);
      }, 1);
  }

  console.log(factorial(3));
  console.log(factorial(3));
  console.log(factorial(4));
  console.log(factorial(5));
}

{
  function factorial(n) {
    console.log("computing");
    const value = Array(n)
      .fill(null)
      .reduce((acc, item, index) => {
        return acc * (index + 1);
      }, 1);
    return value;
  }

  function memoize(fn) {
    const cache = {};

    return (n) => {
      if (cache[n]) {
        return cache[n];
      }

      const value = fn(n);
      cache[n] = value;
      return value;
    };
  }

  const memoizedFactorial = memoize(factorial);

  console.log(memoizedFactorial(3));
  console.log(memoizedFactorial(3));
  console.log(memoizedFactorial(4));
  console.log(memoizedFactorial(5));
}
