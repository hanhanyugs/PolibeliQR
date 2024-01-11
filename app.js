document.addEventListener('DOMContentLoaded', function () {
  // Ambil elemen div untuk menampilkan QR Code
  var qrCodeContainer = document.getElementById('qrcodes');

  // Ambil data QR Code dan informasi tambahan dari Google Sheets atau API lainnya
  var qrCodeData = [
    { url: "URL_QR_CODE_1", seatNumber: "Seat 1", guestName: "Guest 1" },
    { url: "URL_QR_CODE_2", seatNumber: "Seat 2", guestName: "Guest 2" },
    // ...
  ];

  // Tampilkan QR Code dan informasi tambahan menggunakan library QRCode.js
  qrCodeData.forEach(function (data) {
    var qrCode = new QRCode(qrCodeContainer, {
      text: data.url,
      width: 150,
      height: 150
    });

    // Tambahkan informasi tambahan di bawah QR Code
    var infoText = document.createElement('p');
    infoText.textContent = "Hello " + data.guestName + ", your seating location is at " + data.seatNumber + ".";
    qrCodeContainer.appendChild(infoText);
  });
});
