/* CLOSURES AND PROTOTYPE (TWO IMPORTANT PILLAR)

Closure is one of the most confusing topic but it's an important one.

*/

function a() {
	let grandpa = 'Grandpa';
	return function b() {
		let father = 'Father';
		return function c() {
			let child = 'Children';
			return `${grandpa} > ${father} > ${child}`;
		};
	};
}

a()()();

//Q: How does inside c function we can access granpa ?

const one = a();

/*
well we just ran this function this function was invoked function b.
A got popped off from the stack.

So what happens when things get popped off the stack?
It remove the variable environment.

So shouldn't let Grandpa be garbage collected and thrown away because well have removed a function
from the stack

Somehow son has access to grandpa and also has access to Father even after after we call the B function and
this is what closure is.


Open-> closureA

*/

function boo(naam) {
	return function(name) {
		return function(name1) {
			console.log(`${naam} ${name} ${name1}`);
		};
	};
}

// Convert above in arrow function

// Exercise

function callMe() {
	const callMeDude = 'Ho Ho Ho I am here';
	setTimeout(() => {
		console.log(callMeDude);
	}, 4000);
}

callMe();

/*
callMe has been popped off the stack by and
yes even if some of the functions go all the way out to the web API world well they still use closures


*/

function callMe() {
	setTimeout(() => {
		console.log(callMeDude);
	}, 4000);

	const callMeDude = 'Ho Ho Ho I am here';
}

/*  Closures have two very important main benefits. (there are many but main 2)

 1. Memory Efficient
 2. Encapsulation

*/

// 1 Closure: Memory Efficient

function heavyDuty(index) {
	const bigArray = new Array(1000).fill('harbola'); //maybe this operation is about accessing a massive array
	console.log('created');
	return bigArray[index];
}

heavyDuty(123);
heavyDuty(123);
heavyDuty(123);

/*
So every time we run this function we create this memory and then we return it and because nothing's
referencing it it gets destroyed and then we create it and then gets destroyed to be created and then
gets destroyed be created and that gets destroyed.



That doesn't sound very efficient.
Wouldn't it be great if there was a way for us to create this array and because we know it's going to
be used a lot to only create it once and just have it in memory there so we can just constantly access
it instead of doing all that work.

How can we do that with closures ?

*/

function heavyDuty() {
	const bigArray = new Array(1000).fill('harbola');
	console.log('created');
	return function(index) {
		return bigArray[index];
	};
}

const useMe = heavyDuty();
useMe(199);
useMe(700);
useMe(456);

// 2 Closure: Encapsulation

const makeNuclerButton = () => {
	let timeWithoutDestruction = 0;
	const passTime = () => timeWithoutDestruction++;
	const launch = () => {
		timeWithoutDestruction = -1;
		return 'boom';
	};
	const totalPeaceTime = () => timeWithoutDestruction;

	setInterval(passTime, 1000);

	return {
		launch: launch,
		totalPeaceTime: totalPeaceTime,
	};
};

const ohhNo = makeNuclerButton();
ohhNo.totalPeaceTime();
ohhNo.totalPeaceTime();
ohhNo.launch();
ohhNo.totalPeaceTime();

//

const makeNuclerButton = () => {
	let timeWithoutDestruction = 0;
	const passTime = () => timeWithoutDestruction++;
	const launch = () => {
		timeWithoutDestruction = -1;
		return 'boom';
	};
	const totalPeaceTime = () => timeWithoutDestruction;

	setInterval(passTime, 1000);

	return {
		totalPeaceTime: totalPeaceTime,
	};
};

ohhNo.launch();

/*
this is what encapsulation does it's hiding of information that is unnecessary to be seen by the
outside world or manipulated.

This gets into the idea of principle of least privilege a big security principle when it comes to
programming where you don't want to give just anybody access to your API to your special functions or
variables 

*/

// Exercise

// Make it like function can only be called once!
let view;
function initialize() {
	view = '🏔';
	console.log('view has been set!');
}

initialize();
initialize();
initialize();

console.log(view);

// Solution

function initialize() {
	let called = 0;
	return function() {
		if (called > 0) {
			return;
		} else {
			called++;
			view = '🏔';
			console.log('view has been set!');
		}
	};
}

const startOnce = initialize();
startOnce(); // one by one
startOnce();

// Exercise: Commonly asked js interview

const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
	setTimeout(function() {
		console.log('I am at index ' + i);
	}, 3000);
}

// Solution: 2 ways one is easiest one es6 , second way?

const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
	(function(index) {
		setTimeout(function() {
			console.log('I am at index ' + index);
		}, 3000);
	})(i);
}

/*PROTOTYPE: PROTOTYPAL INHERITANCE VS classical Inheritance

javascript uses something called prototypal inheritance.

Inheritance: inheritance is an object getting access to the properties and methods of another object.

object.jpg

opne console
*/

const array = []; // by ARRAY CONSTRUCTOR (new Array)
array__proto__; // up tp the prototype chain to check array constructor
array__proto__.__proto__; // Object Constructor (Base Object)
array.toString(); // coz of prototype chain

function a() {}

a.__proto__; // base function
a.__proto__.__proto__; // base object

const obj = {};
obj.__proto__; //base object
obj.__proto__.__proto__;

/*

This feature is actually quite unique and not that common in other popular languages like C sharp or
Java. They use something called classical inheritance.

Javascript uses prototypal inheritance.

*/

let dragon = {
	name: 'Tanya',
	fire: true,
	fight() {
		return 5;
	},
	sing() {
		return `I am ${this.name}, the breather of fire`;
	},
};

dragon.sing();

//

let dragon = {
	name: 'Tanya',
	fire: true,
	fight() {
		return 5;
	},
	sing() {
		return `I am ${this.name}, the breather of fire`;
	},
};

let lizard = {
	name: 'Kiki',
	fight() {
		return 1;
	},
};

const singLizard = dragon.sing.bind(lizard);
singLizard();

// Now suppose in order to use the sing function we need to hve a fire true

let dragon = {
	name: 'Tanya',
	fire: true,
	fight() {
		return 5;
	},
	sing() {
		if (this.fire) {
			return `I am ${this.name}, the breather of fire`;
		}
	},
};

let lizard = {
	name: 'Kiki',
	fight() {
		return 1;
	},
};

const singLizard = dragon.sing.bind(lizard);
singLizard(); // undefined

/* what we can do here,we can manually just add the property it might can get more and more complicated

What if we had a big object and we want to borrow more than just one method.


And this is where a prototype all inheritance comes in.

What if we create a prototype chain that says hey I want lizard to inherit all these properties and
methods from Dragon. How do we do this?

*/

//IMPPPPPPPP: Don't do this, bad performance. Show with bind.

lizard.__proto__ = dragon;
dragon.isPrototypeOf(lizard); // from where isPrototypeOf comes
console.log(lizard.fire);
console.log(lizard.sing());
const lizardFire = dragon.sing.bind(lizard);
console.log(lizardFire());

/*
So what we were able to do here is we were able to inherit through this prototype chain all the properties
and methods of the dragon and override anything that we've already declared in our own object.

*/

let dragon = {
	name: 'Tanya',
	fire: true,
	fight() {
		return 5;
	},
	sing() {
		if (this.fire) {
			return `I am ${this.name}, the breather of fire`;
		}
	},
};

let lizard = {
	name: 'Kiki',
	fight() {
		return 1;
	},
};

lizard.__proto__ = dragon;

for (let prop in lizard) {
	console.log(prop);
}

for (let prop in lizard) {
	if (lizard.hasOwnProperty(prop)) {
		console.log(prop);
	}
}


/*

Well this underscore underscore Proto although we can use it here you shouldn't really use it.
It's bad for performance and there's different ways that we want to inherit when it comes to prototype
or inheritance


when we start talking about object oriented programming we'll learn proper ways of doing this.

*/

/* Q: why this prototype all inheritance is useful?

objects can share prototypes means that you can have objects with properties that are
pointing to the same place in memory thus being more efficient.

like hasOwnProperty is only there at one place in memory and we use the prototype chain to refer it

We're being efficient with our code.
We're not repeating ourselves and we're saving ourselves memory

*/

/* Test out our assumptions */

const obj = {
	name: 'Harshit',
};

obj.hasOwnProperty('name');

obj.hasOwnProperty('hasOwnProperty'); // obj has the hasOwnProperty in up side of prototype chain

function a() {}

a.hasOwnProperty('call');
a.hasOwnProperty('bind');
a.hasOwnProperty('apply');
a.hasOwnProperty('name');
a.name;

/*

But our call,apply are not as part of the property you see this diagram that I showed you initially
where a function is a special type of object.
It's a callable object where we have code that can be invoked.


functionProperty.jpg
I told you that we have call apply and bind as properties technically
this wasn't 100 percent correct because these properties aren't exactly on the multiply by five function

Instead.Where do you think it is?
Well it's up here it's up the prototype chain. (prototype chain.jpg)

*/

function multiplyBy5(num) {
	return num * 5;
}

multiplyBy5.__proto__; // right click store as global varibale
// temp1.   check in console

// callable object

function multiplyBy5(num) {
	return num * 5;
}

multiplyBy5.__proto__; // it point to function prototype   Function.prototype
Function.prototype;
Object.prototype;
Object.prototype.__proto__;

//

const array = [];
array.hasOwnProperty('map');
array.__proto__.hasOwnProperty('map');

Array.prototype;
array.__proto__;


/*
function Counter() {
    var counter = 0;
    setTimeout( function () {
        var innerCounter = 0;
        counter += 1;
      

        setTimeout( function () {
            counter += 1;
            innerCounter += 1;
            
        }, 500);

    }, 1000);
};

Counter();
*/