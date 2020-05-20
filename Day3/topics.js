/* Javascript (ES5) vs ES6 */

// how to make logic ex -> building a home

/* Its a human nature to constantly improve right?? So today we will learn new features that everybody
is using in Javascript

Below is some background of js:
JS is created  by netscape and then all the browsers starting using js
so netscape submitted the js something called as ECMA INTERNATIONAL 
so that js can be internationalized and they can say : hey everybody use this version of js on all browsers
thats what ECMA Script is, its a js but a standard way of calling it so that when the browser implement that javascript
they should know how to implement it so that it will work on every other browser so it follows ECMA script standards 


ES6 stands for ECMA Script 6 but now we are at version 7,8 but that new and not implemented fully by all the browsers
so we write code on version which will ve available by all the browsers so we wont face any issue with the functionality
on other browsers

SO in ES6 we have some powerful features we can make js very very nice and most code you will in companies
will be using this features after 2018

Babel as a javascript compiler beacuse our browser can only understand vanilla javascript
or we can say without waiting browser to use this features we can use babel


*/

//New Feature

//1. let and const -> new way to declare a variable
let player = 'pokemon';
let experience = 5;
let wizardLevel = false;

if (experience > 4) {
	let wizardLevel = true;
}

console.log(wizardLevel);

//with old way
var player = 'pokemon';
var experience = 5;
var wizardLevel = false;

if (experience > 4) {
	var wizardLevel = true;
}

wizardLevel;

/* lets understand it further
with var we have only functional scope
but with let we have block scope means everything that comes inside the braces {} will have their own scope

*/

// question

var player = 'pokemon';
var experience = 5;
let wizardLevel = false;

if (experience > 4) {
	let wizardLevel = true;
	console.log(wizardLevel);
}
console.log(wizardLevel);

// question

var player = 'pokemon';
var experience = 5;
var wizardLevel = false;

if (experience > 4) {
	var wizardLevel = true;
	console.log(wizardLevel);
}
console.log(wizardLevel);

// let n const diff use const mostly n let when you know that you need to change something ex- const a = f(){}

const obj = {
	player: 'pokemon',
	experience: 5,
	wizardLevel: false,
};

obj = 5;
obj.wizardLevel = true;

// so you can not reassign the variable but can change the properties of an object

// now no need to used the var keyword

//2. Destructuring
const obj = {
	player: 'pokemon',
	experience: 5,
	wizardLevel: false,
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;

// now can use the player and experience in your code easily example and its a much cleaner

if (player === 'pokemon') {
}
/* instead of writing */

if (obj.player === 'pokemon') {
}

//3. New Ways of declaring object properties

const name = 'professor';

const myObj = {
	[name]: 'hello',
	['park' + 'ing']: 'hihi',
};

//above one is a dynamic implementation of obj properties

const a = 'javascript';
const b = true;
const c = {};

const obj = {
	a: a,
	b: b,
	c: c,
};

// if the property and value is same as in above example then we can write it like below:
// and can be very usefeul when we move to react section

const obj = {
	a,
	b,
	c,
};

//4. Template Strings
const name = 'Harshit';
const whichClass = 'Javascript';
const greeting = 'hello' + name + 'welcome to' + whichCLass + 'classes';

const greeting = `hello ${name} welcome to ${whichClass} classes`;

const dob = 1992;
const currentYear = 2020;
const tellMyAge = `My Age is ${currentYear - dob}`;

//5. Default Arguments

function greet(name = 'yash', age = '27', lang = 'js') {
	return `Hello I'm ${name}, my age is ${age} and i love ${lang} language`;
}

greet();
greet('pandey', 28, 'dotnet');

// 6. Symbol : can be used when need to create a very unique type, you wont see them most

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 == sym3;
sym2 === sym3;

//7. Arrow Functions

function add(a, b) {
	return a + b;
}
const test = add(10, 20);

const add = (a, b) => {
	return a + b;
};

const add = (a, b) => a + b; // with arrow function short hand form if have single return
add(11, 23);

/* *************SPREAD AND REST OPERATOR LATER PLEASE REMIND ME LATER******************** */

/* Advanced Functions VV IMP (Very Advanced but just understand the concept will see them in real coding)
and there are many libraries and tools use them under the hood
You just need to able  to read a piece of code and understand whats going on
*/

/* it makes easy for the developer to understand the functions easily and we need not to care about the same name
 variable declared any where else in our code */

//1) Closures (must ask question in every UI interview)

const perfect = () => {
	const greet = 'hello';
	const second = () => {
		alert(greet);
	};

	return second;
};

const newFunction = perfect();
newFunction();

//closure -> when a function return another function then the closure happens

/* 2) Currying (must ask question in every UI interview)
Its a process of converting the function that takes multiple arguments into a function
that takes them one at a time
*/

const multiply = (a, b) => a + b;
const curriedMultiply = a => b => a + b;
curriedMultiply(3)(4);
// OR
const add10 = curriedMultiply(10);
//const curriedMultiply = 10 => b => 10 + b;    => arrow means a function
add10(20);

/* Compose
Its the act of putting two functions together to form a third function
where the output of one will be the input of the other function

Its very advanced stuff we will see this later, kept it here just to be sure that we didnt missed 
anything at the end of the course
*/

const compose = (f, g) => a => f(g(a));

const sum = number => number + 1;

compose(
	sum,
	sum
)(5);

// Steps
f(g(5));
f(sum(5));
f(6);
7;

/* *******ADVANCED ARRAY**********  */

//forEach

const array = [1, 12, 20, 30];
// show them in map const newArray = array.forEach(num => num * 2);

const double = [];
array.forEach(num => double.push(num * 2));

//map , filter and reduce (most important method that we use in day to day activity)
// whenver loop we need this and map return us the new array

const newArray = array.map(num => num * 2);

//filter, it also return the new array

const filterArray = array.filer(num => num > 5);

// reduce -> very powerful and also return the new array , it used the accumulator acc

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0);

/* ADVANCE OBJECTS  CONCEPTS */

// 1) reference type
[] == [], [] === [], [1] === [1];

const obj1 = { value: 10 };
const obj2 = obj1;
const obj3 = { value: 10 };

obj1 === obj2;
obj1 === obj3;

obj1.value = 15;
obj2.value;
obj3.value;

/* Objects are reference data type in javascript and array is an object in js*/

// below are primitive data types in js
Number, String, Boolean, Undefined, null, Symbol;

// 2) context -> dont get confused with the scope, below example of creating a new scope
function b() {
	let a = 4;
}
console.log(a);

// context tell us where we are within the object
console.log(this); // this is a special keyword in javascript and the most confusing keyword
console.log(this === window);

alert();
window.alert();
this.alert();

// the best way to predict what this keyword poitns to , is to check what is there in the left hand side
window.alert(); // left side is window object so this keyword points to window
// this refers to what object we are inside of

function a() {
	console.log(this);
}

a();

const obj = {
	name: 'WFH',
	help: function() {
		console.log(this);
	},
};

obj.help();

/* 3) instantiation

 The above this keyword is very useful when we do instantiation
 Instantiation is when you make a copy of an object  and reuse the code

 Imagine that we are building a big multiplayer game online and this game is going to have many players
 So if we want to create an object for every single player thats a lot of repeated code and its not efficient

 In Instantiation we make multiple copies/instance of an object, learn some syntax

 */

class Player {
	constructor(name, type) {
		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm ${this.type}`);
	}
}

// Im below , any time we extend somthing we need to call constructor funtion of the Player
// we have to use super with the properties that we want to pass to the constructor in this case name and type

class Wizard extends Player {
	constructor(name, type) {
		console.log(this);
		super(name, type);
		console.log(this);
	}

	play() {
		console.log(`I am ${this.type}`);
	}
}

const wizard1 = new Wizard('Alok', 'Healer');
const wizard2 = new Wizard('Pande', 'DarkMagic');

wizard1.play();
wizard1.introduce();

// ES7 (2016)-> it has only 2 addition in the language
includes(); //method availabe on strings and arrays
'Hello'.includes('o');

//question find whether any element present in an array or not using includes

//ES7 -> Exponential function
const square = x => x ** 2;
const cube = x => x ** 3;

//ES8 (2017)

//1
padStart();
padEnd();

'Turtle'.padStart(10);
'Yash'.padEnd(10);

//2
let obj = {
	name: 'alok',
	name1: 'pande',
	name2: 'harbola',
};

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
});

// before above we have object.keys but we Object.entries() things become little easier

Object.values(obj).forEach(value => {
	console.log(value);
});

Object.entries(obj).forEach(value => {
	console.log(value);
});

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('name', '');
});

Object.values();
Object.entries();

//3 async await -> will cover later;

//ES9 -> more on aync javascript will cover later

//ES10 (ES2019) its the latest
//1
flat(); // method can be used in array and return the new array

const array = [1, [2, 3], 4, 5];
const array2 = [1, 2, [3, 4, [5]]]; // nested flat(1) default but can change for this one array2.flat(2)
array.flat();

const entries = ['js', 'react', 'angular', , , , 'view'];
entries.flat();

//2
flatMap(); // works on an array flat + map

//3
const userEmail = '     eddy@gmail.com';
const userEmail1 = 'neddy@gmail.com      ';
userEmail.trimStart();
userEmail1.trimEnd();

//4
const userProfiles = [['command', 27], ['output', 40]];
Object.fromEntries(userProfiles); // convert in key value pair



/* ADVANCED LOOPS */


