function add (n1, n2) {
	return n1 + n2;
}

function subtract (n1, n2) {
  return n1 - n2;
}

function sum (numberArray) {
  var answer=0;
	// loop through each element in array, adding it to the variable answer.
	for (var i=0; i<numberArray.length; i++) {
		answer=answer+numberArray[i];
	}
	return answer;
}

function multiply (numberArray) {
	var answer=1;
	// loop through each element in array, multiply by the variable answer.
	// answer starts at 1 because we cant multiply by 0.
	for (var i=0; i<numberArray.length; i++) {
		answer=answer*numberArray[i];
	}
	return answer;
}

function power(n1, n2) {
  return Math.pow (n1, n2);
}

function factorial(n1) {
  var answer=1;
	// Multiply all numbers from 1 up until n1.
	for (var i=1; i<=n1; i++) {
		answer=answer*i;
	}
	return answer;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
