// at()	Returns an indexed element of an array
// concat()	Joins arrays and returns an array with the joined arrays
// constructor	Returns the function that created the Array object's prototype
// copyWithin()	Copies array elements within the array, to and from specified positions
// entries()	Returns a key/value pair Array Iteration Object
// every()	Checks if every element in an array pass a test
// fill()	Fill the elements in an array with a static value
// filter()	Creates a new array with every element in an array that pass a test
// find()	Returns the value of the first element in an array that pass a test
// findIndex()	Returns the index of the first element in an array that pass a test
// findLast()	Returns the value of the last element in an array that pass a test
// findLastIndex()	Returns the index of the last element in an array that pass a test
// flat()	Concatenates sub-array elements
// flatMap()	Maps all array elements and creates a new flat array
// forEach()	Calls a function for each array element
// from()	Creates an array from an object
// includes()	Check if an array contains the specified element
// indexOf()	Search the array for an element and returns its position
// isArray()	Checks whether an object is an array
// join()	Joins all elements of an array into a string
// keys()	Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// length	Sets or returns the number of elements in an array
// map()	Creates a new array with the result of calling a function for each array element
// of()	Creates an array from a number of arguments
// pop()	Removes the last element of an array, and returns that element
// prototype	Allows you to add properties and methods to an Array object
// push()	Adds new elements to the end of an array, and returns the new length
// reduce()	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// reverse()	Reverses the order of the elements in an array
// shift()	Removes the first element of an array, and returns that element
// slice()	Selects a part of an array, and returns the new array
// some()	Checks if any of the elements in an array pass a test
// sort()	Sorts the elements of an array
// splice()	Adds/Removes elements from an array
// toString()	Converts an array to a string, and returns the result
// unshift()	Adds new elements to the beginning of an array, and returns the new length
// valueOf()	Returns the primitive value of an array
// with()	Returns a new array with updated elements



// const add=[1,2,3,4,5,6,7,8,9,'abhay','anuj','ansh'];
//  //console.log(add[1]);

// // let add1 = add.at(3);
// // console.log(add1)
// let child1=['a','d','c','f','e'];
// let child2=['b','a','b','d','r'];
// let child3=['r','g','h','i','j'];

// const children = child3.concat(child1, child2);
// //console.log(children);
// let text=add.constrotor;
// console.log(text);
// console.log(add.copyWithin(4,2,5));
// console.log(add.map(Math.min))

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   console.log(num * 10);
// }
// let number=numbers.length;
// console.log(number);


// const fruits = [1,2,3,4,5,6,7,8,9];
// let text = fruits.join(" , ");
// console.log(text);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let result = Array.isArray(fruits);
// // console.log(result);
// console.log(fruits.sort());


// const add=[9,8,7,6,5,4,3,2,1];
// console.log(add.pop());
// console.log(add)



// const add=[9,8,7,6,5,4,3,2,1];
// console.log(add.push(90));
// console.log(add.push(90));
// console.log(add.push(90));
// console.log(add)
