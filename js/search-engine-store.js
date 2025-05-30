const data = [
    { name: "'An El Hubb - Kabetshino (T-Shirt)", url: "payment-'an-el-hubb-kabetshino(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/'AN EL HUBB T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Afterlife - Dorokdox Symphony (T-Shirt)", url: "payment-afterlife-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/AFTERLIFE 2 T-SHIRT.jpg", price: "Rp120.000" },
    { name: "All About Love - Hazza (T-Shirt)", url: "payment-all-about-love-hazza(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/ALL ABOUT LOVE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Back Home - El Zill El Aswad (T-Shirt)", url: "payment-back-home-el-zill-el-aswad(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/BACK HOME T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Becoming A Killer (T-Shirt)", url: "payment-becoming-a-killer(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/BECOMING A KILLER T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Betrayed Bloodline - Dorokdox Symphony (T-Shirt)", url: "payment-betrayed-bloodline-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/BETRAYED BLOODLINE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Better Off Dead - Saint Heaven (T-Shirt)", url: "payment-better-off-dead-saint-heaven(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/BETTER OFF DEAD T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Death As The Solution - Mawt Samit (T-Shirt)", url: "payment-death-as-the-solution-mawt-samit(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/DEATH AS THE SOLUTION T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Death Symphony - Dorokdox Symphony (T-Shirt)", url: "payment-death-symphony-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/DEATH SYMPHONY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Democrazy - Dorokdox Symphony (T-Shirt)", url: "payment-democrazy-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/DEMOCRAZY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Demon Queen - Saint Heaven (T-Shirt)", url: "payment-demon-queen-saint-heaven(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/DEMON QUEEN T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Die Today! - Kehedsia (T-Shirt)", url: "payment-die-today!-kehedsia(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/DIE TODAY! T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Everything About Women - Rubick (T-Shirt)", url: "payment-everything-about-women-rubick(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/EVERYTHING ABOUT WOMEN T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Goat Throne - Dorokdox Symphony (T-Shirt)", url: "payment-goat-throne-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/GOAT THRONE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Goatman - Dorokdox Symphony (T-Shirt)", url: "payment-goatman-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/GOATMAN 2 T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Habis Lebaran Nyari Kerjaan Dimana Lagi Ya - Mesin Jahit (T-Shirt)", url: "payment-habis-lebaran-nyari-kerjaan-dimana-lagi-ya-mesin-jahit(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/HABIS LEBARAN NYARI KERJAAN DIMANA LAGI YA T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Halawes - Hazza (T-Shirt)", url: "payment-halawes-hazza(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/HALAWES T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Hell's Torment (T-Shirt)", url: "payment-hell's-torment(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/HELL'S TORMENT T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Human Error - Dorokdox Symphony (T-Shirt)", url: "payment-human-error-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/HUMAN ERROR 2 T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Hysteria - Dorokdox Symphony (T-Shirt)", url: "payment-hysteria-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/HYSTERIA T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Just Want To Die - El Zill El Aswad (T-Shirt)", url: "payment-just-want-to-die-el-zill-el-aswad(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/JUST WANT TO DIE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Loser Turned Killer - Chains And Checkers (T-Shirt)", url: "payment-loser-turned-killer-chains-and-checkers(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/LOSER TURNED KILLER T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Mati Bunuh Diri (T-Shirt)", url: "payment-mati-bunuh-diri(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/MATI BUNUH DIRI T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Mental Pressure - Mawt Samit (T-Shirt)", url: "payment-mental-pressure-mawt-samit(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/MENTAL PRESSURE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "No Hope For Life - Mystic Euphoria (T-Shirt)", url: "payment-no-hope-for-life-mystic-euphoria(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/NO HOPE FOR LIFE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Numb - Dorokdox Symphony (T-Shirt)", url: "payment-numb-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/NUMB T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Oppression - No Long Now (T-Shirt)", url: "payment-oppression-no-long-now(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/OPPRESSION T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Overthinking (T-Shirt)", url: "payment-overthinking(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/OVERTHINKING T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Paranoid - Mawt Samit (T-Shirt)", url: "payment-paranoid-mawt-samit(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/PARANOID T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Persib Day - Dorokdox Symphony (T-Shirt)", url: "payment-persib-day-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/PERSIB DAY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Proyeksi Bunuh Diri - Kehedsia (T-Shirt)", url: "payment-proyeksi-bunuh-diri-kehedsia(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/PROYEKSI BUNUH DIRI T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Psychopath (T-Shirt)", url: "payment-psychopath(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/PSYCHOPATH T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Real Nightmare - Dorokdox Symphony (T-Shirt)", url: "payment-real-nightmare-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/REAL NIGHTMARE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Rehlet Hayat Regel Fashil - El Zill El Aswad (T-Shirt)", url: "payment-rehlet-hayat-regel-fashilel-zill-el-aswad(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/REHLET HAYAT RAGEL FASHIL T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Rehlity Ma'a El Hubb - Kabetshino (T-Shirt)", url: "payment-rehlity-ma'a-el-hubb-kabetshino(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/REHLITY MA'A EL HUBB T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Revenge Projection - Dorokdox Symphony (T-Shirt)", url: "payment-revenge-projection-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/REVENGE PROJECTION T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Rouh Wahda - The Dazzle (T-Shirt)", url: "payment-rouh-wahda-the-dazzle(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/ROUH WAHDA T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Sekte Sesat - Kehedsia (T-Shirt)", url: "payment-sekte-sesat-kehedsia(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/SEKTE SESAT T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Serenity And Harmony - Rubick (T-Shirt)", url: "payment-serenity-and-harmony-rubick(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/SERENITY AND HARMONY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Silent Room - Saint Heaven (T-Shirt)", url: "payment-silent-room-saint-heaven(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/SILENT ROOM T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Simfoniyyet El 'Ishq - El Zill El Aswad (T-Shirt)", url: "payment-simfoniyyet-el-'ishq-el-zill-el-aswad(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/SIMFONIYYET EL 'ISHQ T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Suicide Attempt - Pudge (T-Shirt)", url: "payment-suicide-attempt-pudge(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/SUICIDE ATTEMPT T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Suicide Projection - Pudge", url: "payment-suicide-projection-pudge(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/SUICIDE PROJECTION T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Suicide Room - El Zill El Aswad (T-Shirt)", url: "payment-suicide-room-el-zill-el-aswad(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/SUICIDE ROOM T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Suicide Today - El Zill El Aswad (T-Shirt)", url: "payment-suicide-today-el-zill-el-aswad(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/SUICIDE TODAY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "The End Of All Things - Dorokdox Symphony (T-Shirt)", url: "payment-the-end-of-all-things-dorokdox-symphony(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/THE END OF ALL THINGS T-SHIRT.jpg", price: "Rp120.000" },
    { name: "They're Killers - Lina (T-Shirt)", url: "payment-they're-killers-lina(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/THEY'RE KILLERS T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Voice Of The People - Kehedsia (T-Shirt)", url: "payment-voice-of-the-people-kehedsia(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/VOICE OF THE PEOPLE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Whisper For Suicide (T-Shirt)", url: "payment-whisper-for-suicide(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/WHISPER FOR SUICIDE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Whispers Of Peace - Saint Heaven (T-Shirt)", url: "payment-whispers-of-peace-saint-heaven(tshirt).html", image: "https://yzdmusic.github.io/tshirt-1/WHISPERS OF PEACE T-SHIRT.jpg", price: "Rp120.000" },


    // DESIGN ONLY //
    { name: "Surprise Design (Design Only)", url: "payment-surprise-design-1(design-only).html", image: "https://yzdmusic.github.io/tshirt-1/ALL MYSTERI BOX T-SHIRT 1.jpg", price: "Rp10.000" },
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