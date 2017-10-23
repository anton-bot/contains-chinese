Check whether a string contains any Chinese text
===================

### Short sample ###

```js
const containsChinese = require('contains-chinese');

let t = containsChinese('香港 is cool'); // true
let f = containsChinese('홍콩'); // false - not Chinese

```

### What's it for? ###

This package provides a way to check whether a string contains any Chinese
text. The function will return `true` if there is at least one Chinese 
character in the string. 

### Difference from `is-chinese` ###

Another package called `is-chinese` will return false if the string contains
at least one non-Chinese character, for example `Welcome to 香港` will 
result in `false`.

In contrast, this package will return `true` for such text containing mixed
Chinese and non-Chinese text.

### Methods and Static Members ###

* `containsChinese` - returns `true` if the string has any Chinese characters.
* `containsChinese.HAN_REGEX` - contains the regex used for this check.

### Comments and suggestions ###

If you have any comments, contact me here: https://github.com/catcher-in-the-try/