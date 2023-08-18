//     ASSIGNMENT - 5
//     --------------

// QUESTION 1 - 

// Make a form with fields name, phone number, place, company name, pin code

// if any of the fields are empty on submitting it should show corresponding error messages below all the required fields.

// pin code and mobile number fields should not be submitted with non-integer values, if so, then show an error msg stating only numbers are allowed.

// The minimum length of the phone number should be 10, otherwise, show the corresponding error msg below the mobile no. field. 

// On submission of the form, store the details in the local storage and clear the form. (it should stay on the same page don't refresh the page).

// Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise, the button will be disabled.

// Note: The page shouldn't refresh on submitting the form in any of the questions and show error messages below the appropriate fields only.
/* eslint-disable no-restricted-globals */
const form = document.getElementById("form");
const userName = document.getElementById("username");
const phone = document.getElementById("phone");
const place = document.getElementById("place");
const company = document.getElementById("company");
const pincode = document.getElementById("pincode");

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const phoneValue = phone.value.trim();
  const placeValue = place.value.trim();
  const companyValue = company.value.trim();
  const pincodeValue = pincode.value.trim();

  if (userNameValue === "") {
    setError(userName, "Username is required");
    userName.classList.remove("ok");
  } else {
    setSuccess(userName);
    userName.classList.add("ok");
  }

  if (phoneValue === "") {
    setError(phone, "phone is required");
    phone.classList.remove("ok");
  } else if (isNaN(phoneValue)) {
    setError(phone, "only numbers are allowed");
    phone.classList.remove("ok");
  } else if (phoneValue.length < 10) {
    setError(phone, "Phonw number must be at least 10 character.");
    phone.classList.remove("ok");
  } else {
    setSuccess(phone);
    phone.classList.add("ok");
  }

  if (placeValue === "") {
    setError(place, "Place is required");
    place.classList.remove("ok");
  } else {
    setSuccess(place);
    place.classList.add("ok");
  }

  if (companyValue === "") {
    setError(company, "Company is required");
    company.classList.remove("ok");
  } else {
    setSuccess(company);
    company.classList.add("ok");
  }

  if (pincodeValue === "") {
    setError(pincode, "Pincode required");
    pincode.classList.remove("ok");
  } else if (isNaN(pincodeValue)) {
    setError(pincode, "only numbers are allowed");
    pincode.classList.remove("ok");
  } else {
    setSuccess(pincode);
    pincode.classList.add("ok");
  }

  if (
    userName.matches(".ok") === true &&
    phone.matches(".ok") === true &&
    place.matches(".ok") === true &&
    company.matches(".ok") === true &&
    pincode.matches(".ok") === true
  ) {
    localStorage.setItem("username", userNameValue);
    localStorage.setItem("phone", phoneValue);
    localStorage.setItem("place", placeValue);
    localStorage.setItem("company", companyValue);
    localStorage.setItem("pincode", pincodeValue);
    // form.reset();
    userName.value = "";
    phone.value = "";
    place.value = "";
    company.value = "";
    pincode.value = "";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const btnPopulate = document.getElementById("populate");
if (localStorage.getItem("username") !== "") {
  btnPopulate.addEventListener("click", () => {
    userName.value = localStorage.getItem("username");
    phone.value = localStorage.getItem("phone");
    place.value = localStorage.getItem("place");
    company.value = localStorage.getItem("company");
    pincode.value = localStorage.getItem("pincode");
  });
} else {
  btnPopulate.style.display = "none";
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUESTION 2 - 

// Create a button and div using JS, when clicked on the button your basic details should be shown in the div. The static HTML file should only contain the basic HTML structure, no div/buttons.


const localName = localStorage.getItem("username");
const localPhone = localStorage.getItem("phone");
const localPlace = localStorage.getItem("place");
const localCompany = localStorage.getItem("company");
const localPincode = localStorage.getItem("pincode");

const detailDiv = document.createElement("div");
detailDiv.innerHTML = `name : ${localName}  \n phone : ${localPhone} \n place : ${localPlace} \n company : ${localCompany} \n pincode : ${localPincode}`;
detailDiv.style.width = "200px";
detailDiv.style.height = "200px";
detailDiv.style.color = "white";
document.body.appendChild(detailDiv);
detailDiv.style.display = "none";
const btn = document.createElement("button");
btn.innerHTML = "clickme";
btn.style.margin = "20px";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  if (detailDiv.style.display === "none") {
    detailDiv.style.display = "block";
  } else {
    detailDiv.style.display = "none";
  }
});



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUESTION 3 - 
// Create a private variable and console it by accessing it.

function private() {
    const _privateVariable = "hello im a private variable";
    console.log(_privateVariable);
  }
  private();
  
// console.log(_privateVariable)
// This will give an error because the above variable is a private variable

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// QUESTION 4 - 
// Create a static variable and console it by accessing it.
class staticVariableClass{
    static staticVariable = "hello this is a static variable";
}

console.log(staticVariableClass.staticVariable)
