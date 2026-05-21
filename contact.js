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
const namePattern = /^[A-Za-z]+$/;
const phonePattern = /^[0-9]+$/;

// VALIDASI FIRST NAME
firstName.addEventListener("input", () => {
  if (!namePattern.test(firstName.value)) {
    firstNameError.textContent = "Nama hanya boleh huruf a-z";
    firstName.classList.add("border-red-500");
  } else {
    firstNameError.textContent = "";
    firstName.classList.remove("border-red-500");
  }
});

// VALIDASI LAST NAME
lastName.addEventListener("input", () => {
  if (!namePattern.test(lastName.value)) {
    lastNameError.textContent = "Nama hanya boleh huruf a-z";
    lastName.classList.add("border-red-500");
  } else {
    lastNameError.textContent = "";
    lastName.classList.remove("border-red-500");
  }
});

// VALIDASI EMAIL
email.addEventListener("input", () => {
  if (!email.value.includes("@")) {
    emailError.textContent = "Email harus mengandung @";
    email.classList.add("border-red-500");
  } else {
    emailError.textContent = "";
    email.classList.remove("border-red-500");
  }
});

// VALIDASI PHONE
phone.addEventListener("input", () => {
  if (!phonePattern.test(phone.value)) {
    phoneError.textContent = "Nomor telepon hanya boleh angka 0-9";
    phone.classList.add("border-red-500");
  } else {
    phoneError.textContent = "";
    phone.classList.remove("border-red-500");
  }
});

// SUBMIT
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // cek semua valid
  const validName =
    namePattern.test(firstName.value) && namePattern.test(lastName.value);

  const validEmail = email.value.includes("@");

  const validPhone = phonePattern.test(phone.value);

  if (validName && validEmail && validPhone) {
    statusMessage.textContent = "Thank you, your message has been sent!";
    statusMessage.className = "text-green-500 mt-3";

    form.reset();
  } else {
    statusMessage.textContent = "Input masih ada yang salah!";
    statusMessage.className = "text-red-500 mt-3";
  }
});
