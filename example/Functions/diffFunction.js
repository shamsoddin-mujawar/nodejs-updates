// normal function and arrow finction


// Normal Function

class Hero {
    constructor(heroName) {
      this.heroName = heroName;
    }
  
    logName() {
      console.log(this.heroName);
    }
  }

  const batman = new Hero('Batman');
//   console.log(batman)

// setTimeout() performs a simple invocation of logName (where this is the global object).
setTimeout(batman.logName, 1000);


// batman.logName.bind(batman) binds this value to batman instance.
setTimeout(batman.logName.bind(batman), 1000);


// Arrow Function

class Hero1 {
    constructor(heroName) {
      this.heroName = heroName;
    }
  
    logName = () => {
      console.log(this.heroName);
    }
  }
  
  const superman = new Hero1('Superman');


// Now you can use batman.logName as a callback without any manual binding of 'this' keyword. 
// The value of 'this' inside logName() method is always the class instance:
  setTimeout(superman.logName, 1000);




//   arguments object

function myFunction() {
    console.log(arguments);
  }
  
  myFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }



// arrow function with arguments

//   function myRegularFunction() {
//     const myArrowFunction = () => {
//       console.log(arguments);
//     }
  
//     console.log('arrow function arguments')
//     myArrowFunction('u', 'v');
//   }
  
//   myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }


// arrow function with rest parameter
  function myRegularFunction() {
    const myArrowFunction = (...args) => {
      console.log(args);
    }
    console.log('rest parameter')
    myArrowFunction('x', 'y');
  }
  
  myRegularFunction('a', 'b'); // logs ['c', 'd']

