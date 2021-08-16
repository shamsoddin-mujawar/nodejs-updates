const hi = require('./hi');

// class Mammal {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	eats() {
// 		return `${this.name} eats Food`;
// 	}
// }

// class Dog extends Mammal {
// 	constructor(name, owner) {
// 		super(name);
// 		this.owner = owner;
// 	}
// 	eats() {
// 		return `${this.name} eats Chicken`;
// 	}
// }

// let myDog = new Dog("Spot", "John");
// console.log(myDog.eats()); // Spot eats chicken


/*extends keyword */

// console.log("-------------------------extends keyword --------------------------------")

// let Name = ""

// class DateFormatter extends Date {

// 	getFormattedDate() {
// 	  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
// 		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// 	  return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}-${this.getHours()}`;
// 	}

// 	setName(name1){
// 	Name = name1
// 	}

// 	getName(){
// 		return Name
// 	}

// 	naming(){
// 		const n=this.getName()
// 		console.log("name is:",n)
// 	}
  
//   }
  
//   const dev = new DateFormatter('August 19, 1975 23:15:30')
//   dev.setName("amir")
//   console.log(dev.getFormattedDate())
//   dev.naming()
  
console.log('testing ================= getting object value from one file to another')
const {config, env} = hi['dev']
console.log(config.baseUrl)
console.log(env.corpAccNumber)