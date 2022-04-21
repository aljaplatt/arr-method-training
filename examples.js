// JavaScript code goes here

//* Musketeers

/**
 * Write a program that:
• Creates an array named musketeers containing values “Athos”, “Porthos” and “Aramis”.
• Shows each array element using a for loop.
• Adds the “D’Artagnan” value to the array.
• Shows each array element using the forEach() method.
• Remove poor Aramis.
• Shows each array element using a for-of loop.
 */

const musketeers = ['Athos', 'Porthos', 'Aramis'];

for (let i = 0; i < musketeers.length; i++) {
	console.log(musketeers[i]);
}

musketeers.push('D’Artagnan');

musketeers.forEach(man => console.log(man));

musketeers.splice(2, 1);
console.log(musketeers);

for (let man of musketeers) {
	console.log(man);
}

//* Sum of values

/**
 * Write a program that creates the following array, then calculates and shows the sum of its values
(42 in that case).
const values = [3, 11, 7, 2, 9, 10];
 */
const values = [3, 11, 7, 2, 9, 10];

// let total = 0;
// for (let value of values) {
// 	total += value;
// 	console.log(value);
// }

const string = 'cristiano ronaldo';
let footballerArr = [];
// let total = 0;
for (let letter of string) {
	// total += value;
	// console.log(letter);
	footballerArr.push(letter);
}

const remade = footballerArr.join('');

console.log(remade);
console.table(footballerArr);

footballerArr.splice(9, 1);
console.log(footballerArr);

//* Array maximum

/**
 * Write a program that creates the following array, then calculates and shows the array’s maximum value.
 */

const valuesNew = [3, 11, 7, 2, 9, 10];

const sum = valuesNew.reduce((total, item) => total + item, 0);
console.log(sum);

//* List of words

/**
  * Write a program that asks the user for a word until the user types "stop". The program then
 shows each of these words, except "stop".
  */

function gimmeAWord() {
	let words = [];

	for (let word of words) {
		let userWord = prompt(`asks the user for a word?`);
		if (userWord !== 'stop') {
			words.push(word);
		} else console.log(words);
	}
}

//* List of words
// const words = [];

// let word = '';
// while (word !== 'stop') {
// 	word = prompt('Enter a word or stop to quit:');
// 	if (word !== 'stop') {
// 		words.push(word);
// 	}
// }

// console.log('You have entered the following words:');
// words.forEach(w => {
// 	console.log(w);
// });
