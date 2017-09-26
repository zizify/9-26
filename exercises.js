'use strict';

// 1

function max(numbers) {

  let i = 0;
  let maximum = numbers[0];

  while (i <= numbers.length) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }

    i++;
  }

  console.log(maximum);
}

// max([1, 3, 6, 2, 4, 9, 0]);

function min(numbers) {
  let i = 0;
  let minimum = numbers[0];

  while (i <= numbers.length) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
    i++;
  }

  console.log(minimum);
}

// min([1, -8, 3, 11, -20, 16, 3]);


// 2


function average(numbers) {
  let total = 0;
  //We're just initializing total.
  let i = 0;
  while (i < numbers.length){
    total += numbers[i];
    i++;
  }
  console.log(total/numbers.length);
}

// average([1, 2, 3, 4, 5]);

//3

function fizzBuzz(countTo) {
  const output = [];

  for (let i = 1; i <= countTo; i++) {
    switch (i % 15) {
    case 0:
      output.push('fizzbuzz');
      break;
    case 5:
    case 10:
      output.push('fizz');
      break;
    case 3:
    case 6:
    case 9:
    case 12:
      output.push('buzz');
      break;
    default:
      output.push(i);
      break;
    }
  }


  console.log(output);
}

// fizzBuzz(6);
// fizzBuzz(12);
// fizzBuzz(3);
// fizzBuzz(15);
fizzBuzz(25);