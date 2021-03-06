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

//? String cleaning

function stringClean(s) {
	return s
		.split('')
		.filter(n => n != parseInt(n))
		.join('');
}

//? L1: Bartender, drinks!

function getDrinkByProfession(param) {
	param = param.toLowerCase();

	switch (param) {
		case 'jabroni':
			return 'Patron Tequila';
		case 'school counselor':
			return 'Anything with Alcohol';
		case 'programmer':
			return 'Hipster Craft Beer';
		case 'bike gang member':
			return 'Moonshine';
		case 'politician':
			return 'Your tax dollars';
		case 'rapper':
			return 'Cristal';
		default:
			return 'Beer';
	}
}

//? Palindrome strings

function isPalindrome(line) {
	const store = String(line);

	const check = store.split('').reverse().join('');

	return store === check;
}

//? ALWAYS HAVE PROBLEMS WITH THIS SYNTAX !!!
//! incorrect
// var repeatIt = function(str, n) {
// 	  let stringVar = str

// 	  if (typeof stringVar === String) {
// 		for(let i=0; i < n; i++) {
// 		  stringVar + str
// 		}
// 		return stringVar
// 	  }
// 	  }

//* Correct
var repeatIt = function (str, n) {
	let stringVar = '';

	if (typeof str !== 'string') {
		return 'Not a string';
	}
	for (let i = 0; i < n; i++) {
		stringVar += str;
	}
	return stringVar;
};

//? Define a card suit

function defineSuit(card) {
	if (card.includes('♥')) return 'hearts';
	if (card.includes('♦')) return 'diamonds';
	if (card.includes('♣')) return 'clubs';
	if (card.includes('♠')) return 'spades';
}

//* other solution

// function defineSuit(card) {
// 	const s = {
// 	  "♣": "clubs",
// 	  "♠": "spades",
// 	  "♦": "diamonds",
// 	  "♥": "hearts"
// 	}
// 	return s[card.charAt(card.length - 1)]
//   }

// function defineSuit(card) {
// 	return {
// 	  '♣' : 'clubs',
// 	  '♦' : 'diamonds',
// 	  '♥' : 'hearts',
// 	  '♠' : 'spades'
// 	}[card.substr(-1)]
//   }
