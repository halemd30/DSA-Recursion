// Identify the following:
// a) What is the input to the program?
// b) What is the output of the program?
// c) What is the input to each recursive call?
// d) What is the output of each recursive call?

// 1. Counting sheep
const sheepJumped = function (sheep) {
  // base
  if (sheep === 0) {
    console.log("All sheep jumped over the fence");
  } else {
    console.log(`${sheep}: another sheep jumped over the fence`);
    return sheepJumped(sheep - 1);
  }
};
numberSheep = 3;
sheepJumped(numberSheep);

// 2. Power calculator
const powerCalculator = function (int, exp) {
  if (exp <= 0) {
    return "exponent should be >= 0";
  }
  return Math.pow(int, exp);
};
let inti = 10;
let expo = -2;
console.log(powerCalculator(inti, expo));

// 3. Reverse string

function reverseString(string) {
  if (string === "") {
    return "";
  }
  return reverseString(string.substr(1)) + string.charAt(0);
}
let str = "feathers";
console.log(reverseString(str));

// 4. nth triangular number
// input: 4
// output: 10
function triNum(n) {
  if (n <= 1) {
    return n;
  }
  return n + triNum(n - 1);
}
console.log(triNum(4));

// 5. String splitter
function splitter(string) {
  if (string === "") {
    return "";
  }
  string[0] + splitter(string.slice(1));
}
console.log(splitter("10/12/12"));

// 6. Fibonacci
function fibonacci(n) {
  if (n === 0) {
    return n;
  }
  return fibonacci();
}

// 7. Factorial
let factorial = (n) => {
  if (n === 1) {
    return n;
  }
  return n * factorial(n - 1);
};
console.log(factorial(4));

// 8. Find a way out of the maze
let getOut = (maze) => {
  let path = (col, row) => {};
};

// 9. Find ALL the ways out of the maze

// 10. Anagrams

// 11. Organization chart

// 12. Binary representation
