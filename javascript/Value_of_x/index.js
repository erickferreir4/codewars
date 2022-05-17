/*
*	 Value of x
*	 
*	 Jack's teacher gave him a ton of equations for homework. The thing is they are all kind of same so they are boring.
*	 
*	 So help him by making a equation solving function that will return the value of x.
*	 
*	 Test Cases will be like this:
*	 
*	 
*	 # INPUT            # RETURN
*	 'x + 1 = 9 - 2'    # 6
*	 'x - 2 + 3 = 2'    # 1
*	 '- 10 = x'         # -10
*	 '- x = - 1'        # 1
*	 
*	 
*		All test cases are valid.
*		Every +, - and numbers will be separated by space.
*		There will be only one x either on the left or right.
*		x can have a - mark before it.
*		returned object will be a integer.
*/

function valueOfX(eq) {

	let equation = eval(eq.split('=')[0].replace(/(-|\+)? ?x/, ''))
	let result = eval(eq.split('=')[1].replace(/(-|\+)? ?x/, ''))
	let x;

	if(eq.split('=')[0].includes('x')) {
		x = eval(result + (equation > 0 ? `- ${equation}` : `+ ${Math.abs(equation)}`))
	}
	else {
		x = eval((result > 0 ? `- ${result}` : `+ ${Math.abs(result)}`) + `+ ${equation}`)
	}

	if(equation == undefined) {
		x = result
	}
	else if(result == undefined) {
		x = equation
	}

	if(eq.match(/(-)? ?x/)[0].includes('-')) {
		x = eval(-(x))
	}

	return x
}

console.log(
	valueOfX('9 - 1 = - x + 10'),
	'expected ==> 2'
)
console.log(
	valueOfX('- x - 1 = 8'),
	'expected ==> -9'
)
console.log(
	valueOfX('x + 1 = 9 - 2'),
	'expected ==> 6'
)

console.log(
	valueOfX('- x = - 1'),
	'expected ==> 1'
)
console.log(
	valueOfX('- 10 = x'),
	'expected ==> -10'
)
console.log(
	valueOfX('- 118 + 112 - 113 + 97 = - 83 - 109 + 49 + 35 - x'),
	'expected ==> -86'
)

