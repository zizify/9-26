'use strict'
//1

function repeat(fn,n) {
  for (let i = 0; i <= n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello World');
}
function goodbye(){
  console.log('Goodbye World');
}

// repeat(hello, 5);
// repeat(goodbye, 5);

//2

// Return only names that begin with 'R'
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray', 'Randy'];

const filteredNames = filter(myNames, function(name) {
  // This is a "predicate function" - it's a function that only returns a boolean
  return name[0] === 'R';
});


// TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
function filter(arr, fn) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

console.log(filteredNames); // => ['Rich', 'Ray']
