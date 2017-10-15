function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

LinkedList.prototype.addTohead = function (value) {
	let newNode = new Node(value, this.head, null);
	// check if old head is present
	if (this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}

	this.head = newNode;
}

LinkedList.prototype.addToTail = function (value) {
	let newNode = new Node(value, null, this.tail);
	// check if old tail node is present
	if (this.tail) {
		this.tail.next = newNode;
	} else {
		this.head = newNode;
	}
	this.tail = newNode;
}