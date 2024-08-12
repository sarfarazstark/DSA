/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (35.20%)
 * Likes:    39887
 * Dislikes: 1909
 * Total Accepted:    6.1M
 * Total Submissions: 17.4M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not
 * a substring.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function (s) {
	let longArr = [];

	let longString = [s[0]];
  
	for (let i = 0; i < s.length; i++) {
		// console.log(longString);
		for (let j = i + 1; j < s.length; j++) {
			if (longString[i] !== s[j]) {
				longString.push(s[j]);
			} else {
				i = j;
				break;
			}
		}

		longArr.push(longString);
	}
	return longArr;
};
// 0-1 = 0,1+;0,2
console.log(lengthOfLongestSubstring('sarfaraz'));
// @lc code=end
