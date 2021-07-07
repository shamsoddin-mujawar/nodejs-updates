// console.log("Hello world")

// javascript variables

/* let, const and var */

/*  let we can change values of variable name after initialization.*/
message = "Hello samir";
console.log(message)

let m = "Hello guys"
console.log(m)

sam = "this is sam variable"
console.log(sam)

let $school = "this is school using dollar sign"
console.log($school)

// one line multiple variables

let a=10,b=20,c=30
console.log(a+" "+b+" "+c)

message = "hello mujawar"
console.log(message)



/* const : once we intialize we can't change the value of the variable.*/

const new_var = "this is const variable"
console.log(new_var)
// adding new value to const new_var variable
// new_var = "const change"
// console.log(new_var)


/* var variable is same as let variable but its old variable decalration.*/
var mujawar = "this is var variable"
console.log(mujawar)



// operators in js

var sam = "hello"
var ir = "family"
var family = sam + ir
console.log(family)

// scope of variable

{ // TDZ starts at beginning of scope
    console.log(bar); // undefined
    console.log(foo); // ReferenceError
    var bar = 1;
    let foo = 2; // End of TDZ (for foo)
  }


//   var city;
//   console.log(city)

//   let address;
//   console.log(address)