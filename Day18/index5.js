/* Throttling


Basically we are going to build a function called throttle
This is very similar to the debounce function. They both avoid the unnecessary action to be fired.



One way to fire unnecessary events we can use debounce or second is throttle which works little different


Open -> Rapchik.Jpg


So essentially in throttle the first click gets fired in the bounce that last click get fired after
the delay.



Also here if you keep clicking on the same button over and over then there will be multiple events after
each delay here if I keep clicking on it event will never fire until until I stop.

A lot of time debounce is very useful because it truly avoids a lot of unnecessary events.
*/

// comment below one after run once
// document.getElementById('example').addEventListener('click', () => {
// 	console.log('You Clicked Me!');
// });

// ///////////////////////

const throttle = (fn, delay) => {
	let last = 0;
	return (...args) => {
		const now = new Date().getTime();
		if (now - last < delay) {
			return;
		}
		last = now;
		return fn(...args);
	};
};

document.getElementById('example').addEventListener(
	'click',
	throttle(e => {
		console.log('You Clicked Me!');
	}, 3000)
);
