const person = {
  firstName: "Matteo Antony",
  "last-name": "Mistretta",
  age: 41,
};

// square bracket notation
console.log(person["firstName"]);
// dot notation
console.log(person.firstName);

console.log(person["last-name"]);

const property = "firstName";
console.log(person[property]);

person.dateOfBirth = "1982-10-17";
console.log(person);

person.firstName = "IceOnFire";
console.log(person);

delete person.dateOfBirth;
console.log(person);

const { "last-name": lastName, firstName, ...rest } = person;
console.log(firstName, lastName, rest);

const clone = { ...person };
console.log(clone);

const brandNewPerson = { ...person, ...clone, age: 42 };
console.log(brandNewPerson);

Object.keys(person).forEach((key) => {
  const value = person[key];
});
Object.values(person).forEach((value) => {});
Object.entries(person).forEach(([key, value]) => {});
