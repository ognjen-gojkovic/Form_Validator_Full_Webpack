import style from "../css/style.module.css";
import form from "./form";
import {
  checkEmail,
  checkLenght,
  checkPasswordsMatch,
} from "../js/functionality";

const app = document.createElement("div");
app.classList.add(style.app);
app.appendChild(form);

document.body.appendChild(app);

const appForm = document.querySelector("form");
console.log(appForm);
appForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail("email");
  checkLenght("username", 3, 15);
  checkLenght("password", 6, 25);
  checkPasswordsMatch("password", "password2");
});
