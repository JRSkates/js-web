// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const add = require('./add');
const multiply = require('./multiply');


const result = multiply(add(2, 4), 12)


console.log(new Date());
console.log('tesing bundle');
console.log(result);