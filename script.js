var num = 7;
var str = 'i love you';  //10个字符

console.log(num > 5 && str.length >= num); // = true
console.log(num < 5 && str.length >= num); // = false
console.log(!(num < 10)); // = false
console.log(!(num < 10 || str.length == num)); // = false
