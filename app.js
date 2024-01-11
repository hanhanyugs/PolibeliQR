document.addEventListener('DOMContentLoaded', function () {
  var qrCodeContainer = document.getElementById('qrcodes');

  var urlParams = new URLSearchParams(window.location.search);
  var guestName = urlParams.get('nama');
  var seatNumber = urlParams.get('seating');

  if (guestName && seatNumber) {
    var infoText = document.createElement('p');
    infoText.textContent = "Hello " + guestName + ", your seating location is at " + seatNumber + ".";
    qrCodeContainer.appendChild(infoText);
  } else {
    var errorText = document.createElement('p');
    errorText.textContent = "Invalid URL or missing information.";
    qrCodeContainer.appendChild(errorText);
  }
});
