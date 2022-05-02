/**
 *	@summary 
 *
 *
 * You have a string that consists of zeroes and ones. Now choose any two adjacent
 * positions in the string: if one of them is 0, and the other one is 1, remove
 * these two digits from the string.
 *
 * Return the length of the resulting (smallest) string that you can get after
 * applying this operation multiple times?
 *
 *
 * Note: after each operation, the remaining digits are separated by spaces and thus not adjacent anymore - see the examples below.
 *
 *
 * Examples
 *
 * For "01010" the result should be 1:
 *
 * "01010"  -->  "  010"  -->  "    0"
 *
 *
 * For "110100" the result should be 2:
 *
 * "110100"  -->  "1  100"  -->  "1    0"
 *
 */


function zeroAndOne(input) {
	const regexp = /(01|10)/g
	return input.replace(regexp, '').length
}

console.log(
	zeroAndOne('01010'),
	1
)
console.log(
	zeroAndOne('110100'),
	2
)

console.log(
	zeroAndOne('11101111'),
	6
)





//function doTest(input, expected) {
//	const actual = zeroAndOne(input);
//	strictEqual(actual, expected, `for string:\n"${input}"\n`);
//}

//describe("Tests suite", function () {
//	it("It should work for basic tests.", function () {
//		doTest("01010", 1);
//		doTest("11101111", 6);
//		doTest("01", 0);
//		doTest("10", 0);
//		doTest("110110", 2);
//		doTest("110100", 2);
//	});
//});
