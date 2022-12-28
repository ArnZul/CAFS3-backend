// task1 hello world
document.getElementById("helloWorldButton").addEventListener("click", () => {
  alert("Hello World!");
});
// task2 change registrar
const task2Input = document.getElementById("task2Input");
const registrarButtons = {
  button1: document.getElementById("upperCaseButton"),
  button2: document.getElementById("lowerCaseButton"),
  button3: document.getElementById("capitalizeButton"),
  button4: document.getElementById("decapitalizeButton"),
};
for (const button in registrarButtons) {
  registrarButtons[button].addEventListener("click", () => {
    changeRegistrar(task2Input, registrarButtons[button].value);
  });
}
function changeRegistrar(element, action) {
  switch (action) {
    case "upperCase":
      element.value = element.value.toUpperCase();
      break;
    case "lowerCase":
      element.value = element.value.toLowerCase();
      break;
    case "capitalizeFirst":
      element.value =
        element.value.charAt(0).toUpperCase() + element.value.slice(1);
      break;
    case "lowercaseFirst":
      element.value =
        element.value.charAt(0).toLowerCase() + element.value.slice(1);
      break;
  }
}
// task3
function validateEmail(email) {
  const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFormat.test(String(email).toLowerCase());
}

function validatePhoneNumber(phoneNumber) {
  var re = /^\+\d{1,3}\d{9,15}$/;
  return re.test(phoneNumber);
}
// const ValidateButton = document.getElementById("ValidateFormButton");
var form = document.getElementById("form");

// Add an event listener to the form's submit event
form.addEventListener("submit", function (event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the email and phone number values from the input fields
  var email = document.getElementById("emailInput").value;
  var phoneNumber = document.getElementById("phoneInput").value;

  // Validate the email and phone number
  if (!validateEmail(email)) {
    // If the email is invalid, show an error message
    document
      .getElementById("emailInput")
      .classList.add("border", "border-2", "border-danger");
    document.getElementById("emailError").style.display = "block";
  } else {
    // If the email is valid, hide the error message
    document
      .getElementById("emailInput")
      .classList.remove("border", "border-2", "border-danger");
    document.getElementById("emailError").style.display = "none";
  }

  if (!validatePhoneNumber(phoneNumber)) {
    // If the phone number is invalid, show an error message
    document
      .getElementById("phoneInput")
      .classList.add("border", "border-2", "border-danger");
    document.getElementById("phoneError").style.display = "block";
  } else {
    // If the phone number is valid, hide the error message
    document
      .getElementById("phoneInput")
      .classList.remove("border", "border-2", "border-danger");
    document.getElementById("phoneError").style.display = "none";
  }
});

// task4
const blockButton = document.getElementById("blockButton");
const unblockButton = document.getElementById("unblockButton");
const inputElement = document.getElementById("blockUnblockInput");
toggleInputBlock(blockButton, unblockButton, inputElement);

function toggleInputBlock(blockButton, unblockButton, inputElement) {
  blockButton.addEventListener("click", () => {
    inputElement.setAttribute("disabled", true);
  });
  unblockButton.addEventListener("click", () => {
    inputElement.removeAttribute("disabled");
  });
}
//task5
const imageForHover = document.getElementById("hoverImg");
imageForHover.addEventListener("mouseover", () => {
  // Change the source of the image to the second image
  imageForHover.src = "https://imgur.com/PLDVxza.jpg";
});
imageForHover.addEventListener("mouseout", () => {
  // Change the source of the image back to the first image
  imageForHover.src = "https://imgur.com/0DElr0H.jpg";
});
//task6

const BlockquoteFigure = document.querySelector("figure");
let cursorsMenu = document.querySelector(
  ".btn-group .dropdown:nth-of-type(1) ul"
);

// Add event listeners to the dropdown menus
cursorsMenu.addEventListener("click", function (event) {
  // Get the selected cursor
  let cursor = event.target.textContent.toLowerCase();

  // Set the blockquote element's cursor to the selected cursor
  BlockquoteFigure.style.cursor = cursor;
});

const colorsMenu = document.querySelector(
  ".btn-group .dropdown:nth-of-type(2) ul"
);
colorsMenu.addEventListener("click", function (event) {
  let color = event.target.closest("li").getAttribute("data-color");

  BlockquoteFigure.classList.remove(
    "text-danger",
    "text-success",
    "text-primary"
  );
  if (color === "Red") {
    BlockquoteFigure.classList.add("text-danger");
  } else if (color === "Green") {
    BlockquoteFigure.classList.add("text-success");
  } else if (color === "Blue") {
    BlockquoteFigure.classList.add("border", "border-primary");
  }
});

const bordersMenu = document.querySelector(
  ".btn-group .dropdown:nth-of-type(3) ul"
);
bordersMenu.addEventListener("click", function (event) {
  let borderColor = event.target.closest("li").getAttribute("data-color");

  BlockquoteFigure.classList.remove(
    "border",
    "border-primary",
    "border-success",
    "border-danger"
  );
  if (borderColor === "Red") {
    BlockquoteFigure.classList.add("border", "border-danger");
  } else if (borderColor === "Green") {
    BlockquoteFigure.classList.add("border", "border-success");
  } else if (borderColor === "Blue") {
    BlockquoteFigure.classList.add("border", "border-primary");
  }
});
const ResetButton = document.getElementById("resetButton");
ResetButton.addEventListener("click", function () {
  BlockquoteFigure.removeAttribute("style");
  BlockquoteFigure.classList.remove(
    "text-danger",
    "text-success",
    "text-primary",
    "border",
    "border-primary",
    "border-success",
    "border-danger"
  );
});
// task 7
const modalPromptButton = document.querySelector("#promptModal");
const modal = document.querySelector("#modal");
modalPromptButton.addEventListener("click", () => {
  console.log("prompted");
  modal.style.display = "block";
});

// On load
window.addEventListener("load", function () {
  // Get a reference to the element
  document.getElementById("emailError").style.display = "none";
  document.getElementById("phoneError").style.display = "none";
});
