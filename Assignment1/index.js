// Creating variables with different data types available in JS and printing their data types along with each variable name in the console.
//Why have you used let key word?
//Use camel case for variable names.
// Check the variable declarations in JavaScript and select the one that is appropriate for your variables.
let nullvariable = null;
let numbervariable = 53;
let stringvariable = "sreerag";
let symbolvariable = Symbol("hello");
let booleanvariable = false;
let bigintvariable = BigInt(34);
let undefinedvariable = undefined;
let arrayvariable = ["array1", "array2", "array3"];
let objectvariable = {
  name: "sreerag",
  age: 23,
};

console.log("the type of nullvariable is" + typeof nullvariable);
console.log("the type of numbervariable is" + typeof numbervariable);
console.log("the type of stringvariable is" + typeof stringvariable);
console.log("the type of symbolvariable is", symbolvariable);
console.log("the type of booleanvariable is" + typeof booleanvariable);
console.log("the type of bigintvariable is" + typeof bigintvariable);
console.log("the type of undefinedvariable is" + typeof undefinedvariable);
console.log("the type of objectvariable is" + typeof objectvariable);
console.log("the type of arrayvariable is" + typeof arrayvariable);

//Create a concatenated string with the above variables using template literals and without template literals. (separate each variable by space in the string)

let concatenatedStringwithtemplateliterals = `The concatenated string is ${nullvariable} ${numbervariable} ${stringvariable}  ${booleanvariable} ${bigintvariable} ${undefinedvariable} ${objectvariable} ${arrayvariable}`;
console.log(concatenatedStringwithtemplateliterals);
let concatenatedString =
  "The concatenated string is" +
  nullvariable +
  " " +
  numbervariable +
  " " +
  stringvariable +
  " " +
  stringvariable +
  " " +
  booleanvariable +
  " " +
  bigintvariable +
  " " +
  undefinedvariable +
  " " +
  objectvariable +
  " " +
  arrayvariable;
console.log(concatenatedString);

//Write a JS program to show an alert message on the loading of the website.

alert("hello, This is from the JavaScript file");
