/**
 *	@summary
 *
 * We want to know the index of the vowels in a given word, for example, there
 * are two vowels in the word super (the second and fourth letters).
 *
 * So given a string "super", we should return a list of [2, 4].
 *
 *
 *    Some examples:
 *	  Mmmm  => []
 *	  Super => [2,4]
 *	  Apple => [1,5]
 *	  YoMama -> [1,2,4,6]
 *
 *
 * 	NOTES
 *		Vowels in this context refers to: a e i o u y (including upper case)
 *		This is indexed from [1..n] (not zero indexed!)
 *
 *
 */


function vowelIndices(word){
	const regexp = /[aeiouyAEIOUY]/g
	return [...word.matchAll(regexp)].map(value => value.index+1)
}


console.log(vowelIndices("mmm"), 'expected ==>', [])

console.log(vowelIndices("apple"), 'expected ==>', [1,5])

console.log(vowelIndices("super"), 'expected ==>', [2,4])

console.log(vowelIndices("orange"), 'expected ==>', [1,3,6])

console.log(vowelIndices("supercalifragilisticexpialidocious"), 'expected ==>', [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33])
