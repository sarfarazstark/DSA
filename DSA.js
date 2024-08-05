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

console.log('--------DoublyLinkedList End--------');

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	enqueue(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}

	dequeue() {
		// deleting and swapping
		[this.head.next, this.head] = [null, this.head.next];
	}

	print() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

console.log('--------Queue--------');
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.print();
console.log('--------Queue End--------');

console.log('--Factorial--');
const factorial = function (n) {
	if (n <= 1) {
		return 1;
	}
	return n * factorial(n - 1);
};

console.log(factorial(5));
console.log('--Fibonacci--');

const fibonacci = function (n) {
	if (n <= 1) {
		return n;
	}

	return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(9));

console.log('----Insertion Sorting----');

const insertionSort = function (arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j >= 1; j--) {
			if (arr[j - 1] > arr[j]) {
				[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
			}
		}
	}
};

const arr = [5, 2, 6, 2, 8, 9];
insertionSort(arr);
console.log(arr);

console.log('-----Merge Sort-----');

const merge = function (left, right) {
	const tempArr = [];
	let leftIndex = 0;
	let rightIndex = 0;

	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			tempArr.push(left[leftIndex]);
			leftIndex++;
		} else {
			tempArr.push(right[rightIndex]);
			rightIndex++;
		}
	}

	return [...tempArr, ...left.slice(leftIndex), ...right.slice(rightIndex)];
};

const mergeSort = function (arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
};

const arr2 = [5, 2, 6, 2, 8, 9];
console.log(mergeSort(arr2));
