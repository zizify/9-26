'use strict';

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

max([1, 3, 6, 2, 4, 9, 0]);

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

min([1, -8, 3, 11, -20, 16, 3]);