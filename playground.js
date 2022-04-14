const arr = [2, 3, 4, 5, 1, 6, 1, 2, 3, 4, 5];

// const sweet = arr.sort((a, b) => a - b); // ascending
const sweeter = arr.sort((a, b) => b - a); // descending
//! effects og array
// console.log(sweeter, arr);

//* Get highest number from array
// const max = Math.max(...arr); //! must spread array
// console.log(max);

//* Number.isNaN()
function typeOfNaN(x) {
	if (!Number.isNaN(x)) {
		console.log('Number NaN');
	}
	if (isNaN(x)) {
		console.log('NaN');
	}
}

typeOfNaN('100'); // ??? = number nan w/ !

// to the power of 10 for loop

const powerOf10 = num => {
	let result = 1;
	for (let i = 1; i <= 10; i++) {
		result *= num;
		console.log(i, result);
	}
};

powerOf10(2);

//? break

for (let i = 20; ; i++) {
	if (i % 7 == 0) {
		console.log(i);
		break;
	}
}

let hash = '';
for (let i = 0; i < 7; i++) {
	hash += '#';
	console.log(hash);
}

//* fizz buzz

// for (let i = 1; i <= 100; i++) {
// 	i % 15 === 0
// 		? console.log('fizzBuzz')
// 		: i % 3 === 0
// 		? console.log('fizz')
// 		: i % 5 === 0
// 		? console.log('buzz')
// 		: console.log(i);
// }

//
// function countBs(string) {
// 	let count = 0;
// 	for (let i = 0; i < string.length; i++) {
// 		if (string[i] === 'B') {
// 			count++;
// 			console.log(count);
// 		}
// 	}
// 	return count;
// }

// countBs('BBeeb');

const movies = ['batman', 'titanic', 'solo'];

const [favoriteMovie] = movies;

console.log(favoriteMovie); // batman

const movLength = movies.length;
console.log(movLength);

const lastMovie = movies[movies.length - 1];
console.log(lastMovie);

function skip5s(num) {
	for (let i = 1; i <= num; i++) {
		i % 5 === 0 ? console.log('skipped') : console.log(i);
	}
}

skip5s(15);
