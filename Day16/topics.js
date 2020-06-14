/* Memoization -> caching

Memorization is a specific form of caching that we're going to be talking about because we use
it a lot in dynamic programming.

*/

function addTo80(n) {
	console.log('long time');
	return n + 80;
}

addTo80(5);
addTo80(5);
addTo80(5);

/*
Even though we've done the exact same calculation three times is there a way that we can optimize this
and this is where we can use caching and memorization.

*/

let cache = {};

function memoizedAddTo80(n) {
	// cache.n
	if (n in cache) {
		return cache[n]; // chache[n]
	} else {
		console.log('long time');
		cache[n] = n + 80; // let cache = {5: 85}
		return cache[n];
	}
}

memoizedAddTo80(5);
memoizedAddTo80(5);
memoizedAddTo80(5);

/*
And if the parameter of this function doesn't change like it is here then it's memorized.
That is it uses the cache because it's calculated the same thing before with the same parameter.

So remember this memorization is simply a way to remember a solution to a cell problem.

Lets improve this function just a little bit.
You see ideally we don't want to fill the cache in what we call the global scope.

*/

// cache reset
function memoizedAddTo80(n) {
	let cache = {};
	if (n in cache) {
		return cache.n;
	} else {
		console.log('long time');
		cache[n] = n + 80;
		return cache[n];
	}
}

memoizedAddTo80(5);
memoizedAddTo80(5);
memoizedAddTo80(5);

// closure help

function memoizedAddTo80(n) {
	let cache = {};
	return function(n) {
		if (n in cache) {
			return cache[n];
		} else {
			console.log('long time');
			cache[n] = n + 80;
			return cache[n];
		}
	};
}

const memoized = memoizedAddTo80();

memoized(5);
memoized(5);
memoized(5);

/* Compose and Pipe

This is a big one and one of my favorites.
This really shows the power of functional programming which up until now has been a little bit confusing.

And I'm giving you a bit of a warning.
This gets a little complicated at first you might need a few minutes on your own after this session
and figure out exactly what happens.


So we want to keep all our functions pure and we want to do something interesting.
We want to do two things at a time.
We want to have a number like minus 50 that well gets multiplied by three.
And then we also want to take the absolute off.
That means we want a number that's always positive.
So we also want to make sure that we remove any negative side from it.
We want to do two things.
Two functions.
How can we compose them together like an assembly line at a factory.

-50 * 3 (remove -)

But in order for me to do that I need to compose these two pieces of functionality.
Well in functional programming you can use something called compose now compose doesn't exist in JavaScript.

However it's so common that there are a ton of libraries that actually lets you use compose.
For example one of the best libraries when it comes to JavaScript and functional programming is ramda

We don't want to use any library. we will build our own.


So we want a compose function that when given a number is going to multiply by three and make positive.

*/

//const compose = (f, g) => data => g(data);        f(g(data)) as function are first class citizen

const compose = (f, g) => data => f(g(data));
const multiplyBy3 = num => num * 3;
const makePositive = num => Math.abs(num);
const multiplyBy3Absolute = compose(
	multiplyBy3,
	makePositive
);

multiplyBy3Absolute(-100);

/*

Remember the definition compose ability is a system design principle that deals with the relationship
between components (multiplyBy3 and makePsotive here)


Pipe which is actually not that difficult pipe is essentially the same thing except
instead of going from right to left it goes left to right.

*/

const pipe = (f, g) => data => g(f(data));

//

fn1(fn2(fn3(50)));
compose(
	fn1,
	fn2,
	fn3
)(50); // want you to evaluate this right to left with pipe reverse left to right

pipe(
	fn3,
	fn2,
	fn1
)(50); // with pipe it will grab 50 then start with fn3

// you can use which one you want as per your readability

// The idea with functional programming is this idea of separation of data and functions
// go to the amazon solution
