let person = {};

person.name = "Alex";
person.lastName = "Smith";
console.log(person);

person.name = "Bob";
console.log(person);

delete person.name;
delete person.lastName;
console.log(person);