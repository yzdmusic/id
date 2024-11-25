const data = [
    { name: "Bhimo Ramadan", url: "profile-bhimo-ramadan.html", image: "https://yzdmusic.github.io/cover-1/BHIMO RAMADAN (PROFILE).jpg", price: "Artist" },
    { name: "Garut Berdanska", url: "profile-garut-berdanska.html", image: "https://yzdmusic.github.io/cover-1/GARUT BERDANSKA (PROFILE).jpg", price: "Artist" },
    { name: "Kabetshino", url: "profile-kabetshino.html", image: "https://yzdmusic.github.io/cover-1/KABETSHINO (PROFILE).jpg", price: "Artist" },
    { name: "Nayske Malik", url: "profile-nayske-malik.html", image: "https://yzdmusic.github.io/cover-1/NAYSKE\ MALIK\ \(PROFILE\).jpg", price: "Artist" },
    { name: "Pebriyanzah", url: "profile-pebriyanzah.html", image: "https://yzdmusic.github.io/cover-1/PEBRIYANZAH (PROFILE).jpg", price: "Artist" },
    { name: "Surya Utama", url: "profile-surya-utama.html", image: "https://yzdmusic.github.io/cover-1/SURYA UTAMA (PROFILE).jpg", price: "Artist" },
    { name: "The Flip Flops", url: "profile-the-flip-flops.html", image: "https://yzdmusic.github.io/cover-1/THE FLIP FLOPS (PROFILE).jpg", price: "Artist" },
    { name: "The Rowdy", url: "profile-the-rowdy.html", image: "https://yzdmusic.github.io/cover-1/THE ROWDY (PROFILE).jpg", price: "Artist" },
    { name: "YZD", url: "profile-yzd.html", image: "https://yzdmusic.github.io/cover-1/YZD (PROFILE).jpg", price: "Artist" },

    { name: "سلام لفلسطين", url: "album-salam-li-filastiniya.html", image: "https://yzdmusic.github.io/cover-1/SALAM LI FILASTINIYA (COVER).jpg", price: "Album" },
    { name: "3alami El7elo", url: "album-3alami-el7elo.html", image: "https://yzdmusic.github.io/cover-1/3ALAMI EL7ELO (COVER).jpg", price: "Album" },
    { name: "Against The Tyrants", url: "album-against-the-tyrants.html", image: "https://yzdmusic.github.io/cover-1/AGAINST THE TYRANTS (COVER).jpg", price: "Album" },
    { name: "Altijd Mijn Fout", url: "album-altijd-mijn-fout.html", image: "https://yzdmusic.github.io/cover-1/ALTIJD MIJN FOUT (COVER).jpg", price: "Album" },
    { name: "Asap Dan Angin", url: "album-asap-dan-angin.html", image: "https://yzdmusic.github.io/cover-1/ASAP DAN ANGIN (COVER).jpg", price: "Album" },
    { name: "Ahweti Fi Sabah El Qahira", url: "album-ahweti-fi-sabah-el-qahira.html", image: "https://yzdmusic.github.io/cover-1/AHWETI FI SABAH EL QAHIRA (COVER).jpg", price: "Album" },
    { name: "Big Mouths, Small Minds", url: "album-big-mouths-small-minds.html", image: "https://yzdmusic.github.io/cover-1/BIG MOUTHS, SMALL MINDS (COVER).jpg", price: "Album" },
    { name: "Bunga Tanpa Akar", url: "album-bunga-tanpa-akar.html", image: "https://yzdmusic.github.io/cover-1/BUNGA TANPA AKAR (COVER).jpg", price: "Album" },
    { name: "Een Huis Vol Ellende", url: "album-een-huis-vol-ellende.html", image: "https://yzdmusic.github.io/cover-1/EEN HUIS VOL ELLENDE (COVER).jpg", price: "Album" },
    { name: "Hob Fi El Du'a", url: "album-hob-fi-el-dua.html", image: "https://yzdmusic.github.io/cover-1/HOB FI EL DUA (COVER).jpg", price: "Album" },
    { name: "Honda Civic", url: "album-honda-civic.html", image: "https://yzdmusic.github.io/cover-1/HONDA CIVIC (COVER).jpg", price: "Album" },
    { name: "Istannini Fi Masr", url: "album-istannini-fi-masr.html", image: "https://yzdmusic.github.io/cover-1/ISTANNINI FI MASR (COVER).jpg", price: "Album" },
    { name: "Keep Moving Forward", url: "album-keep-moving-forward.html", image: "https://yzdmusic.github.io/cover-1/KEEP MOVING FORWARD (COVER).jpg", price: "Album" },
    { name: "Kefaya Horoub", url: "album-kefaya-horoub.html", image: "https://yzdmusic.github.io/cover-1/KEFAYA HOROUB (COVER).jpg", price: "Album" },
    { name: "Kembali Ke Masa Kecil", url: "album-kembali-ke-masa-kecil.html", image: "https://yzdmusic.github.io/cover-1/KEMBALI KE MASA KECIL (COVER).jpg", price: "Album" },
    { name: "Menginjak Neraka", url: "album-menginjak-neraka.html", image: "https://yzdmusic.github.io/cover-1/MENGINJAK NERAKA (COVER).jpg", price: "Album" },
    { name: "Ngumbara Di Garut", url: "album-ngumbara-di-garut.html", image: "https://yzdmusic.github.io/cover-1/NGUMBARA DI GARUT (COVER).jpg", price: "Album" },
    { name: "Nothing Lasts Forever", url: "album-nothing-lasts-forever.html", image: "https://yzdmusic.github.io/cover-1/NOTHING LASTS FOREVER (COVER).jpg", price: "Album" },
    { name: "Nouran", url: "album-nouran.html", image: "https://yzdmusic.github.io/cover-1/NOURAN (COVER).jpg", price: "Album" },
    { name: "Resayilk Da'et", url: "album-resayilk-daet.html", image: "https://yzdmusic.github.io/cover-1/RESAYILK DA'ET (COVER).jpg", price: "Album" },
    { name: "Rise Above", url: "album-rise-above.html", image: "https://yzdmusic.github.io/cover-1/RISE ABOVE (COVER).jpg", price: "Album" },
    { name: "Rowdiest", url: "album-rowdiest.html", image: "https://yzdmusic.github.io/cover-1/ROWDIEST (COVER).jpg", price: "Album" },
    { name: "The Heart Of A Chef", url: "album-the-heart-of-a-chef.html", image: "https://yzdmusic.github.io/cover-1/THE HEART OF A CHEF (COVER).jpg", price: "Album" },
    { name: "Veil Of Lies", url: "album-veil-of-lies.html", image: "https://yzdmusic.github.io/cover-1/VEIL OF LIES (COVER).jpg", price: "Album" },
    { name: "Vrijheid Strijd", url: "album-vrijheid-strijd.html", image: "https://yzdmusic.github.io/cover-1/VRIJHEID STRIJD (COVER).jpg", price: "Album" },
    { name: "You Have Money, You Have Power", url: "album-you-have-money-you-have-power.html", image: "https://yzdmusic.github.io/cover-1/YOU HAVE MONEY, YOU HAVE POWER (COVER).jpg", price: "Album" },

    { name: "Metal", url: "genre-metal.html", image: "https://yzdmusic.github.io/thumbnail-1/METAL (THUMBNAIL).jpg", price: "Genre" },
    { name: "Pop Punk", url: "genre-poppunk.html", image: "https://yzdmusic.github.io/thumbnail-1/POP PUNK (THUMBNAIL).jpg", price: "Genre" },
    { name: "Rap", url: "genre-rap.html", image: "https://yzdmusic.github.io/thumbnail-1/RAP (THUMBNAIL).jpg", price: "Genre" },
    { name: "Reggae", url: "genre-reggae.html", image: "https://yzdmusic.github.io/thumbnail-1/REGGAE\ \(THUMBNAIL\).jpg", price: "Genre" },
    { name: "Ska Punk", url: "genre-skapunk.html", image: "https://yzdmusic.github.io/thumbnail-1/SKA PUNK (THUMBNAIL).jpg", price: "Genre" },
    // Tambahkan data lainnya sesuai kebutuhan
];

const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = '';

    if (query) {
        const suggestions = data.filter(item => item.name.toLowerCase().includes(query));
        suggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.className = "suggestion-item";

            const img = document.createElement('img');
            img.src = suggestion.image;
            img.alt = suggestion.name;
            img.className = "suggestion-image";

            const textContainer = document.createElement('div');
            textContainer.className = "suggestion-text";

            const nameText = document.createElement('span');
            nameText.textContent = suggestion.name;
            nameText.className = "suggestion-name";

            const priceText = document.createElement('span');
            priceText.textContent = suggestion.price;
            priceText.className = "suggestion-price";

            textContainer.appendChild(nameText);
            textContainer.appendChild(priceText);
            li.appendChild(img);
            li.appendChild(textContainer);

            li.addEventListener('click', () => {
                window.location.href = suggestion.url;
            });
            suggestionsList.appendChild(li);
        });
        suggestionsList.style.display = suggestions.length ? 'block' : 'none';
    } else {
        suggestionsList.style.display = 'none';
    }
});