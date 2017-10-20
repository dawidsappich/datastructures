function Stack() {
	this.dataStore = [];
	this.top = 0;
}

Stack.prototype.push = function (obj) {
	this.dataStore[this.top++] = obj;
}

Stack.prototype.pop = function () {
	return this.dataStore[--this.top];
}

Stack.prototype.peek = function () {
	return this.dataStore[this.top - 1];
}

Stack.prototype.length = function () {
	return this.top;
}

Stack.prototype.clear = function () {
	this.top = 0;
}

/**
 * Convert a number to a given base
 */
function convertNumber(num, base) {
	let stack = new Stack();
	do {
		stack.push(num % base);
		num = Math.floor(num / base);
	} while (num > 0);
	let converted = '';
	while (stack.length() > 0) {
		converted += stack.pop();
	}
	return converted;
}

console.log(convertNumber(1500, 8));