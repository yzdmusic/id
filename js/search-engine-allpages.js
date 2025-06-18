const data = [
    { name: "After Breakfast", url: "https://yzdmusic.github.io/id/profiles/after-breakfast/", image: "https://yzdmusic.github.io/cover-1/AFTER BREAKFAST (PROFILE).jpg", price: "Artist" },
    { name: "Bhimo Ramadan", url: "https://yzdmusic.github.io/id/profiles/bhimo-ramadan/", image: "https://yzdmusic.github.io/cover-1/BHIMO RAMADAN (PROFILE).jpg", price: "Artist" },
    { name: "Chains And Checkers", url: "https://yzdmusic.github.io/id/profile/chains-and-checkers/", image: "https://yzdmusic.github.io/cover-1/CHAINS AND CHECKERS (PROFILE).jpg", price: "Artist" },
    { name: "Dorokdox Symphony", url: "https://yzdmusic.github.io/id/profile/dorokdox-symphony/", image: "https://yzdmusic.github.io/cover-1/DOROKDOX\ SYMPHONY\ \(PROFILE\).jpg", price: "Artist" },
    { name: "El Zill El Aswad", url: "https://yzdmusic.github.io/id/profile/el-zill-el-aswad/", image: "https://yzdmusic.github.io/cover-1/EL ZILL EL ASWAD (PROFILE).jpg", price: "Artist" },
    { name: "Garut Berdanska", url: "https://yzdmusic.github.io/id/profile/garut-berdanska/", image: "https://yzdmusic.github.io/cover-1/GARUT BERDANSKA (PROFILE).jpg", price: "Artist" },
    { name: "Harmonization", url: "https://yzdmusic.github.io/id/profile/harmonization/", image: "https://yzdmusic.github.io/cover-1/HARMONIZATION\ \(PROFILE\).jpg", price: "Artist" },
    { name: "Hazza", url: "https://yzdmusic.github.io/id/profile/hazza/", image: "https://yzdmusic.github.io/cover-1/HAZZA (PROFILE).jpg", price: "Artist" },
    { name: "Kabetshino", url: "https://yzdmusic.github.io/id/profile/kabetshino/", image: "https://yzdmusic.github.io/cover-1/KABETSHINO (PROFILE).jpg", price: "Artist" },
    { name: "Kehedsia", url: "https://yzdmusic.github.io/id/profile/kehedsia/", image: "https://yzdmusic.github.io/cover-1/KEHEDSIA (PROFILE).jpg", price: "Artist" },
    { name: "Lina", url: "https://yzdmusic.github.io/id/profile/lina/", image: "https://yzdmusic.github.io/cover-1/LINA (PROFILE).jpg", price: "Artist" },
    { name: "Mawt Samit", url: "https://yzdmusic.github.io/id/profile/mawt-samit/", image: "https://yzdmusic.github.io/cover-1/MAWT SAMIT (PROFILE).jpg", price: "Artist" },
    { name: "Mesin Jahit", url: "https://yzdmusic.github.io/id/profile/mesin-jahit/", image: "https://yzdmusic.github.io/cover-1/MESIN JAHIT (PROFILE).jpg", price: "Artist" },
    { name: "Mors Aeterna", url: "https://yzdmusic.github.io/id/profile/mors-aeterna/", image: "https://yzdmusic.github.io/cover-1/MORS AETERNA (PROFILE).jpg", price: "Artist" },
    { name: "Mystic Euphoria", url: "https://yzdmusic.github.io/id/profile/mystic-euphoria/", image: "https://yzdmusic.github.io/cover-1/MYSTIC\ EUPHORIA\ \(PROFILE\).jpg", price: "Artist" },
    { name: "Nayske Malik", url: "https://yzdmusic.github.io/id/profile/nayske-malik/", image: "https://yzdmusic.github.io/cover-1/NAYSKE\ MALIK\ \(PROFILE\).jpg", price: "Artist" },
    { name: "No Long Now", url: "https://yzdmusic.github.io/id/profile/no-long-now/", image: "https://yzdmusic.github.io/cover-1/NO LONG NOW (PROFILE).jpg", price: "Artist" },
    { name: "Pebriyanzah", url: "https://yzdmusic.github.io/id/profile/pebriyanzah/", image: "https://yzdmusic.github.io/cover-1/PEBRIYANZAH (PROFILE).jpg", price: "Artist" },
    { name: "Pudge", url: "https://yzdmusic.github.io/id/profile/pudge/", image: "https://yzdmusic.github.io/cover-1/PUDGE (PROFILE).jpg", price: "Artist" },
    { name: "Rubick", url: "https://yzdmusic.github.io/id/profile/rubick/", image: "https://yzdmusic.github.io/cover-1/RUBICK (PROFILE).jpg", price: "Artist" },
    { name: "Saint Heaven", url: "https://yzdmusic.github.io/id/profile/saint-heaven/", image: "https://yzdmusic.github.io/cover-1/SAINT HEAVEN (PROFILE).jpg", price: "Artist" },
    { name: "Shadow Blade", url: "https://yzdmusic.github.io/id/profile/shadow-blade/", image: "https://yzdmusic.github.io/cover-1/SHADOW BLADE (PROFILE).jpg", price: "Artist" },
    { name: "Surya Utama", url: "https://yzdmusic.github.io/id/profile/surya-utama/", image: "https://yzdmusic.github.io/cover-1/SURYA UTAMA (PROFILE).jpg", price: "Artist" },
    { name: "The Dazzle", url: "https://yzdmusic.github.io/id/profile/the-dazzle/", image: "https://yzdmusic.github.io/cover-1/THE DAZZLE (PROFILE).jpg", price: "Artist" },
    { name: "The Flip Flops", url: "https://yzdmusic.github.io/id/profile/the-flip-flops/", image: "https://yzdmusic.github.io/cover-1/THE FLIP FLOPS (PROFILE).jpg", price: "Artist" },
    { name: "The Rowdy", url: "https://yzdmusic.github.io/id/profile/the-rowdy/", image: "https://yzdmusic.github.io/cover-1/THE ROWDY (PROFILE).jpg", price: "Artist" },
    { name: "YZD", url: "https://yzdmusic.github.io/id/profile/yzd/", image: "https://yzdmusic.github.io/cover-1/YZD (PROFILE).jpg", price: "Artist" },

    { name: "سلام لفلسطين", url: "https://yzdmusic.github.io/id/library/album/salam-li-filastiniya/", image: "https://yzdmusic.github.io/cover-1/SALAM LI FILASTINIYA (COVER).jpg", price: "Album" },
    { name: "'An El Hubb", url: "https://yzdmusic.github.io/id/library/album/'an-el-hubb/", image: "https://yzdmusic.github.io/cover-1/'AN EL HUBB (COVER).jpg", price: "Album" },
    { name: "3alami El7elo", url: "https://yzdmusic.github.io/id/library/album/3alami-el7elo/", image: "https://yzdmusic.github.io/cover-1/3ALAMI EL7ELO (COVER).jpg", price: "Album" },
    { name: "Aeternum", url: "https://yzdmusic.github.io/id/library/album/aeternum/", image: "https://yzdmusic.github.io/cover-1/AETERNUM (COVER).jpg", price: "Album" },
    { name: "Afterlife", url: "https://yzdmusic.github.io/id/library/album/afterlife/", image: "https://yzdmusic.github.io/cover-1/AFTERLIFE (COVER).jpg", price: "Album" },
    { name: "Against The Tyrants", url: "https://yzdmusic.github.io/id/library/album/against-the-tyrants/", image: "https://yzdmusic.github.io/cover-1/AGAINST THE TYRANTS (COVER).jpg", price: "Album" },
    { name: "Ahweti Fi Sabah El Qahira", url: "https://yzdmusic.github.io/id/library/album/ahweti-fi-sabah-el-qahira/", image: "https://yzdmusic.github.io/cover-1/AHWETI FI SABAH EL QAHIRA (COVER).jpg", price: "Album" },
    { name: "All About Love", url: "https://yzdmusic.github.io/id/library/album/all-about-love/", image: "https://yzdmusic.github.io/cover-1/ALL ABOUT LOVE (COVER).jpg", price: "Album" },
    { name: "Altijd Mijn Fout", url: "https://yzdmusic.github.io/id/library/album/altijd-mijn-fout/", image: "https://yzdmusic.github.io/cover-1/ALTIJD MIJN FOUT (COVER).jpg", price: "Album" },
    { name: "Asap Dan Angin", url: "https://yzdmusic.github.io/id/library/album/asap-dan-angin/", image: "https://yzdmusic.github.io/cover-1/ASAP DAN ANGIN (COVER).jpg", price: "Album" },
    { name: "Back Home", url: "https://yzdmusic.github.io/id/library/album/back-home/", image: "https://yzdmusic.github.io/cover-1/BACK HOME (COVER).jpg", price: "Album" },
    { name: "Betrayed Bloodline", url: "https://yzdmusic.github.io/id/library/album/betrayed-bloodline/", image: "https://yzdmusic.github.io/cover-1/BETRAYED BLOODLINE (COVER).jpg", price: "Album" },
    { name: "Better Off Dead", url: "https://yzdmusic.github.io/id/library/album/better-off-dead/", image: "https://yzdmusic.github.io/cover-1/BETTER OFF DEAD (COVER).jpg", price: "Album" },
    { name: "Big Mouths, Small Minds", url: "https://yzdmusic.github.io/id/library/album/big-mouths-small-minds/", image: "https://yzdmusic.github.io/cover-1/BIG MOUTHS, SMALL MINDS (COVER).jpg", price: "Album" },
    { name: "Blood", url: "https://yzdmusic.github.io/id/library/album/blood/", image: "https://yzdmusic.github.io/cover-1/BLOOD (COVER).jpg", price: "Album" },
    { name: "Bunga Tanpa Akar", url: "https://yzdmusic.github.io/id/library/album/bunga-tanpa-akar/", image: "https://yzdmusic.github.io/cover-1/BUNGA TANPA AKAR (COVER).jpg", price: "Album" },
    { name: "Calmness", url: "https://yzdmusic.github.io/id/library/album/calmness/", image: "https://yzdmusic.github.io/cover-1/CALMNESS (COVER).jpg", price: "Album" },
    { name: "Cannibal", url: "https://yzdmusic.github.io/id/library/album/cannibal/", image: "https://yzdmusic.github.io/cover-1/CANNIBAL (COVER).jpg", price: "Album" },
    { name: "Creep", url: "https://yzdmusic.github.io/id/library/album/creep/", image: "https://yzdmusic.github.io/cover-1/CREEP (COVER).jpg", price: "Album" },
    { name: "Cruciatus", url: "https://yzdmusic.github.io/id/library/album/cruciatus/", image: "https://yzdmusic.github.io/cover-1/CRUCIATUS (COVER).jpg", price: "Album" },
    { name: "Dead City", url: "https://yzdmusic.github.io/id/library/album/dead-city/", image: "https://yzdmusic.github.io/cover-1/DEAD CITY (COVER).jpg", price: "Album" },
    { name: "Death As The Solution", url: "https://yzdmusic.github.io/id/library/album/death-as-the-solution/", image: "https://yzdmusic.github.io/cover-1/DEATH AS THE SOLUTION (COVER).jpg", price: "Album" },
    { name: "Death Symphony", url: "https://yzdmusic.github.io/id/library/album/death-symphony/", image: "https://yzdmusic.github.io/cover-1/DEATH SYMPHONY (COVER).jpg", price: "Album" },
    { name: "Democrazy", url: "https://yzdmusic.github.io/id/library/album/democrazy/", image: "https://yzdmusic.github.io/cover-1/DEMOCRAZY (COVER).jpg", price: "Album" },
    { name: "Demon Queen", url: "https://yzdmusic.github.io/id/library/album/demon-queen/", image: "https://yzdmusic.github.io/cover-1/DEMON QUEEN (COVER).jpg", price: "Album" },
    { name: "Demonic Soul", url: "https://yzdmusic.github.io/id/library/album/demonic-soul/", image: "https://yzdmusic.github.io/cover-1/DEMONIC SOUL (COVER).jpg", price: "Album" },
    { name: "Diabolus Vox", url: "https://yzdmusic.github.io/id/library/album/diabolus-vox/", image: "https://yzdmusic.github.io/cover-1/DIABOLUS VOX (COVER).jpg", price: "Album" },
    { name: "Die Today!", url: "https://yzdmusic.github.io/id/library/album/die-today!/", image: "https://yzdmusic.github.io/cover-1/DIE TODAY! (COVER).jpg", price: "Album" },
    { name: "Een Huis Vol Ellende", url: "https://yzdmusic.github.io/id/library/album/een-huis-vol-ellende/", image: "https://yzdmusic.github.io/cover-1/EEN HUIS VOL ELLENDE (COVER).jpg", price: "Album" },
    { name: "El Donya Mesh Kol Haga", url: "https://yzdmusic.github.io/id/library/album/el-donya-mesh-kol-haga/", image: "https://yzdmusic.github.io/cover-1/EL DONYA MESH KOL HAGA (COVER).jpg", price: "Album" },
    { name: "Everything About Women", url: "https://yzdmusic.github.io/id/library/album/everything-about-women/", image: "https://yzdmusic.github.io/cover-1/EVERYTHING ABOUT WOMEN (COVER).jpg", price: "Album" },
    { name: "Goat Throne", url: "https://yzdmusic.github.io/id/library/album/goat-throne/", image: "https://yzdmusic.github.io/cover-1/GOAT THRONE (COVER).jpg", price: "Album" },
    { name: "Goatman", url: "https://yzdmusic.github.io/id/library/album/goatman/", image: "https://yzdmusic.github.io/cover-1/GOATMAN (COVER).jpg", price: "Album" },
    { name: "Halawes", url: "https://yzdmusic.github.io/id/library/album/halawes/", image: "https://yzdmusic.github.io/cover-1/HALAWES (COVER).jpg", price: "Album" },
    { name: "Happiness With You", url: "https://yzdmusic.github.io/id/library/album/happiness-with-you/", image: "https://yzdmusic.github.io/cover-1/HAPPINESS WITH YOU (COVER).jpg", price: "Album" },
    { name: "Hob Fi El Du'a", url: "https://yzdmusic.github.io/id/library/album/hob-fi-el-du'a/", image: "https://yzdmusic.github.io/cover-1/HOB FI EL DUA (COVER).jpg", price: "Album" },
    { name: "Honda Civic", url: "https://yzdmusic.github.io/id/library/album/honda-civic/", image: "https://yzdmusic.github.io/cover-1/HONDA CIVIC (COVER).jpg", price: "Album" },
    { name: "Human Error", url: "https://yzdmusic.github.io/id/library/album/human-error/", image: "https://yzdmusic.github.io/cover-1/HUMAN ERROR (COVER).jpg", price: "Album" },
    { name: "Hopelessness", url: "https://yzdmusic.github.io/id/library/album/hopelessness/", image: "https://yzdmusic.github.io/cover-1/HOPELESSNESS (COVER).jpg", price: "Album" },
    { name: "Hysteria", url: "https://yzdmusic.github.io/id/library/album/hysteria/", image: "https://yzdmusic.github.io/cover-1/HYSTERIA (COVER).jpg", price: "Album" },
    { name: "Indonesia Gelap", url: "https://yzdmusic.github.io/id/library/album/indonesia-gelap/", image: "https://yzdmusic.github.io/cover-1/HABIS LEBARAN NYARI KERJAAN DIMANA LAGI YA (COVER).jpg", price: "Album" },
    { name: "Ismik Mahfour Fi Albi", url: "https://yzdmusic.github.io/id/library/album/ismik-mahfour-fi-albi/", image: "https://yzdmusic.github.io/cover-1/ISMIK MAHFOUR FI ALBI (COVER).jpg", price: "Album" },
    { name: "Istannini Fi Masr", url: "https://yzdmusic.github.io/id/library/album/istannini-fi-masr/", image: "https://yzdmusic.github.io/cover-1/ISTANNINI FI MASR (COVER).jpg", price: "Album" },
    { name: "Just Want To Die", url: "https://yzdmusic.github.io/id/library/album/just-want-to-die/", image: "https://yzdmusic.github.io/cover-1/JUST WANT TO DIE (COVER).jpg", price: "Album" },
    { name: "Keep Moving Forward", url: "https://yzdmusic.github.io/id/library/album/keep-moving-forward/", image: "https://yzdmusic.github.io/cover-1/KEEP MOVING FORWARD (COVER).jpg", price: "Album" },
    { name: "Kefaya Horoub", url: "https://yzdmusic.github.io/id/library/album/kefaya-horoub/", image: "https://yzdmusic.github.io/cover-1/KEFAYA HOROUB (COVER).jpg", price: "Album" },
    { name: "Kembali Ke Masa Kecil", url: "https://yzdmusic.github.io/id/library/album/kembali-ke-masa-kecil/", image: "https://yzdmusic.github.io/cover-1/KEMBALI KE MASA KECIL (COVER).jpg", price: "Album" },
    { name: "Killing The Father's Family", url: "https://yzdmusic.github.io/id/library/album/killing-the-father's-family/", image: "https://yzdmusic.github.io/cover-1/KILLING THE FATHER'S FAMILY (COVER).jpg", price: "Album" },
    { name: "Let's Commit Suicide", url: "https://yzdmusic.github.io/id/library/album/let's-commit-suicide/", image: "https://yzdmusic.github.io/cover-1/LET'S COMMIT SUICIDE (COVER).jpg", price: "Album" },
    { name: "Loser Turned Killer", url: "https://yzdmusic.github.io/id/library/album/loser-turned-killer/", image: "https://yzdmusic.github.io/cover-1/LOSER TURNED KILLER (COVER).jpg", price: "Album" },
    { name: "Ma Teb'aash Abd Lelhob", url: "https://yzdmusic.github.io/id/library/album/ma-teb'aash-abd-lelhob/", image: "https://yzdmusic.github.io/cover-1/MA TEB'AASH ABD LELHOB (COVER).jpg", price: "Album" },
    { name: "Mashya Lwahdi", url: "https://yzdmusic.github.io/id/library/album/mashya-lwahdi/", image: "https://yzdmusic.github.io/cover-1/MASHYA LWAHDI (COVER).jpg", price: "Album" },
    { name: "Menginjak Neraka", url: "https://yzdmusic.github.io/id/library/album/menginjak-neraka/", image: "https://yzdmusic.github.io/cover-1/MENGINJAK NERAKA (COVER).jpg", price: "Album" },
    { name: "Mental Pressure", url: "https://yzdmusic.github.io/id/library/album/mental-pressure/", image: "https://yzdmusic.github.io/cover-1/MENTAL PRESSURE (COVER).jpg", price: "Album" },
    { name: "Mustaheel Ansak", url: "https://yzdmusic.github.io/id/library/album/mustaheel-ansak/", image: "https://yzdmusic.github.io/cover-1/MUSTAHEEL ANSAK (COVER).jpg", price: "Album" },
    { name: "Ngumbara Di Garut", url: "https://yzdmusic.github.io/id/library/album/ngumbara-di-garut/", image: "https://yzdmusic.github.io/cover-1/NGUMBARA DI GARUT (COVER).jpg", price: "Album" },
    { name: "No Hope For Life", url: "https://yzdmusic.github.io/id/library/album/no-hope-for-life/", image: "https://yzdmusic.github.io/cover-1/NO HOPE FOR LIFE (COVER).jpg", price: "Album" },
    { name: "Nothing Lasts Forever", url: "https://yzdmusic.github.io/id/library/album/nothing-lasts-forever/", image: "https://yzdmusic.github.io/cover-1/NOTHING LASTS FOREVER (COVER).jpg", price: "Album" },
    { name: "Nouran", url: "https://yzdmusic.github.io/id/library/album/nouran/", image: "https://yzdmusic.github.io/cover-1/NOURAN (COVER).jpg", price: "Album" },
    { name: "Numb", url: "https://yzdmusic.github.io/id/library/album/numb/", image: "https://yzdmusic.github.io/cover-1/NUMB (COVER).jpg", price: "Album" },
    { name: "Oppression", url: "https://yzdmusic.github.io/id/library/album/oppression/", image: "https://yzdmusic.github.io/cover-1/OPPRESSION (COVER).jpg", price: "Album" },
    { name: "Overthinking", url: "https://yzdmusic.github.io/id/library/album/overthinking/", image: "https://yzdmusic.github.io/cover-1/OVERTHINKING (COVER).jpg", price: "Album" },
    { name: "Paranoid", url: "https://yzdmusic.github.io/id/library/album/paranoid/", image: "https://yzdmusic.github.io/cover-1/PARANOID (COVER).jpg", price: "Album" },
    { name: "Persib Day", url: "https://yzdmusic.github.io/id/library/album/persib-day/", image: "https://yzdmusic.github.io/cover-1/PERSIB DAY (COVER).jpg", price: "Album" },
    { name: "Proyeksi Bunuh Diri", url: "https://yzdmusic.github.io/id/library/album/proyeksi-bunuh-diri/", image: "https://yzdmusic.github.io/cover-1/PROYEKSI BUNUH DIRI (COVER).jpg", price: "Album" },
    { name: "Real Nightmare", url: "https://yzdmusic.github.io/id/library/album/real-nightmare/", image: "https://yzdmusic.github.io/cover-1/REAL NIGHTMARE (COVER).jpg", price: "Album" },
    { name: "Rehlet Hayat Ragel Fashil", url: "https://yzdmusic.github.io/id/library/album/rehlet-hayat-ragel-fashil/", image: "https://yzdmusic.github.io/cover-1/REHLET HAYAT RAGEL FASHIL (COVER).jpg", price: "Album" },
    { name: "Rehlity Ma'a El Hubb", url: "https://yzdmusic.github.io/id/library/album/rehlity-ma'a-el-hubb/", image: "https://yzdmusic.github.io/cover-1/REHLITY MA'A EL HUBB (COVER).jpg", price: "Album" },
    { name: "Resayilk Da'et", url: "https://yzdmusic.github.io/id/library/album/resayilk-da'et/", image: "https://yzdmusic.github.io/cover-1/RESAYILK DA'ET (COVER).jpg", price: "Album" },
    { name: "Revenge Of A Loser", url: "https://yzdmusic.github.io/id/library/album/revenge-of-a-loser/", image: "https://yzdmusic.github.io/cover-1/REVENGE OF A LOSER (COVER).jpg", price: "Album" },
    { name: "Revenge Projection", url: "https://yzdmusic.github.io/id/library/album/revenge-projection/", image: "https://yzdmusic.github.io/cover-1/REVENGE PROJECTION (COVER).jpg", price: "Album" },
    { name: "Rise Above", url: "https://yzdmusic.github.io/id/library/album/rise-above/", image: "https://yzdmusic.github.io/cover-1/RISE ABOVE (COVER).jpg", price: "Album" },
    { name: "Rouh Wahda", url: "https://yzdmusic.github.io/id/library/album/rouh-wahda/", image: "https://yzdmusic.github.io/cover-1/ROUH WAHDA (COVER).jpg", price: "Album" },
    { name: "Rowdiest", url: "https://yzdmusic.github.io/id/library/album/rowdiest/", image: "https://yzdmusic.github.io/cover-1/ROWDIEST (COVER).jpg", price: "Album" },
    { name: "Sekte Sesat", url: "https://yzdmusic.github.io/id/library/album/sekte-sesat/", image: "https://yzdmusic.github.io/cover-1/SEKTE SESAT (COVER).jpg", price: "Album" },
    { name: "Serenity And Harmony", url: "https://yzdmusic.github.io/id/library/album/serenity-and-harmony/", image: "https://yzdmusic.github.io/cover-1/SERENITY AND HARMONY (COVER).jpg", price: "Album" },
    { name: "Serenity", url: "https://yzdmusic.github.io/id/library/album/serenity/", image: "https://yzdmusic.github.io/cover-1/SERENITY (COVER).jpg", price: "Album" },
    { name: "Silent Room", url: "https://yzdmusic.github.io/id/library/album/silent-room/", image: "https://yzdmusic.github.io/cover-1/SILENT ROOM (COVER).jpg", price: "Album" },
    { name: "Simfoniyyet El 'Ishq", url: "https://yzdmusic.github.io/id/library/album/simfoniyyet-el-'ishq/", image: "https://yzdmusic.github.io/cover-1/SIMFONIYYET EL 'ISHQ (COVER).jpg", price: "Album" },
    { name: "Starman", url: "https://yzdmusic.github.io/id/library/album/starman/", image: "https://yzdmusic.github.io/cover-1/STARMAN (COVER).jpg", price: "Album" },
    { name: "Stressed Out!", url: "https://yzdmusic.github.io/id/library/album/stressed-out!/", image: "https://yzdmusic.github.io/cover-1/STRESSED OUT! (COVER).jpg", price: "Album" },
    { name: "Suicide Attempt", url: "https://yzdmusic.github.io/id/library/album/suicide-attempt/", image: "https://yzdmusic.github.io/cover-1/SUICIDE ATTEMPT (COVER).jpg", price: "Album" },
    { name: "Suicide Projection", url: "https://yzdmusic.github.io/id/library/album/suicide-projection/", image: "https://yzdmusic.github.io/cover-1/SUICIDE PROJECTION (COVER).jpg", price: "Album" },
    { name: "Suicide Room", url: "https://yzdmusic.github.io/id/library/album/suicide-room/", image: "https://yzdmusic.github.io/cover-1/SUICIDE ROOM (COVER).jpg", price: "Album" },
    { name: "Suicide Today", url: "https://yzdmusic.github.io/id/library/album/suicide-today/", image: "https://yzdmusic.github.io/cover-1/SUICIDE TODAY (COVER).jpg", price: "Album" },
    { name: "The Cry Of The Earth", url: "https://yzdmusic.github.io/id/library/album/the-cry-of-the-earth/", image: "https://yzdmusic.github.io/cover-1/THE CRY OF THE EARTH (COVER).jpg", price: "Album" },
    { name: "The End Of All Things", url: "https://yzdmusic.github.io/id/library/album/the-end-of-all-things/", image: "https://yzdmusic.github.io/cover-1/THE END OF ALL THINGS (COVER).jpg", price: "Album" },
    { name: "The Heart Of A Chef", url: "https://yzdmusic.github.io/id/library/album/the-heart-of-a-chef/", image: "https://yzdmusic.github.io/cover-1/THE HEART OF A CHEF (COVER).jpg", price: "Album" },
    { name: "The Rebel", url: "https://yzdmusic.github.io/id/library/album/the-rebel/", image: "https://yzdmusic.github.io/cover-1/THE REBEL (COVER).jpg", price: "Album" },
    { name: "They're Killers", url: "https://yzdmusic.github.io/id/library/album/they're-killers/", image: "https://yzdmusic.github.io/cover-1/THEY'RE KILLERS (COVER).jpg", price: "Album" },
    { name: "Veil Of Lies", url: "https://yzdmusic.github.io/id/library/album/veil-of-lies/", image: "https://yzdmusic.github.io/cover-1/VEIL OF LIES (COVER).jpg", price: "Album" },
    { name: "Voice Of The People", url: "https://yzdmusic.github.io/id/library/album/voice-of-the-people/", image: "https://yzdmusic.github.io/cover-1/VOICE OF THE PEOPLE (COVER).jpg", price: "Album" },
    { name: "Vrijheid Strijd", url: "https://yzdmusic.github.io/id/library/album/vrijheid-strijd/", image: "https://yzdmusic.github.io/cover-1/VRIJHEID STRIJD (COVER).jpg", price: "Album" },
    { name: "Whispers Of Peace", url: "https://yzdmusic.github.io/id/library/album/whispers-of-peace/", image: "https://yzdmusic.github.io/cover-1/WHISPERS OF PEACE (COVER).jpg", price: "Album" },
    { name: "You Have Money, You Have Power", url: "https://yzdmusic.github.io/id/library/album/you-have-money-you-have-power/", image: "https://yzdmusic.github.io/cover-1/YOU HAVE MONEY, YOU HAVE POWER (COVER).jpg", price: "Album" },

    { name: "Metal", url: "https://yzdmusic.github.io/id/library/genre/metal/", image: "https://yzdmusic.github.io/thumbnail-1/METAL (THUMBNAIL).jpg", price: "Genre" },
    { name: "Pop Punk", url: "https://yzdmusic.github.io/id/library/genre/pop-punk/", image: "https://yzdmusic.github.io/thumbnail-1/POP PUNK (THUMBNAIL).jpg", price: "Genre" },
    { name: "Rap", url: "https://yzdmusic.github.io/id/library/genre/rap/", image: "https://yzdmusic.github.io/thumbnail-1/RAP (THUMBNAIL).jpg", price: "Genre" },
    { name: "Reggae", url: "https://yzdmusic.github.io/id/library/genre/reggae/", image: "https://yzdmusic.github.io/thumbnail-1/REGGAE\ \(THUMBNAIL\).jpg", price: "Genre" },
    { name: "Ska Punk", url: "https://yzdmusic.github.io/id/library/genre/ska-punk/", image: "https://yzdmusic.github.io/thumbnail-1/SKA PUNK (THUMBNAIL).jpg", price: "Genre" },
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