class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(data) {
		const newNode = new Node(data);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}

	print() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
	delete(data) {
		if (!this.head) {
			return;
		}

		if (this.head.data === data) {
			this.head = this.head.next;
			return;
		}

		let current = this.head;
		while (current.next) {
			if (current.next.data === data) {
				current.next = current.next.next;
				return;
			}
			current = current.next;
		}
	}
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.delete(3);
list.print();

console.log('LinkedList end');

class NodeD {
	constructor(data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	append(data) {
		const newNode = new NodeD(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = this.tail.next;
		}
	}

	pop() {
		this.tail.prev.next = null;
		this.tail = this.tail.prev;
	}

	delete(data) {
		let current = this.head;
		while (current) {
			if (current.data === data) {
				current.prev.next = current.next;
				if (current.next?.prev) {
					current.next.prev = current.prev;
				}
			}
			current = current.next;
		}
	}

	print(direction = 'head') {
		let current = this[direction];
		if (direction === 'head') {
			while (current) {
				console.log(current.data);
				current = current.next;
			}
		} else {
			while (current) {
				console.log(current.data);
				current = current.prev;
			}
		}
	}
}

console.log('--------DoublyLinkedList--------');
const listD = new DoublyLinkedList();
listD.append(1);
listD.append(2);
listD.append(3);
listD.append(4);
listD.delete(4);
listD.print();
