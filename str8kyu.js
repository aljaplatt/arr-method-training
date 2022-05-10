//? Convert a Number to a String!

function numberToString(num) {
	// Return a string of the number here!
	return String(num);
}
var stringToNumber = function (str) {
	// put your code here
	return Number(str);
};

//? Returning Strings
function greet(name) {
	//your code here
	return `Hello, ${name} how are you doing today?`;
}

//? Reversed Words

function reverseWords(str) {
	return str.split(' ').reverse().join(' ');
}
