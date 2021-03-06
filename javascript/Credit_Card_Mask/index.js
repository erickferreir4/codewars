/**
 *
 *	  @summary
 *
 *	  Usually when you buy something, you're asked whether your credit card number,
 *	  phone number or answer to your most secret question is still correct. However,
 *	  since someone could look over your shoulder, you don't want that shown on
 *	  your screen. Instead, we mask it.
 *	  
 *	  Your task is to write a function maskify, which changes all but the last four characters into '#'.
 *
 *	  Examples
 *
 *		  "4556364607935616" --> "############5616"
 *			   "64607935616" -->      "#######5616"
 *						 "1" -->                "1"
 *						  "" -->                 ""
 *		  
 *		  // "What was the name of your first pet?"
 *		  
 *		  "Skippy" --> "##ippy"
 *		  
 *		  "Nananananananananananananananana Batman!"
 *		  -->
 *		  "####################################man!"
 *
 */

// return masked string
function maskify(string) {
	//return string.substring(0, string.length - 4).replace(/./g, '#') + string.slice(string.length - 4)


	let four_char = string.slice(string.length - 4)
	return string.length > 4 ? string.replace(four_char, '').replace(/[a-z0-9]/gm, "#") + four_char : string
}

console.log(
	maskify('4556364607935616'),
	'expected => ############5616'
)






