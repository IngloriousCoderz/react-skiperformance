// 1. function declarations
// subject to hoisting

{
  console.log(sum(2, 3));
  console.log(sum(2, null));
  console.log(sum(2, undefined));
  console.log(sum(2));

  function sum(a, b = 0) {
    // if (typeof b === "undefined") {
    //   b = 0;
    // }
    return a + b;
  }
}

// 2. function expressions
// not subject to hoisting

{
  const sum = function (a, b) {
    return a + b;
  };

  console.log(sum(2, 3));
}

// 3. arrow functions
// not subject to hoisting

{
  const sum = (a, b) => {
    return a + b;
  };

  console.log(sum(2, 3));
}

// more concise

{
  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
}

// automatic binding to the outer scope

// {
//   console.log(this);
//   const button = document.querySelector("button");
//   button.onclick = function (event) {
//     console.log(this);
//     console.log(event.target);
//   };
// }

// rest parameters

{
  console.log(sum(1, 2, 3, 4, 5));

  function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
}
