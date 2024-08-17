function productExceptSelf(nums) {
	if (!nums) return;

	let newArr = [];

	for (let i = 0; i < nums.length; i++) {
		let self = 1;
		for (let j = 0; j < nums.length; j++) {
			if (i === j) continue;
			self = self * nums[j];
		}
		newArr.push(self);
	}

	return newArr;
}

console.log(productExceptSelf([10, 3, 5, 6, 2]));
console.log(productExceptSelf([12, 0]));
console.log(
	productExceptSelf([1, 9, 7, 1, 3, 1, 2, 0, 6, 8, 7, 4, 9, 2, 4, 4])
);
