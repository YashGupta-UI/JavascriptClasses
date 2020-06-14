/* Asyn Javascript 


What is a program?
Well a program has to do some simple things.
It has to allocate memory otherwise we wouldn't be able to have variables or even have a file on our
computer.
It also has to pass and execute scripts which means read and run commands.

const a = 1;

How does javascript works?
Open JS.JPG

Explain the difference between asynchronous and synchronous and JavaScript?
Javascript a single threaded language that can be non blocking?


*/

/* Memory Leak

whats wrong with below code

*/
const a = 10;
const b = 20;
const c = 30;

/*
imagine many varibales holding big big arrays 
Global variables are bad because if we don't forget to clean up after ourselves we fill up this memory
heap and eventually the browser will not be able to work.
*/

/*Call Stack
It reads and executes our scripts.

*/

console.log('1');
console.log('2');
console.log('3');

// another example

const one = () => {
	const two = () => {
		console.log('Harbola');
	};
	two();
};

/*
Javascript has a single threaded language that can be non blocking?

Single threaded means that it has only one call stack and one call stack only it can only do one
thing at a time.
And as you saw call stack is first in last out.


Other languages can have multiple call stacks and these are called multi threaded.

Why was javascript designed to be single threaded while running code on a single thread can be quite
easy since you don't have to deal with complicated scenarios that arise in multi threaded environment like
deadlocks. You just have one thing to worry about.



Synchronous means line by line console.log("2") can not be run before console.log("1") gets finishes

And we know about Stack Overflow


function fn(){
    fn()
}

fn()  recursion



Javascrpt is Synchronous : But there is a problem?

console.log("hi")
console.log(fn()) // long time
console.log("tell")

in our small example.

That doesn't mean much but if he had this on a Web site well the user wouldn't be able to do anything.
The Web site would pretty much freeze until that task is done and the user just waits there.
That's not very good is it.

So we need something non blocking.
Javascript does a single threaded language that can be non blocking

How does we do then?
Asynchronous comes to the rescue.


synchronous execution is great because it is predictable but it can get slow.
So when we have to do things like image processing or making requests over the network like API calls.
We need something more than just synchronous tasks.


Asynchronous Code : 

*/

console.log('1');
setTimeout(() => console.log('2'), 2000);
console.log('3');

/*
As we also know not only just js engine we also need javascript runtime env its a part of the browser
in top of the js engine they have the web api , call back queue and event loop
and setTimeout() is the part of the webapi its not the part of the javascript


So let's recap

if you wanted to load your latest tweet onto a Web page and you do this synchronicity then visitors
to your site won't be able to do anything until those tweets are loaded.
This could cause a long delay before they even get to see the content of your site.
They may not be able to click anywhere and the page will feel like it's frozen.
Not a very good user experiences.


Syn:
call a teacher and wait for the asnwer then do next

asyn:
text message to teacher


JS-Runtime.jpg
below:

On the dom.Well we run the callback function which console logs click.

*/

button.addEventListerner('click', () => {
	console.log('1');
});

/*
So to finish things up when is asynchronous happening.
It happens a lot when you try and talk between machines like speaking to a database make network requests
image processing reading files etc

*/

/***************************************** Promises - ES6 ******************************************/

/*

Promises are the new features in javascript it comes in es6

A promise is an object that may produce a single value sometime in the future either a result value or
reason that it's not a result or rejected a promise
maybe in one of three possible States fulfilled ,rejected or pending.

What we have before promises is callbacks


*/

// Example

grabChat('url_yash', (error, data) => {
	if (error) {
		throw new Error();
	}
	displayChat(data);
	grabChat('url_harbola', (error, data) => {
		if (error) {
			throw new Error();
		}
		displayChat(data);
	});
	grabChat('url_pandey', (error, data) => {
		if (error) {
			throw new Error();
		}
		displayChat(data);
	});
});

// example

const el = document.getElementById('button');
el.addEventListener('click', harbolaFunction); // callback

//callback and its hard to read
movePlayer(100, 'Left', function() {
	movePlayer(100, 'Left', function() {
		movePlayer(100, 'Right', function() {
			movePlayer(100, 'Left', function() {});
		});
	});
});

// Promises serve the same purpose as callbacks

movePlayer(100, 'Left')
	.then(() => movePlayer(100, 'Left'))
	.then(() => movePlayer(100, 'Right'))
	.then(() => movePlayer(100, 'Left'));

// How to create a promise

const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve('Stuff Works');
	} else {
		reject('It Broke');
	}
});

promise.then(data => console.log(data));

// chaining of promises

promise.then(result => result + '!').then(result => console.log(result));

// in case of error in promises

promise
	.then(result => result + '!')
	.then(result => {
		throw Error;
		console.log(result);
	})
	.catch(err => console.log(err, 'err'));

// .catch catches any errors that may happen between the chains

// question time

promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.catch(() => console.log('Error!'))
	.then(result3 => {
		console.log(result3 + '$');
	});

// catch only works when we have some error between the chain

promise
	.then(result => result + '!')
	.then(result2 => result2 + '?')
	.catch(() => console.log('Error!'))
	.then(result3 => {
		throw Error;
		console.log(result3 + '$');
	});

/* So put catch in last

Promises are great for asynchronous programming.
when you don't want javascript to block the execution of your code like making API calls,
grabbing data from a database or maybe optimizing an image.
You use a promise so that the task happens in the background when the promise gets resolved or reject.
Then you'll get that response.

*/

const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 'hmm start');
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, 'please wait');
});

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, 'Is It me you are looking for');
});

Promise.all([promise2, promise3, promise4]).then(values => {
	values.map(item => console.log(item)); // .then(value => console.log(value))
});

// when we can use promises an example

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
	urls.map(url => {
		return fetch(url).then(res => res.json());
	})
).then(results => console.log(results));

// mistake

const urls = [
	'https://jsonplaceholde.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
	urls.map(url => {
		return fetch(url).then(res => res.json());
	})
)
	.then(results => console.log(results))
	.catch(err => console.log('error', err));

/* fetch having the promises

A promise is an object that may produce a single value
sometime in the future either resolved or rejected with a reason why it was rejected and a promise may
maybe in one of three possible states.
It can be fulfilled rejected or pending.




*/

/***************************ES8-Asyn/Await ************************/

/*
The new feature in javascript that everyone is talking about lately async await.
async await is part of ES8 and is built on top of promises.

Underneath the hood.An async function is a function that returns a promise.
But the benefit of async await is that it makes code easier to read.

*/

// Promise
movePlayer(100, 'Left')
	.then(() => movePlayer(100, 'Left'))
	.then(() => movePlayer(100, 'Right'))
	.then(() => movePlayer(100, 'Left'));

//Async Await

async function playerStart() {
	await movePlayer(100, 'Left'); // pause
	await movePlayer(10, 'Left'); // pause
	await movePlayer(50, 'Right'); // pause
	await movePlayer(20, 'Left'); // pause
}

/*

The goal with async await is to make code look synchronous a code that's asynchronous look synchronous.

*/

async function playerStart() {
	const first = await movePlayer(100, 'Left'); // pause
	const second = await movePlayer(10, 'Left'); // pause
	await movePlayer(50, 'Right'); // pause
	await movePlayer(20, 'Left'); // pause
}

// Example for Ayns Await

// fecth function its a promise

fetch('https://jsonplaceholde.typicode.com/users')
	.then(res => res.json())
	.then(result => console.log(result));

async function fetchUsers() {
	const response = await fetch('https://jsonplaceholde.typicode.com/users');
	const data = await response.json(); // it returns an promise so can use the await, now have nice code means ayns code in syn way
	console.log(data);
}

fetchUsers();

// Example

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
];

const getData = async function() {
	const [users, post, albums] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
	console.log('users', users);
	console.log('post', post);
	console.log('albums', albums);
};

// how can we catch error in aysnc await
// Javascript has something called try catch blocks

const getData = async function() {
	try {
		const [users, post, albums] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
		console.log('users', users);
		console.log('post', post);
		console.log('albums', albums);
	} catch {
		console.log('oopsss');
	}
};

// oR

const getData = async function() {
	try {
		const [users, post, albums] = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
		console.log('users', users);
		console.log('post', post);
		console.log('albums', albums);
	} catch (err) {
		console.log('oopsss', err);
	}
};

/* ES9 or say ES2018 Main features */

// 1. Object Spread Operator

const yash = {
	name: 'Yash',
	age: 27,
	job: 'SSE',
	hobby: 'Coding',
};

const { name, ...rest } = yash;


// same way for object

function objectSpread(p1, p2, p3) {
	console.log(p1);
	console.log(p2);
	console.log(p3);
}

const yash = {
	name: 'Yash',
	age: 27,
	job: 'SSE',
	hobby: 'Coding',
};

const { name, age, ...rest } = yash;

objectSpread(name, age, rest);

/* 2. Finally

It allows us to do something after a promise has finished and the way it works is we added usually at the end.
And this finally block will be called regardless of whether .then works or .catch works to catch an error.
So no matter what.

finally is great for those times that you need to run a piece of code no matter what.
After a promise perhaps you want to send an email to a user regardless of whether their request was
successful or failed.

*/

const urls = [
	'https://jsonplaceholde.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
	urls.map(url => {
		return fetch(url).then(res => res.json());
	})
)
	.then(results => console.log(results))
	.catch(err => console.log('error', err))
	.finally(() => console.log('Works')); // try with error

/******************************************************************************************************/

setTimeout(() => {
	console.log('1', 'is the loneliest number');
}, 0);

setTimeout(() => {
	console.log('2', 'can be as bad as one');
}, 10);

//2
Promise.resolve('hi').then(data => console.log('2', data));

//3
console.log('3', 'is a crowd');

// OPEN JOB_QUEUE TO TELL THEM THE TRUTH or call it as a microtask queue
//some legacy browsers might not even have the job queue and might just have the callback queue. But almost every browser maintain the standard

/***********Parallel, Sequence And Race *******************/

//For example if let's say you had three promises that you need to handle. There are a few ways that we can manage this

// 1. Parallel : I want you to execute all three of these promises, I want you to run them in parallel all at the same time

const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
console.log(a(), b(), c()); // repl

async function parallel() {
	const promises = [a(), b(), c()];
	const [output1, output2, output3] = await Promise.all(promises);
	return `prallel is done: ${output1} ${output2} ${output3}`;
}

parallel().then(data => console.log(data)); // parallel().then(console.log)

// 2. Race : That is I want you to call three things but whichever one comes back first just do that one and ignore the rest.

async function race() {
	const promises = [a(), b(), c()];
	const output1 = await Promise.race(promises);
	return `race is done: ${output1}`;
}

race().then(console.log);

// 3. Sequencial : we want to run the first one and if the first one succeeds then the second one then the if the second one succeeds then the
//                 third one or they're all dependent on each other

async function sequence() {
	const output1 = await a();
	const output2 = await b();
	const output3 = await c();
	return `sequence is done ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);

// Last: Order doesnt matter coz it is async

const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function parallel() {
	const promises = [a(), b(), c()];
	const [output1, output2, output3] = await Promise.all(promises);
	return `prallel is done: ${output1} ${output2} ${output3}`;
}

async function race() {
	const promises = [a(), b(), c()];
	const output1 = await Promise.race(promises);
	return `race is done: ${output1}`;
}

async function sequence() {
	const output1 = await a();
	const output2 = await b();
	const output3 = await c();
	return `sequence is done ${output1} ${output2} ${output3}`;
}

parallel().then(console.log);
sequence().then(console.log);
race().then(console.log);

/******************************Threads*************************/

/*

Javascript is a single threaded language but with the asynchronous ability we're able to do things in the background
so that even though we have javascript that is just one thread we're able to do these complex things and still have Web sites and
programs that perform well because with the asynchronous model these requests that take a long time don't block the main thread
but the thing is where do they go where does the Web API have this compute power to run these things.

They are also executed in threats.
The thing is this is hidden from us because often they are running on their own separate background threats outside of JavaScript 


IMP:
You can see if I create a new tab here the browser creates one thread per tab so that I have an entire javascript call stack and
memory heap in here every time on new taps. And as soon as I close the tab while that thread dies


Now lets say we are on the one thread:
The browser has something called Web workers that work in the background for us


web worker is a javascript program running on a different thread in parallel to our main thread. They dont ahve any idea about
document or window but they do have some abilities like setTimeout , navigator etc

But for us browser takes cares all for us


*/
