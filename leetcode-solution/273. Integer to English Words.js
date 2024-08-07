const ones = [
	'',
	'One ',
	'Two ',
	'Three ',
	'Four ',
	'Five ',
	'Six ',
	'Seven ',
	'Eight ',
	'Nine ',
	'Ten ',
	'Eleven ',
	'Twelve ',
	'Thirteen ',
	'Fourteen ',
	'Fifteen ',
	'Sixteen ',
	'Seventeen ',
	'Eighteen ',
	'Nineteen ',
];
const tens = [
	'',
	'',
	'Twenty ',
	'Thirty ',
	'Forty ',
	'Fifty ',
	'Sixty ',
	'Seventy ',
	'Eighty ',
	'Ninety ',
];

const scale = ['', 'Thousand ', 'Million ', 'Billion ', 'Trillion '];

const completeWord = function (num, s = '') {
	let result = '';

	if (num >= 100) result += ones[Math.floor(num / 100)] + 'Hundred ';

	if (Math.floor(num % 100) >= 20) {
		result += tens[Math.floor((num % 100) / 10)] + ones[Math.floor(num % 10)];
	}
	if (Math.floor(num % 100) < 20) result += ones[Math.floor(num % 100)];
	if (num) result += s;

	return result;
};

const numberToWords = function (num) {
	if (num === 0) return 'Zero';

	const segments = num
		.toString()
		.split(/(?=(?:\d{3})+$)/)
		.filter(Boolean);

	const words = segments
		.reverse()
		.reduce((acc, number, i) => {
			acc.push(completeWord(parseInt(number), scale[i]));
			return acc;
		}, [])
		.reverse();

	return words.join('').trim();
};
console.log(numberToWords(1000010));
console.log(numberToWords(1_001));
console.log(numberToWords(123));
console.log(numberToWords(100));
console.log(numberToWords(123_456_789));
console.log(numberToWords(0));
console.log(numberToWords(12_345));
console.log(numberToWords(1_234_567));
console.log(numberToWords(123_456_789));
console.log(numberToWords(123_456_789_100));
console.log(numberToWords(123_456_789_100_000));
