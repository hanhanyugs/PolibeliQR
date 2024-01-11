document.addEventListener('DOMContentLoaded', function () {
  var qrCodeContainer = document.getElementById('qrcodes');

  // Ganti URL berikut sesuai dengan URL yang dihasilkan oleh skrip Apps Script di Google Sheets
  var urlFromSheet = "https://hanhanyugs.github.io/PolibeliQR/?nama=John&seating=0.02";

  // Fungsi untuk menambahkan QR Code ke elemen dengan id 'qrcodes'
  function addQRCode(url) {
    var qrCode = new QRCode(qrCodeContainer, {
      text: url,
      width: 150,
      height: 150
    });
  }

  // Fungsi untuk mengecek keberadaan parameter yang diperlukan
  function isValidURL(url) {
    var urlParams = new URLSearchParams(url);
    var guestName = urlParams.get('nama');
    var seatNumber = urlParams.get('seating');
    return guestName && seatNumber;
  }

  // Panggil fungsi addQRCode dengan URL yang sesuai
  if (isValidURL(urlFromSheet)) {
    addQRCode(urlFromSheet);
  } else {
    var errorText = document.createElement('p');
    errorText.textContent = "Invalid QR Code or missing information.";
    qrCodeContainer.appendChild(errorText);
  }
});
