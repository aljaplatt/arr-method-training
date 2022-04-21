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
