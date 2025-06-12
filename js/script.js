// Menyambut user
window.onload = function () {
  const name = prompt("Masukkan nama kamu:");
  if (name) {
    document.getElementById("welcome").textContent = `Hi ${name}, Welcome To Website`;
  }
};

// Form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggal").value;
  const pesan = document.getElementById("pesan").value;
  const genderEls = document.getElementsByName("gender");
  let gender = "";

  for (let el of genderEls) {
    if (el.checked) {
      gender = el.value;
      break;
    }
  }

  const resultBox = document.getElementById("resultBox");
  resultBox.innerHTML = `
    <div style="border: 1px solid #333; padding: 10px; margin-top: 20px;">
      <strong>Nama:</strong> ${nama}<br>
      <strong>Tanggal Lahir:</strong> ${tanggal}<br>
      <strong>Jenis Kelamin:</strong> ${gender}<br>
      <strong>Pesan:</strong> ${pesan}
    </div>
  `;
});
