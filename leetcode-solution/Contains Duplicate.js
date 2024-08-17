const containsDuplicate = function (nums) {
	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) return true;
	}

	return false;
};

console.log(containsDuplicate([1, 2, 3, 1, 10]));
console.log(containsDuplicate([2, 14, 18, 22, 22]));
