/* eslint-disable no-alert */
/* eslint-disable no-console */
// -------------------------------------------------------------------------------------------------------------------------------------
// QUESTION1 - Write a function to:
//      a. Calculate the height of the end user's browser screen
//      b. To console the name of the web host
//      c. To show a warning message if there is no https protocol used in the visited website.
//      d. To show an alert message after 10sec while the page is refreshed.

function Question1() {
  // eslint-disable-next-line no-restricted-globals
  const screenHeight = screen.height;
  console.log(`Height of the screen is ${screenHeight}`);
  const webHostName = window.location.hostname;
  console.log(`Name of the webhost is ${webHostName}`);

  if (window.location.protocol !== "https") {
    console.warn(`There is no https protocol available`);
  }
  // eslint-disable-next-line no-unused-vars
  const timerId = setTimeout(
    () => alert("This is a message after 10s you refreshed the webpage"),
    10000,
  );
}
Question1();
// -------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------
// QUESTION2 - Store your basic details in local storage of the browser every time the page loads, then console them and finally delete them after 1 minute of the page load.

function basicDetails() {
  const name = prompt("enter your name");
  const age = prompt("Enter your age");
  const phone = prompt("enter your phone number");
  console.log(name, age, phone);
  localStorage.setItem("name", name);
  localStorage.setItem("age", age);
  localStorage.setItem("phone", phone);
  console.log(localStorage.getItem("name"));
  console.log(localStorage.getItem("age"));
  console.log(localStorage.getItem("phone"));
  setTimeout(() => {
    localStorage.removeItem("name");
    localStorage.removeItem("age");
    localStorage.removeItem("phone");
  }, 100000);
}
basicDetails();
//-------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------------
// QUESTION3 - Create a form and submit button, on click of the button store your basic details from the form in the cookies.

const cookieName = document.getElementById("name");
const cookieAge = document.getElementById("age");
const cookieNumber = document.getElementById("number");
const outContent = document.getElementById("content");

function storeCookies() {
  outContent.innerHTML = `
    Name = ${cookieName.value}  
    age = ${cookieAge.value}  
    phone = ${cookieNumber.value}`;
  document.cookie = `${encodeURIComponent("name")}=${encodeURIComponent(
    cookieName.value,
  )}`;
  document.cookie = `${encodeURIComponent("age")}=${encodeURIComponent(
    cookieAge.value,
  )} `;
  document.cookie = `${encodeURIComponent("phone")}=${encodeURIComponent(
    cookieNumber.value,
  )} `;
}
const submit = document.getElementById("submit");
submit.addEventListener("click", storeCookies);

//-------------------------------------------------------------------------------------------------------------------------------------
// QUESTION4 - Redirect to the homepage of google from the console.

// document.location.href = 'http://google.com'

// -------------------------------------------------------------------------------------------------------------------------------------
//  QUESTION5 - Create a div with background color red, create buttons
//  a. to hide the div
//  b. to change the background color of the div
//  c. to show your basic details on the div, the details should hide/show, on the click.

document.getElementById("toHide").onclick = function () {
  // eslint-disable-next-line no-constant-condition, no-cond-assign
  if (document.getElementById("mainDiv").style.visibility !== "hidden") {
    document.getElementById("mainDiv").style.visibility = "hidden";
  } else {
    document.getElementById("mainDiv").style.visibility = "visible";
  }
  console.log(`button clicked`);
};
document.getElementById("toChangeColor").onclick = function () {
  if (document.getElementById("mainDiv").style.backgroundColor === "red") {
    document.getElementById("mainDiv").style.backgroundColor = "green";
  } else {
    document.getElementById("mainDiv").style.backgroundColor = "red";
  }
};
document.getElementById("toShowDetails").onclick = function () {
  if (document.getElementById("content").style.display !== "none") {
    document.getElementById("content").style.display = "none";
  } else {
    document.getElementById("content").style.display = "block";
  }
};

//-------------------------------------------------------------------------------------------------------------------------------------
// QUESTION6 - Create a select box with numbers 1 to 10,  when selected 9, you should change the selection to 10 and show a message that "9 is fully occupied please select another number", when selected any number other than 9 it should show a message as "you selected 'particular number' " in a div, on hovering the div it should change the background color of the div into a highlighting shade, while the mouse pointer leaves the message area the background color should go back to as before (don't use CSS to attain the hovering functionality)

const language = document.getElementById("language");
const message = document.getElementById("message");
language.onclick = function () {
  if (language.value === "9") {
    message.innerHTML = "9 is fully occupied please select another number";
    language.value = "10";
  } else {
    document.getElementById(
      "message",
    ).innerHTML = `"you selected '${language.value}' "`;
  }
  function backRed() {
    message.style.backgroundColor = "red";
  }
  function backWhite() {
    message.style.backgroundColor = "white";
  }
  message.addEventListener("mouseover", backRed);
  message.addEventListener("mouseout", backWhite);
};
//-------------------------------------------------------------------------------------------------------------------------------------
// QUESTION7 - Consider an array with names of 10 programming languages, make 10 buttons by iterating this array, when clicked on each button the name of the programming language should be shown in a corresponding div.

const programmingLanguage = [
  "javascript",
  "html",
  "css",
  "python",
  "java",
  "c",
  "c++",
  "PHP",
  "kotlin",
  "ruby",
];

programmingLanguage.forEach((value) => {
  const btn = document.createElement("button");
  btn.innerHTML = value;
  btn.style.margin = "20px";
  document.body.appendChild(btn);
  function nameLan() {
    document.getElementById("languageMessage").innerHTML = value;
  }
  btn.addEventListener("click", nameLan);
});

//-------------------------------------------------------------------------------------------------------------------------------------
// QUESTION8 - Create a form with a text field which when submitted, will change the tab title to whatever is entered, limit the field to 50 characters, otherwise show an error message, and stay on the same page when submitted(it shouldn't refresh).

document.getElementById("click").addEventListener("click", () => {
  if (document.getElementById("title").value.length <= 50) {
    document.title = document.getElementById("title").value;
  } else {
    alert("entered title is too long");
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------
// QUESTION9 - When the control+enter key is pressed show an alert message.

document.addEventListener("keyup", (event) => {
  const ctrl1 = event.key;
  if (ctrl1 === "Enter") {
    if (event.ctrlKey) {
      alert("Ctrl+enter key is pressed");
    }
  }
  console.log(ctrl1);
});
//-------------------------------------------------------------------------------------------------------------------------------------
