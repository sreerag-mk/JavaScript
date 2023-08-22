/* eslint-disable no-console */
// array1 = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ];
// // 1. ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and
// // console each item by using switch statement.

// array1 = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ];
// const arrayToMap = array1.map((value) => {
//     switch (value) {
//         case 'car':
//             return 'Car';
//             break;
//         case 'js':
//             return 'js';
//             break;

//         case 1:
//             return 1;
//             break;
//         case 5:
//             return 5;
//             break;
//         case 'node js':
//             return 'Node JS';
//             break;
//         case'mysql':
//             return 'MySQL'
//             break;

//         case'sql':
//             return 'SQL'
//             break;

//         default:
//             console.log("nothing to console ");
//             break;
//     }
// })

// console.log(arrayToMap);

// // 2. [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.

// array2 = [1, 2, 3, 4, 5, 6];

// function deleteIndex(){
//     for (let i = 0; i < array2.length; i++) {
//         if (array2[i] === 5 || array2[i] === 2) {
//             array2.splice(i, 1);
//         }
//     }
//     console.log(array2);
// }

// deleteIndex();

// // 3. Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)
// let arrayNew = [1,2,3,4,5,6,7,8,9,]
// class Elemrnts{
//     constructor(array){
//         this.array = array;
//     }
// }
// let arrayCon = new Elemrnts(arrayNew);

// console.log(arrayCon.array)

// // 4. Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one of the item name either in the passed array or not in the passed array, the function should delete the passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array, finnally console the output.

// let array3 = [1,2,3,4,5,6,7,8,9]
// let item3 = 11
// array4 = arrayFunction(array3,item3);
// function arrayFunction(array,item){
//     array.forEach((value, index)=>{
//         if (value === item) {
//             array.splice(index, 1)
//         }
//         else{
//             if (array.includes(item)) {
//                 console.log("");
//             }
//             else {
//                 array.push(item)
//             }
//         }
//     })
//     console.log(array);
// }
// // 5. Create a self-invoking function to console you name.

// (function(){
//     console.log('sreerag');
// })();

// // 6. {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])

// let obj1 = {a:'one',
//             b:'2',
//             f:'5',
//             c:'33',
//             p:'do',
//             q:'one'
//         };
// const array5 = Object.keys(obj1).reverse();
// console.log(array5);

// // 7. { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// // From the given object remove the data array item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )

// let obj2 = { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] };

// const datas = obj2.data.filter((value, index)=>{
//     if (value.id === '24') {
//         obj2.data.splice(index, 0);
//     }
//     else {
//         console.log(value);
//     }
// }
// );
// console.log(datas);

// // 8. Given var string = "Javascript is the King of the web."

// var str1 = "Javascript is the King of the web."

// // a) Get the length of the string.

// console.log(`Length of the stirng is ${str1.length}`)

// // b) Print the 8th character of the string without using any function.

// str2=str1.slice(0,8);
// console.log(str2);

// // c) Execute the above code from browser console.

// console.log(str1.slice(0,8));

// // d) Get the position of the word "King" in string.

// console.log(str1.indexOf("King"));

// // e) Replace "King" with "Emperor".

// str11=str1.replace("King","Emperor");
// console.log(str11);

// // f) Insert the string "new” before the word "King".

// str10=str1.replace("King","new King");
// console.log(str10);

// // g) Get the words in string as an array.

// console.log(str1.split(" "));

// // h) Extract and print the words "is the King" from string.

// str1 = "Javascript is the King of the web.";
// let words = str1.substring(11,22);
// console.log(words);

// // i) Get the count of occurrences of the strings "the" and "of" in string.

// console.log(str1.match(/the/g).length);
// console.log(str1.match(/of/g).length);

// // j) pad string with "*" and set the total length of the string as 30, displayed at right side.

// console.log(str1.padStart(30, "*"));

/* 
why there is no valriable declaration---------------------------------------------------------------------------------------------------------------------------------------
dont use variables without declaring them
*/
// 1. ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and
// console each item by using switch statement.

// why are u re assigning arra1 with same  value?---------------------------------------------------------------------------------------------------------------------------------------

// redo with just one case and a default case---------------------------------------------------------------------------------------------------------------------------------------

const array1 = ["car", 1, 5, "js", "node js", "mysql", "sql"];
// eslint-disable-next-line array-callback-return
const arrayToMap = array1.map((value) => {
  switch (value) {
    case value:
      return value;
    default:
      console.log("nothing to console ");
      break;
  }
});

console.log(arrayToMap);

// 2. [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.

// which is the inner and outer function?---------------------------------------------------------------------------------------------------------------------------------------

const array2 = [1, 2, 3, 4, 5, 6];

function deleteOuterFunction() {
  for (let i = 0; i < array2.length; i += 1) {
    // eslint-disable-next-line no-inner-declarations
    function deleteInnerFunction() {
      if (array2[i] === 5 || array2[i] === 2) {
        array2.splice(i, 1);
      }
    }
    deleteInnerFunction();
  }
  console.log(`the array after the deleting 2 items is : ${array2}`);
}
deleteOuterFunction();

// 3. Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)
const arrayNew = [1, 2, 3, 4, 5, 6, 7, 8, 9];
class Elemrnts {
  constructor(array) {
    this.array = array;
  }
}
const arrayCon = new Elemrnts(arrayNew);

console.log(arrayCon.array);

// 4. Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one of the item name either in the passed array or not in the passed array, the function should delete the passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array, finnally console the output.

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const item3 = 11;
// eslint-disable-next-line no-unused-vars
const array4 = arrayFunction(array3, item3);
function arrayFunction(array, item) {
  array.forEach((value, index) => {
    if (value === item) {
      array.splice(index, 1);
    } else if (array.includes(item)) {
      console.log("");
    } else {
      array.push(item);
    }
    /* 
            why u have this if condition???---------------------------------------------------------------------------------------------------------------------------------------
            */
  });
  console.log(array);
}
// 5. Create a self-invoking function to console you name.

(function () {
  console.log("sreerag");
})();

// 6. {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])

const obj1 = { a: "one", b: "2", f: "5", c: "33", p: "do", q: "one" };
const array5 = Object.keys(obj1).reverse();
console.log(array5);

// 7. { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data array item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )

const obj2 = {
  data: [
    { a: "one", id: "22" },
    { a: "four", id: "7" },
    { a: "six", b: "2" },
    { a: "sixty", id: "24" },
    { a: "five", id: "212" },
  ],
};

// what is the use of filter function?---------------------------------------------------------------------------------------------------------------------------------------
// why did u use splice inside filter function?---------------------------------------------------------------------------------------------------------------------------------------

const datas1 = Object.values(obj2);
datas1.forEach((value) => {
  value.forEach((innerValue) => {
    if (innerValue["id"] === "24") {
      const indexOf = value.indexOf(innerValue);
      value.splice(indexOf, 1);
    }
  });
});
console.log(datas1);

// 8. Given var string = "Javascript is the King of the web."

// eslint-disable-next-line vars-on-top, no-var
var str1 = "Javascript is the King of the web.";

// a) Get the length of the string.

console.log(`Length of the stirng is ${str1.length}`);

// b) Print the 8th character of the string without using any function.

// the o/p is not the  8th character---------------------------------------------------------------------------------------------------------------------------------------

const str2 = str1.slice(7, 8);
console.log(`the 8th character is ${str2}`);

// c) Execute the above code from browser console.

console.log(str1.slice(0, 8));

// d) Get the position of the word "King" in string.

console.log(str1.indexOf("King"));

// e) Replace "King" with "Emperor".

const str11 = str1.replace("King", "Emperor");
console.log(str11);

// f) Insert the string "new” before the word "King".

const str10 = str1.replace("King", "new King");
console.log(str10);

// g) Get the words in string as an array.

console.log(str1.split(" "));

// h) Extract and print the words "is the King" from string.

str1 = "Javascript is the King of the web.";
const words = str1.substring(11, 22);
console.log(words);

// i) Get the count of occurrences of the strings "the" and "of" in string.

console.log(str1.match(/the/g).length);
console.log(str1.match(/of/g).length);

// j) pad string with "*" and set the total length of the string as 30, displayed at right side.

// there is no star ?---------------------------------------------------------------------------------------------------------------------------------------
const strsub = str1.substring(1, 23);
console.log(strsub.padEnd(30, "*"));
