const musicPlayerUI = document.getElementById('musicPlayerUI');
const playPauseBtnLarge = document.getElementById('playPauseLarge');
const audioPlayer = document.getElementById('audio');
const closePlayerBtn = document.getElementById('closePlayer');
const songCards = document.querySelectorAll('.song-card');
const progressBar = document.getElementById('progressLarge');
const currentTimeDisplay = document.getElementById('currentTimeLarge');
const durationDisplay = document.getElementById('durationLarge');
const shuffleBtn = document.getElementById('shuffleLarge');
const repeatBtn = document.getElementById('repeatLarge');

let currentSongIndex = 0;
let isShuffle = false;
let isRepeat = false;

const songs = Array.from(songCards).map(card => ({
    title: card.getAttribute('data-title'),
    artist: card.getAttribute('data-artist'),
    src: card.getAttribute('data-src'),
    cover: card.getAttribute('data-cover')
}));

function loadSong(song) {
    document.getElementById('songTitleLarge').textContent = song.title;
    document.getElementById('artistNameLarge').textContent = song.artist;
    document.getElementById('albumCoverLarge').src = song.cover;
    audioPlayer.src = song.src;
    audioPlayer.play();
    playPauseBtnLarge.src = 'pause-button.png';
}

function showMusicPlayerUI(index) {
    currentSongIndex = index;
    loadSong(songs[currentSongIndex]);
    musicPlayerUI.classList.add('active');
}

function hideMusicPlayerUI() {
    musicPlayerUI.classList.remove('active');
}

closePlayerBtn.addEventListener('click', hideMusicPlayerUI);

playPauseBtnLarge.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtnLarge.src = 'pause-button.png';
    } else {
        audioPlayer.pause();
        playPauseBtnLarge.src = 'play.png';
    }
});

document.getElementById('nextLarge').addEventListener('click', nextSong);
document.getElementById('prevLarge').addEventListener('click', prevSong);

shuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleBtn.style.filter = isShuffle ? 'invert(50%)' : 'none';
});

repeatBtn.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatBtn.style.filter = isRepeat ? 'invert(50%)' : 'none';
});

function nextSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
}

function prevSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
}

audioPlayer.addEventListener('ended', () => {
    if (isRepeat) {
        loadSong(songs[currentSongIndex]);
    } else {
        nextSong();
    }
});

audioPlayer.addEventListener('timeupdate', updateProgress);

function updateProgress() {
    const { currentTime, duration } = audioPlayer;
    if (duration) {
        progressBar.value = (currentTime / duration) * 100;
        currentTimeDisplay.textContent = formatTime(currentTime);
        durationDisplay.textContent = formatTime(duration);
    }
}

progressBar.addEventListener('input', setProgress);

function setProgress() {
    const duration = audioPlayer.duration;
    if (duration) {
        audioPlayer.currentTime = (progressBar.value / 100) * duration;
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${sec}`;
}

songCards.forEach((card, index) => {
    card.addEventListener('click', () => showMusicPlayerUI(index));
});