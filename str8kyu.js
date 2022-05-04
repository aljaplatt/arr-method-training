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

//? Convert a Boolean to a String

function booleanToString(b) {
	//your code here
	return String(b);
}

//? Do I get a bonus?

function bonusTime(salary, bonus) {
	// your code here
	return bonus ? `£${salary * 10}` : `£${salary}`;
}

//? The Feast of Many Beasts

function feast(beast, dish) {
	return beast[0] === dish[0] &&
		beast[beast.length - 1] === dish[dish.length - 1]
		? true
		: false;
}
