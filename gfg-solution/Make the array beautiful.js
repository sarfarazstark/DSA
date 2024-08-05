class Solution {
	makeBeautiful(arr) {
		if (arr.length === 1) return arr;

		const stack = [arr[0]];

		for (let i = 1; i < arr.length; i++) {
			if (
				(stack[stack.length - 1] >= 0 && arr[i] >= 0) ||
				(stack[stack.length - 1] < 0 && arr[i] < 0)
			) {
				stack.push(arr[i]);
			} else if (stack[stack.length - 1] === undefined) {
				stack.push(arr[i]);
			} else {
				stack.pop();
			}
		}
		return stack;
	}
}

// stack = 2
// 2 1 stack = 2
// 1 -4 stack = 1

const sol = new Solution();
console.log(sol.makeBeautiful([2, 1, -4, 3, -5, 2, 6, -3]));
console.log(sol.makeBeautiful([2, -2, 1, -1]));
console.log(sol.makeBeautiful([10]));
console.log(sol.makeBeautiful([-5, -6, 3, 65, -8]));
console.log(sol.makeBeautiful([-3, -1, -19, 0, 6, -13, 12]));
