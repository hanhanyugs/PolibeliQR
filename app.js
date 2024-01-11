document.addEventListener('DOMContentLoaded', function () {
  var qrCodeContainer = document.getElementById('qrcodes');

  var urlParams = new URLSearchParams(window.location.search);
  var code = urlParams.get('code');
  var seatNumber = urlParams.get('seat');
  var guestName = urlParams.get('name');

  if (code && seatNumber && guestName) {
    var qrCode = new QRCode(qrCodeContainer, {
      text: "Code: " + code + "\nSeat: " + seatNumber,
      width: 150,
      height: 150
    });

    var infoText = document.createElement('p');
    infoText.textContent = "Hello " + guestName + ", your seating location is at " + seatNumber + ".";
    qrCodeContainer.appendChild(infoText);
  } else {
    var errorText = document.createElement('p');
    errorText.textContent = "Invalid QR Code or missing information.";
    qrCodeContainer.appendChild(errorText);
  }
});
