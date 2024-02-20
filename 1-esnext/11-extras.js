// Set & Map
const duplicates = [1, 1, 2, 3, 4, 2, 5];
console.log(new Set(duplicates));
console.log([...new Set(duplicates)]);

// trailing commas

const numbers = [
  1, //
  2,
  5,
  3,
  4,
];

// async iteration

const promises = [];
for await (const promise of promises) {
}

const UNIQUE_ID = Symbol("111");
const ANOTHER_UNIQUE_ID = Symbol("111");
{
  class Person {
    #name = "Antony";

    get name() {
      return this.#name;
    }
  }

  const person = new Person();
  // console.log(person.#name);
  person.age = 41;
  console.log(person.age);
}

{
  // optional chaining operator

  const person = {
    name: "Antony",
    legs: {
      left: 1,
      right: 1,
    },
  };

  console.log(person.legs.left);
  console.log(person.legs.middle);
  // console.log(person.arms.left);
  if (person != null) {
    if (person.arms != null) {
      console.log(person.arms.left);
    }
  }
  console.log(person.arms?.left);
  console.log((person.arms || person.legs).left);
}

// numeric seaparator

console.log(1_000_000);

// logical assignment operators

// +=
// -=
// *=
// /=
// &&=
// ||=

const food = { apple: true, steak: true, icecream: false };

let likesFood = true;
for (const item of Object.values(food)) {
  likesFood &&= item;
}
console.log(likesFood);

const username = "";
console.log(username || "Anonymous");
console.log(username != null ? username : "Anonymous");
console.log(username ?? "Anonymous");
