const kthDistinct = function (arr, k) {
	const elementCounts = arr.reduce((acc, element) => {
		acc[element] = (acc[element] || 0) + 1;
		return acc;
	}, {});

	const unique = arr.filter((element) => elementCounts[element] === 1);

	if (unique.length < k) {
		return '';
	}

	for (let i = 0; i < unique.length; i++) {
		if (i + 1 >= k) {
			return unique[i];
		}
	}
};
