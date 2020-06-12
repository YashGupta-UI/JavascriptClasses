// Amazon shopping
const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
};

function purchaseItem() {}

function addItemToCart() {}

function addTaxToItem() {}

function buyItem() {}

function emptyCart() {}

/* Naive approach */

const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
};

function purchaseItem(user, item) {
	return Object.assign({}, user, { purchases: item });
}

purchaseItem(user, { name: 'Laptop', price: 50000 });

/********This is too simplistic and we need to compose these functions***********/
// right to left

const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
};

purchaseItem(emptyCart, buyItem, addTaxToItem, addItemToCart)({ name: 'Laptop', price: 50000 });

// compose function for above

const compose = (f, g) => data => f(g(data)); // but we have more function here

//Now this is part of the reason that you'd use a library like Ramda or loadash to use compose because you don't need to implement it yourself.
// I prefer using the library version usually because well it hides away a lot of the complexity

const user = {
	name: 'Kim',
	active: true,
	cart: [],
	purchases: [],
};

const compose = (f, g) => (...args) => f(g(...args));

purchaseItem(emptyCart, buyItem, addTaxToItem, addItemToCart)(user, { name: 'Laptop', price: 50000 });

function purchaseItem(...fns) {
	return fns.reduce(compose); // you need to spend some time over here and figure out what exactly we are doing here
}

function addItemToCart(user, item) {
	const { cart } = user;
	const updatedCart = cart.concat(item);
	return Object.assign({}, user, { cart: updatedCart });
}

function addTaxToItem(user) {
	const { cart } = user;
	const taxRate = 1.3;
	const updatedCart = cart.map(item => {
		return {
			name: item,
			price: item.price * taxRate,
		};
	});
	return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
	return user;
}

function emptyCart(user) {
	return user;
}

// also we need to remove it from cart coz it has purchased it

function buyItem(user) {
	return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
	return Object.assign({}, user, { cart: [] });
}

/*

If we needed to add new functionality the rest of the code doesn't really care about that.

We can just create a new function and just add it in here.

That's the beauty of functional programming.

And this functions are pure
  redux connect compose
*/
