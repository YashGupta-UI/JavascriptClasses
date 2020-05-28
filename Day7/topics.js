/* HOISTING

This white line actually divides these two phases and in the creation phase we have one more step.
We have something called hoisting 
so let's look at what this does hoisting is the behavior of moving the variables or function declarations to the top
of their respective environments during compilation phase.

HOISTING HAPPENS ON EVERY EXECUTION CONTEXT

Variables are partially hoisted and function declarations are hoisted.

*/

console.log(1);

var teddy = 'bear';

function sing() {
	console.log('JS JS JS JS JS JS JS');
}

/*

Now hoist thing what it does during the creation phase of our global execution context.

*/

console.log(teddy);
console.log(sing());
var teddy = 'bear';

function sing() {
	console.log('JS JS JS JS JS JS JS');
}

/*
this is hoisting it is the JavaScript engine allocating memory for the variables
and functions that it sees in your code during the creation phase before it executes it.


So what happens underneath the hood is that during the creation face the JavaScript engine is going
to look through the code and as soon as it sees two things either the VAR keyword or the function keyword.
It's going to say oh let me allocates a memory 


*/

var teddy = undefined;
function sing() {
	console.log('JS JS JS JS JS JS JS');
}
console.log(teddy);
console.log(sing());
var teddy = 'bear';

/*
 variables are partially hoisted we hoist the variable but not the
right side not the actual value we just assign it on defined functions are fully hoisted.

That means this function declaration was during the creation phase assigned a location in memory
*/

/* what I told you was that as soon as the JavaScript engine sees var or function it's going to hoist it
and make space for it in memory.
*/

console.log(teddy);
console.log(sing());
let teddy = 'bear';

// function expression
(function sing() {
	console.log('JS JS JS JS JS JS JS');
});

/*
Remember the rule is it's either var or function.

hoisting_explain.jpeg
Here the JavaScript engine is during its execution phase is going to say hey can you grab Teddy from
memory and when it looks at Teddy in memory it's assigned undefined for now because it hasn't been assigned
*/

// function declaration
function sing() {
	console.log('hooo');
}

//function expression

var yash = function() {
	console.log('JS MASTER');
};

// EXERCISE HOISTING -> during hoisting what will happen

// 1
var one = 1;
var one = 2;

console.log(one);

// variables are partially hoisted thats y gets undefined

// 2       functions are fully hoisted (function declaration)

sayHi();

function sayHi() {
	console.log('hi');
}

function sayHi() {
	console.log('bye');
}

//
function sayHi() {
	console.log('hi');
}

sayHi();

function sayHi() {
	console.log('bye');
}

//
function sayHi() {
	console.log('hi');
}

function sayHi() {
	console.log('bye');
}

sayHi();

// 3)

var favFood = 'grapes';

var foodThoughts = function() {
	console.log('original food was ' + favFood);
	var favFood = 'sushi';
	console.log('new food was ' + favFood);
};

foodThoughts();

// creation phase

/* execution phase -> new context for hoisting

FYI : every execution context have creation and run phase and hositing happends on creation phase.

there are arguments about whether you should even use hoisting and whether hoisting is bad practice
because we want to make code predictable

so not using the var keyword

*/

// Last question on hoisting

function bigBrother() {
	function littleBrother() {
		return 'it is me!';
	}
	return littleBrother();
	function littleBrother() {
		return 'no me!';
	}
}

bigBrother();

/* Function Invocation 

Programs are simply assigning memory for example assigning a value to a variable and then running a
function for the program to do something with those variables.
That's all programs are and without functions our programs wouldn't do anything.
This is an important concept in all programming languages.

*/

// function declaration
function sing() {
	console.log('hooo');
}

//function expression

var yash = function() {
	console.log('JS MASTER');
};

// calling/invocation/execute the function (Terms)
sing();
yash();

/* IMPORTANT



yash function gets defined at parsetime.
That is when the compiler initially looks at the code and starts hoisting and allocating memory.



unlike the global execution context that gave us a global object that equals
to this instead with a function invocation we get something called arguments (functionStack)
*/

function marry(person1, person2) {
	console.log('arugements', arguments);
	return `${person1} is married to ${person2}`;
}

marry('badola', 'niki');

//

console.log(arguments); // gives you an error as it comes in new context created by function

/*

arguments is a little bit dangerous to use. 
Well because arguments looks like an array but it's not really an array.
So there are many things that you can do with the arguments keyword that might make the compiler or
the JavaScript engine less able to optimize your code because you can't really use array methods on arguments


And with the new javascript they introduced a few little tools that we can use so that we avoid using
arguments because there are some cases where we might want to iterate or loop through arguments instead
of just accessing them regularly.

*/

// way to convert arguments in array

function marry(person1, person2) {
	console.log('arugements', Array.from(arguments));

	return `${person1} is married to ${person2}`;
}

marry('badola', 'niki');

// spread operator and rest operator in es6

// let obj = {
// 	name:'yash',
// 	age:27,
// 	text:'this'

// 	}
// 	undefined
// 	let obj2 = obj;
// 	undefined
// 	obj2
// 	{name: "yash", age: 27, text: "this"}
// 	obj1 === obj2

// 	obj === obj2
// 	true
// 	let obj3 = {...obj}
// 	undefined
// 	obj3
// 	{name: "yash", age: 27, text: "this"}
// 	obj3 === obj
// 	false

// spread

let array1 = [1, 2, 3, 4, 5, 6, 7, ...array2];
let array2 = [8, 9, 10];

let result = [...array1, ...array2];

let result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//rest
function marry2(...args) {
	console.log('arugements', args);
	return `${person1} is married to ${person2}`; // error fix by harbola
}

marry2('badola', 'niki');

/*

with modern javascript you most likely want to avoid arguments.
It's one of those tricky things that was initially added to javascript that caused a lot of problems
and headache.

But using the techniques that we have seen above ,we can now actually convert that into an array

*/

// pandey answer please

function chulbulPandey() {
	console.log(arguments);
}

chulbulPandey();

/* VARIABLE ENVIRONMENT

We learned that there can be many execution context but what about variables that are created inside of these
individual execution context.

variableEnvironment.jpeg
*/

function a() {
	var isAuth;
}

function b() {
	var isAuth = true;
	a();
}

var isAuth = false;
b();

/*
b() -> true
a() -< undefined
global -> false


Each execution context has its own variable env 

some of this information can be on the actual call stack or the execution context remember this is just
a call stack or it could be a reference to somewhere in the heap in the memory heap that perhaps we
might have an object.
*/

/* SCOPE CHAIN 

There is another part of the execution context that we have not discussed.

Each context has a link to its outside world.
Or a link to its parent and this outer environment depends on where the function sits lexical.
lexical means where the function is written.


If we create a new variable let's call it variable X that equals x all of these functions fine name
print name Say my name is going to be able to access this variable this global variable


*/

var x = 'x';

function printName() {
	var c = 'c';
	return 'yash gupta';
}

function findName() {
	console.log(x);
	var b = 'b';
	return printName();
}

function sayMyName() {
	var a = 'a';
	return findName();
}

sayMyName();

/*
OPEN: SCOPE.JPEG
All of these functions have a global lexical environment that is they're written in the global
space to not inside of another function just on the main page they just get attached to the window object
or the global object.
So all these functions have their own variable environment they have access to each their own variables

but they also have this little link what we call a scope chain and this scope chain links and gives
us access to variables that are in our parent environment.
In this case the global environment.


in line 338 first it check in its own variable space then goes to parent (see the chain in image)

Static Scope:

it doesn't really matter where the function is called
where the function is on the execution stack what matters is where the function is written and there's
an interesting characteristic of that right this idea of lexical scope which is also called static scope

only by looking at the source code we can determine which environment the variables data are available in

Scope means where i can access that variable in my code.

*/

function sayMyName() {
	var a = 'a';
	return function findName() {
		var b = 'b';
		console.log(anything);
		return function printName() {
			var c = 'c';
			return 'yash gupta';
		};
	};
}

sayMyName();

// sayMyName()()

function sayMyName() {
	var a = 'a';
	return function findName() {
		var b = 'b';
		return function printName() {
			console.log(cccc);
			var c = 'c';
			return 'yash gupta';
		};
	};
}

sayMyName()();

sayMyName()()(); // remove console

/*

these are all lexically scoped different than before.
Previously, All these functions had global lexical environments.


What do they have now if you were the JavaScript engine and you are looking at this code you haven't
even run this code.How would you link the chains together?

OPEN funLexical


DIFF BETWEEN UNDEFINED AND REFERENCE ERROR

*/

function a() {}

// window.a [[Scopes]]

// deep cloning //  shallow clone

const harbola = JSON.parse(JSON.stringify(article)); // deep clone
