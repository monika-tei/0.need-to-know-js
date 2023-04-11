//step1
function sayHi(person) {
  console.log(person.name);
}
users.forEach(sayHi);

//step2
users.forEach(function (person) {
  console.log(person.name);
});

//step3
users.forEach((person) => {
  console.log(person.name);
});

//step4, because it only does one thing
uers.forEach((person) => console.log(person.name));
