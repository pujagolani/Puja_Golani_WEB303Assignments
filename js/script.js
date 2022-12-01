import { countries } from "./countries.js";
const form = document.getElementById("form");
const username = document.getElementById("username");
// const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const terms_condition = document.getElementById("terms_condition");
const selectCountry = document.getElementById("selectCountries");
const submit = document.getElementById("btn-submit");
console.log("submit.disabled :>> ", submit.disabled);

for (var i = 0; i < countries.length; i++) {
  var optco = countries[i];
  var opt = document.createElement("option");
  opt.textContent = optco.name;
  opt.value = optco.code;
  selectCountry.appendChild(opt);
}

disableSubmit();
function disableSubmit() {
  if (
    username.value == "" &&
    password.value == "" &&
    password2.value == "" &&
    terms_condition.checked == false &&
    selectCountry.options[selectCountry.selectedIndex].value == "select country"
  ) {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}

//Show input error messages
function showError(input, message) {
  const formControl = input.parentElement;
  if (formControl.id == "checkbox") {
    formControl.className = "form-control error checkboxStyle";
  } else {
    formControl.className = "form-control error";
  }
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//show success colour
function showSucces(input) {
  const formControl = input.parentElement;
  if (formControl.id == "checkbox") {
    formControl.className = "form-control success checkboxStyle";
  } else {
    formControl.className = "form-control success";
  }
}

//checkRequired fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucces(input);
    }
  });
}

//check input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be les than ${max} characters`
    );
  } else {
    showSucces(input);
  }
}

//get FieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check passwords match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

function checkTermsCondition(input) {
  if (!input.checked) {
    showError(input, "you don't have to write up a terms of service");
  } else {
    showSucces(input);
  }
}

function selectCountriesValue(input) {
  var strUser = input.options[input.selectedIndex].value;
  var strUser1 = input.options[input.selectedIndex].text;

  if (strUser == "select country") {
    showError(input, "the first value is not selected");
  } else {
    showSucces(input);
  }
}

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([
    username,
    password,
    password2,
    terms_condition,
    selectCountry,
  ]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  //   checkEmail(email);
  checkPasswordMatch(password, password2);
  checkTermsCondition(terms_condition);
  selectCountriesValue(selectCountry);
});
