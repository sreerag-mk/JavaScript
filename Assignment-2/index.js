// QUESTION no.1

// ["1", "2", "3", "4", "5", "6", "7"]

let numbers = ["1", "2", "3", "4", "5", "6", "7"];

// a. Remove number "6" from the array and console the length of the array.

numbers.splice(5, 1);

console.log(
  `The length of the array after removing number "6" is ${numbers.length}`
);

console.log(numbers);

// b. Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration.

numbers = ["1", "2", "3", "4", "5", "6", "7"];

numbers.forEach((number) => {
  number = parseInt(number);
  console.log(`The type of ${number} is ${typeof number}`);
});

// c. Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array.

numbers = ["1", "2", "3", "4", "5", "6", "7"];

let arrayLength = numbers.length;
numbers.splice(arrayLength - 3, 3);
console.log(numbers);
numbers.splice(0, 0, "one", "two");
console.log(numbers);

// d. Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)

numbers = ["1", "2", "3", "4", "5", "6", "7"];

let temp = 0;
let concatinatedString;
numbers.forEach((number) => {
  concatinatedString = concatinatedString + " " + number;
  number = parseInt(number);
  temp = temp + number;
});
console.log(
  `The string concatenation of all items of the array is ${concatinatedString}`
);
console.log(`The sum of all the items of the array is ${temp}`);

// e. Filter out item "3" from the array and console the array (use any array method)

numbers = ["1", "2", "3", "4", "5", "6", "7"];

let filterArray = numbers.filter((item) => {
  return item != "3";
});
console.log(`the filter array is ${filterArray}`);

// f. Iterate the array and console the item, when item is either "3", "6" or "7"

numbers = ["1", "2", "3", "4", "5", "6", "7"];

numbers.forEach((item) => {
  if (item == "3" || item == "6" || item == "7") {
    console.log(`the items after iteration ${item}`);
  }
});

// g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)

arrayTocompare = [1, 2, "3", 4, 5, 6, "7"];

numbers = ["1", "2", "3", "4", "5", "6", "7"];

for (let item of arrayTocompare) {
  for (let value of numbers) {
    if ((typeof item == typeof value) & (item == value)) {
      console.log(`The same items in both arrays are ${item}`);
    }
  }
}

// h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.

arrayToiterate = [0, 2, 3, 7, 5, 6, 8];

arrayToiterate.forEach((value, index) => {
  let itemValue = value * index;
  if (itemValue > 40) {
    console.log(`the result value that is greater than 40 is = ${itemValue}`);
  }
});

// i. Create two arrays with five items each and merge the array into a single array and then console it.

array1 = [1, 2, 3, 4, 5];
array2 = [6, 7, 8, 9, 10];

let array3 = array1.concat(array2);

console.log(array3);

// QUESTION no.2

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

// ​Console this star pattern

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += " *";
  }
  string += "\n";
}
console.log(string);
