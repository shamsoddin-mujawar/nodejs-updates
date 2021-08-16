
// array.from() :The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

// An array-like or iterable object to convert to an array.

// array-like objects (objects with a length property and indexed elements); or
// iterable objects (objects such as Map and Set).

let fruit = ['apple', 'orange', 'grapes','kivi']
console.log(fruit)


console.log('-----------------------------------Array from a String-------------------------------------------')

// return new array or it's convert object into array.
let arr = Array.from('samir')
console.log(arr)
console.log(arr[0])

console.log('------------------------------------Array from a Set------------------------------------------')

// set removes the duplicate element.
const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log("set is:", set)

// convert into array
let setArr = Array.from(set)
console.log(setArr)


console.log('---------------------------------Array from a Map----------------------------------------------')

// key:value pair
const map = new Map([[1, 2], [2, 4], [4, 8]]);
console.log("map is:",map)

// convert into an array
let mapArr = Array.from(map);
console.log(mapArr)


const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.values()));
// ['a', 'b'];

console.log(Array.from(mapper.keys()));



console.log('----------------------------------------Array from an Array-like object (arguments)--------------------')


function f() {
    return Array.from(arguments);
  }
  
 console.log(f(1, 2, 3));

