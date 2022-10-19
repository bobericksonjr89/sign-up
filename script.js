/* DOM CAPTURE */

const inputs = document.querySelectorAll("input");
const password1 = document.querySelector("#pwd");
const password2 = document.querySelector("#pwd2");
const form = document.querySelector("form");
const output = document.querySelector("output");


/* EVENT LISTENERS */
inputs.forEach((input) => {
  input.addEventListener("focusout", () => {
    if (!input.checkValidity()) {
      input.classList.add("error")
    } else if (input.checkValidity()) {
      input.classList.remove("error")
    }
  })
})  

form.addEventListener("submit", (e) => {
  if (password1.value !== password2.value) {
    e.preventDefault();
    displayError("Passwords do not match");
    return;
  }
})

/* DOM MANIPULATION */

function displayError(errorString) {
  output.textContent = errorString + '*';
  password1.classList.add('no-match');
  password2.classList.add('no-match');
  password1.value = '';
  password2.value = '';
}

/* FUNCTIONS */

