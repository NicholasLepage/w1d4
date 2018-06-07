/*
Exercise - Array forEach
A very common implementation of callback functions is with forEach which uses callbacks to allow us to easily
iterate through the elements of an array.

Read about iterating through elements of an array using JavaScript's Array.prototype.forEach() method.

Refactor the function findWaldo to use the forEach() method instead of a for loop.
*/


function findWaldo(arr, found) {
  arr.forEach(function(element, i) {
    if (element === "Waldo") {
      found(i);
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);