function Queue() {
	this.dataStore = [];
}

Queue.prototype.enqueue = function (obj) {
	this.dataStore.push(obj);
}

// Queue.prototype.dequeue = function (obj) {
// 	return this.dataStore.shift(obj);
// }

/**
 * Priority Queue
 */
Queue.prototype.dequeue = function () {
	let prio = 9999;
	this.dataStore.forEach((ele, idx, arr) => {
		if (ele.code < prio) {
			prio = idx;
		}
	})
	return this.dataStore.splice(prio, 1);
}

Queue.prototype.front = function () {
	return this.dataStore[0];
}

Queue.prototype.back = function () {
	return this.dataStore[this.dataStore.length - 1];
}

Queue.prototype.toString = function () {
	return this.dataStore.join('\n');
}

Queue.prototype.empty = function () {
	return (this.dataStore.length === 0) ? true : false;
}

function Patient(name, code) {
	this.name = name;
	this.code = code;
}
let p;
let q = new Queue();
p = new Patient('Diana', 2);
q.enqueue(p);
p = new Patient('Kamil', 3);
q.enqueue(p);
p = new Patient('Dawid', 1);
q.enqueue(p);
console.log(q.dequeue());