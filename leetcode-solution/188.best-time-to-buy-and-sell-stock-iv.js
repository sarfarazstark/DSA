/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (44.00%)
 * Likes:    7441
 * Dislikes: 210
 * Total Accepted:    487K
 * Total Submissions: 1.1M
 * Testcase Example:  '2\n[2,4,1]'
 *
 * You are given an integer array prices where prices[i] is the price of a
 * given stock on the i^th day, and an integer k.
 *
 * Find the maximum profit you can achieve. You may complete at most k
 * transactions: i.e. you may buy at most k times and sell at most k times.
 *
 * Note: You may not engage in multiple transactions simultaneously (i.e., you
 * must sell the stock before you buy again).
 *
 *
 * Example 1:
 *
 *
 * Input: k = 2, prices = [2,4,1]
 * Output: 2
 * Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit
 * = 4-2 = 2.
 *
 *
 * Example 2:
 *
 *
 * Input: k = 2, prices = [3,2,6,5,0,3]
 * Output: 7
 * Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit
 * = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3),
 * profit = 3-0 = 3.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= k <= 100
 * 1 <= prices.length <= 1000
 * 0 <= prices[i] <= 1000
 *
 *
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

const profit = function (prices, k) {
	console.log(k);
	if (prices.length <= 2) {
		return prices[1] - (prices[0] < 0) ? 0 : prices[1] - prices[0];
	}

	return profit(prices.slice(k + k), k + k);
};

var maxProfit = function (k, prices) {
	const mid = Math.floor();
	if (k > prices.length) k = prices.length;

	return profit(prices.slice(k), k);
};

console.log(maxProfit(1, [1])); // Output: 0
console.log(maxProfit(0, [1, 5, 3, 8, 4])); // Output: 0
console.log(maxProfit(1, [1, 5])); // Output: 4
console.log(maxProfit(100, [1, 2, 3, 4, 5])); // Output: 4
// console.log(maxProfit(2, [2, 4, 1])); // Output: 2
// console.log(maxProfit(2, [5, 3, 1])); // Output: 0
// console.log(maxProfit(2, [3, 2, 6, 5, 0, 3])); // Output: 7
// console.log(maxProfit(2, [10, 22, 5, 75, 65, 80])); // Output: 87
// console.log(maxProfit(3, [7, 7, 7, 7, 7])); // Output: 0
// console.log(maxProfit(3, [1, 10, 5, 20, 15, 25])); // Output: 39
// console.log(maxProfit(5, [100, 180, 260, 310, 40, 535, 695])); // Output: 865

// @lc code=end
