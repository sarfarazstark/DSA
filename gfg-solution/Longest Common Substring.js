const longestCommonSubstr = function (str1, str2) {
	let maxLength = 0;
	let endIndex = 0;
	const dp = Array(str1.length + 1)
		.fill(null)
		.map(() => Array(str2.length + 1).fill(0));

	for (let i = 1; i <= str1.length; i++) {
		for (let j = 1; j <= str2.length; j++) {
			if (str1[i - 1] === str2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
				if (dp[i][j] > maxLength) {
					maxLength = dp[i][j];
					endIndex = i;
				}
			}
		}
	}

	return maxLength;
};

// Test Cases for longestCommonSubstr function
console.log(longestCommonSubstr('ABCDGH', 'ACDGHR'));
console.log(longestCommonSubstr('abcde', 'abfde')); // Expected output: "ab"
console.log(longestCommonSubstr('abc', 'abc')); // Expected output: "abc"
console.log(longestCommonSubstr('abc', 'def')); // Expected output: ""
console.log(longestCommonSubstr('', '')); // Expected output: ""
console.log(longestCommonSubstr('abcdef', 'zabcf')); // Expected output: "abc"
console.log(longestCommonSubstr('xabcx', 'yabcxy')); // Expected output: "abcx"
console.log(longestCommonSubstr('abcdef', 'abc')); // Expected output: "abc"
console.log(longestCommonSubstr('aaaa', 'aa')); // Expected output: "aa"
console.log(longestCommonSubstr('abc!@#', '!@#')); // Expected output: "!@#"
console.log(longestCommonSubstr('abcdef', 'cdefghijkl')); // Expected output: "cdef"
