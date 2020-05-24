/*
You can also make your javascript engine, its a lot of work and at the end of the day its just the program
JS Engine is written in c++ low level prog lang

Now lets see what we have inside the js engine

once you give your js file to the engine first it do the lexical analysis which breaks the code into something called
tokens to identify their meanings.And these token are formed into what we call AST (ABSTRACT SYNTAX TREE)
SO we parse the code where we find out how the text is divided up based on js file and it gets formed into this tree
like structure called AST

Tool for demo:https://astexplorer.net/
this helps the engine to understand whats going on in the programming.


So after the interpreter/compiler all the js engine will split out the code that are our cpu on our computer can 
understand to give it instuctions


You can also create your owm engine but we have a list right ECMA Script engines
So if everybody will create their engine then it will be big chaos (kos) which is why ecma script was created
It tells people hey here is the standard, you can say ecma script is the govering body of js that decides
how the language should be standardized.

What we are going to talk about is applied to most of the js engines
*/

/* INTERPRETER AND COMPILER
Its an important pieces in our javascript engine

You see in programming language there are generally two wys of translating to machine language or something
that our computer can understand. what we are going to talk about here actually applies to most programming languages
not just js , like python, java,c++ or any other lang is going to use some of these concepts. So its very important.

Lets Start with the first one:

1. Interpreter

With the interpreter what we do is we translate and read the file line by line on the fly
example how it works

*/

function someCalculation(x, y) {
	return x + y;
}

for (let i = 0; i < 1000; i++) {
	someCalculation(5, 4);
}

//9  but the loop hapening here is over and over so if we console.log(i)

for (let i = 0; i < 1000; i++) {
	someCalculation(5, 4);
	console.log(i);
}

/*
So now with an interpreter, if we give above code to interpreter the translation happen line by line on the fly
and this is the way you think the code should be run.

So the interpreter sees the first line then second and then third and said oh this is a funtion and then it goes to the
next part and said ok i should loop over this a bunch of time and it starts doing someCalculation and with every loop
we need to call the function with 5 and 4 and it keeps running keeps running keeps running

And this is what you think the code should be run right?
beacuse interpreting code simply means taking a set of instructions and doing something with that code
this is like me telling the computer hey do this, then do that now do that ...And initially thats how
javascript worked, it was interpreted using an interpreter.

So what about the compiler
*/

/*

Compiler: well a compiler unlike an interpreter doesn't translate on the fly
what is does that it works ahead of time to create a transaltion of what code we have just written and it
compiles down to usually a language that can be understood by our machines

Lets look into below with more details:
*/
function someCalculation(x, y) {
	return x + y;
}

for (let i = 0; i < 1000; i++) {
	someCalculation(5, 4);
}

/*
So a compiler this time aroumd its going to take a one pass through the code and try to understand what
the code does and its going to take the program in javascript or any type of language and write a new program
in a new language X

= X: well this language that it spits out , if we interpret this langauge that is going line by line one at a time
and running it , it going to create the same results as our previous language

And this usually happens into something called lower level language such a machine code

In some perspective all language should be interpreted and compiled because it has to run it so has to be interpreted
and it also has to most likely get translated into something low level like machine code.
Ex- INT_COM_DEMO.JPEG

So as we said most programming langauge are both compiled and interpreted because over machine code that is handed
off to the CPU and CPU needs to interpret these instruction and in reality when it comes to x86 is actually
too slow to be interpreted literally, so instead most modern CPU's will compile this x86 code into its own
native micro code.

SOo as we can see there is a lot of layers that happens on and on and the main takeaway is that:

There are two ways to run javascript:
1. Interpreter
2. Compiler

Any idea why do we need to do one over the other, what are the pros and cons of each?
what do we pick one over the other?


*/

/* Props and cons of each

Interpreter:

Pros: It is quick to get up and running right,beacuse if we go to our example above with interpreter we dont have to
convert the that into a another language like lang X as we seen above with compiler
There is no compilation step before you can start running your code, you just give your code to interpreter
and he starts translating their first line and just runs the code for us, because of this a interpreter is a
natural fit for something like javascript

A javascript file get sent from the server to the browser to the client on the front end and we want that js
to execute right straight away beacuse our users are going to be waiting on the web page trying to interact
with our application  and javascript originally created for the browser, so being able to run the interpret javascript
and run it as fast as possible, well that was ideal
And this is why js used interpreters at the beginning but there is a cons using an interpreter
and that was the same problem that google had, back in the day when they had google maps running a lot of javascipt
and its gets slower and slower and slower beacuse of the problem with interpreter  

Cons: the problem with interpreter is that when you are running the same code more than once , it can get
very very slow example in above for loop

The compiler actually helps us here

Compiler:

Pros: But the compiler will be smart enough that when it sees code like above where it loops over and it has the same
inputs returning the same outputs, well it can actually just simplified this code and instead of calling the function
multiple time, it replaces the below function with something like 9 because we know that we want to return 9

someCalculation(5,4)
9

So because the compiler  doesn't need to repeat the translation for each pass through in that loop,
the code generated from it is actually faster and these sort of edits that compiler do are optimization

Cons: It takes a little bit more time to start up because it has to go through that compilation step at the beginning
It go through your code understand it and spit it out into a another langauge 


*/

/*
LETS GO BACK TO THE QUESTION NOW WHO IS BETTER INTERPRETER OR COMPILER?

Is there a way that we can get the best of both worlds and this is what engineers came up in late 2000
and if we use google as an example with the v8 engine what if we combine the best of both worlds
what if instead of using the compiler and interpreter we combine these two and create something called
JIT COMPILER (JUST IN TIME)

And this is exactly what browser started doing.
So lets understand how v8 engine do this under the hood, open the engine jpeg

So the interpreter allow us to run the code right away and profiler/compiler allows us to optimize this code as
we are running and thats from where the name came from git compiler


Byte code can not be understand by computer for that you need js engine in js

Is JS an interpreted language?
yes initially when js first come out
but now things change we use compiler also

*/

/* We want to write code in a way that helps the compiler make optimization

So most of the things as they are bad for optimization (you wont see most develops using it)
It doesnt mean that you should never used them but use cases for them are very rare

In order to help the js engine we need to be very very careful to handle below:
eval()
arguments
for in    -> so for obj Object.keys
with
delete


important for optimizing compiler code


inline caching
hidden classes
*/

// inline caching
function printUser(user) {
	return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
	firstName: 'pandey',
	lastName: 'developer',
};

('found pandey developer');

//hidden classes: so like delete affect the hidden classes when comes to compiler then said dont use them

function Animal(x, y) {
	this.x = x;
	this.y = y;

	// this.a = a;
	// this.b = b; to avoid the issue
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

//delete obj1.x;

// obj1.a = 30;
// obj1.b = 100;

// obj2.b = 100;
// obj2.a = 100;

/* the above code will actually make the compiler run slower or deoptimize the code
 and that is something called the hidden classes.

In this case what you can do is assign all the properties of an object in its constructor.

And thats why the issue is with the delete method

 delete obj1.x so again i change the hidden classes that obj1 and obj2 dont match anymore

 */

/******MOST IMPORTANT CONCEPT CALL STACK AND MEMORY HEAP, A FOUNDATION OF JAVASCRIPT*******************/

/*
We see that the js engine done a lot of works for us but the biggest thing is actually reading our code
and executing it 
so two most important thing 

1) we need a place to store and write information ie to store our variables, objects , our data of our app
2) and a place to actually run and keep track of whats happening line by line on our code

So we use CALL STACK AND MEMORY HEAP for that
we need memory heap as a place to store and write information because at the end of the day all programs
are just read and write operations, that way we have a place to use memory, allocate memory and release memory
and with the call stack we need a place to keep track of where we are in the code so with that we can run the code 
in order and with this two things the javascript engine is able to do that.

CALL STACK - MEMORY HEAP

*/

const human = {
	// allocate memory for an object and its values
	name: 'yash',
	age: 27,
	aim: 'fly high',
};

const name = 'harbola'; //allocate memory for string

const number = 100; // allocate memory for number

// As JS Engine provide us this memory heap so there is no order how to put data but we dont need to take care more
// here as we know that our js engine will handle the allocation of the memory and all

/*
Now what about the call stack?
How does that help us ?
Below Example
*/

function sum() {
	const total = 4 + 5;
	return total;
}

sum();

/*
Every time we run this code sum, we use the call stack

So we can think about the call stack as a region in memory which operates first in last out (stack) mode

once you run the code it put the sum() at the top of the callstack 

sum()
callstack 

and after we finish running this function its going to remove it.
To Make it more clear, add another below function and then run the snipet in the google chrome to check that 


lets see how the callstack will work when we run this function
*/

function subtractTwo(num) {
	return num - 2;
}

function sum() {
	const total = 4 + 5;
	return subtractTwo(total);
}
debugger; // it will pause the execution before we call sum function
sum();

// anonymous : its the global execution context

/*
So the callstack stores your functions and variables as your code executes

*/

//pandey
function sum() {
	const total = 4 + 5;
	return total;
}

sum();
sum();
