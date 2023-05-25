// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function (b) {
  b = function (...args) {
    if (args) {
      args = "Hello World";
      return args;
    }
  };
  return "Hello World"; // Return the modified function
};
console.log(createHelloWorld());

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

Array.prototype.last = function () {
  let last = this.pop(this.length - 1);
  if (last === undefined) {
    return -1;
  } else {
    return last;
  }
};
