const names = ["Jonas", "Dannie", "Peter", "Klaus"];
/* start by making a "bad" copy of this array 
by writing something like const myBadCopy = names;
then modify either array by changing one name
then console log both, what happened
*/

/* Then create a copy using the ... spread operator
modify either array and console log them, what happens now?
*/

const myBadCopy = names;

myBadCopy[0] = "Monika";

console.log(names);
console.log(myBadCopy);
//outcome, the changes affect both arrays!
//BECAUSE both variables reference the same array in memory.

// with spread Operator ...
myGoodCopy = [...names];
myGoodCopy[0] = "Cat";
console.log(names); // ["Jonas", "Dannie", "Peter", "Klaus"];
console.log(myGoodCopy); //  ["Cat", "Dannie", "Peter", "Klaus"];
