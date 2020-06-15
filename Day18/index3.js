// bubbling vs capturing

// events gets bubbled up the root element to the parent all the way to body(default behaviour
// we can change it) oppsite is capturing from body to parent then children // use option useCapture

window.onload = function() {
	const main = document.getElementById('main');
	const btn1 = document.getElementById('pandey');
	const btn2 = document.getElementById('harbola');
	const body = document.querySelector('body');

	body.addEventListener('click', () => {
		console.log('body clicked');
	});
	main.addEventListener('click', () => {
		console.log('main clicked');
	});

	btn1.addEventListener('click', () => {
		console.log('pandey clicked');
	});

	btn2.addEventListener('click', () => {
		console.log('harbola clicked');
	});

	/* Capturing
	body.addEventListener(
		'click',
		() => {
			console.log('body clicked');
		},
		true
	);

	main.addEventListener(
		'click',
		() => {
			console.log('main clicked');
		},
		true
	);

	btn1.addEventListener(
		'click',
		() => {
			console.log('pandey clicked');
		},
		true
	);

	btn2.addEventListener(
		'click',
		() => {
			console.log('harbola clicked');
		},
		true
	);

	*/
};
