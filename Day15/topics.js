/* Functional Programming 

The idea of functional programming originates from mathematics from something called lambda calculus.
And sometimes it can get very confusing.


Programming languages that are built with functional programming in mind such as Haskell
Lisp ,Clojure etc.

They work really really well when it comes to distributed computing where there's multiple machines
interacting with data and also parallelism which is machines working on the same data at the same time
and also in javascript libraries like redux and even react have really popularized the idea of functional
programming among other things.

*/

/*
It's all about packaging our code into separate chunks so that everything's a well organized in each
part of our code concerns itself with the one thing it's good at.


Functional programming has this idea as well of separating concerns like oop  but they also separate data
and functions.

Thing is the goals of functional programming are the exact same as that of object oriented programming.
Unlike oop pillar , fp has focus on pure functions


The idea here is that there's a separation between data over a program and the behavior of a program
in all objects created in functional programming are immutable.
immutable: once something is created it cannot be changed.


*/

/*
I have an exercise here that will show you why functional programming can make you a better
programmer.

tasks.js


*/

/*****PURE FUNCRIONS ******
 
What are pure functions ?
There's two main things a function has to always return the same output given the same input and the
function cannot modify anything outside of itself.No side effects.
 
*/

// no side effect
// input -> output

let array = [10, 20, 30, 40]; // side effect example

function a(arr) {
	arr.pop();
}

a(array);
array;

//this function has what we call side effects and
//side effects are the function modify anything outside of itself.

// node-side effects example

const array = [1, 2, 3];

function removeLastItem(arr) {
	const newArray = [].concat(arr);
	newArray.pop();
	return newArray;
}

function multiplyByTwo(arr) {
	return arr.map(number => number * 2);
}

const array2 = removeLastItem(array);
const array3 = multiplyByTwo(array);
console.log(array, array2, array3);

// Question  Is the below one a pure function?

function a() {
	console.log('hi');
}

a();

/*
console.log is window specific.
We're using the browser to log something to the browser.
So it's actually affecting the outside world.
It's logging something to the output of the browser.
It's modifying something outside of itself.
SO the above function has the side effect
*/

// input -> output

function a(num1, num2) {
	return num1 + num2;
}

a(10, 20); // 30

// 30 -> run miltiple times same

function b(num) {
	return num * 2;
}

b(a(10, 20)); // b(30)

// remeber parameters are local varibales

/*

The idea with pure functions is that it makes functions very easy to test very easy
to compose and it avoids a lot of bugs because we have no mutations no shared state.
We have these predictable functions that minimize the bugs in our code.


Can everything will be pure ?

A program cannot exist without side effects.
We can't run this piece of code without having a side effect of interacting with the browser.

We can't have Web sites with just pure functions can we browsers have to make fetch calls
to the outside world.

We have to interact with the Dom and manipulate what's on the Web site so the goal of functional programming
is not to make everything pure functions.

The goal is to minimize side effects.
The idea is to organize your code with there is a specific part that has side effects but when you have
a bug you know right away to go to that spot because that's where the side effects are happening the
rest of your code.


We want to build programs that are built with a bunch of very small very reusable predictable pure functions.

Open PerfectFunction.Jpeg
*/

// Indempotence

// not Indempotence
function a(num) {
	return Math.random(num);
}

a(5);

// everything we will get something different

// The idea of impotence is a function that always returns or does what we expected to do.
// Idempotency is a strategy that makes sure an event that executed multiple times will give the same result
// it looks same as pure function but

function a() {
	console.log(5);
}

a();

/*

No matter how many times I click Run Ii always get five.
This function that console logs five to the outside world is still in component because multiple polls
is still going to display the same text even though it's not pure


Another thing that can be independent for example is deleting a user from a database.
When we delete a user from a database.
Well I can delete that person once but if I keep calling the function to delete that user Well it's
going to return the same result.

 https://medium.com/easyread/why-we-need-idempotency-mechanism-c61f3d108474

*/

/*Imperative vs declerative

Imperative code tells the machine what to do and how to do it. ex-computer (machine code)

Declarative code tells it what to do and what should happen.
It doesn't tell the computer how to do things. ex-human (higher level lang javascript)


*/

// imperative
for (let i = 0; i < 1000; i++) {
	console.log(i);
}

// or jquery(imperative) with Jquery we told our Web site exactly what to do.

$('pandeyButton').click(function() {
	$('.dropdown').hide();
});

//decrative (react -> open code and show, angular, view)

[1, 2, 3, 4].forEach(item => console.log(item));

// whey we learnd about this coz functional programming helps us be more declarative

/*  Immutability
immutability means not changing the data not changing the state.

The idea is of immutability that is not changing state but instead making copies of the state and returning
a new state every time.
*/

const obj = { name: 'Yash' };

function clone(obj) {
	return { ...obj }; // this is pure
}

obj.name = 'Pandey';
obj;

/*

In Above example we're mutating data in our program.
In functional programming. The idea of immutability is very important.

We can change things inside of our function but we don't want to affect the outside world in our programs.
And although this function is pure


*/

const obj = { name: 'Yash' };

function clone(obj) {
	return { ...obj };
}

function updateName(obj) {
	const obj2 = clone(obj);
	obj2.name = 'Pandey';
	return obj2;
}

const updatedObj = updateName(obj);
console.log(obj);
console.log(updatedObj);

/*

We've maintained immutability of not changing the state.
Just returning copies or new things every time a change is made.

*/

/* In Javascript function are first class citizen that means we can have HOF and CLosures */

/* HOF

It's a function that does one of two things.
It either takes one or more functions as arguments or returns a function as a result

*/

const hof = () => () => 5;
hof(); // its a function that returns an function

const hof = fn => fn(5);
hof(function a(x) {
	return x;
});

// OR Rewite
const hof = fn => fn(5);
function a(x) {
	return x;
}
hof(a(x));

// interesting thing about high order functions and the fact that functions are first class citizens
// in JavaScript means we can do closures.

/* Closure
Like object closures in JavaScript are a mechanism for containing some sort of state

*/

const closure = function() {
	let count = 0;
	return function increment() {
		return count++;
	};
};

const incrementFunction = closure();
incrementFunction();
incrementFunction(); // make changes outside

const closure = function() {
	let count = 10;
	return function getItem() {
		return count;
	};
};

const getItemFunction = closure();
getItemFunction();
getItemFunction();

/*
As long as we don't modify it and mutate the data we're still following the functional programming
paradigm


With above last code is that we just created private variables we are able to use
closures to create data privacy which is very very cool because now as a user I can't really modify
the count.

We just have to be careful not to modify the state using closure

*/

/* Currying

You take a function that can take multiple parameters and using curring modify it to a function
that takes one parameter at a time 


*/

const multiply = (a, b) => a * b;
multiply(10, 30);

// convert

/* Partial Application

It's a process of producing a function with a smaller number of parameters.
It means taking a function applying some of its arguments into the function so it remembers those
parameters and then it uses closures to later on be called. With all the rest of the arguments.

*/

//Partial Application
const add = (a, b) => a + b;
const addCuried = a => b => a + b;
const addcuriedby10 = addCuried(10);

// 5 years later
addcuriedby10(20);
addcuriedby10(40);

//

//Partial Application
const multiply = (a, b, c) => a * b * c;

/*

I want to apply portion of the parameters for example a.
And then the next time I call that function I want to apply the rest of the arguments.

*/

const multiply = (a, b, c) => a * b * c;
const curriedVersionMultiply = a => b => c => a * b * c;
curriedVersionMultiply(5)(3)(12);

const multiply = (a, b, c) => a * b * c;
const partialVersionMultiply = multiply.bind(null, 5); // It gives us a another function but we don't
//really care about this keyword. There's no such thing as this here,I want to use bind as a way
// to pass a parameter or an argument into partialVersionMultiply
partialVersionMultiply(4, 10);

/*

Partial application is on the second call I expect all the arguments
Currying says I expect one argument at a time.
*/
