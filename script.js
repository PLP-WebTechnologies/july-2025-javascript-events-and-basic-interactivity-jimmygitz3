// Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  count--;
  counterDisplay.textContent = count;
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Clear previous messages
  document.getElementById("formMessage").textContent = "";
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let isValid = true;

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }
    // Validate Password
document.getElementById("password").addEventListener("input", function () {
  const password = this.value;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  if (passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent = "";
  }
});

  // Final feedback
  if (isValid) {
    document.getElementById("formMessage").textContent = "Form submitted successfully!";
    document.getElementById("myForm").reset();
  }
});