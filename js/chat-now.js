function sendMessage2() {
    var phoneNumber = '6281218141079';
    var message = "Hello, saya ingin bertanya tentang produk-produk kaos yang dijual oleh YZD Design. Mohon informasinya;";
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url);
  }