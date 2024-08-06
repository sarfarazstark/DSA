const longestCommonPrefix = function (strs) {
	if (strs.length === 0) return;

	let stack = [];
	for (let i = 0; i < strs[0].length; i++) {
		stack.push(strs[0][i]);
		let flag = false;
		for (let j = 0; j < strs.length; j++) {
			if (stack.at(-1) !== strs[j][i]) {
				stack.pop();
				flag = true;
				break;
			}
		}
		if (flag) {
			break;
		}
	}
	return stack.join('');
};

const arr1 = ['flower', 'flow', 'flight'];
const arr2 = ['dog', 'racecar', 'car'];
const arr3 = ['interview', 'interval', 'internet', 'interstellar'];
const arr4 = ['apple', 'ape', 'april'];
const arr5 = ['cirt', 'cart'];
const arr6 = ['refrigerator', 'referee', 'refund'];
const arr7 = ['elephant', 'elevator', 'elementary'];

console.log(longestCommonPrefix(arr1)); // Output: "fl"
console.log(longestCommonPrefix(arr2)); // Output: ""
console.log(longestCommonPrefix(arr3)); // Output: "inter"
console.log(longestCommonPrefix(arr4)); // Output: "ap"
console.log(longestCommonPrefix(arr5)); // Output: "ca"
console.log(longestCommonPrefix(arr6)); // Output: "ref"
console.log(longestCommonPrefix(arr7)); // Output: "ele"
