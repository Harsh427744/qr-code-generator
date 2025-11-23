function generateQR() {
    var api = "https://api.qrserver.com/v1/create-qr-code/?";
    var myimg = document.getElementById("qrimg");
    var mytext = document.getElementById("qrtext").value.trim();
    var mysize = document.getElementById("size").value;

    if (mytext !== "") {
        var url = api + "size=" + mysize + "&data=" + encodeURIComponent(mytext);
        myimg.src = url;
    } else {
        alert("Please enter text to generate QR Code");
    }
}
