// difference between normal and arrow function

// Normal Function
let square = function (x){
    return x*x;
}

console.log("Normal Function " +square(5))



// Arrow Function
let square1 = (y)=>{
    return y*y
}

console.log("Arrow Function", square1(6))


console.log(`-----------------------------Use of 'this' Keyword----------------------`)
/* -------------------- Use of 'this' Keyword --------------------------- */
// Unlike regular functions, arrow functions do not have their own this binding


// Object (literal) method
let sham = {
    name: "Samir",
    fun(){
        console.log("Hello", this.name) // name undefined
    },
    arrowFun:()=>{
        console.log('welcome', this.name) // samir
    }
}

sham.fun()
// sham.arrowFun()

console.log('-----------------------------Availability of arguments objects-------------------')
/* --------------------- Availability of arguments objects -----------------------------*/

// Arguments objects are not available in arrow functions don't have arguments binding, but are available in regular functions.

//  Normal Function

function arg() {
    console.log(arguments)    
}

arg(1,2,3) // [Arguments] { '0': 1, '1': 2, '2': 3 }


// Arrow Function

const show = ()=>{
    console.log(...arguments)
};

// show(2,4,8,9) // ReferenceError: arguments is not defined





/* ------------------------- Using new keyword ---------------------- */

 // Normal Function
let result = function arg() {
    console.log(arguments)    
}

new result =(4,5,6,3,2)




 // Arrow Function : Arrow functions can't be construtors because they do not have a prototype property.
let result1 =  () => {
    console.log(arguments)    
}

// new result1 =(2,5,4,1,3)  // SyntaxError: Invalid left-hand side in assignment





// arrow function can work with a restParameter: here u can pass multiple arguments.
console.log('restParameter')

const myArrowFunction = (...args) => {
    console.log(args);
  }

  myArrowFunction('c', 'd');