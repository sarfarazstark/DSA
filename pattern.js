// *****
// *****
// *****
// *****
const pattern1 = function (n, s = '*') {
	for (let i = 0; i < n; i++) {
		let line = '';
		for (let j = 0; j < n; j++) {
			line += '*';
		}
		console.log(line);
	}
};
console.log('Pattern 1 👇');
pattern1(5);

// 1
// 12
// 123
// 1234
// 12345

const pattern2 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';
		for (let j = 0; j < i + 1; j++) {
			line += `${j + 1}`;
		}
		console.log(line);
	}
};

console.log('Pattern 2 👇');
pattern2(5);

// 1

// *
// **
// ***
// ****
// *****

const pattern3 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';
		for (let j = 0; j < i + 1; j++) {
			line += '*';
		}
		console.log(line);
	}
};

console.log('Pattern 3 👇');
pattern3(5);

// *****
// ****
// ***
// **
// *

const pattern4 = function (n) {
	for (let i = n; i >= 0; i--) {
		let line = '';
		for (let j = 0; j < i; j++) {
			line += `*`;
		}
		console.log(line);
	}
};

console.log('Pattern 4 👇');
pattern4(5);

// 1
// 22
// 333
// 4444
// 55555

const pattern5 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';
		for (let j = 0; j < i + 1; j++) {
			line += `${i + 1}`;
		}
		console.log(line);
	}
};

console.log('Pattern 5 👇');
pattern5(5);

// 55555
// 4444
// 333
// 22
// 1

const pattern6 = function (n) {
	for (let i = n; i > 0; i--) {
		let line = '';
		for (let j = 0; j < i; j++) {
			line += `${i}`;
		}
		console.log(line);
	}
};

console.log('Pattern 6 👇');
pattern6(5);

//     *
//    ***
//   *****
//  *******
// *********

const pattern7 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';
		for (let j = 0; j < n - i - 1; j++) {
			line += '\xa0';
		}
		for (let j = 0; j <= i * 2; j++) {
			line += '*';
		}
		console.log(line);
	}
};

console.log('Pattern 7 👇');
pattern7(5);

// *********
//  *******
//   *****
//    ***
//     *

const pattern8 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';

		for (let j = 0; j < i; j++) {
			line += '\xa0';
		}

		for (let j = 0; j < (n - i) * 2 - 1; j++) {
			line += '*';
		}

		console.log(line);
	}
};

console.log('Pattern 8 👇');
pattern8(5);

// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
const pattern9 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';
		for (let j = 0; j <= i; j++) {
			line += (j + i) % 2 === 0 ? '1 ' : '0 ';
		}
		console.log(line);
	}
};

console.log('Pattern 9 👇');
pattern9(5);

// 1      1
// 12    12
// 123  123
// 12341234
const pattern10 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';

		// print left
		for (let j = 0; j < i + 1; j++) {
			line += `${j + 1}`;
		}

		// print space n*2-2
		for (let j = n * 2 - 2 - i; j > i; j--) {
			line += '\xa0';
		}
		// print right
		for (let j = 0; j < i + 1; j++) {
			line += `${j + 1}`;
		}

		console.log(line);
	}
};

console.log('Pattern 10 👇');
pattern10(4);

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
const pattern11 = function (n) {
	let pattern11Counter = 0;
	for (let i = 0; i < n; i++) {
		let line = '';
		for (let j = 0; j <= i; j++) {
			line += ++pattern11Counter + ' ';
		}
		console.log(line);
	}
};

console.log('Pattern 11 👇');
pattern11(5);

// A
// AB
// ABC
// ABCD
// ABCDE
const pattern12 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';
		for (let j = 0; j <= i; j++) {
			line += String.fromCharCode(65 + j);
		}
		console.log(line);
	}
};

console.log('Pattern 12 👇');
pattern12(5);

// ABCDE
// ABCD
// ABC
// AB
// A
const pattern13 = function (n) {
	for (let i = n; i > 0; i--) {
		let line = '';
		for (let j = 0; j < i; j++) {
			line += String.fromCharCode(65 + j);
		}
		console.log(line);
	}
};

console.log('Pattern 13 👇');
pattern13(5);

// A
// B B
// C C C
// D D D D
// E E E E E
const pattern14 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';
		for (let j = 0; j <= i; j++) {
			line +=
				(j + i) % 2 === 0
					? String.fromCharCode(65 + i) + ' '
					: String.fromCharCode(65 + i) + ' ';
		}
		console.log(line);
	}
};

console.log('Pattern 14 👇');
pattern14(5);

const pattern15 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';

		for (let j = 0; j < n - i - 1; j++) {
			line += '\xa0';
		}

		for (let j = 0; j <= i * 1; j++) {
			line += String.fromCharCode(65 + j);
		}

		for (let j = i * 1 - 1; j >= 0; j--) {
			line += String.fromCharCode(65 + j);
		}

		console.log(line);
	}
};

console.log('Pattern 15 👇');
pattern15(4);

const pattern16 = function (n) {
	for (let i = 0; i < n; i++) {
		let line = '';

		for (let j = i; j >= 0; j--) {
			line += String.fromCharCode(69 - j) + ' ';
		}

		console.log(line);
	}
};

console.log('Pattern 16 👇');
pattern16(5);

const pattern17 = function (n) {
	for (let i = 0; i < n; i++) {
		line = '';
		for (let j = 0; j < n; j++) {
			if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
				line += '*';
			} else {
				line += '\xa0';
			}
		}
		console.log(line);
	}
};

console.log('Pattern 17 👇');
pattern17(5);

// const pattern18 = function (n) {
// 	for (let i = 0; i < n * 2 - 1; i++) {
// 		let line = '';
// 		let nn = n;

// 		for (let j = 0; j < n * 2 - 1; j++) {
// 			if (i === j) {
// 				line += n - j;
// 			} else {
// 				line += nn;
// 			}
// 		}
// 		console.log(line);
// 	}
// };

// console.log('Pattern 17 👇');
// pattern18(3);
