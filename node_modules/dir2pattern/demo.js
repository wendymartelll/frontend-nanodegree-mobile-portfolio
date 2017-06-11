var fixPattern = require('./dir2pattern.js');

console.log(fixPattern('test'));
console.log(fixPattern('test/'));
console.log(fixPattern('test/file'));
console.log(fixPattern('test123'));
console.log(fixPattern('test/*.html'));
