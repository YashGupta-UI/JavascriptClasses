function Player(name, weapon) {
	console.log('this', this);
	this.name = name;
	this.weapon = weapon;
	var a = true; // with a constructor function,the only way we can
	// add properties to this object is to use this keyword.
	console.log('this 2', this);
}

Player.prototype.attack = function() {
	return 'attack with ' + this.weapon;
};

const yash = new Player('yash', 'secret');
console.log(yash);
yash.attack();

// LINE BREAK

function Player(name, weapon) {
	this.name = name;
	this.weapon = weapon;
}

// comment below one after 1st run  Player.prototype

Player.prototype.attack = function() {
	return 'attack with ' + this.weapon;
};

const yash = new Player('yash', 'secret');
console.log(yash.__proto__); // proto points to the prototype of the constructor function (Player.prototype)

// remember every function that we create gets this prototype property
// but only constructor function actually have used for this prototype object

const yash = new Player('yash', 'secret');
yash.prototype;

// LINE BREAK

function Player(name, weapon) {
	this.name = name;
	this.weapon = weapon;
}

Player.prototype.attack = function() {
	return 'attack with ' + this.weapon;
};

Player.prototype.build = function() {
	return 'house';
};

Player.prototype.build = function() {
	function building() {
		return this.name + ' builds a house';
	}
	building();
};

const yash = new Player('yash', 'secret');
console.log(yash.build());

/* Why do we get undefined?

Well this is one of the biggest gotchas when it comes to object oriented programming.
When we create objects like this functions inside of methods is well a function inside of a function.
That means this is not assigned to the object itself but actually to the window object.

*/

function Player(name, weapon) {
	this.name = name;
	this.weapon = weapon;
}

Player.prototype.build = function() {
	function building() {
		return this.name + ' builds a house';
	}
	return building.bind(this); // console.log(yash.build()());
};

// or
Player.prototype.build = function() {
	const self = this;
	function building() {
		return self.name + ' builds a house';
	}
	return building();
};

// or

Player.prototype.build = function() {
	const building = () => {
		return this.name + ' builds a house';
	};
	return building();
};

const yash = new Player('yash', 'secret');
console.log(yash.build());

// Final Talk

// Constructor Function

function Player(name, weapon) {
	this.name = name;
	this.weapon = weapon;
}

Player.prototype.attack = function() {
	return 'attack with ' + this.weapon;
};

const yash = new Player('yash', 'secret');
yash.attack();
const harshit = new Player('harshit', 'nuclear');
harshit.attack();

/* what the problem with this code?

The problem with this code is prototype is kind of weird.
It's a little hard to understand.

This code is now very understandable unless you really know your prototype of inheritance
and how javascript works which most people don't.
This can get very confusing very fast.

As a matter of fact there's not that many people that like this style of coding.

It's kind of confusing although older code bases you might see a lot of this especially if they're doing
object oriented programming.

But the problem is that object oriented programming is all about the idea of classes.


*** Issue with the constructor function*
You need to rember the captical letter, prototype

***which is why?
object.create was added to the language in order to avoid this headache
and just use pure prototypal inheritance
*/

/*
But the thing is this style of coding this idea of this and the new keyword is very
much object oriented programming is part especially when it comes to languages like Java.

If we wanted to get closer to object oriented programming well object does create is technically less
object oriented than something like above code
*/

// But like I said before this is not pretty. So how can we improve this?

/**** Funny things JS ****/

var a = new Number(5);
a;

var b = 5;

a == b;
a === b;

typeof a;
typeof b;

b.toFixed(); // how??

/*
well in JavaScript when we do something like this where we assign b
variable internally it's going to construct the number that we've added so that we have access to all
these methods and that's how we can use things like toFixed toString



So it runs this internally and this is how things like new date works as well you're creating objects
and it's useful because they have built in prototype methods so that on these dates we can run a different
sort of methods.

new Date()
const yash = new Date()
yash.getFullYear()


Technically in JavaScript everything is an object.
Everything has a constructor function for it.
with the exception of null and undefined
we have constructor functions for everything so that we have methods that we can use.
*/

/***************************CLASSES ES6*************************************/

/* 

So with E6 javascript we finally got the class keyword, object oriented programming was created with the
class idea in mind.
A class being a blueprint of what we want to create.

*/

class Player {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}

	attack() {
		return 'Attack with ' + this.weapon;
	}
}

const harbola = new Player('harbola', 'sniper');
harbola.attack();

/*

constructor is something that gets run every time we instantiate
or use the new keyword on a class.

Now the beauty with classes is that as object oriented programming suggests we want to keep all our
functionality inside of this box all the properties all the state all the methods all the actions together


React -> class components


How much cleaner is that.
And if you're coming from an object oriented programming language like Java or C++ this is going to
look really familiar to you and this is the true beauty of object oriented programming.
We're modeling real life scenarios.

Now suppose in future there is an update in your game that now the players can chat with each other
then it will be easy for us ?

we just need to add the method in the class and all the objects will use the method
and its simpler , easy to understand


An instance happens when we call this class and create an object out of this class.
*/

harbola instanceof Player;

// This with the new keyword is called instantiation where instantiating a class.

const paney = Player('harbola', 'sniper');

/*
we finally have classes we finally have object oriented programming in JavaScript right.
Well not really.

You see this is what we call synthatic sugar underneath the hood in JavaScript still using prototypal
inheritance we're not using classes like classes work in other languages.

This is the closest that JavaScript is going to get to classes underneath the hood they're still using
the new keyword with the prototype.

Now you are thinking to yourself well why don't we just all this trouble
why don't we just create classes from the beginning in JavaScript.


Classes aren't necessarily the answer to everything as we'll see when we get to functional programming



*************************************
This is a quote from the Creator.
Brendan Eich of javascript if I had down classes in JavaScript back in 1995 I'd have been told that
it was too much like Java or that JavaScript was competing with Java and I was under the marketing orders
to make it look like Java but not make it too big for its britches.
So the interesting thing was that Brendan Dyke was tasked with creating a language that would attract
Java developers that were really used to classes and object oriented programming concepts.

But at the same time they wanted to create a competing language and for marketing purposes they couldn't
make it the exact same.So he had to be creative.
So he used prototype all inheritance which is quite different from how classes work in languages like
Java and C++ 
*************************************

In other languages classes are an actual thing 
In JavaScript classes are still just objects.
Everything in Javascript is an object.

pseudo classical inheritance
prototypal inheritance


Q:So if in an interview if you get asked does javascript have classes?
A:Yes they do as synthatic sugar but class keyword is still just prototypal inheritance.

And some people call this pseudo classical inheritance because it's not real classical inheritance.



Looking at this I hope you see how have we gone from repetitive code that was harder and harder to maintain
to something that's a little bit more organized.



Q: Why didnt we put the attack in the constructor ? Pandey?? :P

*/

/*   Object.create vs class


Now there is a big debate in the javascript community.
People that love classes and people that never want to use them never want to see this new keyword and
they just want to avoid using this keyword too much because they say it causes too much confusion and
this is just personal preference.

Highly respected programmers love classes other highly respected programmers hate classes and there's
no right or wrong here


Some people call using object.create pure prototypal inheritance as in that's the pure way of
doing it instead of pretending like we're something else.

What you use is up to you.
However most of the javascript community doesn't use object to create as much as the class syntax.

So in most code bases especially the new code bases that use object oriented programming principles
we'll use class. (react)

But the beauty with javascript is that it's multi paradigm.
It allows us to have a lot of options to code the way that we want it based on the problem at hand
*/

/********************* THIS KEYWORD **************************/

/*
Lets Review the ways that we've learned we can manipulate this keyword.
*/

// 1) new binding -> this
function Person(name, age) {
	this.name = name;
	this.age = age;
}

const person1 = new Person('badola', 27);
person1;
//the new binding allow us to assign this to the object that we instantiate the person from.

// 2) implicit binding

const person = {
	name: 'Nikki',
	age: 26,
	hi() {
		console.log(`hi ${this.name}`);
	},
};

// This is just how the language works.We created an object and inside of that object the this keyword
// will refer to person.That's implicit binding.

// 3) explicit binding

//that's when we dictate exactly what the this keyword should refer to
const person = {
	name: 'Nikki',
	age: 26,
	hi: function() {
		console.log(`hi ${this.setTimeout}`);
	}.bind(window),
};

person.hi();

// explicit binding is using bind call or apply to explicitly tell the program
// hey this is what I want this to be I want it to be window or anything

// 4) Arrow Functions

/* unlike all the other types where this is dynamically scoped i.e
it gets determined whenever it gets called

with arrow function we can do lexical scoping i.e
wherever we write the function that's what this binds to 


*/

const person = {
	name: 'Nikki',
	age: 26,
	hi: function() {
		var inner = () => {
			console.log(`hi ${this.setTimeout}`);
		};
		return inner();
	},
};

person.hi();

/***************INHERITANCE **************************/

// A core aspect of object oriented programming is inheritance which means passing knowledge down.

/*

GAME.jpg

This fairy tale game that had all these characters

As you can see our goal is to have many things we want to have maybe a dragon, a knight, a king and queen
maybe some magicians.


So using this object oriented programming principle of inheritance how could we accomplish this with
the work that we've already understand


*/

class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}

	attack() {
		return 'Attack with ' + this.weapon;
	}
}

const harbola = new Character('harbola', 'fire');
harbola.attack();

// But let's say that I wanted to have a new player and this player is actually a magician called Yash.

const yash = { ...harbola };
yash.__proto__;
harbola.__proto__;
console.log(yash === harbola);
yash.attack(); // we loose the prototype chain

// so that the problem how can we extend the above , here inheritance comes in

class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}

	attack() {
		return 'Attack with ' + this.weapon;
	}
}

class Magician extends Character {
	// this is called subclassing in object oriented programming, so we have a super and sub class here

	constructor(name, weapon, type) {
		this.type = type;
	}
}

const dolby = new Magician('yash', 'hands', 'hide');
dolby;

// issue fix

class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}

	attack() {
		return 'Attack with ' + this.weapon;
	}
}

class Magician extends Character {
	// internally Magician.__proto__ = Character.prototype
	constructor(name, weapon, type) {
		super(name, weapon);
		this.type = type;
	}
}

const dolby = new Magician('yash', 'hands', 'hide');
dolby;
dolby.attack();

// In order to use this keyword inside of the constructor when we extend something we have to call super

class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}

	attack() {
		return 'Attack with ' + this.weapon;
	}
}

class Magician extends Character {
	constructor(name, weapon, type) {
		console.log(this, '1');
		super(name, weapon);
		console.log(this, '2');
		this.type = type;
	}
}

class Dragon extends Character {
	constructor(name, weapon, type) {
		console.log(this, '1');
		super(name, weapon);
		console.log(this, '2');
		this.type = type;
	}
}

class Doctor extends Character {
	constructor(name, weapon, type) {
		console.log(this, '1');
		super(name, weapon);
		console.log(this, '2');
		this.type = type;
	}
}

class JuniorDoctor extends Character {
	constructor(name, weapon, type) {
		console.log(this, '1');
		super(name, weapon);
		console.log(this, '2');
		this.type = type;
	}
}

const dolby = new Magician('yash', 'hands', 'hide');
dolby.attack();

// Lets Move on Little Bit More Guys

class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}

	attack() {
		return 'Attack with ' + this.weapon;
	}
}

class Magician extends Character {
	constructor(name, weapon, type) {
		super(name, weapon);
		this.type = type;
	}
}

class King extends Character {
	constructor(name, weapon, age) {
		super(name, weapon);
		this.age = age;
	}

	// special power

	makeFort() {
		return 'Strongest fort in the world made';
	}
}

const dolby = new Magician('yash', 'hands', 'hide');
dolby;
dolby.attack();
const yash = new King('Yash', 'Secret', 27);
yash;
yash.attack();
yash.makeFort();
dolby.makeFort();

// Questions on our js inner implementation of classes

class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}

	attack() {
		return 'Attack with ' + this.weapon;
	}
}

class Magician extends Character {
	constructor(name, weapon, type) {
		super(name, weapon);
		this.type = type;
	}
}

class King extends Character {
	constructor(name, weapon, age) {
		super(name, weapon);
		this.age = age;
	}

	makeFort() {
		return 'Strongest fort in the world made';
	}
}

const dolby = new Magician('yash', 'hands', 'hide');
const yash = new King('Yash', 'Secret', 27);

King.isPrototypeOf(yash);
King.prototype.isPrototypeOf(yash);
Character.prototype.isPrototypeOf(King);
Character.prototype.isPrototypeOf(King.prototype);

// All this prototype stuff is a little bit confusing.
// There's a better way to check these connections using the instanceof keyword.

dolby instanceof Magician;
dolby instanceof King;
dolby instanceof Character;

/*

The interesting thing is that languages like Java and C++ actually copy objects.
When we do something like extend instead of what we do with JavaScript which is that we link and the
objects are referenced there's actually a bit of efficiency there in terms of memory.

*/

/************ PILLARS OF OOPS *******************/

/*
We started with an idea and using this idea we started learning about object oriented programming and
how we can use the programming paradigm to better our code to make it more organized

We have just learned the four pillars of object oriented programming.

1. ENCAPSULATION

We wrap code into boxes that are related to one another so that these boxes can just interact with each
other using the methods and properties that we make available.
This makes code easier to maintain and more reusable right.
We have all these nice little class packages that we can just use whenever we want.


2. ABSTRACTION

Abstraction means just hiding the complexity from the user that is creating simpler interfaces
The idea of abstraction says hey here are the methods and properties that you can use.
Don't worry about everything else.
I'll do all the calculations behind the scenes.
This reduces complexity because we can just see the methods and understand what this class can do.

3. INHERITANCE

By inheriting from other classes.
We avoid having to rewrite the same code and we also save memory space by having shared methods.
Inheritance is a very very important and powerful concept

4. POLYMORPHISM: Many Forms


The idea is the ability to call the same method on different objects and each object
responding in different way.

To understand this, now suppose in our Magician and Kind class they have different way of attacking
BELOW CODE:

*/

class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}

	attack() {
		return 'Attack with ' + this.weapon;
	}
}

class Magician extends Character {
	constructor(name, weapon, type) {
		super(name, weapon);
		this.type = type;
	}

	attack(cry) {
		return 'Attack with ' + cry;
	}
}

class King extends Character {
	constructor(name, weapon, age) {
		super(name, weapon);
		this.age = age;
	}

	attack() {
		return 'Arghhhhhh';
	}

	makeFort() {
		return 'Strongest fort in the world made';
	}
}

const dolby = new Magician('yash', 'hands', 'hide');
dolby.attack('weee');
const yash = new King('Yash', 'Secret', 27);
yash.attack();

/*

This is a very basic explanation of what polymorphism means.
But the idea of ability to appear in many forms that is we're simply doing method overwriting like this
where the same method acts differently for each type of class.



With these four things in mind
we accomplished the goal that we set out to do at the beginning of the section

Open -> day13 -> oop-fp

*/
