const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

for (let i = 0; i < numbers.length; i++) {
  const item = numbers[i];
  console.log(item, i);
}

// const numbers = { '0': 1, '1': 2 }

for (const key in numbers) {
  console.log(key, numbers[key]);
}

// O(n^2)
for (const item of numbers) {
  const index = numbers.indexOf(item);
  console.log(item, index);
}

// array methods

numbers.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

numbers.forEach((item) => {
  console.log(item);
});

numbers.forEach(console.log);

// square: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

{
  const squares = [];
  numbers.forEach((item) => {
    squares.push(square(item));
  });
  console.log(squares);
}

{
  const squares = numbers.map((item) => {
    return square(item);
  });
  console.log(numbers, squares);
}

{
  const squares = numbers.map((item) => square(item));
  console.log(numbers, squares);
}

// short-circuiting

{
  const squares = numbers.map(square);
  console.log(numbers, squares);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]

{
  const evens = [];
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item);
    }
  });
  console.log(evens);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens);
}

// firstEvenNumber: [1, 2, 3, 4, 5] -> 2

{
  let firstEvenNumber = undefined;
  numbers.forEach((item) => {
    if (firstEvenNumber === undefined && isEven(item)) {
      firstEvenNumber = item;
    }
  });
  console.log(firstEvenNumber);
}

{
  let firstEvenNumber = undefined;
  for (let i = 0; firstEvenNumber == null && i < numbers.length; i++) {
    const item = numbers[i];
    if (isEven(item)) {
      firstEvenNumber = item;
    }
  }
  console.log(firstEvenNumber);
}

{
  const firstEvenNumber = numbers.find(isEven);
  console.log(firstEvenNumber);
}

// hasEven: [1, 2, 3, 4 ,5] -> true

{
  let hasEven = false;
  numbers.forEach((item) => {
    if (isEven(item)) {
      hasEven = true;
    }
  });
  console.log(hasEven);
}

{
  const hasEven = numbers.some(isEven);
  console.log(hasEven);
}

// allEvens: [1, 2, 3,, 4, 5] -> false

{
  let allEvens = true;
  numbers.forEach((item) => {
    if (!isEven(item)) {
      allEvens = false;
    }
  });
  console.log(allEvens);
}

{
  const allEvens = numbers.every(isEven);
  console.log(allEvens);
}

// summation: [1, 2, 3, 4, 5] -> 15

{
  let summation = 0;
  numbers.forEach((item) => {
    summation += item;
  });
  console.log(summation);
}

{
  const [first, ...rest] = numbers;
  let summation = first;
  rest.forEach((item) => {
    summation += item;
  });
  console.log(summation);
}
