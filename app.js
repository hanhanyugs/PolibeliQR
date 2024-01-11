document.addEventListener('DOMContentLoaded', function () {
  // Ganti 'USERNAME' dan 'REPO' sesuai dengan informasi GitHub Anda
  var githubPagesBaseUrl = "https://hanhanyugs.github.io/PolibeliQR/";

  // Ambil elemen container untuk menampilkan QR Code
  var qrCodeContainer = document.getElementById('qrcodes');

  // Ambil data dari kolom B (nomor seating) dan C (nama customer)
  var seatingNumberElements = document.querySelectorAll('.seating-number');
  var customerNameElements = document.querySelectorAll('.customer-name');

  // Logika polling untuk mendapatkan data terbaru
  function pollLatestData() {
  fetch('https://script.google.com/macros/s/AKfycbwk4ojvDgsjON3_Ln6tUV6bTggZLZTe58LNoR2-NJToi5J_FXn40YTkbhhTDDpWvo15/exec/getLatestData')
    .then(response => response.json())
    .then(data => {
      // Lakukan sesuatu dengan data yang diterima
      console.log('Received latest data:', data);

      // Perbarui tampilan berdasarkan data terbaru
      updateView(data);
    })
    .catch(error => console.error('Error:', error));
}

// Fungsi untuk memperbarui tampilan berdasarkan data terbaru
function updateView(data) {
  // Loop melalui elemen-elemen dan periksa apakah data cocok
  for (var i = 0; i < seatingNumberElements.length; i++) {
    var seatingNumber = seatingNumberElements[i].textContent.trim();
    var customerName = customerNameElements[i].textContent.trim();

    // Jika ada informasi nama dan nomor seating, dan data cocok
    if (customerName !== "" && seatingNumber !== "" && data.name === customerName && data.seating === seatingNumber) {
      var githubPagesUrl = githubPagesBaseUrl + "?nama=" + encodeURIComponent(customerName) + "&seating=" + encodeURIComponent(seatingNumber);

      // Membuat QR Code
      var qrCode = new QRCode(qrCodeContainer, {
        text: githubPagesUrl,
        width: 150,
        height: 150
      });

      // Hentikan loop setelah menemukan data yang cocok
      break;
    }
  }
}
