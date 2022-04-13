//* Well of Ideas - Easy Version

/**
 * ! For every good kata idea there seem to be quite a few bad ones!

//! In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

 */

//? My solution

// function well(x){
//     let goodCount = 0
//     x.forEach((idea) => {
//       if(idea === 'good') {
//         goodCount++
//       }
//        })
//    console.log(goodCount)
//           if(goodCount === 0) return  'Fail!'
//       if(goodCount < 3) return 'Publish!'
//       if(goodCount > 2) return 'I smell a series!'

//   }

//* nice solutions
// const well = x => {
//     const good_count = x.filter(x => x == 'good').length;
//     return good_count < 1 ? 'Fail!' :
//            good_count < 3 ? 'Publish!' : 'I smell a series!';
//   }

const x = ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']; // 3

// const well = (x) => {
//   const good_count = x.filter((x) => x == "good"); // returns an array of only goods. Adding .length gives you how many 'goods' are in that array ! Nice
//   console.log(good_count); // 3
//   // return good_count < 1 ? 'Fail!' :
//   //        good_count < 3 ? 'Publish!' : 'I smell a series!';
// };

// well(x);

// todo - using reduce

function well(x) {
	const count = x.reduce((total, idea) => total + (idea === 'good'), 0);
	console.log(count);
	return count ? (count > 2 ? 'I smell a series!' : 'Publish!') : 'Fail!';
}

well(x);

//* Count of positives / sum of negatives

/**
 * ! Given an array of integers.

//! Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//! If the input is an empty array or is null, return an empty array.
//! Example

//! For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

//? My solution

function countPositivesSumNegatives(input) {
	if (!input || input.length === 0) return [];
	let count = 0;
	let sum = 0;
	input.forEach(function (num) {
		if (num > 0) {
			count++;
		} else {
			sum += num;
		}
	});
	return [count, sum];
}

//* other solutions

// function countPositivesSumNegatives(input) {
//   var newArr = [];
//   var positiveNumber = 0;
//   var negativeNumber = 0;

//   // Validate Input
//   if (input === null || input.length === 0)
//     return newArr;

//   // Loop through array of Numbers
//   for (var i = 0; i < input.length; i++) {
//     if (input[i] == 0)
//      continue;

//     // Count positives
//     else if (input[i] > 0)
//       positiveNumber++;

//     // Sum negatives
//     else if (input[i] < 0)
//       negativeNumber += input[i];

//   }

//   // Prepare Output
//   newArr.push(positiveNumber);
//   newArr.push(negativeNumber);

//   return newArr;
// }

function countPositivesSumNegatives(input) {
	return input && input.length
		? [
				input.filter(p => p > 0).length,
				input.filter(n => n < 0).reduce((a, b) => a + b, 0),
		  ]
		: [];
}

//* Convert number to reversed array of digits
//? Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//? My Solution

function digitize(n) {
	//code here

	let strArr = String(n).split('').reverse();

	let numArr = strArr.map(num => Number(num));
	console.log(numArr);
	return numArr;
}

// todo - other solutions

function digitize(n) {
	return String(n).split('').map(Number).reverse();
}

//* Fake Binary
//? Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//? Note: input will never be an empty string

//? My Solution

function fakeBin(x) {
	//   let numArr = String(x).split('').map(Number).map((num)=> num < 5 ? 0 : 1).join('')
	let numArr = x
		.split('')
		.map(num => (num < 5 ? 0 : 1))
		.join('');

	//   let strArr = x.split('')
	//   console.log(numArr)
	return numArr;
}

//! other solutions / notes

//? didnt need to convert to number in the map ?

//* Counting sheep...

//?Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//? For example,

[true, true, true, false];
//? The correct answer would be 3.

//? My Solution

function countSheeps(arrayOfSheep) {
	// TODO May the force be with you

	return arrayOfSheep.filter(bool => bool === true).length;
}

//? shorter version

//* function countSheeps(arrayOfSheeps) {
// return arrayOfSheeps.filter(Boolean).length;
//}

//* I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
	let phrase = {
		0: 'not at all',
		1: 'I love you',
		2: 'a little',
		3: 'a lot',
		4: 'passionately',
		5: 'madly',
	};
	return phrase[nbPetals % 6];
}

console.log(howMuchILoveYou(3));

//* Remove First and Last Character Part Two

//? You are given a string containing a sequence of character sequences separated by commas.

//? Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

//? If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

//? My Solution

function array(arr) {
	// let ogStr = arr.split('').shift()
	// // let newArr = ogStr.split('').shift()
	// console.log(ogStr)

	// split string into an array - remove comma = [ '1', '2', '3' ]
	//   let newArr = arr.split(',')

	// slice first and last element
	//   let newArr = arr.split(',').slice(1, -1)

	// join with space, convert to string
	let newArr = arr.split(',').slice(1, -1).join(' ');

	//   if newArr is empty = falsey ?

	return newArr || null;
}

//* To square(root) or not to square(root)

function squareOrSquareRoot(array) {
	const newArray = array.map(num =>
		Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num * num
	);
	return newArray;

	// check if num has a sq root?
	// if yes do this
	// else do that
}

//? other solutions

/**
   * function squareOrSquareRoot(array) {
  return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);  
// }
   */

/**
 * function squareOrSquareRoot(array) {
  var processed = [];

  for (var i=0; i<array.length; i++){
    var number = array[i];
    
    if (Math.sqrt(number) == Math.floor(Math.sqrt(number))){
      processed.push(Math.sqrt(number));
    }
    else {
      processed.push(number*number);
    }
    
  }
  return processed;
}
 */

//* Array plus array

function arrayPlusArray(arr1, arr2) {
	const arr1Total = arr1.reduce((total, item) => total + item, 0);
	console.log(arr1Total);

	const arr2Total = arr2.reduce((total, item) => total + item, 0);
	console.log(arr2Total);

	return arr1Total + arr2Total;
}

//? other solutions

/**
   * function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }

// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
  return [].concat(...arrays).reduce((a,b) => a+b,0)
// }


function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b); 
}
   */

//* Is there a vowel in there?

// Need to check this again

//* You only need one - Beginner
//? My solution
const check = (a, x) => a.includes(x); // ternary unnecessary - includes returns boolean

/*
(5) Use ES2015 method to see if array contains the value.
    Eliminate more cruft.
*/

/*
  (4) Eliminate all the overhead setup.
      Use the ES2015 SOME method to see if one or more
      of the array entries matches our target.
      Written in the form of a lambda (arrow function) to make it streamlined
    
    const check = (a,x)=>a.some(v=>v==x)
*/

/*
(3) Filter the Array
    Reduce it down to matching values or an empty set ... [66]
    Test the length of the array   [66].length > 0

  function check(a,x){
    return (a.filter(v=>v==x)).length > 0
  }
*/

/*
(2) Walk the array without ability to break the loop.
    Create a variable to hold the state of our match.
    Check if the target is found and return the findings

  function check(a,x){
    let foundTarget = false
    a.forEach((v,i,A)=>{
      if (v==x){ foundTarget = true}
    })
    return foundTarget
  }
*/

/*
  (1) Manually Walk the array, 
    Break out of the loop (return true) if you find a match
    otherwise return false

  function check(a,x){
    for (let i=0; i<a.length;i++){
      console.log(a[i])
      if (a[i]==x){ return true }
    }
    return false
  }
*/
