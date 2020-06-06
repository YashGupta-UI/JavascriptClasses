/*

 __proto__ is something we should never use this for performance

So what is the safe way to do it?

*/

let human = {
	mortal: true,
};

let yash = Object.create(human); // this is one of the ways that we can inherit from human
console.log(yash);

yash.age = 27;
console.log(yash);

yash.mortal;
// because we've created a prototype chain up to human using object.Create

console.log(human.isPrototypeOf(yash));

// now wihtout using __proto__ you can do this in above way

//********************** this statement is true only functions have the prototype property.

/*
Open proto.jpg

How proto points to the prototype object.
Well the thing that contains this prototype object is always a function

*/

let obj = {};
obj.prototype;

let array = [];
array.prototype;

'yash'.prototype;
String.prototype;
Array.prototype; // prototype -- array.__proto__

function multiplyBy5(num) {
	return num * 5;
}

multiplyBy5.prototype;

/*
This prototype itself is pretty empty when we create a function like this.
This prototype we don't really use it just gets created but we never really make use of it 

The only time we really use prototypes is using what we call constructor functions.
Constructor functions they usually start with a capital letter and they contain the actual blueprint
or prototype that we use.

*/

multiplyBy5.__proto__ === Function.prototype;

multiplyBy5.__proto__.__proto__ === Object.prototype; // but prototype property  only exist on functions?
// here things gets tricky actually this is the base object
multiplyBy5.__proto__.__proto__.__proto__; // null coz there is noting up to the chain

// but if we do below then
typeof Object;

// type of object is a function because well it has the prototype property.
typeof {};

// ******** Main:  every function has a prototype property
typeof Object.prototype;

/* Revise Proto and Prototype */

// using prototype we avoid repeating ourself

/* Object Oriented Programming - Functional Programming


object oriented programming and functional programming both of these are what we call
programming paradigms object.

Paradigms that allow us to organize code in a way that is easy to reason about.

By using the paradigmds what we can do -> OOP-FP.jpg

what programming paradigms are?

It allows us to make complex code more organized


Before OOP->
Initially it was all ones and zeros that programmers used.
Then as time passed we went into something called procedural style of programming


Procedural:

Procedural style of programming is that.
We did what computers want us to do ie. we would store data and then manipulate that data using
some sort of functions.

But there was no structure or organization.

Ex-

We just had step by step instructions of Hey computer put memory here.
computer move this memory here.
computer change the memory here and then give me this.

https://en.wikipedia.org/wiki/History_of_programming_languages


Paradigms: How can you write code in a more organized fashion.

So by learning these two things OOP-FP 
We get to learn what are the good practices that all these programmers that came before us learned that
they made mistakes and then they've changed in the way that they program so that we write better code.
*/

/*
OOP-FP

In all programs there are two primary components the data that is the stuff that we keep in our memory
and the behavior the things that the programs can do.

object oriented programming says that bringing together the data and its behavior in a single location called
an object and containing all of that in a box makes it easier to understand how our programs work

functional programming says that data and behavior are distinctly different things and should be kept separate
for clarity.

So perhaps instead of having a one giant box to describe everything we have multiple boxes the way that


It's not one over the other.
Instead it's about using both paradigms in unison to make beautiful programs.
You see the beauty of javascript is that it is multi paradigm we can use both of these techniques to
make our code easy to reason about to make it clearer to make it more understandable easy to extend
more efficient and we can use each of these paradigms based on our problems and use the techniques in
each to pick the right paradigm for the specific problem.


*/

/************************************OOP**************************************************

When it comes to object oriented programming there's two main types there's class based programming
languages and prototype based programming languages

Object oriented programming is all about modeling real world objects and relationships.

*/

/* TASK


GAME.jpg
How about we create a game or start to create a game where let's say as a fairy tale game with all these
characters that interact play with each other maybe they fight one another or communicate with one another.
So using this let's create a program that has object oriented principles in mind to organize our code

how should we start?

*/

//very first naive approach is to well create an player object.

const player = {
	name: 'yash',
	weapon: 'secret',
	attack() {
		return 'attack with ' + player.weapon;
	},
};

player.attack();

// Now in this game we have multiple player not just yash with different name , weapons or some can have different methods also
// spo what should we do ? copy and paste the above one ??

const player2 = {
	name: 'harbola',
	weapon: 'snipper',
	attack() {
		return 'attack with ' + player2.weapon;
	},
};

player2.attack();

/*

Any way:
what's the benefit to what we've just done.
And at least moved us towards object oriented programming what we have something called Encapsulation
here we've grouped functionality together we have state that is data within the object and functions
or methods acting on that state so these methods can well interact with the state such as read it they
can even modify it

our first step in object oriented programming is we've encapsulated functionality that
can be contained to model real world such as player into these containers that's good =

but what's the problem with this?
well the clear problem is that when we need more player then a ton of objects and same code copy and paste
DRY

Let's move on to the next level.
That is two step two of object oriented programming let's go with factory functions 
And factory functions as the name suggests are functions that act like factories.
They create objects for us

*/

// factory function
function createPlayer(name, weapon) {
	return {
		name: name,
		weapon: weapon,
		attack() {
			return 'attack with ' + weapon;
		},
	};
}

const harbola = createPlayer('harbola', 'sniper');
harbola.attack();

// we've created a factory function that is a function that creates objects for us

// simplify above as per ES6

function createPlayer(name, weapon) {
	return {
		name,
		weapon,
		attack() {
			return 'attack with ' + weapon;
		},
	};
}

const harbola = createPlayer('harbola', 'sniper');
harbola.attack();

// Beauty of factory function

const pandey = createPlayer('pandey', 'ak47');
pandey.attack();

/*
we've moved up the step towards object oriented programming
we avoided repetitive code but there's still a problem here.


Factory functions are great but can you notice something that we can improve here?


What if we had a thousand players and those a thousand else they require space in our memory space to store
the same data and things like name and weapon well they're gonna be different.
So we need to store that data in memory for each player.

But methods such as attack that are pretty generic and they're the same thing that is going to be copied
onto memory in a different location for each one of these player so if we had a thousand player that's
a thousand attack functions in different places a memory



Luckily for us JavaScript has this interesting thing right we learned about,
prototype all inheritance we can use that to our advantage to maybe
improve this so that we share functionality across different objects 


Object.create

So we know about prototypal inheritance in JavaScript and we can use that to our advantage to move
a little bit closer towards object oriented programming.

We want to solve this issue of having same functionality on multiple objects.

How can we share that before we get to prototypal inheritance.There is one way of just doing this manually.
*/

const playerObject = {
	attack() {
		return 'attack with ' + weapon;
	},
};

function createPlayer(name, weapon) {
	return {
		name,
		weapon,
	};
}

const harbola = createPlayer('harbola', 'sniper');
harbola.attack = playerObject.attack;
harbola.attack(); // fix it

const pandey = createPlayer('pandey', 'ak47');
pandey.attack = playerObject.attack;
pandey.attack();

/*
We have shared functionality here but it's still a lot of manual work.
Javascript gives us a nice little tool for us to make this a lot easier on our self we can do something
called the object.create

*/

const playerObject = {
	attack() {
		return 'attack with ' + this.weapon;
	},
};

function createPlayer(name, weapon) {
	let newPlayer = Object.create(playerObject); // it creates the link betwee the [playerObject] with the newPlayer, we have done
	// prototypal inheritence here  console.log(newPlayer.__proto__) Object.create creates this prototype chain for us
	newPlayer.name = name;
	newPlayer.weapon = weapon;
	return newPlayer;
}

const harbola = createPlayer('harbola', 'sniper');
harbola.attack();

const pandey = createPlayer('pandey', 'ak47');
pandey.attack();

/*

So object.create solved all of our problems.Everything is working now we are done right.
Here's the thing what we're doing with object.create is true prototypal inheritance.

The code is a little bit cleaner now we have less lines of code.
However you won't see this out in most code bases.

*/

/* What we have before Object.create() 

How we can get closer to object oriented programming and not use object.create.
 
We're going to use something called constructor function

*/

// constructor function : And this approach is even closer to Object Oriented Programming.

function Player(name, weapon) {
	this.name = name;
	this.weapon = weapon;
	// important point i am not returning anything here
}

const yash = Player('yash', 'secret');
const harbola = Player('harbola', 'sniper');
console.log(harbola);
harbola.name; // error

//  in order to use a constructor function you need to use the new keyword in javascript.
const yash = new Player('yash', 'secret');
const harbola = new Player('harbola', 'sniper');

// new keyword automatically returns the object for us that we have in the Player
// and any function that is invoked using the new keyword is called a constructor function.

//The interesting thing though is that when we use the new keyword instead of this pointing to the window
//object like it usually does the new keyword changes.

// attack method -> every function has a prototype property

/*
prototype that gets created with any new function.
Now this prototype property is absolutely useless with any regular function.
But when we have constructor functions prototype finally becomes useful



Simple:
like with function prototype call bind apply comes
so same way we can have some methods in our own constructor function
*/

function Player(name, weapon) {
	this.name = name;
	this.weapon = weapon;
	// important point i am not returning anything here
}

Player.prototype.attack = function() {
	// change in arrow then
	return 'attack with ' + this.weapon;
};

Player.prototype.sing = function() {
	return 'hohoho with ' + this.name;
};

const yash = Player('yash', 'secret');
yash.attack();
yash.sing();
