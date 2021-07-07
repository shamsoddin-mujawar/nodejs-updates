// Learning Array and for...of loop

// iterating array

// const array = ['a', 'b', 'v']

// for(let i of array){
//     console.log(i)
// }

// const arr = [10,20,30]

// for (let j of arr){
//     j += 1
//     console.log(j)
// }

// Iterating over a String

// const str = "shamsoddin"
// for (let name of str){
//     console.log(name)
// }

// Iterating over a TypedArray

// const iterable = new Uint8Array([0x00, 0xff]);

// for (const value of iterable) {
//   console.log(value);
// }

// Iterating over a Map
// console.log("iterating map using for...of loop")
// const mpa_value = new Map([['a', 1], ['b', 2]]);
// for (const val of mpa_value) {
//     console.log(val)
// }


// Iterating over a Set
// set removes the duplicate elements
// console.log("iterating set using for...of loop")
// const set_value = new Set([1,2,3,4,4]);
// for (const iterator of set_value) {
//     console.log(iterator)
// }


// Iterating over the arguments object
// (function() {
//     for (const argument of arguments) {
//       console.log(argument);
//     }
//   })(1, 2, 3);

const array = ['a', 'b', 'v']

for(let i in array){
    console.log(i)
}