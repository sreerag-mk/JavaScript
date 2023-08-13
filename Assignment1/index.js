// Creating variables with different data types available in JS and printing their data types along with each variable name in the console.
//Why have you used let key word?
//Use camel case for variable names.
// Check the variable declarations in JavaScript and select the one that is appropriate for your variables.
const nullVariable = null;
const numberVariable = 53;
const stringVariable = "sreerag";
const symbolVariable = Symbol("hello");
const booleanVariable = false;
const bigintVariable = BigInt(34);
const undefinedVariable = undefined;
const arrayVariable = ["array1", "array2", "array3"];
const objectVariable = {
  name: "sreerag",
  age: 23,
};

console.log("the type of nullvariable is" + typeof nullVariable);
console.log("the type of numberVariable is" + typeof numberVariable);
console.log("the type of stringVariable is" + typeof stringVariable);
console.log("the type of symbolVariable is", symbolVariable);
console.log("the type of booleanVariable is" + typeof booleanVariable);
console.log("the type of bigintVariable is" + typeof bigintVariable);
console.log("the type of undefinedVariable is" + typeof undefinedVariable);
console.log("the type of objectVariable is" + typeof objectVariable);
console.log("the type of arrayVariable is" + typeof arrayVariable);

//Create a concatenated string with the above variables using template literals and without template literals. (separate each variable by space in the string)

const concatenatedStringWithTemplateLiterals = `The concatenated string is ${nullVariable} ${numberVariable} ${stringVariable}  ${booleanVariable} ${bigintVariable} ${undefinedVariable} ${objectVariable} ${arrayVariable}`;
console.log(concatenatedStringWithTemplateLiterals);
const concatenatedString =
  "The concatenated string is" +
  nullVariable +
  " " +
  numberVariable +
  " " +
  stringVariable +
  " " +
  stringVariable +
  " " +
  booleanVariable +
  " " +
  bigintVariable +
  " " +
  undefinedVariable +
  " " +
  objectVariable +
  " " +
  arrayVariable;
console.log(concatenatedString);

//Write a JS program to show an alert message on the loading of the website.

alert("hello, This is from the JavaScript file");
