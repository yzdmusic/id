const data = [
    { name: "'An El Hubb - Kabetshino (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/kabetshino/'an-el-hubb-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/'AN EL HUBB T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Aeternum - Mors Aeterna (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/mors-aeterna/aeternum-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/AETERNUM T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Afterlife - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/afterlife-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/AFTERLIFE 2 T-SHIRT.jpg", price: "Rp120.000" },
    { name: "All About Love - Hazza (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/hazza/all-about-love-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/ALL ABOUT LOVE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Anxiety - Eye Of Skadi (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/eye-of-skadi/anxiety-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/ANXIETY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Avaritia- Mors Aeterna (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/mors-aeterna/avaritia-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/AVARITIA T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Back Home - El Zill El Aswad (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/el-zill-el-aswad/back-home-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/BACK HOME T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Betrayed Bloodline - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/betrayed-bloodline-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/BETRAYED BLOODLINE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Better Off Dead - Saint Heaven (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/saint-heaven/better-off-dead-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/BETTER OFF DEAD T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Blindfolded And Burning - With Death (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/with-death/blindfolded-and-burning-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/BLINDFOLDED AND BURNING T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Born From Their Insults - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/born-from-their-insults-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/BORN FROM THEIR INSULTS T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Butchered - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/butchered-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/BUTCHERED T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Cruciatus - Mors Aeterna (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/mors-aeterna/cruciatus-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/CRUCIATUS T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Death As The Solution - Mawt Samit (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/mawt-samit/death-as-the-solution-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/DEATH AS THE SOLUTION T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Death Is Real - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/death-is-real-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/DEATH IS REAL T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Death Symphony - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/death-symphony-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/DEATH SYMPHONY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Democrazy - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/democrazy-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/DEMOCRAZY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Demon Queen - Saint Heaven (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/saint-heaven/demon-queen-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/DEMON QUEEN T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Diabolus Vox - El Zill El Aswad (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/el-zill-el-aswad/diabolus-vox-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/DIABOLUS VOX T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Die In My Hands / Lifeless Meat - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/die-in-my-hands-&-lifeless-meat-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/DIE IN MY HANDS & LIFELESS MEAT T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Die Today! - Kehedsia (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/kehedsia/die-today!-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/DIE TODAY! T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Dominus Feritatis - Mors Aeterna (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/mors-aeterna/dominus-feritatis-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/DOMINUS FERITATIS T-SHIRT.jpg", price: "Rp120.000" },
    { name: "End It All - With Death (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/with-death/end-it-all-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/END IT ALL T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Everything About Women - Rubick (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/rubick/everything-about-women-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/EVERYTHING ABOUT WOMEN T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Execution / Dead Silence - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/execution-&-dead-silence-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/EXECUTION & DEAD SILENCE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Goat Throne - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/goat-throne-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/GOAT THRONE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Goatman - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/goatman-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/GOATMAN 2 T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Indonesia Gelap - Mesin Jahit (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/mesin-jahit/indonesia-gelap-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/HABIS LEBARAN NYARI KERJAAN DIMANA LAGI YA T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Halawes - Hazza (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/hazza/halawes-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/HALAWES T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Hell's Torment - Earthshaker (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/earthshaker/hell's-torment-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/HELL'S TORMENT T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Human Error - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/human-error-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/HUMAN ERROR 2 T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Hysteria - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/hysteria-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/HYSTERIA T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Just Want To Die - El Zill El Aswad (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/el-zill-el-aswad/just-want-to-die-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/JUST WANT TO DIE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Killing You - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/killing-you-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/KILLING YOU T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Killing Your Mother - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/killing-your-mother-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/KILLING YOUR MOTHER T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Killing The Father's Family - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/killing-the-father's-family-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/KILLING THE FATHER'S FAMILY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Let's Commit Suicide - Mors Aeterna (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/mors-aeterna/let's-commit-suicide-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/LET'S COMMIT SUICIDE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Loser Turned Killer - Chains And Checkers (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/chains-and-checkers/loser-turned-killer-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/LOSER TURNED KILLER T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Loser Turned Psycho - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/loser-turned-killer-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/LOSER TURNED PSYCHO T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Mental Pressure - After Breakfast (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/after-breakfast/mental-pressure-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/MENTAL PRESSURE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Midnight Ascension - Eye Of Skadi (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/eye-of-skadi/midnight-ascension-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/MIDNIGHT ASCENSION T-SHIRT.jpg", price: "Rp120.000" },
    { name: "No Hope For Life - Mystic Euphoria (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/mystic-euphoria/no-hope-for-life-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/NO HOPE FOR LIFE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "No Time To Pray - With Death (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/with-death/no-time-to-pray-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/NO TIME TO PRAY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Numb - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/numb-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/NUMB T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Oppression - No Long Now (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/no-long-now/oppression-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/OPPRESSION T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Overthinking - After Breakfast (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/after-breakfast/overthinking-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/OVERTHINKING T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Paranoid - Mawt Samit (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/mawt-samit/paranoid-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/PARANOID T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Penthouse Sacrifice - With Death (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/with-death/penthouse-sacrifice-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/PENTHOUSE SACRIFICE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Persib Day - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/persib-day-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/PERSIB DAY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Proyeksi Bunuh Diri - Kehedsia (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/kehedsia/proyeksi-bunuh-diri-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/PROYEKSI BUNUH DIRI T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Real Nightmare - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/real-nightmare-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/REAL NIGHTMARE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Rehlet Hayat Ragel Fashil - El Zill El Aswad (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/el-zill-el-aswad/rehlet-hayat-ragel-fashil-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/REHLET HAYAT RAGEL FASHIL T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Rehlity Ma'a El Hubb - Kabetshino (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/kabetshino/rehlity-ma'a-el-hubb-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/REHLITY MA'A EL HUBB T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Revenge Of A Loser - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/revenge-of-a-loser-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/REVENGE OF A LOSER 2 T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Revenge Of A Loser - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/revenge-of-a-loser-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/REVENGE OF A LOSER T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Revenge Projection - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/revenge-projection-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/REVENGE PROJECTION T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Rise Of The Fuckin Loser - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/rise-of-the-fuckin-loser-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/RISE OF THE FUCKIN LOSER T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Rouh Wahda - The Dazzle (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/the-dazzle/rouh-wahda-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/ROUH WAHDA T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Sekte Sesat - Kehedsia (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/kehedsia/sekte-sesat-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/SEKTE SESAT T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Serenity And Harmony - Rubick (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/rubick/serenity-and-harmony-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/SERENITY AND HARMONY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Silent Room - Saint Heaven (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/saint-heaven/silent-room-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/SILENT ROOM T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Silentium - Mors Aeterna (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/mors-aeterna/silentium-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/SILENTIUM T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Simfoniyyet El 'Ishq - El Zill El Aswad (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/el-zill-el-aswad/simfoniyyet-el-'ishq-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/SIMFONIYYET EL 'ISHQ T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Straight To The Deadlands - Death Is Real (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/death-is-real/straight-to-the-deadlands-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/STRAIGHT TO THE DEADLANDS T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Suicide Attempt - Pudge (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/pudge/suicide-attempt-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/SUICIDE ATTEMPT T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Suicide Projection - Pudge", url: "https://yzdmusic.github.io/store/products/tshirt/pudge/suicide-projection-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/SUICIDE PROJECTION T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Suicide Room - El Zill El Aswad (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/el-zill-el-aswad/suicide-room-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/SUICIDE ROOM T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Suicide Today - El Zill El Aswad (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/el-zill-el-aswad/suicide-today-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/SUICIDE TODAY T-SHIRT.jpg", price: "Rp120.000" },
    { name: "The End Of All Things - Dorokdox Symphony (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/dorokdox-symphony/the-end-of-all-things-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/THE END OF ALL THINGS T-SHIRT.jpg", price: "Rp120.000" },
    { name: "The Porksecution - With Death (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/with-death/the-porksecution-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/THE PORKSECUTION T-SHIRT.jpg", price: "Rp120.000" },
    { name: "They're Killers - Lina (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/lina/they're-killers-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/THEY'RE KILLERS T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Trash Talk - With Death (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/with-death/trash-talk-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/TRASH TALK T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Voice Of The People - Kehedsia (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/kehedsia/voice-of-the-people-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/VOICE OF THE PEOPLE T-SHIRT.jpg", price: "Rp120.000" },
    { name: "Whispers Of Peace - Saint Heaven (T-Shirt)", url: "https://yzdmusic.github.io/store/products/tshirt/saint-heaven/whispers-of-peace-tshirt/", image: "https://yzdmusic.github.io/tshirt-1/WHISPERS OF PEACE T-SHIRT.jpg", price: "Rp120.000" },


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