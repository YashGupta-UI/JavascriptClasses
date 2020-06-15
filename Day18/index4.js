/*
When you start writing a lot of DOM Events one of the most important function that you would need to
learn is debounce function.


Imagine if you're building a shopping cart where user have picked lots of item to purchase and as a
last event the user is clicking on a purchase button.
At that point the purchase order goes to the server.

But what if user clicks on that button accidently twice in a quick succession.
Does that mean the order will go twice.

It depends on how you design the system but you can protect against that kind of behavior using 
debounce function.


The debounce function is basically if you keep clicking on the same button many times it would
execute that event at the last on a last click.

For example if you have an event on a mouse move and when my mouse moves from one point to another it
will keep firing the mouse move event and on every mouse move.
You don't want out fired that event.
So what you want to do is when the mouse starts to move and as soon as a mouse.
And then you want to fire that event.
So it only happens on a one time on a mouse move.

*/

// document.getElementById('myId').addEventListener('click', function() {
// 	console.log('omg i am clicked');
// });

/*
But what if I keep clicking it will every time it will fire a click event. So I don't want this.
What if I just keep clicking.
I want at the last click I want the event to be fired.
And that's the right behavior because user can accidently quit double times.

Here comes the debounce function so lets create it

And the concept of debounce function is what you do is you setTimeout.
So on every click the Click event fire right away, you would put let's say two second setTimeout
which means after two seconds the Click event would fire

And in meantime let's say if a user click is click on the same button again that set timeout gets reset
Means it will fire after the last click

decounce function takes two arguments first the function you want to execute and second the time

*/

// const debounce = (fn, delay) => {
// 	return function(...args) {
// 		setTimeout(() => {
// 			fn(...args);
// 		}, delay);
// 	};
// };

// document.getElementById('myId').addEventListener(
// 	'click',
// 	debounce(e => {
// 		console.log('clicked');
// 	}, 2000)
// );
/*
If user clicks on multiple times.
I need to reset it
*/

const debounce = (fn, delay) => {
	let timeoutID; // Initially undefined

	return function(...args) {
		// cancel previously unexecuted timeouts
		if (timeoutID) {
			clearTimeout(timeoutID);
		}

		timeoutID = setTimeout(() => {
			fn(...args);
		}, delay);
	};
};

document.getElementById('myId').addEventListener(
	'click',
	debounce(e => {
		console.log('you clicked me');
	}, 2000)
);

yashFunction = () => {};
