window.addEventListener('load', function () {
    // Tahan loading minimal 10 detik
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');

        // Tunggu animasi fade-out selesai (0.5 detik)
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);

    }, 5000); // 10.000 ms = 10 detik
});