/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function (s) {
	const arr = Array.from(s);
	if (arr.length === 1) return false;
	if (arr[0] === ')' || arr[0] === '}' || arr[0] === ']') return false;
	if ('(' === arr.at(-1) || '{' === arr.at(-1) || '[' === arr.at(-1))
		return false;

	const close = { '(': ')', '{': '}', '[': ']' };
	let stack = [arr[0]];
	for (let i = 1; i < arr.length; i++) {
		if (close[stack.at(-1)] === arr[i]) {
			stack.pop();
		} else if ('(' === arr[i] || '{' === arr[i] || '[' === arr[i]) {
			stack.push(arr[i]);
		} else {
			return false;
		}
	}

	if (stack.length !== 0) return false;
	return true;
};

console.log(isValid('{([])}'));
console.log(isValid('{([])}('));
console.log(isValid('()'));
console.log(isValid(']()'));
console.log(isValid('(]'));
console.log(isValid('[])'));
// @lc code=end
