/*
https://launchschool.com/exercises/b648e695

Write a function that takes an array as an argument
  and sorts that array using the bubble sort algorithm described above.

The sorting should be done "in-place" —
  that is, the function should mutate the array.

You may assume that the array contains at least two elements.
*/

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]