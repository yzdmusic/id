const data = [
    { name: "Bhimo Ramadan", url: "profile-bhimo-ramadan.html", image: "https://yzdmusic.github.io/cover-1/BHIMO RAMADAN (PROFILE).jpg", price: "Artist" },
    { name: "Pebriyanzah", url: "profile-pebriyanzah.html", image: "https://yzdmusic.github.io/cover-1/PEBRIYANZAH (PROFILE).jpg", price: "Artist" },
    { name: "YZD", url: "profile-yzd.html", image: "https://yzdmusic.github.io/cover-1/YZD (PROFILE).jpg", price: "Artist" },
    { name: "Altijd Mijn Fout", url: "album-altijd-mijn-fout.html", image: "https://yzdmusic.github.io/cover-1/ALTIJD MIJN FOUT (COVER).jpg", price: "Album" },
    { name: "Asap Dan Angin", url: "album-asap-dan-angin.html", image: "https://yzdmusic.github.io/cover-1/ASAP DAN ANGIN (COVER).jpg", price: "Album" },
    { name: "Bunga Tanpa Akar", url: "album-bunga-tanpa-akar.html", image: "https://yzdmusic.github.io/cover-1/BUNGA TANPA AKAR (COVER).jpg", price: "Album" },
    { name: "Keep Moving Forward", url: "album-keep-moving-forward.html", image: "https://yzdmusic.github.io/cover-1/KEEP MOVING FORWARD (COVER).jpg", price: "Album" },
    { name: "Kembali Ke Masa Kecil", url: "album-kembali-ke-masa-kecil.html", image: "https://yzdmusic.github.io/cover-1/NGUMBARA DI GARUT (COVER).jpg", price: "Album" },
    { name: "Ngumbara Di Garut", url: "album-ngumbara-di-garut.html", image: "https://yzdmusic.github.io/cover-1/KEMBALI KE MASA KECIL (COVER).jpg", price: "Album" },
    { name: "Veil Of Lies", url: "album-veil-of-lies.html", image: "https://yzdmusic.github.io/cover-1/VEIL OF LIES (COVER).jpg", price: "Album" },
    { name: "Vrijheid Strijd", url: "album-vrijheid-strijd.html", image: "https://yzdmusic.github.io/cover-1/VRIJHEID STRIJD (COVER).jpg", price: "Album" },
    { name: "Metal", url: "genre-metal.html", image: "https://yzdmusic.github.io/thumbnail-1/METAL (THUMBNAIL).jpg", price: "Genre" },
    { name: "Pop Punk", url: "genre-poppunk.html", image: "https://yzdmusic.github.io/thumbnail-1/POP PUNK (THUMBNAIL).jpg", price: "Genre" },
    { name: "Rap", url: "genre-rap.html", image: "https://yzdmusic.github.io/thumbnail-1/RAP (THUMBNAIL).jpg", price: "Genre" },
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