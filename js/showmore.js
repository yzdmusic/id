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

function showMore1() {
    var hiddenCards = document.querySelectorAll('.hidden1'); // Semua kartu yang masih tersembunyi
    var btnText = document.getElementById("showMoreBtn1");
    var cardsToShow = 500; // Jumlah kartu yang akan ditampilkan setiap kali klik

    // Tampilkan maksimal 5 kartu tersembunyi
    hiddenCards.forEach((card, index) => {
        if (index < cardsToShow) {
            card.classList.remove('hidden1'); // Menampilkan kartu
        }
    });

    // Perbarui daftar kartu tersembunyi setelah sebagian sudah ditampilkan
    hiddenCards = document.querySelectorAll('.hidden1');

    // Jika tidak ada lagi kartu tersembunyi, sembunyikan tombol
    if (hiddenCards.length === 0) {
        btnText.style.display = 'none';
    }
}





// FOLLOW AND FOLLOWING //
// ambil data follow dari localStorage atau bikin object baru
let followData = JSON.parse(localStorage.getItem("follow_status")) || {};

// fungsi update button
function updateButton(btn, id) {
    if (followData[id]) {
        btn.innerText = "Following";
        btn.classList.add("following");
    } else {
        btn.innerText = "Follow";
        btn.classList.remove("following");
    }
}

// loop semua tombol
document.querySelectorAll(".follow-btn").forEach((btn) => {
    const userId = btn.dataset.id;

    // update state saat load
    updateButton(btn, userId);

    // event click
    btn.addEventListener("click", () => {
        followData[userId] = !followData[userId]; // toggle
        localStorage.setItem("follow_status", JSON.stringify(followData));
        updateButton(btn, userId);
    });
});





// SHARE LINK PROFILE //
document.querySelectorAll('.sharelink span').forEach(span => {
    span.addEventListener('click', () => {
        document.getElementById('shareSheet1').classList.add('active');
    });
});

// Tutup saat klik di luar popup (opsional)
document.addEventListener('click', (e) => {
    const sheet = document.getElementById('shareSheet1');
    if (sheet.classList.contains('active') && !sheet.contains(e.target) && !e.target.closest('.sharelink span')) {
        sheet.classList.remove('active');
    }
});

const bottomSheet1 = document.getElementById("shareSheet1");
const bottomSheetHandle1 = document.getElementById("bottomSheetHandle1");

// Klik handle = tutup
bottomSheetHandle1.addEventListener("click", () => {
    bottomSheet1.classList.remove("active");
});