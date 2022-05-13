// const arr = [2, 3, 4, 5, 1, 6, 1, 2, 3, 4, 5];

// // const sweet = arr.sort((a, b) => a - b); // ascending
// const sweeter = arr.sort((a, b) => b - a); // descending
// //! effects og array
// // console.log(sweeter, arr);

// //* Get highest number from array
// // const max = Math.max(...arr); //! must spread array
// // console.log(max);

// //* Number.isNaN()
// function typeOfNaN(x) {
// 	if (!Number.isNaN(x)) {
// 		console.log('Number NaN');
// 	}
// 	if (isNaN(x)) {
// 		console.log('NaN');
// 	}
// }

// typeOfNaN('100'); // ??? = number nan w/ !

// // to the power of 10 for loop

// const powerOf10 = num => {
// 	let result = 1;
// 	for (let i = 1; i <= 10; i++) {
// 		result *= num;
// 		console.log(i, result);
// 	}
// };

// powerOf10(2);

// //? break

// for (let i = 20; ; i++) {
// 	if (i % 7 == 0) {
// 		console.log(i);
// 		break;
// 	}
// }

// let hash = '';
// for (let i = 0; i < 7; i++) {
// 	hash += '#';
// 	console.log(hash);
// }

// //* fizz buzz

// // for (let i = 1; i <= 100; i++) {
// // 	i % 15 === 0
// // 		? console.log('fizzBuzz')
// // 		: i % 3 === 0
// // 		? console.log('fizz')
// // 		: i % 5 === 0
// // 		? console.log('buzz')
// // 		: console.log(i);
// // }

// //
// // function countBs(string) {
// // 	let count = 0;
// // 	for (let i = 0; i < string.length; i++) {
// // 		if (string[i] === 'B') {
// // 			count++;
// // 			console.log(count);
// // 		}
// // 	}
// // 	return count;
// // }

// // countBs('BBeeb');

// const movies = ['batman', 'titanic', 'solo'];

// const [favoriteMovie] = movies;

// console.log(favoriteMovie); // batman

// const movLength = movies.length;
// console.log(movLength);

// const lastMovie = movies[movies.length - 1];
// console.log(lastMovie);

// function skip5s(num) {
// 	for (let i = 1; i <= num; i++) {
// 		i % 5 === 0 ? console.log('skipped') : console.log(i);
// 	}
// }

// skip5s(15);

// console.log(1 % -6);
// console.log(2 % 32);
// console.log(5 % 25);

// indexOf(num) % num === indexOf(num)

const arr2 = [1, 2, 3, 4, 5, 6, 7];

// let lastEl = arr2.splice(-1);
// console.log(arr2); // [1, 2, 3, 4, 5, 6 ]
// console.log(lastEl); // [ 7 ]

let someNums = arr2.slice();
console.log(someNums);

let story =
	'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
// console.log(storyWords.join(' ') )
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;
storyWords.forEach(word => count++);
console.log(count);

storyWords = storyWords.filter(word => word !== unnecessaryWord);

storyWords = storyWords.map(word =>
	word === misspelledWord ? 'beautiful' : word
);

const badWordIndex = storyWords.findIndex(word => word === badWord);

console.log(badWordIndex);

storyWords[78] = 'really';

const lengthCheck = storyWords.every(word => word < 10);
console.log(lengthCheck);

const longWordIndex = storyWords.findIndex(word => word.length > 10);
console.log(longWordIndex);

storyWords[111] = 'stunning';

console.log(storyWords.join(' '));

let spaceship = {
	crew: {
		captain: {
			name: 'Lily',
			degree: 'Computer Engineering',
			cheerTeam() {
				console.log('You got this!');
			},
		},
		'chief officer': {
			name: 'Dan',
			degree: 'Aerospace Engineering',
			agree() {
				console.log('I agree, captain!');
			},
		},
		medic: {
			name: 'Clementine',
			degree: 'Physics',
			announce() {
				console.log(`Jets on!`);
			},
		},
		translator: {
			name: 'Shauna',
			degree: 'Conservation Science',
			powerFuel() {
				console.log('The tank is full!');
			},
		},
	},
};

// Write your code below
for (let crewMember in spaceship.crew) {
	console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
for (let crewMember in spaceship.crew) {
	console.log(
		`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`
	);
}

// codecademy adv objectPosition:

const team = {
	_players: [
		{
			firstName: 'Cristiano',
			lastName: 'Ronaldo',
			age: 38,
		},
		{
			firstName: 'Jadon',
			lastName: 'Sancho',
			age: 21,
		},
		{
			firstName: 'David',
			lastName: 'De Gea',
			age: 30,
		},
	],
	_games: [
		{
			opponent: 'Liverpool',
			teamPoints: 6,
			opponentPoints: 0,
		},
		{
			opponent: 'Man City',
			teamPoints: 4,
			opponentPoints: 1,
		},
		{
			opponent: 'Arsenal',
			teamPoints: 8,
			opponentPoints: 2,
		},
	],

	get players() {
		return this._players;
	},
	get games() {
		return this._games;
	},

	addPlayer(newFirstName, newLastName, newAge) {
		let player = {
			firstName: newFirstName,
			lastName: newLastName,
			age: newAge,
		};
		//  append tp players arr. - players arr accessed with get method.
		this.players.push(player);
	},
	addGame(newOpponent, newTeamPoints, newOpponentPoints) {
		let game = {
			opponent: newOpponent,
			teamPoints: newTeamPoints,
			opponentPoints: newOpponentPoints,
		};
		this.games.push(game);
	},
};

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Leeds', 12, 0);

console.log(team.players);
console.log(team.games);

const bool = [true, false, true, true, false];

function countBools(arr) {
	return arr.filter(bool => bool === true).length;
}

console.log(countBools(bool));
