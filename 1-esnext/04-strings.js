"hello 'world'!";
'hello "world"!';

const who = "Mahmoud";

// template string OR template literal
console.log(`This is
a \`template'"
literal: hello ${who.toUpperCase()}!`);

const host = "localhost";
const port = 3000;
const resource = "users";
console.log("http://" + host + ":" + port + "/" + resource);
console.log(`http://${host}:${port}/${resource}`);
