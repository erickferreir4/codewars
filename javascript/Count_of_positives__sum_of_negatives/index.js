/**
 *	@summary	Given an array of integers.
 *
 *
 *	Return an array, where the first element is the count of positives numbers and
 *	the second element is sum of negative numbers. 0 is neither positive nor negative.
 *
 *
 * 	If the input is an empty array or is null, return an empty array.
 *
 *	Example:
 *	For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 *
 */


function countPositivesSumNegatives(input) {
	if(!input) return []
	let positive = 0, negative = 0
	input.forEach(current => current > 0 ? positive+=1 : negative+=current )
	return input.length ? [positive, negative] : []
}

let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
let actual = countPositivesSumNegatives(testData);
let expected = [8, -50];

console.log(actual, expected)
