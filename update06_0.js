// create object and accessing keys and values.
// for...in loop

/*
const obj = { a: 1, b: 2, c: 3 };

for (const property in obj) {
  console.log(`${property}: ${obj[property]}`);
}
*/


// accessing only values

/*
console.log("---------- accessing only values ------------")
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`values are : ${object[property]}`);
}
*/



// accessing only keys


// console.log("---------- accessing only keys ------------")
// const obj = { a: 1, b: 2, c: 3 };

// for (const property in obj) {
//   console.log(`keys are : ${property}`);
// }



// console.log("---------- ways of accessing specific value  ------------")
// const object = { a: 1, b: "samir", c: 3 };

// console.log(object.a)
// console.log(object['b'])


// console.log("-------- accessing duplicate value from object")

// let obj = {x:"samir", x:1}
// console.log(obj, "and type of", typeof obj)

// console.log("--------- assign valu to another value to variable and print")
// let obj = {x:"samir", y:1}
// x_val = obj['x']
// console.log(x_val)
// // change value of x
// obj['x'] = "mujawar"
// console.log(obj)


// let i = 0;
// let a = {['foo' + ++i]: i,
//         ['foo' + ++i]: i,
//         ['foo' + ++i]: i }
// console.log(a.foo1)

// const items = ["a", "b", "c"]
// const obj = {[items]:"hello"}
// console.log(obj)

// console.log("------- merging two objects into single object")
// let obj1 = { foo: 'bar', x: 42 }
// let obj2 = { foo: 'baz', y: 13 }
// let mergedobj = {...obj1, ...obj2}
// console.log(mergedobj)

// console.log("------- cloning object ")
// let clonedObj = { ...obj1 }
// console.log(clonedObj)


// let obj1 = {a:1}
// assert(Object.getPrototypeOf(obj1) === Object.prototype)

// let obj2 = {__proto__: null}
// assert(Object.getPrototypeOf(obj2) === null)

// var obj = {a: 1, b: 2, c: 3};

// for (const prop in obj) {
//     console.log(prop)
//   console.log(`obj.${prop} = ${obj[prop]}`);
// }


// can't use for...of while using object because object is not iterable
const obj = { a: 1, b: 2, c: 3 };

for (const property of obj) {
  console.log(`${property}: ${obj[property]}`);
}


