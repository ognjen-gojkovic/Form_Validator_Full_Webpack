import style from "../css/style.module.css";

function formControl(labelFor, labelTitle, inputType, inputId, placeholder) {
  const formControl = document.createElement("div");
  const formLabel = document.createElement("label");
  const formInput = document.createElement("input");
  const formSmall = document.createElement("small");

  formLabel.htmlFor = `${labelFor}`;
  formLabel.textContent = `${labelTitle}`;
  formInput.type = `${inputType}`;
  formInput.id = `${inputId}`;
  formInput.placeholder = `${placeholder}`;
  formControl.className = style.formControl;
  formControl.appendChild(formLabel);
  formControl.appendChild(formInput);
  formControl.appendChild(formSmall);

  console.log("formcontrol id: ", formControl.id);
  return formControl;
}

export default formControl;
