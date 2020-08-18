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
let mySmallMaze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];

let myMaze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

let getOut = (maze) => {
  let path = (col, row) => {
    if (maze[col][row] === "e") {
      console.log("I'm out!!!");
    } else if (maze[col][row] === " ") {
      console.log("keep going!");
      maze[col][row] = 4;

      // check boundaries
      if (col < maze.length - 1) {
        path(col + 1, row);
      }
      if (row < maze[col].length - 1) {
        path(col, row + 1);
      }
      if (col > 0) {
        path(col - 1, row);
      }
      if (row > 0) {
        path(col, row - 1);
      }
    }
  };
  return path(0, 1);
};
getOut(myMaze);

// 9. Find ALL the ways out of the maze

// 10. Anagrams

// 11. Organization chart

// 12. Binary representation

// 13. Honia function
