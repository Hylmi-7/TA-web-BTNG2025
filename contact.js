const form = document.getElementById("contactForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const firstNameError = document.getElementById("firstNameError");

const lastNameError = document.getElementById("lastNameError");

const emailError = document.getElementById("emailError");

const phoneError = document.getElementById("phoneError");

const statusMessage = document.getElementById("statusMessage");

// REGEX
const namePattern = /^[A-Za-z\s]+$/;
const phonePattern = /^[0-9]+$/;

// VALIDASI FIRST NAME
function validateFirstName() {
  if (firstName.value.trim() === "" || !namePattern.test(firstName.value)) {
    firstNameError.textContent = "Nama hanya boleh huruf a-z";
    firstName.classList.add("border-red-500");
    return false;
  } else {
    firstNameError.textContent = "";
    firstName.classList.remove("border-red-500");
    return true;
  }
}

// VALIDASI LAST NAME
function validateLastName() {
  if (lastName.value.trim() === "" || !namePattern.test(lastName.value)) {
    lastNameError.textContent = "Nama hanya boleh huruf a-z";
    lastName.classList.add("border-red-500");
    return false;
  } else {
    lastNameError.textContent = "";
    lastName.classList.remove("border-red-500");
    return true;
  }
}

// VALIDASI EMAIL
function validateEmail() {
  if (email.value.trim() === "" || !email.value.includes("@")) {
    emailError.textContent = "Email harus mengandung @";
    email.classList.add("border-red-500");
    return false;
  } else {
    emailError.textContent = "";
    email.classList.remove("border-red-500");
    return true;
  }
}

// VALIDASI PHONE
function validatePhone() {
  if (phone.value.trim() === "" || !phonePattern.test(phone.value)) {
    phoneError.textContent = "Nomor telepon hanya boleh angka 0-9";
    phone.classList.add("border-red-500");
    return false;
  } else {
    phoneError.textContent = "";
    phone.classList.remove("border-red-500");
    return true;
  }
}

// VALIDASI REALTIME
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);

// SUBMIT FORM
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();

  // CEK SEMUA VALID
  if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid) {
    statusMessage.textContent = "Terima kasih, sudah mengisi form!";
    statusMessage.className = "text-green-500 mt-3";

    form.reset();
  } else {
    statusMessage.textContent = "Input masih ada yang salah!";
    statusMessage.className = "text-red-500 mt-3";
  }
});
