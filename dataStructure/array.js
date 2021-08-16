// Array

// creating array

let fruit = ['samir', 'amir', 1]
console.log(fruit)
console.log(fruit[0])
console.log(fruit.length)

console.log("---------------------printing array element using for loop:------------------")
for(let i =0; i<fruit.length;i++){
    console.log(fruit[i])
}

console.log("---------------------print element using forEach loop-----------------------")

fruit.forEach(function(item, index){
    console.log("value of:",item, "   index is :", index)
})

console.log('---------------------Add an item to the end of an Array using forEach loop---------------------')

let arr = [2,'mujawar','hello'];
arr.forEach(function(element){
    fruit.push(element)
})
console.log(fruit)

// creating sub-array by passing arr.
// fruit.push(arr)
// console.log(fruit)

console.log('----------------------------Remove an item from the end of an Array----------------------------------')

console.log(fruit)

let last = fruit.pop()
console.log(last)
console.log(fruit)


console.log('-----------------------------Remove an item from the beginning of an Array--------------------------')

let first = fruit.shift()
console.log(first)
console.log(fruit)

console.log('-----------------------------Add an item to the beginning of an Array-----------------------------')

// return new length of an array.
let shiftAdd = fruit.unshift('apple')
console.log(shiftAdd)
console.log(fruit)


console.log('----------------------------Find the index of an item in the Array---------------------------------')

// if element is not present return -1 index.
let pos = fruit.indexOf('amir')
console.log(pos)
console.log(fruit)


console.log('-----------------------------Remove an item by index position------------------------------------')
let pos1 = 1
let n = 2

let removedItem = fruit.splice(pos1,n)
console.log("remove item", removedItem)
// this is how to remove items, n defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(fruit)


console.log('------------------------- copy of Array-----------------------------------------------')

console.log(fruit)

let shallowCopy = fruit.slice() 
console.log(shallowCopy)