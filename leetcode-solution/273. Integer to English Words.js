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
const scales = ['', 'Thousand ', 'Million ', 'Billion ', 'Trillion '];

const completeWord = (num, scale = '') => {
	let result = '';

	const under20 = num % 100;

	if (num >= 100) result += ones[Math.floor(num / 100)] + 'Hundred ';
	if (under20 >= 20) {
		result += tens[Math.floor(under20 / 10)] + ones[num % 10];
	} else {
		result += ones[under20];
	}

	if (num) result += scale;

	return result;
};

const numberToWords = (num) => {
	if (num === 0) return 'Zero';

	const formatted = num
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		.split(',');

	const words = formatted
		.reverse()
		.map((segment, i) => completeWord(parseInt(segment), scales[i]))
		.reverse();

	return words.join('').trim();
};

console.log(numberToWords(1_000_010));
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
