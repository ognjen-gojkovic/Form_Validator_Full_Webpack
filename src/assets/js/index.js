import "../css/style.css";

function saySomething(message) {
  const element = document.createElement("h2");
  element.textContent = message;
  document.body.appendChild(element);
}

saySomething("Hello from the other side!!");
