// StackOverflow

/*
What if we have a  function that are nested inside eachother, so that we keep growing the stack unitil we cant do it
anymore.
*/

function harshit() {
	harshit();
}

// Recursion is a most common way to create a stack overflow or a lot of functions nested inside each other
// previously it doesnt give you the error before browsers just crashed.

/*
GARBAGE COLLECTION

Javascript is a garbage collected language.
JS automatically frees up this memory that we no longer use and will collect the garbage
Like when the functions return it removed all the allocated memory from the memory heap that is associated with it.
So this way we are sure we dont use up all the memory we have available coz memory is limited.


In Garbage collected lang like javascript the garbase collector freeze memory on the heap and prevents what
we called memory leaks i.e when the memory gets too big until we reach our maximum size

And Garbage collector gives us a false sense of security that we dont have to worry about memory management
It gives js developers false impression that they can choose not to care about memory management

In low level language like C we can manage the garbage collection, actually its dangerous but reason that
programming langauge like C are extremely fast and memory efficient coz u control garbage collection and with that
control you can make it very optimized


HOW DOES GARBAGE COLLECTION ACTUALLY WORKS IN JAVASCRIPT??

It used mark and sweep algorithm

*/

let yash = {
	hasAuthenticated: false,
	hasError: true,
	workingHours: 8,
};

yash = true;

//OR

function memoryFree(data) {
	let yash = {
		hasAuthenticated: false,
		hasError: true,
		workingHours: 8,
	};

	return false;
}

memoryFree(123);

/*   MEMORY LEAKS  */

const array = [];

for (let i = 5; i > 1; i++) {
	array.push(i);
}

// it will run the infinite loop and fill up the memory until we left with no more memory space then browser will crash

/***************************** Below are the three main memory leaks that happens in our application

1. Global Variables: One of the reason that we dont have too many global variables such as doing var a = 1

means that we we keep adding more and more variable to the global scope then its going to adding more and more
memory peices of memory and think of objects (depely nested objects) so the memory being used as more 

2. Event Listeners: Example 

That is most common way to leak memory coz you add these event listeners and you never remove them when
you dont need them so that you keep adding keep adding event listeners and because  they are just  there in the
background you fotgot to remove them and you create a memory leak
Like in SPA in unmount and mount the component it will again and again add the memory 


3. setInterval

setInterval(()= > {
    referenceObjects : its never collected by garbage collector coz of this setInterval 
},1000)

So memory leaks are something that we have to be careful of.

*/

/* SINGLE THREADED LANGUAGE JAVASCRIPT 

Being single threaded means one set of instructions is executed at a time, its not doing multiple things
Way to check that js is single threaded is well it has only one call stack
That call stack allow us to run the code one at a time
We never keep functions running in parallel we can know that the stack keeps growing as we pushed new function
and then we pop them.

(Pandey roti example) it can do one thing at a time so because of this javascript is single threaded language
and beacause of this javascript is synchronous that is only one thing can happen at a time.


ISSUE WITH THE SINGLE THREADED

What problem do you see with the synchronous code?

With single threaded syn code that js engine runs,its going to make it very difficult if we have long tasking taks
means example running twitter

suppose they have a big loop that takes 5 sec to complete, what would happen if we use a js engine,
that it wont allow you do it anything example: scrolling, clicking
think of alert function




So why would anybody use javascript then as it slow your pages down?



When we talk about js most of the time you're never just using the javascript engine which is synchronous
We need to introduce the idea of asynchronous code, we will it later on when we use asyn code
where its not only the js engine thats running our code we have something called javascript runtime

Node.js also implements something similiar

*/

/* JAVASCRIPT RUNTIME

OPEN JAVASCRIPT RUNTIME IMAGE

Here the webbrowser is working in the background while the synchronous javascript code is running.
It uses something called the web api or the web browser api to communicate and let the js engine
know that now he has some data which engine asked him to do in the background.

The web api comes with the browser chrome, safari, edge, firefox
all of them have their javascript engine implementation and all of them have their js runtime that provide a web api
DOM events (clicking)
fetch() (asyn code)
setTimeout() setInterval (delaying execution)



IN CHROME CONSOLE:
window : thats the web api we can use that is provided by the browser, so that are the different things that
the browser provide us that our js engine can use

indexedDb -> a little database that we can use on our browser
devtools -> application

So remember that browsers are helping us to create rich web applications so that users aren't just sitting
around and waiting for our javascript to execute anything, that can be offloaded web browser can take care of that
in the background.

As we can imagine is the browser had to use the same javascript thread for executing these features, it will
then going to take a very long time

So browsers actually underneath the hood use low level language like c++ to perform these operations in the background

These webapi are that we called asynchronous -> means you can instruct these api to do something in the background
and return data when its done meanwhile we can continue on our javascript call stack and execute funtions

SO one we have the data from the https call it goes to event queue and event queue is going to say as soon as
the call stack is free ,hey i have something for you would you like it to add them on to the stack
and if the call stack is empty then the event queue push the callback on to the stack

*/

console.log('yash');
setTimeout(() => {
	console.log('harshit');
}, 1000);

console.log('harbola');

// Event loops only runs when the call stack is empty and it continuous check the call stack
// http://latentflip.com/loupe/

function badola() {
	console.log('aur londo kya haal hai');
}

function c() {
	setTimeout(badola, 3000);
}

function b() {
	c();
}

function a() {
	b();
}

a();

/* now we have the power of asyn code instead of being limited to one call stack and one memory heap
 whenever we get tasks that can be asynchronous we can send them off to the browser and then browser can just run 
that in the background and whenever its ready it can use its callback queue to notify

*/

/* NODE JS -> Its a javascript runtime not the programming language, up tp 2009 we write javascript code inside of the
browser.

Ryan Dahl is a Software Engineer working at Google Brain .
He is the creator of Node.js, JavaScript runtime built on Chrome’s V8 JavaScript engine
In 2009 he decided it would be great to run it outside the browser 
So he created node js which is actually a c++ program we can actually think of (node.exe -> its executable )
A c++ program that provide this runtime for us
And if we see node js runtime , you see it looks quite similar with our browser runtime

NODEJS_RUNTIME.JPEG

Now when it comes to nodejs it does a little bit more than our web browser runtime.
You see in the case of a browser we're limited to what we can do in the background
The browser isn't going to allow us to do much on the person's computer.
we can't really access for example the file system of the user.
It would be a huge security flaw it just runs on the browser on the tab that we're currently
on in what we call a sandbox environment.

But in node we can pretty much do most of the things in the background.
We can access file systems.
We can do all sorts of things.
Node js uses the Google V8 engine to understand the javascript but it uses this libuv library
which works along to create this event loop to extend what we can do in the background.


cmd-> node
window -> error
global api

THREADS_NODE.JPEG
*/

setTimeout(() => {
	console.log('1'), 0;
});
Promise.resolve('hi').then(() => console.log('2'));
console.log('3');

console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);

/* Execution Context */

function printName() {
	return 'yash gupta'; // create a execution context on the stack
}

function findName() {
	return printName(); // create a execution context on the stack
}

function sayMyName() {
	return findName(); // create a execution context on the stack
}

sayMyName();

/*
As JavaScript engine sees these brackets sayMyName() it's going to create something
called an execution context

And the base execution context that runs is called the Global execution context.

If I tell you whenever code is run in JavaScript it is run inside of an execution context.
Is that a true statement or a false statement ??


The first thing the JavaScript engine does is to create this global execution context and it gives you
two things.
First thing is a global object.
And the other thing is that this keyword, in JavaScript everybody's favorite topic
*/

/* But to start things off global execution context gives us these two things right off the when the
JavaScript engine starts up.
So let's test this assumption if what I just told you is correct.
That means I can just give an empty file to let's say the browser and I should have a global object
and the this keyword already defined without me having to do anything.

index.html

And now comes to harbola question, remeber you asked me where do varibales data and object data stores
global context can store your data example: var harbola = true in console window.harbola -> stores in glocal exection
context 



So once we have done this what we call a creation phase in our JavaScript engine we then have a second
phase and that second phase is called the execution phase where you actually run your code.

*/

/* LEXICAL ENVIRONMENT

say my name was written to the global execution context.
Same with find my name.
Same with print name.
If I did window.printName() or window.sayMyName() it's going to work because they were all written
 

And lexical means at compile time ,where is the code written.
And in below case:
function a() is lexical inside the findnName function 
*/

function printName() {
	return 'yash gupta';
}

function findName() {
	function a() {}
	return printName();
}

function sayMyName() {
	return findName();
}

sayMyName();

/*
 Execution context tells you which lexical environment is currently running does that makes sense?
 This execution context is going to tell me which lexical environment which planet is currently running
 But to close out this video what is the first lexical environment that we have.
 Well the very first lexical environment is the global lexical environment where we write our code.

*/
