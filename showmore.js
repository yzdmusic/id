// MODE MOBILE //
function showMore() {
    var hiddenCards = document.querySelectorAll('.hidden'); // Semua kartu yang masih tersembunyi
    var btnText = document.getElementById("showMoreBtn");
    var cardsToShow = 5; // Jumlah kartu yang akan ditampilkan setiap kali klik

    // Tampilkan maksimal 5 kartu tersembunyi
    hiddenCards.forEach((card, index) => {
        if (index < cardsToShow) {
            card.classList.remove('hidden'); // Menampilkan kartu
        }
    });

    // Perbarui daftar kartu tersembunyi setelah sebagian sudah ditampilkan
    hiddenCards = document.querySelectorAll('.hidden');

    // Jika tidak ada lagi kartu tersembunyi, sembunyikan tombol
    if (hiddenCards.length === 0) {
        btnText.style.display = 'none';
    }
}