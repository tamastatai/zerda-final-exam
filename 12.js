// 12. Create a function that takes a matrix (list of lists) of numbers and returns the sum of each rows as an array

'use strict';

var matrix = [
  [3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12]
]

var sum = 0;

for(var i=0; i < matrix.length; i++){
    console.log(matrix[i]);
    sum += matrix[i][1];
}

console.log(sum);
