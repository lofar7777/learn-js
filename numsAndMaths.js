const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = new Number(1123.8966);
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++ Maths ++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // to change negative nos into positive
console.log(Math.round(4.6)); //round off value in int
console.log(Math.ceil(4.2)); // round off the value to the next number ex-4.2 -> 5
console.log(Math.floor(4.9)); // round off the number to the previous number ex-4.9 -> 4
console.log(Math.min(4, 3, 5, 6, 7));
console.log(Math.max(3, 4, 2, 5, 1, 5, 66));

