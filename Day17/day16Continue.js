/* Composition vs Inheritence */

/*
Problems that might come with inheritance and how composition
might solve some of those problems.

The goal is to understand some of the drawbacks that might come when using composition or inheritance.

Some Problems with Inheritence:
1. Tight Coupling problem add sing() to main class

if you change something on a class well you have to make sure that it doesn't break anything
with its subclasses.And remember these subclasses are using inheritance and this leads to the other problem.

2. Heirarchy Problem:

we start our game with below things in mind:

users
    character
        magician
        dragon

Now suddenly there is an update in our game:

And the problem starts to arise now where we want to start sharing methods

users
    Watcher .. so on
    character
        magician
        dragon

users
    Watcher 
    character
        magician
            junior magician
        dragon

Junior magician is inheriting from all these super classes it's going
to inherit all the methods that well it doesn't really need other than a sleep() method and


this is the classic gorilla banana problem

Wshen it comes to inheritance where it says Hey I just want a banana.
Give me a banana but instead you get a gorilla holding a banana and the entire jungle underneath it.
In this case the jungle being the user maybe the gorilla being the character and all you wanted was
the sleep method

If we know that some of this inheritance principles are bad.
How can we fix it with composition?

The first thing we can do is to remove all the methods


The idea about composition is what it has
and the idea about inheritence is what it is

*/

function getAttack(character) {
	return Object.assign({}, character, { attackFn: () => {} });
}

function Elf(name, weapon, type) {
	let elf = {
		name,
		weapon,
		type,
	};

	return getAttack(elf);
}

function Pandey(name, weapon, type) {
	let elf = {
		name,
		weapon,
		type,
	};

	return getAttack(elf);
}

const yash = Elf('yash', 'secret', 'politics');

// pseudo code
// dragon = attack + sleep
// magician = sleep + magic

/* Final Review

Inheritance is a superclass that is extended to smaller pieces that add or overwrite things.
That's inheritance and although you can be careful with it and making sure that the base class is very
very general so that we don't overload our subclasses it can easily get out of hand as we go deeper
and deeper down the inheritance chain.
And once we need to change something it becomes really difficult.

With composition it's about smaller pieces that are combined to create something bigger
we combined the boxes based on what we need to create our desired output.
And if we need to add something later on while we just add another puzzle by composing things together
or we add another box and composing things or you can remove them if we don't need them anymore
A lot of programmers argue that composition is a better solution long term than inheritance.

This doesn't mean that inheritance is always bad.


There are ways that you can still write great code with inheritance but the problems that might come
up in the future especially with so many unknowns and humans unable to predict the future and all the
changes that we might need to make to a program it becomes really difficult.
So composition is a good tool for you to use to keep in mind when creating software because this is
going to help us create code that is more stable as well as easier to change in the future.


*/

/************OOPS vs FP****************/

/*

OOP:
Organizing the code into units would be called Object Oriented Programming.
An object is a box containing information and operations that are supposed to refer to the same concept
or grouping it as an object.
These pieces of information inside of the objects are called attributes or state and the operations
that can happen on the state are known as methods
In object oriented programming objects are first class citizens
OOPS pillar: abs, encaps, inheritance,polymorphism

Lang ex: C sharp, phyton, java

FP:
Avoiding side effects and writing pure functions would be called functional programming
In functional programming. The code is essentially a combination of functions and data is immutable
which leads to writing programs with no side effects and pure functions because in a function
in a functional programming paradigm that function cannot change the outside world and the output value
of a function simply depends on the given arguments.
This allows functional programming to really have control over a program flow
In functional programming functions are first class citizens
FP: pre functions and composing functions to act on the data

lnag ex- Haskell, clojure etc

At the end of the day there is no one better than the other.
Js allows to used both

*/

/*

OOP:
few operations on common data
statefull
methods manipulate our internal state -> not pure
how we want to it be done -> imperative



FP:
many operations on fixed data
stateless -> immutable
pure functions -> dont make impact on th code that is running outside the functions
declarative -> what we want to be doing




So when should you use one over the other?

Well functional programming is quite good at processing large data for applications if you're analyzing
data user data maybe using it for a machine learning model.
Functional programming works really well for high performance and processors for example because you
can run it on multiple processors if you have a few things that require a lot of operations a lot of
little functions applied to it well then functional programming is usually a good idea.

If on the other hand you have many things like characters in a game with not too many operations with
few operations will then object oriented programming might be a better solution

But as I said before you can use the ideas from both of these to write your code. ex-> react
*/
