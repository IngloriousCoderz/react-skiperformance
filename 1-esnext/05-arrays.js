const numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers);
console.log(Array.isArray(numbers));

console.log(numbers[2]);
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

numbers[2] = 6;
console.log(numbers);

delete numbers[2];
console.log(numbers);
console.log(numbers[2]);
numbers[2] = undefined;
console.log(numbers);

numbers.push(7);
console.log(numbers);

console.log(numbers.pop());
console.log(numbers);

numbers.unshift(0);
console.log(numbers);
console.log(numbers.shift());
console.log(numbers);

numbers.splice(2, 2, undefined, null, [], {});
console.log(numbers);

console.log(numbers.slice(2, 5));
const clone = numbers.slice(0);
console.log(clone === numbers);
console.log(clone == numbers);
console.log(clone[0] === numbers[0]);
console.log(clone[5] === numbers[5]);

const deepClone = JSON.parse(JSON.stringify(numbers));
console.log(deepClone);
console.log(deepClone[5] === numbers[5]);

{
  const first = numbers[0];
  const second = numbers[1];
  const rest = numbers.slice(2);
  const last = numbers[numbers.length - 1];
  console.log(first, second, rest, last);
}

// destructuring
// spread operator

{
  const [first, second, ...rest] = numbers;
  const last = numbers[numbers.length - 1];
  console.log(first, second, rest, last);

  const [...clone] = numbers;
  console.log(clone);

  const double = [first, ...numbers, second, ...clone, last];
  console.log(double);
}
