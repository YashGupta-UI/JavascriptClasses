/* Wierd Parts of Js*/

// Is height being created in the variable environment of weird

function wierd() {
	height = 50;
	return height;
}

wierd();

/*

This is actually called leakage of global variables as nothing has been declared like var let or const 
so it goes up to the scope chain.


*/

('use strict');
function wierd() {
	height = 50;
	return height;
}

wierd();

// One More

var heyhey = function harbola() {
	console.log('pandey');
};

heyhey();
harbola();

// but

var heyhey = function harbola() {
	harbola();
	console.log('pandey');
};

heyhey();

/* Function Scope Vs Block Scope 

These are very important terms when it comes to well any programming language.
scope means what variables we have access to and JavaScript has function scope.

*/

function a() {
	var secret = 'yash';
}

secret;

if (true) {
	var secret = 'harbola';
}

secret;

// Exercise

function loop() {
	for (var i = 0; i < 5; i++) {
		// replace var with let
		console.log('pandey', i);
	}

	console.log('yash', i);
}

loop();

/* global varibales */
// why dont we use the global variable (go to index.html)
// there are few issues what we call global namespace, having too much data on global execution context
// 2 issues one is memory heap as having limited memory , second we can have varibale collision

/* IIFE   : Now we have es modules but previously

Javascript developers used IIFE
to avoid this global variable issue and it's called and iife or an immediately invoked function expression.


You see if these are common javascript design pattern used by a lot of popular libraries especially
back in the day like Jquery or backboneJs.

The idea was using this pattern we can place all library code inside of local scope to avoid any namespace
collisions.

*/

(function() {
	var a = 1;
})();

(function() {
	var a = 1;
})();
//}());

// function(){} ()

//var script = (function(){ function a(){ return 5; } return { a:a } })()

// it only pollute th global namespace once -> singleton like jquery
