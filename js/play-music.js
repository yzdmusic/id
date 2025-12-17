// Variabel untuk notification player
const notificationPlayer = document.getElementById('notificationPlayer');
const notificationTitle = document.getElementById('notificationTitle');
const notificationAlbumCover = document.getElementById('notificationAlbumCover');
const playPauseNotificationBtn = document.getElementById('playPauseNotificationBtn');
const playPauseImg = document.getElementById('playPauseImg');

// Variabel untuk music player UI
const musicPlayerUI = document.getElementById('musicPlayerUI'); // Ganti ID sesuai dengan elemen music player UI Anda
const playPauseBtnLarge = document.getElementById('playPauseLarge');
const currentTimeDisplay = document.getElementById('currentTimeLarge'); // Teks waktu saat ini
const durationDisplay = document.getElementById('durationLarge'); // Teks durasi lagu
const progressBar = document.getElementById('progressLarge'); // Progress bar
const audioPlayer = document.getElementById('audio');

// Data lagu
const songs = Array.from(document.querySelectorAll('.song-card')).map(card => ({
    title: card.getAttribute('data-title'),
    artist: card.getAttribute('data-artist'),
    src: card.getAttribute('data-src'),
    cover: card.getAttribute('data-cover')
}));

let currentSongIndex = 0;

// Fungsi untuk memuat lagu dan memperbarui UI
function loadSong(song) {
    document.getElementById('songTitleLarge').textContent = song.title;
    document.getElementById('artistNameLarge').textContent = song.artist;
    document.getElementById('albumCoverLarge').src = song.cover;

    notificationTitle.textContent = `${song.title} - ${song.artist}`; // Update judul dan artis di notification
    notificationAlbumCover.src = song.cover; // Ganti gambar album

    audioPlayer.src = song.src;
    audioPlayer.play();

    playPauseImg.src = 'https://yzdmusic.github.io/id/assets/pause-button.png'; // Ikon pause
    playPauseBtnLarge.src = 'https://yzdmusic.github.io/id/assets/pause-button.png';
}

// Menampilkan notification player
function showNotificationPlayer(song) {
    notificationTitle.textContent = `${song.title} - ${song.artist}`; // Update judul dan artis
    notificationAlbumCover.src = song.cover; // Ganti gambar album
    notificationPlayer.style.display = 'flex'; // Tampilkan notification player
}

// Menyembunyikan notification player
function hideNotificationPlayer() {
    notificationPlayer.style.display = 'none';
}

// Menampilkan music player UI
function showMusicPlayerUI() {
    musicPlayerUI.classList.add('active');
    hideNotificationPlayer(); // Sembunyikan notification player
}

// Menyembunyikan music player UI
function hideMusicPlayerUI() {
    musicPlayerUI.classList.remove('active');
    notificationPlayer.style.display = 'flex'; // Tampilkan notification player kembali
}

// Event listener untuk play/pause di notification player
playPauseNotificationBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseImg.src = 'https://yzdmusic.github.io/id/assets/pause-button.png';
        playPauseBtnLarge.src = 'https://yzdmusic.github.io/id/assets/pause-button.png';
    } else {
        audioPlayer.pause();
        playPauseImg.src = 'https://yzdmusic.github.io/id/assets/play.png';
        playPauseBtnLarge.src = 'https://yzdmusic.github.io/id/assets/play.png';
    }
});

// Event listener untuk elemen notification player (judul/gambar)
notificationTitle.addEventListener('click', showMusicPlayerUI);
notificationAlbumCover.addEventListener('click', showMusicPlayerUI);

// Event listener untuk tombol play/pause di music player UI
playPauseBtnLarge.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseImg.src = 'https://yzdmusic.github.io/id/assets/pause-button.png';
        playPauseBtnLarge.src = 'https://yzdmusic.github.io/id/assets/pause-button.png';
    } else {
        audioPlayer.pause();
        playPauseImg.src = 'https://yzdmusic.github.io/id/assets/play.png';
        playPauseBtnLarge.src = 'https://yzdmusic.github.io/id/assets/play.png';
    }
});

// Event listener untuk tombol tutup music player UI
document.getElementById('closePlayer').addEventListener('click', hideMusicPlayerUI);

// Event listener untuk kartu lagu di playlist
document.querySelectorAll('.song-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        currentSongIndex = index;
        const song = songs[currentSongIndex];
        loadSong(song);
        showNotificationPlayer(song);
    });
});

// Update status tombol play/pause berdasarkan event audio
audioPlayer.addEventListener('play', () => {
    playPauseImg.src = 'https://yzdmusic.github.io/id/assets/pause-button.png';
    playPauseBtnLarge.src = 'https://yzdmusic.github.io/id/assets/pause-button.png';
});

audioPlayer.addEventListener('pause', () => {
    playPauseImg.src = 'https://yzdmusic.github.io/id/assets/play.png';
    playPauseBtnLarge.src = 'https://yzdmusic.github.io/id/assets/play.png';
});

// Event untuk menyembunyikan notification player jika musik berhenti
audioPlayer.addEventListener('ended', () => {
    hideNotificationPlayer();
});

// Fungsi untuk memperbarui waktu lagu dan progress bar
function updateProgress() {
    const { currentTime, duration } = audioPlayer;

    // Perbarui waktu sekarang dan durasi
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = duration ? formatTime(duration) : '0:00';

    // Perbarui progress bar
    if (duration) {
        progressBar.value = (currentTime / duration) * 100;
    }
}

// Format waktu (dalam detik) menjadi menit:detik
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${sec}`;
}

// Event listener untuk memperbarui progress bar
audioPlayer.addEventListener('timeupdate', updateProgress);

// Fungsi untuk memindahkan progress dari progress bar
progressBar.addEventListener('input', () => {
    const duration = audioPlayer.duration;
    if (duration) {
        audioPlayer.currentTime = (progressBar.value / 100) * duration;
    }
});

// Variabel tombol shuffle dan repeat
const shuffleBtn = document.getElementById('shuffleLarge');
const repeatBtn = document.getElementById('repeatLarge');

let isShuffle = false; // Status shuffle
let isRepeat = false;  // Status repeat

// Fungsi untuk memuat lagu berikutnya
function nextSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length); // Lagu acak jika shuffle aktif
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length; // Lagu berikutnya
    }
    const song = songs[currentSongIndex];
    loadSong(song); // Muat lagu
    showNotificationPlayer(song); // Perbarui notification player
}

// Fungsi untuk memuat lagu sebelumnya
function prevSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length); // Lagu acak jika shuffle aktif
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Lagu sebelumnya
    }
    const song = songs[currentSongIndex];
    loadSong(song); // Muat lagu
    showNotificationPlayer(song); // Perbarui notification player
}

// Fungsi untuk toggle shuffle
shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.style.filter = isShuffle ? 'invert(50%)' : 'none'; // Visualisasi status shuffle
});

// Fungsi untuk toggle repeat
repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.style.filter = isRepeat ? 'invert(50%)' : 'none'; // Visualisasi status repeat
});

// Event ketika lagu selesai
audioPlayer.addEventListener('ended', () => {
    if (isRepeat) {
        loadSong(songs[currentSongIndex]); // Ulangi lagu jika repeat aktif
    } else {
        nextSong(); // Lanjutkan ke lagu berikutnya
    }
});

// Event listener untuk tombol next
document.getElementById('nextLarge').addEventListener('click', nextSong);

// Event listener untuk tombol previous
document.getElementById('prevLarge').addEventListener('click', prevSong);





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




// Recently Played
const audio = document.getElementById("audio");

audio.addEventListener("play", () => {
    const albumTitle = document.querySelector(".thumbnail-genre2nd h1")?.textContent.trim();
    const cover = document.querySelector(".song-card")?.dataset.cover;

    if (!albumTitle || !cover) return;

    const albumId = location.pathname;

    let history = JSON.parse(localStorage.getItem("albumHistory")) || {};

    if (!history[albumId]) {
        history[albumId] = {
            title: albumTitle,
            cover: cover,
            url: location.href,
            count: 0
        };
    }

    history[albumId].count += 1;
    localStorage.setItem("albumHistory", JSON.stringify(history));
});

document.addEventListener("DOMContentLoaded", () => {

    const albumTitleEl = document.querySelector(".thumbnail-genre2nd h1");
    const firstSongCard = document.querySelector(".song-card");

    if (!albumTitleEl || !firstSongCard) return;

    const albumCover = firstSongCard.dataset.cover;
    if (!albumCover) return;

    const albumId = location.pathname;

    let history = JSON.parse(localStorage.getItem("albumHistory")) || {};

    if (!history[albumId]) {
        history[albumId] = {
            title: albumTitleEl.textContent.trim(),
            cover: albumCover,
            url: location.href,
            count: 0
        };
    }

    history[albumId].count += 1;

    localStorage.setItem("albumHistory", JSON.stringify(history));
});