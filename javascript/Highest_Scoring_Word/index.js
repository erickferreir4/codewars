/**
 *
 *	@summary
 *
 *	 Given a string of words, you need to find the highest scoring word.
 *	 
 *	 Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 *	 
 *	 You need to return the highest scoring word as a string.
 *	 
 *	 If two words score the same, return the word that appears earliest in the original string.
 *	 
 *	 All letters will be lowercase and all inputs will be valid.
*/


function high(string_of_words) {

	const array_of_words = string_of_words.split(' ')

	let highest = {
		word: '',
		scoring: 0
	}

	array_of_words.forEach( word => {
		let sum = word.split('').reduce((previous, current) => previous += current.charCodeAt() - 96, 0)

		if(sum > highest.scoring) {
			highest.scoring = sum
			highest.word = word
		}
	})

	return highest.word
}


console.log(
	high('man i need a taxi up to ubud'),
	'EXPECTED ==> taxi'
)
console.log(
	high('what time are we climbing up the volcano'),
	'EXPECTED ==> volcano'
)
console.log(
	high('take me to semynak'),
	'EXPECTED ==> semynak'
)
console.log(
	high('aa b'),
	'EXPECTED ==> aa'
)
console.log(
	high('b aa'),
	'EXPECTED ==> b'
)
