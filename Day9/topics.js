/* this keyword */

/*
The scariest part of JavaScript (this)

this : It is the object that the function is a property of.

window.some(this)

Q: Pandey: In the global execution context will the this and global oject is equal?

*/

function some() {
	console.log(this);
}

some();
window.some();

/*
Most of the time when we're coding we never want this to refer to the global object.
But it happens most of the time.

One of the pitfalls with this is that we unexpectedly have this referred to
the window object when we think it should be something else.

*/

function checkThis() {
	'use strict';
	console.log(this);
}

checkThis();

/*
use strict was added to JavaScript as a way for us to avoid the common mistakes that
can happen with JavaScript when the language was originally designed.

use strict can be added at the first line of a function or the beginning of our script.
ES6 Modules import export have already inbuild use strict


Let's have a look at an example where this actually becomes useful and the reason that this keyword
was created (as it comes in every execution context and in global too so if it always point to global
then whats the use)
*/

const obj = {
	name: 'Harbola',
	sing: function() {
		return 'lalala Harbola';
	},
};

object.sing(); // suppose need to change name then

const obj = {
	name: 'Harbola',
	sing: function() {
		return 'lalala ' + this.name; // dynamic  [ It is the object that the function is a property of]
	},
};

object.sing();

// Harbola

const obj = {
	name: 'Harbola',
	sing: function() {
		return 'lalala ' + obj.name;
	},
};

object.sing();

// OR Newer Syntax

const obj = {
	name: 'Harbola',
	sing() {
		return 'lalala ' + this.name;
	},
};

object.sing();

// Deep Inside (NO NON-VEG :P)

const obj = {
	name: 'Harbola',
	sing() {
		return 'lalala ' + this.name;
	},
	singAgain() {
		return 'lalala ' + this.name + '!'; // whats the issue here harbola?
	},
};

object.sing();

/*
One of the principles of being a good programmer is DRY do not repeat yourself.
*/

/*IMPORTANT

Why this introduced?

1. It gives methods access to their object, as in our example it gives sing
access to the object so that it can use properties and methods within that object.

2. We can execute the same code for multiple objects.

*/

function importantPerson() {
	console.log(this.name);
}

const name = 'Pandey';

const obj1 = {
	name: 'Harbola',
	importantPerson: importantPerson,
};

const obj2 = {
	name: 'Yash',
	importantPerson: importantPerson,
};

importantPerson();

/*
It executes the same code for multiple objects (our function here)

in above question add '!' at the end of name : Pandey
*/

/* DYNAMIC SCOPE 


STATIC SCOPE === LEXICAL SCOPE (LOLZZZ)


*/

const a = function() {
	console.log('a', this);
	const b = function() {
		console.log('b', this);
		const c = {
			hi: function() {
				// hi(){console.log(this)}
				console.log('c', this);
			},
		};

		c.hi();
	};
	b();
};

a();

/*
Remember when I told you about lexical scope lexical environment how the compiler knew right
away without running any piece of code what variables functions have access to it almost looks like
lexical scope doesn't work with this it doesn't really matter where we write it in the piece of code.
(lexical or static scope)

All that matters is how what gets called during invocation who calls it it matters how the function
was called (Dynamic scope)

*/

const obj = {
	name: 'yash',
	sing() {
		console.log('a', this);
		var anotherFunction = function() {
			console.log('b', this);
		};

		anotherFunction();
	},
};

obj.sing();

/*
Reason for window above code:

One of the biggest gotchas when it comes to the this keyword because the this keyword is not lexical scoped
that is it doesn't matter where it is run.

Its wierd , thats why (this) creates a lot of problems (Common Issues)

The this keyword is the dyanmic scoped

Fix the issue:
1. Arrow functions has a lexical this behavior unlike normal functions. (what obj is surronding this)
before arrow functions
2. Alias var self = this;  console.log(self)   -> angular1 or jquery
3. Bind
return anotherFunction.bind(this);
obj.sing()()

*/

// ES6 Arrow Funtion
const obj = {
	name: 'yash',
	sing() {
		console.log('a', this);
		var anotherFunction = () => {
			console.log('b', this);
		};

		anotherFunction();
	},
};

obj.sing();

// Alias

const obj = {
	name: 'yash',
	sing() {
		console.log('a', this);
		var that = this;
		var anotherFunction = () => {
			console.log('b', that);
		};

		anotherFunction();
	},
};

obj.sing();

// Bind

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

const badola = {
	lover: ' NIkki',
	fuck: function() {
		return function() {
			console.log(this.lover);
		};
	},
};
