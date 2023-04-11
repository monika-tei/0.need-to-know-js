const me = {
  name: "Jonas",
  age: 43,
  kids: 3,
};

/* start by making a bad copy (reference) with something like
  const myCopy = me;
  change something, see what happens

  */

const badCopy = me;
badCopy.age = 5;

console.log(me); // age is 5
console.log(badCopy); // age is 5

/*Then make a new copy using the spead operator, 
change something and see what happens*/

const goodCopy = { ...me };
goodCopy.age = 100;

console.log(me);
console.log(goodCopy);

// ** pay attention that for object spread array we use { }
