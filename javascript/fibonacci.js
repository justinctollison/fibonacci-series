function fibonacci(num) {
  // type your code here
  let n1 = 0, n2 = 1, nextTerm;

  for (let i = 1; i <= num; i++){
    nextTerm = n1 + n2;
    n1 = n2
    n2 = nextTerm
  }
  return n1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting 2")
  console.log(fibonacci(3))

  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
// Iterate over the values, add the prior two values and set the next value as the sum of that one.
// n1 is set to 0 initially and n2 set to 1, while nextTerm is an empty variable.
// A for loop is created to and iterates over the number of terms the user enters intot he fibonacci argument.
// 0 is printed at first since since the num is not greater than the i variable in the for loop and then the for loop
// goes over its next iterations, the value of the second term stored in n1 and then the sum of the previous two terms n1 + n2 being stored in nextTerm
// and then n2 being set to nextTerm. returns the value of n1