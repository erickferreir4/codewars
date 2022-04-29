/**
 *
 *	@summary Complete the solution so that the function will break up camel casing, using a space between words.
 *
 *  "camelCasing"  =>  "camel Casing"
 *	"identifier"   =>  "identifier"
 *  ""             =>  ""
 *
 * @return replace group with space + match letter group
 */

function solution(string) {
	return string.replace(/([A-Z])/g, " $1")
}


console.log(solution('camelCasing'))
console.log(solution('camelCasingTest'))
console.log(solution('camelCasingTestTT'))


