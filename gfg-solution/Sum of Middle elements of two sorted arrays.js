class Solution {
	SumofMiddleElements(arr1, arr2) {
		let mergeArr = [...arr1, ...arr2];

		for (let i = 0; i < mergeArr.length - 1; i++) {
			for (let j = 0; j < mergeArr.length - i - 1; j++) {
				if (mergeArr[j] > mergeArr[j + 1]) {
					[mergeArr[j], mergeArr[j + 1]] = [mergeArr[j + 1], mergeArr[j]];
				}
			}
		}

		let mid = mergeArr.length / 2;
		const midEl = mergeArr.slice(mid - 1, mid + 1);
		return midEl[0] + midEl[1];
	}
}

const sol = new Solution();
console.log(sol.SumofMiddleElements([1, 2, 4, 6, 10], [4, 5, 6, 9, 12]));
