/**
 *	  Next bigger number with the same digits
 *	  
 *	  
 *	  Create a function that takes a positive integer and returns the next bigger
 *	  number that can be formed by rearranging its digits. 
 *	  
 *		For example:
 *	  
 *			nextBigger(num: 12)   // returns 21
 *			nextBigger(num: 513)  // returns 531
 *			nextBigger(num: 2017) // returns 2071
 *	  
 *	  
 *		If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
 *	  
 *			9 ==> -1
 *			111 ==> -1
 *			531 ==> -1
 *	  
 */


function nextBigger(number){

	let arrNumber = String(number).split('')
	let rightNumber = [];
	let leftNumber = [];
	let pivoSub = 0;
	let pivo = 0;

	for (let index = arrNumber.length - 1; index >= 0; index--) {
		const element = arrNumber[index];

		if(index-1 >= 0) {
			const next = arrNumber[index-1]

			if(element > next) {
				for (let x = index; x < arrNumber.length; x++) {
					rightNumber.push(arrNumber[x])
				}
				for (let y = 0; y < index-1; y++) {
					leftNumber.push(arrNumber[y])
				}
				pivo = next
				break;
			}
		}
	}

	rightNumber.sort()
	for (let index = 0; index < rightNumber.length; index++) {
		const element = rightNumber[index];

		if(element > pivo) {
			rightNumber[index] = pivo
			pivoSub = element
			break;
		}
	}

	const bigger = Number(leftNumber.join('')+pivoSub+rightNumber.join(''))

	return bigger == 0 ? -1 : bigger
}

console.log(
	nextBigger(21581957621),
	'expected ==> 21581961257'
)
console.log(
	nextBigger(9),
	'expected ==> -1'
)
console.log(
	nextBigger(12),
	'expected ==> 21'
)
console.log(
	nextBigger(513),
	'expected ==> 531'
)
console.log(
	nextBigger(2017),
	'expected ==> 2071'
)
