//ternary operator - because writing "if" takes too long

// it takes 3 operands: a condition, an expression to evaluate if the condition is true, and an expression to evaluate if the condition is false.

//Syntax as following:
//condition ? expression_if_true : expression_if_false

/*pseudo code: 
let returned = condition ? returnedIfTrue : returnedIfFalse;
*/

const age = 43;
const email = "jofh@kea.dk";

// first
if (age % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}
let isEven = age % 2 === 0 ? true : false;

//second
// let role = "visitor";
if (email === "jofh@kea.dk") {
  if (age > 40) {
    role = "admin";
  }
}

const role = email === "jofh@kea.dk" && age > 43 ? "admin" : "visitor";
