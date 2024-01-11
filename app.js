document.addEventListener('DOMContentLoaded', function () {
  var qrCodeContainer = document.getElementById('qrcodes');

  // Ganti URL berikut sesuai dengan URL yang dihasilkan oleh skrip Apps Script di Google Sheets
  var urlFromSheet = "https://hanhanyugs.github.io/PolibeliQR/?nama=John&seating=0.02";

  // Fungsi untuk mendapatkan nilai parameter dari URL
  function getParameterValue(url, parameterName) {
    var urlParams = new URLSearchParams(url);
    return urlParams.get(parameterName);
  }

  // Mendapatkan nilai parameter 'nama' dan 'seating' dari URL
  var guestName = getParameterValue(urlFromSheet, 'nama');
  var seatNumber = getParameterValue(urlFromSheet, 'seating');

  // Fungsi untuk menambahkan QR Code ke elemen dengan id 'qrcodes'
  function addQRCode(url) {
    var qrCode = new QRCode(qrCodeContainer, {
      text: url,
      width: 150,
      height: 150
    });
  }

  // Memeriksa keberadaan parameter yang diperlukan
  if (guestName && seatNumber) {
    // Jika parameter ada, maka tampilkan informasi
    var infoText = document.createElement('p');
    infoText.textContent = "Hello " + guestName + ", your seating location is at " + seatNumber + ".";
    qrCodeContainer.appendChild(infoText);
  } else {
    // Jika parameter tidak lengkap, tampilkan pesan kesalahan
    var errorText = document.createElement('p');
    errorText.textContent = "Invalid QR Code or missing information.";
    qrCodeContainer.appendChild(errorText);
  }
});
