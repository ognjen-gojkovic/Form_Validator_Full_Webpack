import style from "../css/style.module.css";
import formControl from "../js/formControl";

const container = document.createElement("div");
const form = document.createElement("form");
const formHeader = document.createElement("h2");
const formButton = document.createElement("button");

formHeader.textContent = "Form Validator";

form.setAttribute("id", "form");
form.className = style.form;
formButton.textContent = "Submit";
form.appendChild(formHeader);
form.appendChild(
  formControl(
    "username",
    "Username",
    "text",
    "username",
    "Enter your username..."
  )
);
form.appendChild(
  formControl("email", "Email", "text", "email", "Enter your email...")
);
form.appendChild(
  formControl(
    "password",
    "Password",
    "password",
    "password",
    "Enter your password..."
  )
);
form.appendChild(
  formControl(
    "password2",
    "Confirm Password",
    "password",
    "password2",
    "Confirm password"
  )
);
form.appendChild(formButton);

// showError("Invalid Username");
// showError(form);

container.className = style.container;
container.appendChild(form);

export default container;
