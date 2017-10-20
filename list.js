function List() {
	this.listSize = 0;
	this.dataStorage = [];
	this.pos = 0;
}

/**
 * insert obj at position listsize
 * after insert increment listsize
 */
List.prototype.append = function (obj) {
	this.dataStorage[this.listSize++] = obj;
}


/**
 * Helper function to find obj in dataStorage
 * returns the index of the element
 * otherwise -1 is returned
 */
List.prototype.find = function (obj) {
	return this.dataStorage.findIndex((value, idx, arr) => {
		return value == obj;
	})
}

/**
 * remove obj form List
 */
List.prototype.remove = function (obj) {
	let foundAt = this.find(obj);
	if (foundAt > -1) {
		this.dataStorage.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

List.prototype.size = function () {
	return this.listSize;
}

List.prototype.toString = function () {
	return this.dataStorage;
}

List.prototype.clear = function () {
	delete this.dataStorage;
	this.dataStorage = [];
	this.listSize = 0;
	this.pos = 0;
	return true;
}

List.prototype.contains = function (obj) {
	return (this.find(obj) > -1) ? true : false;
}

/**
 * Traversing the list
 */
List.prototype.front = function () {
	this.pos = 0;
}

List.prototype.end = function () {
	this.pos = this.listSize - 1;
}

List.prototype.prev = function () {
	if (this.pos > 0) {
		--this.pos;
	}
}

List.prototype.next = function () {
	if (this.pos < this.listSize - 1) {
		++this.pos;
	}
}

List.prototype.currentPos = function () {
	return this.pos;
}

List.prototype.moveTo = function (pos) {
	this.pos = pos;
}

List.prototype.getCurrItem = function () {
	return this.dataStorage[this.pos];
}

let list = new List();

list.append(11);
list.append(22);
list.append(33);
list.append(44);
list.append(55);
