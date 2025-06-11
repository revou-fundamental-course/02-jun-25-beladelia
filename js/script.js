document.addEventListener("DOMContentLoaded", function () {
  const name = prompt("Siapa nama kamu?");
  if (name) {
    document.getElementById("welcome-text").innerText = `Hi ${name}, Welcome To Website`;
  }

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("name").value;
    const tanggalLahir = document.getElementById("dob").value;
    const jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("message-text").value;

    const output = `
      <p><strong>Nama:</strong> ${nama}</p>
      <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
      <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
      <p><strong>Pesan:</strong> ${pesan}</p>
    `;
    document.getElementById("form-output").innerHTML = output;
  });
});
