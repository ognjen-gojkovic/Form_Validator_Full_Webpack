import style from "../css/style.module.css";

export function showError(element, message) {
  const formInput = document.querySelector(`#${element}`);
  console.log("form input: ", formInput);
  formInput.parentElement.className = `${style.formControl} ${style.error}`;
  const formSmall = formInput.parentElement.querySelector("small");
  formSmall.innerText = message;

  // const formControl = element.querySelector(`.${style.formControl}`);
  // formControl.className = `${style.formControl} ${style.error}`;
  // const formSmall = formControl.querySelector("small");
  // formSmall.innerText = message;
}

export function showSuccess(element) {
  const formControl = document.querySelector(`#${element}`);
  formControl.parentElement.className = `${style.formControl} ${style.success}`;
}
