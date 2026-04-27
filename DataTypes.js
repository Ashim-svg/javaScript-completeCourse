// conversion of strig into number
let str = "123";
let num = Number(str);
console.log(num); // Output: 123
// in console iy you want to try you can use 
// +'100' it will change into number 
// + 'yourname' it will change into NaN
// typeof NaN is number but it is not a number it is a special value that represents an invalid number
// conversion of number into string
let num2 = 456;
let str2 = String(num2);
console.log(str2);
// conversion of number into string 100 + '' will give you '100' which is a string
// boolen has two values true and false
let bool1 = true;
let bool2 = false;
console.log(bool1);
console.log(bool2);
// typeof true is boolean and typeof false is boolean
// conversion of boolean into number true is 1 and false is 0 + true will give you 1 and + false will give you 0
console.log(+bool1);
// undefined is a special value that represents the absence of a value or an uninitialized variable
// null is a special value that represents the intentional absence of any object value
// conversion of undefined into null
let undef;
let nul = null;
console.log(undef); // Output: undefined
console.log(nul); // Output: null~
// typeof null is object but it is not an object it is a special value that represents the intentional absence of any object value
//big int is a new data type that was introduced in ES2020 it is used to represent integers that are larger than the maximum safe integer in JavaScript which is 2^53 - 1
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // Output: 1234567890123456789012345678901234567890n
// typeof bigInt is bigint  
//symbol is a new data type that was introduced in ES2015 it is used to represent unique identifiers
let sym1 = Symbol('sym1');
let sym2 = Symbol('sym2');
console.log(sym1); // Output: Symbol(sym1)
console.log(sym2); // Output: Symbol(sym2)
// typeof sym1 is symbol and typeof sym2 is symbol  