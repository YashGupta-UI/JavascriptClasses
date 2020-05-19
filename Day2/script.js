/* Example of fb login

var database = []
var newsFeed =[]
capture u n p
create the login in function and console the newsfeed if authenticated
call the function with captured u n p

*/

var database = [
	{
		username: 'chutiya',
		password: 'harami',
	},
	{
		username: 'bhaya',
		password: 'bhaya',
	},
	{
		username: 'badola',
		password: 'daaru',
	},
	{
		username: 'kd',
		password: 'chola',
	},
];

var newsFeed = [
	{
		name: 'alok profile',
		news: 'kya chal rha hai bhai logo',
	},
	{
		name: 'yash',
		news: 'ha re js chalri',
	},
];

var username = prompt('what is your username');
var password = prompt('what is your password');

function checkUser(usrname, pass) {
	for (var i = 0; i < database.length; i++) {
		if (usrname === database[i].username && pass === database[i].password) {
			return newsFeed;
		}
	}

	return false;
}

function isUserAuthenticated(username, password) {
	var news = checkUser(username, password);
	if (news) {
		console.log(news);
	} else {
		console.log('chal nikal bhar');
	}
}

isUserAuthenticated(username, password);

/* Single User name 

function isUserAuthenticated(pagaluser, pagalpassword) {
	if (pagaluser === database[0].username && pagalpassword === database[0].password) {
		console.log(newsFeed);
	} else {
		console.log('chalo niklo auythenticate nahi ho');
	}
}

isUserAuthenticated(username, password);

*/

/* wrong functonality

function isUserAuthenticated(pagaluser, pagalpassword) {
	for (var i = 0; i < database.length; i++) {
		if (pagaluser === database[i].username && pagalpassword === database[i].password) {
			console.log(newsFeed);
		} else {
			console.log('nahi chalunga saala');
		}
	}
}
*/

/*
function isUserAuthenticated(pagaluser, pagalpassword) {
	for (var i = 0; i < database.length; i++) {
		if (pagaluser === database[i].username && pagalpassword === database[i].password) {
			return newsFeed;
		}
	}
	return 'not valid';
}

console.log(isUserAuthenticated(username, password));

*/
