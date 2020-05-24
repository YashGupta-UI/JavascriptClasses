// const obj = {
// 	player: 'pokemon',
// 	experience: 5,
// 	wizardLevel: false,
// };

// obj.player = ' yash';
// obj.test = 'harbola';
// console.log(obj);

const array = [1, 2, 3, 4];
array = [2, 3, 4, 5];

// let yash = {};
// let alok = yash;
// let harbola = {};
// alok === yash;

// Primitive pass by value
// Number
// String
// Boolean
// Undefined
// Null

// let yash = true
// let harbola = yash;
// yash = false;
// console.log(harbola)

// Object pass by reference

// object
// array

function add(a, b) {
	return a + b;
}

console.log(add(10, 20));

// covert them in arrow function;

const add1 = (a, b) => a + b;

const add2 = (a, b) => {
	return a + b;
};

console.log(add1(1, 20));
console.log(add2(2, 22));

//

const yash = function(a) {
	return a;
};

const yash1 = a => a;
console.log(yash1(10));
