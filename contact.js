document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil input
  const firstName = document.getElementById("firstName");

  const lastName = document.getElementById("lastName");

  const email = document.getElementById("email");

  const phone = document.getElementById("phone");

  const message = document.getElementById("message");

  const statusMessage = document.getElementById("statusMessage");

  // Ambil elemen error
  const firstNameError = document.getElementById("firstNameError");

  const lastNameError = document.getElementById("lastNameError");

  const emailError = document.getElementById("emailError");

  const phoneError = document.getElementById("phoneError");

  // Reset error
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  statusMessage.textContent = "";

  // Regex
  const namePattern = /^[A-Za-z\s]+$/;
  const phonePattern = /^[0-9]+$/;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  let valid = true;

  // Validasi First Name
  if (!namePattern.test(firstName.value)) {
    firstNameError.textContent = "First name hanya boleh huruf a-z";
    firstName.classList.add("border-red-500");
    valid = false;
  } else {
    firstName.classList.remove("border-red-500");
  }

  // Validasi Last Name
  if (!namePattern.test(lastName.value)) {
    lastNameError.textContent = "Last name hanya boleh huruf a-z";
    lastName.classList.add("border-red-500");
    valid = false;
  } else {
    lastName.classList.remove("border-red-500");
  }

  // Validasi Email
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Email harus mengandung @";
    email.classList.add("border-red-500");
    valid = false;
  } else {
    email.classList.remove("border-red-500");
  }

  // Validasi Phone
  if (!phonePattern.test(phone.value)) {
    phoneError.textContent = "Nomor telepon hanya boleh angka 0-9";
    phone.classList.add("border-red-500");
    valid = false;
  } else {
    phone.classList.remove("border-red-500");
  }

  // Jika valid
  if (valid) {
    statusMessage.textContent = "Thank you, your message has been sent!";
    statusMessage.className = "text-green-500 mt-3";

    document.getElementById("contactForm").reset();
  }
});
