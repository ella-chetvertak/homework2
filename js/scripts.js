const value = 123;
console.log(`${value} in binary system = ${value.toString(16)}, ${value} in hexadecimal system = ${value.toString(2)}`);
const insert = prompt('Your value', '');
console.log(`${insert}+2 = ${parseInt(insert)+2}, ${insert}-2 = ${insert-2}, ${insert}*2 = ${insert*2}, ${insert}/2 = ${insert/2}`);
console.log(`Your value's length is ${insert.length}`);
const long_value = 0.51000002;
console.log(`0.51+2 = ${parseFloat(long_value.toFixed(2))+2}`);
const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps';
console.log(`${str.indexOf(str_two)}\n${str.toUpperCase()}`);
let a = 1, b = 2, c = 3, d = 3;
console.log(a<c || b>c || c<d);
console.log(a<c && b<c && c==d)
console.log(`using == you get ${0==false} when you check if 0=false, but same checkout using === gives you ${0===false}`);
let empty_text;
let full_text = 'lorem';
console.log(empty_text ?? full_text);