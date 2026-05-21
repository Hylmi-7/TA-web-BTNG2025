const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

const statusMessage = document.getElementById("statusMessage");

// Regex
const namePattern = /^[A-Za-z\s]+$/;
const phonePattern = /^[0-9]+$/;
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// VALIDASI REALTIME FIRST NAME
firstName.addEventListener("input", function () {
  if (!namePattern.test(firstName.value)) {
    firstNameError.textContent = "First name hanya boleh huruf a-z";
    firstName.classList.add("border-red-500");
  } else {
    firstNameError.textContent = "";
    firstName.classList.remove("border-red-500");
  }
});

// VALIDASI REALTIME LAST NAME
lastName.addEventListener("input", function () {
  if (!namePattern.test(lastName.value)) {
    lastNameError.textContent = "Last name hanya boleh huruf a-z";
    lastName.classList.add("border-red-500");
  } else {
    lastNameError.textContent = "";
    lastName.classList.remove("border-red-500");
  }
});

// VALIDASI REALTIME EMAIL
email.addEventListener("input", function () {
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Email harus mengandung @";
    email.classList.add("border-red-500");
  } else {
    emailError.textContent = "";
    email.classList.remove("border-red-500");
  }
});

// VALIDASI REALTIME PHONE
phone.addEventListener("input", function () {
  if (!phonePattern.test(phone.value)) {
    phoneError.textContent = "Nomor telepon hanya boleh angka 0-9";
    phone.classList.add("border-red-500");
  } else {
    phoneError.textContent = "";
    phone.classList.remove("border-red-500");
  }
});

// SUBMIT FORM
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Cek apakah semua valid
  if (
    namePattern.test(firstName.value) &&
    namePattern.test(lastName.value) &&
    emailPattern.test(email.value) &&
    phonePattern.test(phone.value)
  ) {
    statusMessage.textContent = "Thank you, your message has been sent!";
    statusMessage.className = "text-green-500 mt-3";

    document.getElementById("contactForm").reset();
  } else {
    statusMessage.textContent = "Periksa kembali input anda!";
    statusMessage.className = "text-red-500 mt-3";
  }
});
