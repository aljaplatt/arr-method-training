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
