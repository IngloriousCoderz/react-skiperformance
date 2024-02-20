{
  function sum(a, b) {
    return a + b;
  }

  console.log(sum(2, 3));
}

{
  function sum(a) {
    return function (b) {
      return a + b;
    };
  }

  console.log(sum(2));

  const sumTwo = sum(2);
  console.log(sumTwo(3));
  console.log(sumTwo(4));
  console.log(sumTwo(5));
  console.log(sum(2)(3));
}

{
  function sum(a, b) {
    return a + b;
  }

  const numbers = [1, 2, 3, 4, 5];
  const result = numbers.map((item) => sum(2, item));
  console.log(result);
}

{
  function sum(a) {
    return function (b) {
      return a + b;
    };
  }

  const numbers = [1, 2, 3, 4, 5];
  const sumTwo = sum(2);
  const result = numbers.map(sumTwo);
  console.log(result);
}

// {
//   const sum = (a, b) => a + b;
//   const sum = (a) => (b) => a + b;
// }
