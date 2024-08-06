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
			return;
		}

		this.tail.next = newNode;
		this.tail = this.tail.next;
	}

	print() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const ll = new LinkedList();
ll.append(1); // O(1)
ll.append(2);
ll.append(3);
ll.append(4);
ll.print(); // O(n)

class NodeD extends Node {
	constructor(data) {
		super(data);
		this.prev = null;
	}
}

class DoublyLinkedList extends LinkedList {
	append(data) {
		const newNode = new NodeD(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return;
		}

		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = this.tail.next;
	}

	printReverse() {
		let current = this.tail;
		while (current) {
			console.log(current.data);
			current = current.prev;
		}
	}
}

const dll = new DoublyLinkedList();
dll.append(1); // O(1)
dll.append(2);
dll.append(3);
dll.append(4);
dll.print(); // O(n)
dll.printReverse();

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
			return;
		}

		this.tail.next = newNode;
		this.tail = this.tail.next;
	}

	dequeue() {
		this.head = this.head.next;
	}

	print() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
q.dequeue();
q.dequeue();
q.enqueue(4);
q.print();

const factorial = function (n) {
	if (n <= 1) {
		return n;
	}

	return n * factorial(n - 1);
};

console.log(factorial(5));

const fibonacci = function (n) {
	if (n <= 1) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(8));

const insertionSort = function (arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j - 1] > arr[j]) {
				[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			}
		}
	}
};

const arr = [4, 3, 2, 5, 7];
insertionSort(arr);
console.log(arr);

const merge = function (left, right) {
	const tempArr = [];
	let rightIndex = 0;
	let leftIndex = 0;

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

const arr2 = [4, 3, 2, 5, 7];
const arr2Sorted = mergeSort(arr2);
console.log(arr2Sorted);
