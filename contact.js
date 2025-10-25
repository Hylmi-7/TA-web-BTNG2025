document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai input
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const statusMessage = document.getElementById("statusMessage");

  // Validasi sederhana
  if (!firstName || !lastName || !email || !message) {
    statusMessage.textContent = "Please fill in all fields.";
    statusMessage.className = "error";
    return;
  }

  // Validasi email sederhana
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    statusMessage.textContent = "Please enter a valid email address.";
    statusMessage.className = "error";
    return;
  }

  // Tampilkan pesan sukses
  statusMessage.textContent = "Thank you, your message has been sent!";
  statusMessage.className = "success";

  // Reset form
  document.getElementById("contactForm").reset();
});
