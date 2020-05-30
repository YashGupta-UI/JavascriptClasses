/* call , bind and apply  -> in order for us to manipulate the this keyword. */

function a() {
	console.log('hi');
}

a(); // shorthand

/* Underneath the hood in JavaScript when I do a bracket bracket to invoke the function all functions
when created have this property called call that allows us to call the function.
*/
a.call();

a.apply();

// let's see how call and apply can be useful besides just calling functions.

const badola = {
	name: 'Nikki',
	health: 50,
	heal() {
		return (this.health = 100);
	},
};

const harbola = {
	name: 'special',
	health: 30,

	// this.heal() : can not do coz this object does have it
};

badola.heal();

/* think about how can we borrow a function from object or can use the other object method
So that we can keep our code DRY (and we dont have to add it again in the memory)
And think about only one place to change it so it leads to less bugs

We use call and apply to borrow the method
*/

badola.heal.call();
badola.heal.call(harbola);
badola.heal.apply(harbola);

// when to use call and when to use apply

const badola = {
	name: 'Nikki',
	health: 50,
	heal(num1, num2) {
		return (this.health += num1 + num2); // using this here so dynamic
	},
};

const harbola = {
	name: 'special',
	health: 30,
};

badola.heal.call(harbola, 10, 40);
badola.heal.apply(harbola, [20, 30]);

/* Bind
Bind uses just like call parameters

Well similar to call and apply bind allows us to use what we have above.
You see bind unlike call and apply that immediately runs a function bind returns a new function with
a certain context and parameters.
And it's usually used when we want a function to be called later on with a certain type of context or
a certain type of this keyword.

*/

const yash = badola.heal.bind(harbola, 10, 40);
yash();

// Remeber how we used bind in yesterday example

const obj = {
	name: 'yash',
	sing() {
		console.log('a', this);
		var that = this;
		var anotherFunction = () => {
			console.log('b', that);
		};

		return anotherFunction.bind(this);
	},
};

obj.sing();

/* Bind and Currying

We learned how we can do function borrowing with apply and call and we also learn how we can use bind
to do the same thing and also call a function later on when we want to with a certain value to the this
keyword.

But there's one other useful trick that you can use with bind.
And it's called function currying.


*/

function multiply(a, b) {
	return a * b;
}

multiply(10, 20);

multiply(10)(20);

const yash = multiple(10);
yash(20);

/* Now currying refers to only partially giving a function a parameter.

Now why would this be useful.
Why would multiply to 2 more useful than just completing the entire parameter list.
*/

multiply(2);
multiply(2, 3);

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo);
console.log(multiplyByTwo(4));

/*
We created a new function called multiply by 2 that multiplies anything by 2 by giving it the first parameter
to 2
*/

let multiplyByFive = multiply.bind(this, 5);

/*
we were able to reuse a piece of code give it a partial parameter and create these functions that
are extensible that are more specific such as multiplyByTwo or multiplyByFive.

*/

// Exercise

var a = {
	name: 'a',
	say() {
		console.log(this);
	},
};

var b = {
	name: 'a',
	say() {
		return function() {
			console.log(this);
		};
	},
};

var c = {
	name: 'a',
	say() {
		return () => console.log(this);
	},
};

a.say();
b.say();
b.say()();
c.say();

/* 
Scope vs Context

Scope means what is the variable access of a function when it is invoked.
On the other hand context is more about object based context says what's the value of this keyword.

*/

/* JS TYPES */

// primitive     // wrapped primitve new Number(5) new Boolean()
typeof 5;
typeof true;
typeof 'harshit pandey';
typeof undefined;
typeof null;
typeof Symbol('just me'); // symbols are usually used for object properties so that the objects property is unique.

// non primitive (objects)
typeof {};
typeof [];
typeof function() {}; // open object.jpeg

// typeof function gives us a function underneath the hood a function in javascript is just an object.

function a() {
	return 5;
}

a.hi = 'hihi';
console.log(a.hi);

/* undefined and null difference ?

undefined is the absence of a definition.    var yash;
so it's used as the default value when the JavaScript engine initialize is our variables.
Functions return undefined when they don't return anything there's no return keyword in a function

null on the other hand is the absence of value.  var yash = null;
It means there's no value there

*/

/*
We have the type of operator here that tells us what type something is 
And in JavaScript.We have two distinctions.
We have the primitive types and then we have the non primitive types.


So what is a primitive type?
It's a data that only represents a single value, pass by value

Non primitive type?
pass by reference

*/

/*
The idea of JavaScript built in objects and you can see some of the built in objects in below link.
Built in objects doesn't mean global objects like we saw when we added things to the
window object.

Standard built in objects come with the language. It's part of the language.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects



**********IMP************
Why we can see boolean , number as they are primitive in above build in objects?
Well you may have heard the term everything in Javascript is an object.

These primitives have object wrappers like Boolean() Number() String()
*/

// true is a primitive type.Why is it acting like an object by using dot notation
true.toString();

// You see this is where javascript gets a little sneaky it silently creates a wrapper object around true.
Boolean(true).toString(); // internally when we try and attempt to access a property on a primitive.

typeof Math;
typeof Number; // types in JavaScript can get a little bit tricky.

var array = ['10', '20', '30', '40'];

// inner implementation
var array = {
	0: '10',
	1: '20',
	2: '30',
	3: '40',
};

typeof [];

/*
Let's say we create a variable somewhere and we want to find out what this variable is.
Does it contain an array an object.

*/

var something = [1, 2, 3, 4];
Array.isArray(something);

/*

Pass by Value and Pass by reference

Primitive types are immutable.
Means that we can't really change them in order to change them.

Well in order for me to change what that five value is I have to literally move it from memory and create
something new like a equals 10 

var a = 5;
a = 10;

when I assign a variable a to five somewhere in memory variable a is going
to contain

Objects in the other hand is what we say call by reference
*/

var a = 5;
var b = a;
b++;

console.log(a);
console.log(b);

let obj1 = {
	name: 'bella chao',
	pass: '123',
};

let obj2 = obj1;

obj2.pass = '456';

console.log(obj1);

/* Now why do you think that's a good idea (pass by reference)

Because by just having one object here we're saving space and memory.

*/

let pandeyji = [110, 20, 30, 40];
let harbolaji = pandeyji; // reference break [].concat(pandeyji)
harbolaji.push(100);
console.log(pandeyji);

//
let obj = {
	a: 'a',
	b: 'b',
	c: 'c',
};

let clone = obj.assign({}, obj);
let clone2 = { ...obj };
obj.c = 5;
console.log(obj);
console.log(clone);
console.log(clone2);

// shallow vs deep clone

let obj = {
	a: 'a',
	b: 'b',
	c: {
		deep: 'try and copy me',
	},
};
let clone = Object.assign({}, obj);
let clone2 = { ...obj };

console.log(obj);
console.log(clone);
console.log(clone2);

// although we cloned the object. This is what we call a shallow clone it clone the first level.

obj.c.deep = 'uff wtf'; //  remember each object gets passed by reference.
console.log(obj);
console.log(clone);
console.log(clone2);

/* Deep Cloning:

Below one will have if you're doing a deep clone Well you should be careful
because below one can have some performance implications
if this object was extremely deep a massive object. t's going to take a long time to clone everything
*/
let superClone = JSON.parse(JSON.stringify(obj));

/* TYPE COERSION : Some of the funky things that javascrip does

Type coersion means that when the operands that is the things to the left and to the right
of the operator are different types.  1 == '1'

One of them will be converted into an equivalent value by the JavaScript engine.
So the JavaScript engine is going to say 1 equals to string 1.
I think you mean number one.

1 == 1


Do all languages have type coertion?

Yes Because we always need to convert types between programs to do things in memory.
Type coertion happens at different levels of the stack.

JavaScript has an especially heavy type coersed in nature because it's dynamically
type, we can assing it to sring, number anything, which is why it does this

In JS Type Coercion happends when we use ==

thats whyy === gives false (dont compare just the value check the data type no coercion)

== can be a conufsing code

*/

if (1) {
	console.log('hehe'); // why work
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// In Javascript there is a concept of -0 and +0

-0 === +0;
Object.is(-0, +0);

NaN === NaN;
Object.is(NaN, NaN);

// so use === coz type coercion is very tricky
