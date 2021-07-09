












// getter 

const obj = {
    log : ['a','b','c'],
    get latest(){
        if (this.log.length === 0) return "no log present";
        // this will print actual length of number
        console.log(this.log.length)
        return this.log[this.log.length-1];
    }
}
console.log(typeof obj)
// deleting object 
// delete obj.latest

console.log(obj.log);
console.log(obj.latest)


const expr = 'samir'

const obj1 = {
    get [expr](){
        return 'bar'
    }
}
console.log(obj1.samir)


// Setter 

const object = {
    set current(name){
        this.log.push(name)
    },
    log:[]
}
object.current = 'english'
object.current = "Hindi"

console.log(object.log)
// index wise finding value
console.log(object.log[0], object.log[1])

