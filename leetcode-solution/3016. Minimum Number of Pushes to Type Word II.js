const minimumPushes = function (word) {
	// Count character frequencies
	const freq = {};
	for (const char of word) {
		freq[char] = (freq[char] || 0) + 1;
	}

	// Get the frequencies and sort them in descending order
	const sortedFreq = Object.values(freq).sort((a, b) => b - a);

	// Calculate the result
	let result = 0;
	for (let i = 0; i < sortedFreq.length; i++) {
		if (i <= 7) {
			result += 1 * sortedFreq[i];
		} else if (i <= 15) {
			result += 2 * sortedFreq[i];
		} else if (i <= 23) {
			result += 3 * sortedFreq[i];
		} else {
			result += 4 * sortedFreq[i];
		}
	}

	return result;
};

const arr = 'aabbccddeeffgghhiiiiii';
console.log(minimumPushes(arr)); // Output should be optimized
console.log(minimumPushes('xyzxyzxyzxyz')); // Output should be optimized
console.log(minimumPushes('abcde')); // Output should be optimized
