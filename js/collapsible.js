document.addEventListener("DOMContentLoaded", function () {

    var menuItems = document.querySelectorAll('.name-categories');
    var defaultContent = document.querySelector('#playlists');
    var defaultMenu = document.querySelector('.name-categories a[href="#playlists"]').parentElement;

    if (defaultContent) {
        defaultContent.style.display = 'block';
        defaultMenu.classList.add('active');
    }

    // Tambahkan event listener untuk setiap elemen menu
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) {
            // Mencegah link default agar tidak melakukan navigasi
            event.preventDefault();

            // Dapatkan href dari menu yang diklik
            var targetId = this.querySelector('a').getAttribute('href');

            // Cari elemen dengan ID yang sesuai
            var targetContent = document.querySelector(targetId);

            // Sembunyikan semua elemen card
            var allContents = document.querySelectorAll('.card-content');
            allContents.forEach(function (content) {
                content.style.display = 'none';
            });

            // Hapus kelas 'active' dari semua menu nav
            menuItems.forEach(function (item) {
                item.classList.remove('active');
            });

            // Tampilkan elemen card yang sesuai
            if (targetContent) {
                targetContent.style.display = 'block';
                // Tambahkan kelas 'active' ke menu yang diklik
                this.classList.add('active');
            }
        });
    });
});





// MY PLAYLISTS //
const playlists = JSON.parse(localStorage.getItem("my_playlists")) || [];

playlists.push({
    artist: "Centaur Warrunner",
    cover: "https://yzdmusic.github.io/cover-1/CENTAUR WARRUNNER (PROFILE).jpg",
    url: "https://yzdmusic.github.io/id/profile/centaur-warrunner/"
});

localStorage.setItem("my_playlists", JSON.stringify(playlists));