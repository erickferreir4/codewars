/*
 *
 *	  Don't give me five!
 *	  In this kata you get the start number and the end number of a region and
 *	  should return the count of all numbers except numbers with a 5 in it.
 *	  The start and the end number are both inclusive!
 *	  
 *	  Examples:
 *
 *	   1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
 *	   4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
 *
 */


function dontGiveMeFive(start, end){
	let sum = 0
	for (let index = start; index <= end; index++) {
		if(!/5/.test(String(index))) sum++
	}

	return sum;
}

console.log(
	dontGiveMeFive(-48, -45),
	'expected ===> 3'
)

console.log(
	dontGiveMeFive(1, 9),
	'expected ===> 8'
)

console.log(
	dontGiveMeFive(4, 17),
	'expected ===> 12'
)
