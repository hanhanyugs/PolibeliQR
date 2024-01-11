document.addEventListener('DOMContentLoaded', function () {
  // Ganti 'USERNAME' dan 'REPO' sesuai dengan informasi GitHub Anda
  var githubPagesBaseUrl = "https://hanhanyugs.github.io/PolibeliQR/";

  // Ambil elemen container untuk menampilkan QR Code
  var qrCodeContainer = document.getElementById('qrcodes');

  // Ambil data dari kolom B (nomor seating) dan C (nama customer)
  var seatingNumberElements = document.querySelectorAll('.seating-number');
  var customerNameElements = document.querySelectorAll('.customer-name');

  // Loop melalui elemen-elemen dan buat QR Code
  for (var i = 0; i < seatingNumberElements.length; i++) {
    var seatingNumber = seatingNumberElements[i].textContent.trim();
    var customerName = customerNameElements[i].textContent.trim();

    // Jika ada informasi nama dan nomor seating, buat URL GitHub Pages
    if (customerName !== "" && seatingNumber !== "") {
      var githubPagesUrl = githubPagesBaseUrl + "?nama=" + encodeURIComponent(customerName) + "&seating=" + encodeURIComponent(seatingNumber);

      // Membuat QR Code
      var qrCode = new QRCode(qrCodeContainer, {
        text: githubPagesUrl,
        width: 150,
        height: 150
      });
    }
  }
});
