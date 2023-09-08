/* eslint-disable no-restricted-globals */
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

const form = document.getElementById("form");
const userName = document.getElementById("username");
const phone = document.getElementById("phone");
const place = document.getElementById("place");
const company = document.getElementById("company");
const pincode = document.getElementById("pincode");

let storedUsername = "Sreerag M K";
    let storedPhone = "8921908589";
    let storedPlace = "Azhikode";
    let storedCompany = "Coddle tech";
    let storedPincode = "644646464";

const btnPopulate = document.getElementById("populate");

const setError = (element, Check, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  if (Check === true) {
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  } else {
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  }
};

const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const phoneValue = phone.value.trim();
  const placeValue = place.value.trim();
  const companyValue = company.value.trim();
  const pincodeValue = pincode.value.trim();

  let userNameCheck = false;
  let phoneCheck = false;
  let placeCheck = false;
  let companyCheck = false;
  let pincodeCheck = false;

  // try other ways.-----------------------------------------------------------------------------------------------------------------------------------------------------------
  // can we do it without setSuccess function-----------------------------------------------------------------------------------------------------------------------------------------------------------
  if (userNameValue === "") {
    userNameCheck = false;
    setError(userName, userNameCheck, "Username is required");
    // check any other methods other than adding 'ok'----------------------------------------------------------------------------------------------------------------------------------------------------------- // COMPLETED ( ADDED A VARIABLE AND CHECKED TRUE OR FALSE )
  } else {
    // setSuccess(userName);
    userNameCheck = true;
    setError(userName, userNameCheck);
  }

  if (phoneValue === "") {
    phoneCheck = false;
    setError(phone, phoneCheck, "phone is required");
  } else if (isNaN(phoneValue)) {
    phoneCheck = false;
    setError(phone, phoneCheck, "only numbers are allowed");
  } else if (phoneValue.length < 10) {
    phoneCheck = false;
    setError(phone, phoneCheck, "Phonw number must be at least 10 character.");
  } else {
    // setSuccess(phone);
    phoneCheck = true;
    setError(phone, phoneCheck);
  }

  if (placeValue === "") {
    placeCheck = false;
    setError(place, placeCheck, "Place is required");
  } else {
    // setSuccess(place);
    placeCheck = true;
    setError(place, placeCheck);
  }

  if (companyValue === "") {
    companyCheck = false;
    setError(company, companyCheck, "Company is required");
  } else {
    // setSuccess(company);
    companyCheck = true;
    setError(company, companyCheck);
  }

  if (pincodeValue === "") {
    pincodeCheck = false;
    setError(pincode, pincodeCheck, "Pincode required");
  } else if (isNaN(pincodeValue)) {
    pincodeCheck = false;
    setError(pincode, pincodeCheck, "only numbers are allowed");
  } else {
    // setSuccess(pincode);
    pincodeCheck = true;
    setError(pincode, pincodeCheck);
  }

  if (
    userNameCheck === true &&
    phoneCheck === true &&
    placeCheck === true &&
    companyCheck === true &&
    pincodeCheck === true
  ) {
    //store it as a single object-----------------------------------------------------------------------------------------------------------------------------------------------------------

    const singleObj = {
      name: userNameValue,
      phone: phoneValue,
      place: placeValue,
      company: companyValue,
      pincode: pincodeValue,
    };
    const obj = JSON.stringify(singleObj);
    localStorage.setItem("value", obj);
    userName.value = "";
    phone.value = "";
    place.value = "";
    company.value = "";
    pincode.value = "";

    const obj2 = JSON.parse(localStorage.getItem("value"));
     storedUsername = obj2["name"];
     storedPhone = obj2["phone"];
     storedPlace = obj2["place"];
     storedCompany = obj2["company"];
     storedPincode = obj2["pincode"];

    console.log(typeof storedUsername)
    // why only username condition is checking here-----------------------------------------------------------------------------------------------------------------------------------------------------------// COMPLETED
    if (
      storedUsername !== "" &&
      storedPhone !== "" &&
      storedPlace !== "" &&
      storedCompany !== "" &&
      storedPincode !== ""
    ) {
      btnPopulate.addEventListener("click", () => {
        userName.value = storedUsername;
        phone.value = storedPhone;
        place.value = storedPlace;
        company.value = storedCompany;
        pincode.value = storedPincode;
      });
    } else {
      btnPopulate.style.display = "none";
    }

    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // QUESTION 2 -

    // Create a button and div using JS, when clicked on the button your basic details should be shown in the div. The static HTML file should only contain the basic HTML structure, no div/buttons.

}
};

const detailDiv = document.createElement("div");
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
    console.log(storedCompany)
    detailDiv.innerHTML = `name : ${storedUsername}  \n phone : ${storedPhone} \n place : ${storedPlace} \n company : ${storedCompany} \n pincode : ${storedPincode}`;
    if (detailDiv.style.display === "none") {
        detailDiv.style.display = "block";
    } else {
        detailDiv.style.display = "none";
    }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
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
class staticVariableClass {
  static staticVariable = "hello this is a static variable";
}
console.log(staticVariableClass.staticVariable);
