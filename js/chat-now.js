function sendMessage2() {
  var phoneNumber = '6281218141079';
  var message = "Hello, saya ingin bertanya tentang produk-produk kaos yang dijual oleh YZD Design. Mohon informasinya;";
  var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.open(url);
}





// GAYA FONT
document.addEventListener("DOMContentLoaded", () => {
  // Tambahkan link Google Fonts ke <head>
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = "https://fonts.googleapis.com/css2?family=Poppins&display=swap";
  document.head.appendChild(fontLink);

  // Tunggu beberapa ms agar font bisa dimuat dulu, lalu terapkan
  setTimeout(() => {
    document.body.style.fontFamily = "'Poppins', sans-serif";
  }, 100);
});