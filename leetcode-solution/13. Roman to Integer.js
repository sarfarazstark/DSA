const romanToInt = function (s) {
	const romanMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};

	let sum = 0;
	for (let i = 0; i < s.length; i++) {
		const currentVal = romanMap[s[i]];
		const nextVal = romanMap[s[i + 1]];

		if (nextVal && currentVal < nextVal) {
			sum -= currentVal;
		} else {
			sum += currentVal;
		}
	}
	return sum;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
