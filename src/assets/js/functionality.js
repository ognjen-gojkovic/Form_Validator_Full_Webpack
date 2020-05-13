import { showError, showSuccess } from "../js/messages";

export function checkEmail(input) {
  const formEmail = document.querySelector(`#${input}`);
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(formEmail.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid.");
  }
}

// get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// function check validity
export function checkLenght(input, min, max) {
  const formElement = document.querySelector(`#${input}`);
  if (formElement.value.length < min) {
    showError(
      input,
      `${getFieldName(formElement)} must be at least ${min} characters long.`
    );
  } else if (formElement.value.lenght > max) {
    showError(
      input,
      `${getFieldName(formElement)} must be less then ${max} characters long.`
    );
  } else {
    showSuccess(input);
  }
}

// check passwords match
export function checkPasswordsMatch(input1, input2) {
  const formPassword1 = document.querySelector(`#${input1}`);
  const formPassword2 = document.querySelector(`#${input2}`);

  console.log("formPassword: ", formPassword1);
  if (formPassword1.value !== formPassword2.value) {
    showError(input2, "Passwords do not match.");
  } else {
    showSuccess(input2);
  }
}
