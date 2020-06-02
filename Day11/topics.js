/* Static Vs Dynamic typed Programming Language */

var a = 100;

/*
Dynamically typed language allows us to not have to say what type of variable this variable
a is going to be.


In a statically typed language like say we were writing C++ which is a statically typed language
we'd have to do something below

int a;
a = 100;

In a statically typed language we say what type this variable a is going to be.

*/

/*
Javascript is dynamically typed language and type checking is done during runtime.

Remember in our previous discussion about the browser performance: javascript gets run on the browser
in the runtime or in jit (just in time) compilation while the user is actually browsing through the
Web site javascript is running and being compiled in the background.


There's been a war going on in programming languages.
Some People think that statically typed languages are the way to go and think dynamically typed languages
are horrible and vice versa.



function sum(a:number , b: number){
    return a + b;
}

sum(null,'hello')


Pro (Static):

1)
Before we going to put this code on the browser are in production is going to error out because it's going
to say you're doing something wrong here.

I'm expecting a number and a number here and you're not giving me any of that and in that sense statically
type languages are self documenting.

2) You're going to get less bugs you're gonna get
less bugs in production because this will never make it into production.

If this fails at what we call compile time that is before we even send it onto a browser then we catch
that early


So why we choose dynamic type language?

Cons(static typed language):

1)
No one is that we obviously just made our code a little bit more harder to read.
It's more complex now we're just adding another layer to our programs and this takes time to time to
learn if we have a project and we have new people joining our company.
We're going to have to teach them how to write more code and how to write this properly it's an extra
layer of complexity and that's always a concern with programming.


Many people get very very excited about static typing and forget about writing good tests good unit

2)You're gonna have a slower development process because you now have an extra step where while you're
coding along there's also another check to see that you're not making any type errors and this actually
just slows down the development process and how fast you can create code and run code and ship it to
production.




With dynamically typed languages and this is why javascript was so popular is that you spend
less time debugging syntax and semantic errors like this and instead most of your debugging time is
spent purely on logic and errors which as a developer are a lot more interesting.



MAIN POINT:
Static types usually prevent bugs and help keep errors from happening
Dynamic type allows you to be more flexible and write software faster

Typescript allows us to make javascript to behave like a statically
typed language it adds types to JavaScript so it makes javascript extra safe (TYPESCRIPT- ANGULAR)

*/

/* Weak and Strong Type */

// Weakly Type: That's what a weekly type language does.    (js dynamic weak)
var a = 'harbola';
a + 17;
('harbola17');

// python dynamic strong you wil get the error in above

/*  Functions are Objects

Q: Ways to call a function

*/

const four = new Function('return 4'); // a function constructor
four();

const four = new Function('num', 'return 4'); // a function constructor
four(4);

/*
Remember our built in javascript object that the javascript language itself comes with.
Well that's what it is. It creates functions for us 
*/

function yash() {
	console.log('hoho');
}

yash.test = 'ahahahah';

// underneth the hood

const specialObj = {
	test: 'ahahahah',
	name: 'yash',
	// (): console.log("hoho")
};

yash.call();

let obj = {};
obj.call(); //???

/*
functions are objects and they're a special type of object that is a callable object with the
bracket notation for invoking the function contains the code it has name and it also has some properties
like call apply and bind but why do we care.

Why is that really important.
Because functions are just objects in javascript that means that we can pass them around like objects
like things that contain data.


FUNCTIONS AS FIRST CLASS CITIZENS: It mean three things

1)functions can be assigned to variables and properties of objects ( not in all lang)

var stuff = function(){}


2)We can also pass functions as arguments into a function

function a(fn){
    fn()
}

a(function(){console.log("harbola")})

3)We can return functions as a values from other functions.

funtion a(){
    return function c(){
        console.log("heyhey")
    }
}

Above are the three properties that make functions a first class citizen in JavaScript

*/

// things to care about

for (let i = 0; i < 100; i++) {
	function a() {
		console.log('hmm');
	}
	a();
}

//

function a() {
	console.log('hmm');
}

for (let i = 0; i < 100; i++) {
	a();
}

// Q: Pandey/Harbola

function test(param) {
	// param = 0
	console.log(param);
}

test();

function test() {
	console.log(param);
}

test();

/* Higher Order Functions 
Higher order functions are simply a function that can take a function as an argument or a function that
returns another function.

 Why higher order functions are useful?
*/

// normal function

function letAdminLogin() {
	let array = [];

	for (let i = 0; i < 10000000; i++) {
		array.push(i);
	}

	return 'Access Granted to Admin';
}
letAdminLogin();

function letHarbolaLogin() {
	let array = [];

	for (let i = 0; i < 10000000; i++) {
		array.push(i);
	}

	return 'Access Granted to harbola';
}
letHarbolaLogin();

// DRY -> above no efficient for more employes

// function that accept parameters

const giveAccessTo = name => 'Access Granted to ' + name;

function letUserLogin(user) {
	let array = [];

	for (let i = 0; i < 10000000; i++) {
		array.push(i);
	}

	return giveAccessTo(user);
}
letUserLogin('pandey');

// scenrios -> we have now admin also so how can we do and more security layer

function letUserLogin(admin) {
	let array = [];

	for (let i = 0; i < 50000000; i++) {
		array.push(i);
	}

	return giveAccessTo(admin);
}
letUserLogin('Badola');

// we are not dry here, suppose we have more roles in our company then ex-> manager , guest ?

/* This is where higher order functions are come into play */

const giveAccessTo = name => 'Access Granted to ' + name;

function authenticate(verify) {
	let array = [];
	for (let i = 0; i < verify; i++) {
		array.push(i);
	}
	return true;
}

function letPerson(person, fn) {
	// we have the generic function here
	if (person.level === 'admin') {
		fn(5000000);
	} else if (person.level === 'user') {
		fn(100000);
	}

	return giveAccessTo(person.name);
}

letPerson({ level: 'user', name: 'yash' }, authenticate);

// Exercise (HOF)

const multiplyBy = function(num1) {
	return function(num2) {
		return num1 * num2;
	};
};

const multiplyByTen = multiplyBy(10);
const multiplyByFive = multiplyBy(5);
multiplyByTen(3);
multiplyByFive(2);
multiply(10)(20);

const multiply = num1 => num2 => num1 * num2;

/*

The main benefit was the idea of making code more general keeping our code dry and 
not repeating ourself and just breaking things down into small functionalities.

Just it make look more complex and complicated.

*/
