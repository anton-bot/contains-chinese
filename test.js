const containsChinese = require('./index');

console.log(`香港 is cool = ${containsChinese('香港 is cool')}`); // true
console.log(`홍콩 = ${containsChinese('홍콩')}`); // false
console.log(containsChinese.HAN_REGEX); // print regex