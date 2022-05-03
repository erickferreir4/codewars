/**
 *
 *	@summary 
 *
 * The Baum–Sweet sequence is an infinite automatic sequence of 0s and 1s defined by the rule:
 *
 * bn = 1 if the binary representation of n contains no block of consecutive 0s of odd length;
 * bn = 0 otherwise;
 *
 * for n ≥ 0.

 * Define a generator function baumSweet that sequentially generates the values of
 * this sequence.


 * It will be tested for up to 1 000 000 values.

 * Note that the binary representation of 0 used here is not 0 but the empty string
 * ( which does not contain any blocks of consecutive 0s ).
 *
 */


function* baumSweet() {
	for (let index = 0; true ; index++) {

		let zeros = (index >>> 0).toString(2).split('1')
						.filter( v => v.length % 2 == 1).length ? 0 : 1

		yield index == 0 ? 1 : zeros
	}
}


const take = n => function*(gen) { while ( n-->0 ) yield gen.next().value; } ;

console.log(
	Array.from(take(20)(baumSweet())), [1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1] 
)
