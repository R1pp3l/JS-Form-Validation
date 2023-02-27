const zipCodeInput = document.getElementById("zipCodes");
zipCodeInput.setCustomValidity("Please enter the zip code");
zipCodeInput.addEventListener("input", () => {
  zipCodeInput.setCustomValidity("");
});

const usernameInput = document.getElementById("userName");
usernameInput.setCustomValidity("Please enter a Username");
usernameInput.addEventListener("input", () => {
  usernameInput.setCustomValidity("");
});

const emailInput = document.getElementById("userEmail");
emailInput.setCustomValidity("Please enter an email");
emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity("");
});

const passwordInput = document.getElementById("userPassword");
passwordInput.setCustomValidity("Please enter a password");
passwordInput.addEventListener("input", () => {
  passwordInput.setCustomValidity("");
});

const confirmPasswordInput = document.getElementById("confirmPassword");
confirmPasswordInput.setCustomValidity("Please enter the password again");
confirmPasswordInput.addEventListener("input", () => {
  confirmPasswordInput.setCustomValidity("");
});
