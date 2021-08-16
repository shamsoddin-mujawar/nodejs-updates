// Array instance object

console.log('---------------------------------Array.prototype.join()--------------------')

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

console.log(elements.join('+'));


console.log('-------------------------------Array.prototype.toString()------------------------')

const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"


