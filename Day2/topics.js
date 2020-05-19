//Javascript Terminology

//function declaration
function alok() {}

// function expression
var pande = function(lover) {
	console.log(lover);
};
pande();

//expression

3 - 1;
var harbola = 'UI Developer';
return true;

// calling or invoking a function
alert();
alok();
pande('code');

// assigning a variable
var nasha = true;
var b = 'kya re';

//function vs method
function haMaiHuEkFunction() {}

var alokObj = {
	fire: function() {
		console.log('thurrrr thurrrrrr');
	},
};

alokObj.fire();

// LOOPS

var array = ['mukesh ki maa', 'daaru ka theka', 'mutton ki shop', 'ipl ka chaska'];
//access the array elements or change them

var todos = [
	'chutiye ki class',
	'aaj se serious hoke padunga bc',
	'yeh toh ho jaega esmey kya hai',
	'aaj aram kr leta hu waise bhi sab pata hi hua mujhe toh',
	'bc javascript bakchodi language hai',
	'bas 1-2 month de do coding ko khud addat pad jaegi aur maja aaega dher',
];

for (var i = 0; i < todos.length; i++) {
	todos[i] = todos[i] + '!';
}

// 1. Add the ! in last of every todos array elements

var mylength = todos.length;

for (var i = 0; i < mylength; i++) {
	todos.pop();
}

// todos.pop() in for loop then fix it

var counter = 0;

while (counter > 0) {
	console.log(counter);
	counter--;
}

var newCounter = 0;
do {
	console.log(newCounter);
	newCounter--;
} while (newCounter > 0);

// forEach , map , filter , find

/* SCOPESSSSSSS */

/* 
Scope means varibale access 
by default the window object

Test it on console

*/

// global scope
function kyabolu() {
	console.log('print krde');
}

window.kyabolu();

window;

// function scope

var alok = 'chalnikal';
function nobakchodi() {
	var harbola = false;
	console.log(alok);
}

console.log(harbola);

window.nobachodi;
window.alok;

//

var alok1 = 'chalnikal';
function nobakchodi() {
	alok1 = false;
}
console.log(alok1);
nobakchodi();
console.log(alok1);

// question

var yash = 'pata nahi';

function harbola() {
	yash = 'abey yaar';
}

console.log(yash);

// question
var fun = 5;

function funFunction() {
	var fun = 'hello bhai logo';
	console.log('1', fun);
}

function funerFunction() {
	var fun = 'bye bhai logo';
	console.log('2', fun);
}

function funiestFunction() {
	fun = 'AHHHHHH';
	console.log('3', fun);
}

console.log('window', fun);
funFunction();
funerFunction();
funiestFunction();

//condition ? expression1 : expression2

function isValid(value) {
	return value;
}

var answer = isValid(false) ? 'you may enter' : 'access denied';
answer;

var automatedAnswer = 'your account is' + (isValid(true) ? '1234' : 'not available');

function condition() {
	if (isValid(true)) {
		return 'harbola';
	}
	return 'kranti-Cola';
}

var finalAnswer = condition();

// switch statement

function example(direction) {
	var data;
	switch (direction) {
		case 'alok':
			data = 'alok bhaya';
			break;

		case 'harbola':
			data = 'harbola bhaya';
			break;

		case 'pande':
			data = 'pande bhaya';
			break;

		default:
			data = 'arey btao toh';
	}

	return data;
}

example();
window.example();

// ES5 vs ES6
// vanilla js or js vs es6
