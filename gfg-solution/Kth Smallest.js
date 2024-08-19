class Solution {
	merge(left, right) {
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
	}

	mergeSort(arr) {
		if (arr.length <= 1) {
			return arr;
		}

		const mid = Math.floor(arr.length / 2);
		const left = arr.slice(0, mid);
		const right = arr.slice(mid);

		return this.merge(this.mergeSort(left), this.mergeSort(right));
	}

	kthSmallest(arr, k) {
		if (arr.length === 0) return arr;

		return this.mergeSort(arr)[k - 1];
	}
}
const sol = new Solution();
console.log(sol.kthSmallest([], 0));
console.log(sol.kthSmallest([7, 10, 4, 3, 20, 15], 3));
console.log(sol.kthSmallest([7, 10, 4, 20, 15], 4));
