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

//? Stringy Strings

function stringy(size) {
	let str = '';
	for (let i = 1; i <= size; i++) {
		str += i % 2;
		console.log(str);
	}
	return str;
}

//? The Wide-Mouthed frog!

function mouthSize(animal) {
	// code here
	return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

const str = 'Stew this iS a string';

const countSs = string => {
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i].toLowerCase() === 's') {
			count++;
		}
	}
	console.log(count);
};

countSs(str);

let john = { name: 'John', surname: 'Smith', id: 1 };
let pete = { name: 'Pete', surname: 'Hunt', id: 2 };
let mary = { name: 'Mary', surname: 'Key', id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
	fullName: `${user.name} ${user.surname}`,
	id: user.id,
}));

console.log(users, usersMapped);

console.log('Teaching the world how to code'.length); // 30

//? split string into arr, loop through each item
let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');

for (let name of arr) {
	console.log(`A message to ${name}.`);
}
// A message to Bilbo (and other names)

//? Capitalization and Mutability
// capitalise first letter and re-join the rest of the word

function capitalizeWord(word) {
	return word[0].toUpperCase() + word.substring(1);
}

/**
 * function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}
 */
//? Dollars and Cents

function formatMoney(amount) {
	return '$' + amount.toFixed(2);
}

//? String Templates - Bug Fixing #5

function buildString(...template) {
	return `I like ${template.join(', ')}!`;
}
