/*
 * 	@summary
 *
 *	 Separating Strings
 *	 
 *	 Create a function that takes a string and separates it into a sequence of letters.
 *	 
 *	 The array will be formatted as so:
 *	 
 *	 Example
 *		sepStr("Just Live Life Man")
 *		// => [['J','L','L','M'],
 *		// => ['u','i','i','a'],
 *		// => ['s','v','f','n'],
 *		// => ['t','e','e','']]);
 */





function sepStr(str) {

	let matrix_x = str.split(' ').length
	let matrix_y = str.split(' ').reduce((p, c) => p.length > c.length ? p : c , 0).length
	let matrix = []

	for (let index = 0; index < matrix_y; index++) {
		matrix.push(Array.from({length: matrix_x}, () => ''))
	}

	str.split(' ').forEach((word, col) => {
		for (let line = 0; line < word.length; line++) {
			const letter = word[line];
			matrix[line][col] = letter
		}

	});

	return matrix
}


console.log(
	sepStr('Just Live Life Man'),
	"expected ==> // => [['J','L','L','M'],['u','i','i','a'],['s','v','f','n'],['t','e','e','']])"
)
