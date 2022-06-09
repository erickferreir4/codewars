/*
*
*	 Write a generic function chainer that takes a starting value, and an array of
*	 functions to execute on it (array of symbols for Ruby).
*	 
*	 The input for each function is the output of the previous function (except the
*	 first function, which takes the starting value as its input). Return the
*	 final value after execution is complete.
*
*/


function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

function chain(input, fs) {
	return fs.reduce((v, f) => f(v), input);
}


console.log(
	chain(2, [add, mult]),
	'expected ===> 90'
)
