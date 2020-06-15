// window.onload = function() {
// 	const pandey = document.getElementById('pandey');
// 	//console.log('pandey', pandey);
// 	pandey.style.color = 'red';

// 	const yash = document.querySelector('#yash'); // .yash if class
// 	yash.innerHTML = 'Hello Guys, Chai Pee Lo';

// 	const button = document.querySelector('button');
// 	console.log(button);
// 	button.addEventListener('click', e => {
// 		console.log('Event', e.target); // event.target
// 	});

// 	const moreButton = document.querySelectorAll('button'); // after this create more button
// 	console.log('morebutton', moreButton);
// 	moreButton.forEach(btn => {
// 		btn.addEventListener('click', e => {
// 			console.log(e.target.innerHTML);
// 		});
// 	});
// };

// we need to remove the event listener , we cannot remove like we have created above anonymous OR
// comment below one to see the above one working

window.onload = function() {
	const handleClick = e => {
		console.log(e.target);
	};

	const moreButton = document.querySelectorAll('button');
	moreButton.forEach(eachBtn => {
		eachBtn.addEventListener('click', handleClick);
	});
	// Let remove this after 10sec

	setTimeout(() => {
		moreButton.forEach(eachBtn => {
			eachBtn.removeEventListener('click', handleClick);
		});
	}, 10000);
};
