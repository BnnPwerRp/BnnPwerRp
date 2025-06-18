//  ____  _           _    _                    _
// / ___|| | ___  ___| | _| |    ___   __ _  __| | 
// \___ \| |/ _ \/ _ \ |/ / |   / _ \ / _` |/ _` |
//  ___) | |  __/  __/   <| |__| (_) | (_| | (_| |
// |____/|_|\___|\___|_|\_\_____\___/ \__,_|\__,_|
// version 2.18.0

// Loading screen language
//
// You can create or edit languages by
// editing/creating files in the languages folder
//
// Default available languages:
// "brazilian_portuguese"
// "english"
// "polish"
// "russian"
config.language = "english"

// Use an image for the logo instead of text
config.logo_use_image = true

// Image filename for the server logo
// (Place the image file in the images folder)
config.logo_image = "logo.png"

// Text to be shown on logo
config.logo_text = "SleekLoad"

// Use the server's name for the logo
config.logo_servername = false

// Center logo?
// "true" or "false"
config.logo_center = true

// Display current map and gamemode?
// "true" or "false"
config.logo_show_info = true

// Use a video for the background?
// Otherwise it will use images
// "true" or "false"
config.background_use_video = true

// Default available videos:
// "blue_rays.webm"
// "purple_blue_rays.webm"
// "green_rays.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format
// (Place the video file in the backgrounds/videos folder)
config.background_video = "banana.webm"

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// "true" or "false"
config.background_map_based = false

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the image files in the backgrounds/images folder)
config.background_images = [
	"background1.jpg",
	"background2.jpg",
	"background3.jpg",
]

// (Image-background only)
// Random background images order?
// "true" or "false"
config.background_images_random_order = true

// (Image-background only)
// Delay between background images changes
// in milliseconds
config.background_images_duration = 5000

// (Image-background only)
// Image background fade duration
// in milliseconds
config.background_images_fade_duration = 2000

// Enable background overlay?
// "true" or "false"
config.background_overlay = true

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
config.background_darkening = 30

// Play music during the loading screen?
// "true" or "false"
config.music_enable = true

// Display current music name?
// "true" or "false"
config.music_show = true

// Music playlist
// Add as many youtube ids/urls or audio files you want
// (YouTube only works on Chromium beta)
// (Use ogg files for compatibility with default Gmod)
// (Place the audio files in the music folder)
config.music_playlist = [
	
    {
        name: "Soulja Boy - In The Hills (Official Video)",
        youtube: "https://youtu.be/jwgh71FxZL4",
    },
    {
        name: "Freeze Raël",
        youtube: "https://youtu.be/_Zey1wgfA-c",
    },
    {
        name: "SosMula - YAKUZA (Official Music Video)",
        youtube: "https://youtu.be/SoDtpQqLGrg",
    },
    {
        name: "NEXT : SKRT SKRT ( VIDEO CLIP)",
        youtube: "https://youtu.be/fzacfpeDgNY",
    },
    {
        name: "Lil Tracy - Shame",
        youtube: "https://youtu.be/tLIw3VahsJ0",
    },
    {
        name: "Lil Peep x GG Neeks Ft. Brand New - Mo Murda (miro edit)",
        youtube: "https://youtu.be/eDPHBdC0bvE",
    },
    {
        name: "Artmasta _ Made in China",
        youtube: "https://youtu.be/OFOwX5BqV00",
    },
    {
        name: "Who Are You?",
        youtube: "https://youtu.be/DLg7tOzw6KI",
    },
    {
        name: "Boombox Cartel - NEW WIP (feat. MadeinTYO)",
        youtube: "https://youtu.be/sZOAbIJ-w7A",
    },
    {
        name: "Pemex",
        youtube: "https://youtu.be/-F4noJyDUwI",
    },
    {
        name: "Coudon",
        youtube: "https://youtu.be/ETaayXRRwRg",
    },
    {
        name: "Gougouner",
        youtube: "https://youtu.be/rIuqJ9GIorg",
    },
    {
        name: "BURGOS - I LIKE (OFFICIAL MUSIC VIDEO) PROD BY BERGOTTI *HD*",
        youtube: "https://youtu.be/Z8xXwLbJVVE",
    },
    {
        name: "A-Town \"Skrt Skrt\" (WSHH Exclusive - Official Music Video)",
        youtube: "https://youtu.be/IldD2KUpApc",
    },
    {
        name: "SEE YOU AGAIN featuring Kali Uchis",
        youtube: "https://youtu.be/TGgcC5xg9YI",
    },
    {
        name: "VIC MENSA - Reverse ft. G-Eazy",
        youtube: "https://youtu.be/I8ijb4Zee5E",
    },
    {
        name: "14 trapdoors - Swerve Skrrt (Official Music Video)",
        youtube: "https://youtu.be/KuBJzFQB_24",
    },
    {
        name: "Obia le Chef - CQJVD ft. Caballero & JeanJass // Vidéoclip officiel",
        youtube: "https://youtu.be/9yRgonVeAQ0",
    },
    {
        name: "Klondike Blonde - Klondike (Official Audio) (Prod. By Jazzepha & Mindofmisfitz)",
        youtube: "https://youtu.be/5mn2n7b8x14",
    },
    {
        name: "Fouki // Zay // Eau Ft. Kevin Na$h",
        youtube: "https://youtu.be/COWDGc87ISo",
    },
    {
        name: "bbno$ - tony thot prod. lentra (Official Video)",
        youtube: "https://youtu.be/NJzTaFYvnYw",
    },
    {
        name: "Who I Am",
        youtube: "https://youtu.be/m_BzXBag9Q4",
    },
    {
        name: "Tory Lanez - Skrt Skrt",
        youtube: "https://youtu.be/d3BiwxAmMaY",
    },
    {
        name: "LiL PEEP - High School (Lyrics)",
        youtube: "https://youtu.be/6TuF49AB44o",
    },
    {
        name: "COLOR PiNK - \"Hot Spot\" (Dir. @MaxNovakYoutube)",
        youtube: "https://youtu.be/7uX0NWNfHIo",
    },
    {
        name: "Les Anticipateurs - Blonde Prod. 514 IndoRecordz",
        youtube: "https://youtu.be/Xb1_ab5o4oc",
    },
    {
        name: "PLK - Skuu ft. Krisy [Clip Officiel]",
        youtube: "https://youtu.be/XM-jCZHHhhU",
    },
    {
        name: "Famous Dex - With Yo B!tch (Official Music Video)",
        youtube: "https://youtu.be/bAQjUtpuE_g",
    },
    {
        name: "OFFICIAL DONALD TRUMP ANTHEM",
        youtube: "https://youtu.be/6w3EbmeD9UY",
    },
    {
        name: "Les Anticipateurs - NOUVEAU (Prod. Lex Luger)",
        youtube: "https://youtu.be/F3VILytL_2U",
    },
    {
        name: "2 Hot 4 U (feat. $Uicdeboy$)",
        youtube: "https://youtu.be/Gxjil62odzU",
    },
    {
        name: "Kodak Black - SKRT [Official Music Video]",
        youtube: "https://youtu.be/pzhctd7n_fA",
    },
    {
        name: "21 Savage - Skrrt Skrrt (Official Music Video) [EXPLICIT]",
        youtube: "https://youtu.be/Y6QrHW1JYhw",
    },
    {
        name: "Skrrt Skrrt",
        youtube: "https://youtu.be/00BjDfsK2Xk",
    },
    {
        name: "ALKPOTE feat. CABALLERO & JEANJASS  #EP2 - NINJAS & GARGOUILLES - Les Marches De l'Empereur Saison 3",
        youtube: "https://youtu.be/HMWex8i3jY8",
    },
    {
        name: "ALKPOTE feat FREEZE CORLEONE I #EP9 & #E10 - L'ULTIME MARCHE - Les Marches De l'Empereur Saison 3",
        youtube: "https://youtu.be/vPY3OEECHPg",
    },
    {
        name: "Freeze Corleone 667 - Hors Ligne",
        youtube: "https://youtu.be/JXYNYzaGIns",
    },
    {
        name: "Yungg - Fiji (MetaCypher Ep.1) |canon M50 Music video|",
        youtube: "https://youtu.be/gg6KjxaeJ9U",
    },
    {
        name: "SAZAMYZY FEAT KALASH CRIMINEL ET FREEZE CORLEONE : BRAQUAGE A L'AFRICAINE 5 part1",
        youtube: "https://youtu.be/PDAqWAr8jeM",
    },
    {
        name: "FREESTYLE MISOGYNE",
        youtube: "https://youtu.be/5m-pdKfGhFU",
    },
    {
        name: "Benz Truck (гелик)",
        youtube: "https://youtu.be/U8OtBzFYavE",
    },
    {
        name: "Ice Out",
        youtube: "https://youtu.be/fiQCW5pQbG0",
    },
    {
        name: "Ombrage- Whisper avec Izz",
        youtube: "https://youtu.be/RhkmbDMgX2U",
    },
    {
        name: "Freestyle TakeOver - Menace Santana",
        youtube: "https://youtu.be/vO7MWv_Nm18",
    },
    {
        name: "Freeze Corleone 667 - Madara",
        youtube: "https://youtu.be/C1qRsVR-3Bk",
    },
    {
        name: "Les Anticipateurs *BONUS* Tir Du Poignet (Young Luxenberg Club Edit)",
        youtube: "https://youtu.be/d2NCTog_F3Y",
    },
    {
        name: "Boonk Gang \"Haul-Ass\" (WSHH Exclusive - Official Music Video)",
        youtube: "https://youtu.be/hpZ2je0otc8",
    },
    {
        name: "Lil Peep - ghost girl (Official Audio)",
        youtube: "https://youtu.be/pcFK4HzAlsU",
    },
    {
        name: "Lil Peep & Lil Tracy - castles (Official Audio)",
        youtube: "https://youtu.be/As1bpICMhzs",
    },
    {
        name: "Yung Gravy – Steppin' On The Beat ft. Trippythakid (Official Audio)",
        youtube: "https://youtu.be/APjnxKiBHnc",
    },
    {
        name: "Lil Peep - Coke Nails ft. Bexey (Official Audio) unreleased",
        youtube: "https://youtu.be/8SmiAvpcYEE",
    },
    {
        name: "Kodak Black \"SKRT\" Prod. by SkipOnDaBeat (WSHH Exclusive - Official Music Video)",
        youtube: "https://youtu.be/h8cyM_damag",
    },
    {
        name: "GTFOOMF",
        youtube: "https://youtu.be/gL6jQ8IX2fs",
    },
    {
        name: "14 trapdoors - Means To The End feat. Boldy James, Royce Da 5'9 & Billie Essco (Official Video) -",
        youtube: "https://youtu.be/h4bsY_h0few",
    },
    {
        name: "Les Anticipateurs - \"Ford F-750\" feat. Emageezy (prod. Blyza)",
        youtube: "https://youtu.be/5nfvhfLfpgI",
    },
    {
        name: "Fraîche Connexion - Session #2 (Avec Lil Deezy, Fouki, Crazylo, Segala, Kone, Osti One et MC Arabic)",
        youtube: "https://youtu.be/gz6yMpBlo1M",
    },
    {
        name: "Shygirl ft. Slowthai - BDE (Official Video)",
        youtube: "https://youtu.be/PM0qn7KzryQ",
    },
    {
        name: "ROY PURDY | Best Of 2017",
        youtube: "https://youtu.be/hvrEqTbSiXc",
    },
    {
        name: "BOONK - WASSUP (official music video)",
        youtube: "https://youtu.be/_8V61k185O4",
    },
    {
        name: "Lil Peep - Another Song (Extended)",
        youtube: "https://youtu.be/eEDtE_PVPS8",
    },
    {
        name: "John Gabbana - “Goin Up”  (Official Music Video - WSHH Exclusive)",
        youtube: "https://youtu.be/IbezkTXdcG4",
    },
    {
        name: "Mike Shabb - Rack$ feat Mtlord (Official Video)",
        youtube: "https://youtu.be/MXKjKDd2hZk",
    },
    {
        name: "E1 (3x3) - Fake Friends #ALG",
        youtube: "https://youtu.be/2MICuDbaSWM",
    },
    {
        name: "TRUNK 25 ta plotte stun osti dcauchmare degeulasse",
        youtube: "https://youtu.be/FZNL58FJ7eI",
    },
    {
        name: "Luv Resval - Smith & Wesson (Clip officiel)",
        youtube: "https://youtu.be/IqcW2z80plY",
    },
    {
        name: "WordUP! - Faktual vs Lodgicko",
        youtube: "https://youtu.be/oczkGo0yEnU",
    },
    {
        name: "Michel - Michel en Illimité",
        youtube: "https://youtu.be/itEhAFIwjKA",
    },
    {
        name: "Freeze Corleone 667 - Shavkat",
        youtube: "https://youtu.be/0ePN4iwL9wQ",
    },
    {
        name: "ZillaKami - BLEACH ft. Denzel Curry (Official Music Video)",
        youtube: "https://youtu.be/iK4pINjFAjc",
    },
    {
        name: "Jesus Wept",
        youtube: "https://youtu.be/IibNSFyMH2U",
    },
    {
        name: "Lil Peep - Beamer boy (Legendado-PT BR)",
        youtube: "https://youtu.be/g9ZvT0r3nS0",
    },
    {
        name: "mgk - PRESSURE (Official Music Video)",
        youtube: "https://youtu.be/zsYYJ5iU4pk",
    },
    {
        name: "Amérique du sud",
        youtube: "https://youtu.be/vbhRX6Hy7Z8",
    },
    {
        name: "TERIYAKI GOD",
        youtube: "https://youtu.be/9HFDW0x10-Q",
    },
    {
        name: "D-Track - Fumeur Occasionnel - Vidéoclip officiel",
        youtube: "https://youtu.be/7xwHB31pD0U",
    },
    {
        name: "Juice WRLD - Armed & Dangerous (Official Music Video)",
        youtube: "https://youtu.be/cr82wSBZeeQ",
    },
    {
        name: "Kalibre & Jay-D - Dip N Skrt",
        youtube: "https://youtu.be/uC7CUhvSGlM",
    },
    {
        name: "DO YOU BELIEVE IN GOD",
        youtube: "https://youtu.be/zB60gsgQml0",
    },
    {
        name: "Crystal Lake",
        youtube: "https://youtu.be/0YxJCs82lvQ",
    },
    {
        name: "FouKi - Playa // Vidéoclip officiel",
        youtube: "https://youtu.be/8SiQDzj4-x8",
    },
    {
        name: "Les Anticipateurs - #VRAIPARLÉ",
        youtube: "https://youtu.be/NQqoNTmOrpo",
    },
    {
        name: "Aswell - Highschool ft. Lova (Visuel Officiel)",
        youtube: "https://youtu.be/bE1E5XujfsM",
    },
    {
        name: "Gxx - Sets Up [prod. MaxoKoolin]",
        youtube: "https://youtu.be/rAHKMXu9nak",
    },
    {
        name: "Din vap Bein' raide (feat. BOY BIZZAR)",
        youtube: "https://youtu.be/zdvIfLsvLuA",
    },
    {
        name: "CSkill / Mont-Laurier (Bonus Track)",
        youtube: "https://youtu.be/cDDpGtynSas",
    },
    {
        name: "Cupidon - Hot (Clip Officiel)",
        youtube: "https://youtu.be/TvJRQMyPOt4",
    },
    {
        name: "Lil Uzi Vert - 20 Min | Lyrics",
        youtube: "https://youtu.be/CTV-sZ4r1t0",
    },
    {
        name: "CSKILL - POCHEKIPIQUE (VIDÉOCLIP OFFICIEL)",
        youtube: "https://youtu.be/8mmWdUcUg88",
    },
    {
        name: "Cupidon - Aujourd'hui (Clip Officiel)",
        youtube: "https://youtu.be/oJlaiL1wZw4",
    },
    {
        name: "Jeune Loup - Back Sur Le BS",
        youtube: "https://youtu.be/cAfa5bXdvN4",
    },
    {
        name: "Fléau Dicaprio - Piège Rock Alternatif",
        youtube: "https://youtu.be/vch3HD-bdGo",
    },
    {
        name: "SosMula - BULLET",
        youtube: "https://youtu.be/pZQgagDWLMw",
    },
    {
        name: "Schedule 1 (Music Video)",
        youtube: "https://youtu.be/BHrrVak6NEo",
    },
    {
        name: "Diemonds",
        youtube: "https://youtu.be/bPz4qrlCcAU",
    },
    {
        name: "Clandestine - Cocaina (remix)",
        youtube: "https://youtu.be/JJgGg1OXj90",
    },
    {
        name: "ya plu dkawaine",
        youtube: "https://youtu.be/Z0X6ysPbogE",
    },
    {
        name: "Bolide Noir",
        youtube: "https://youtu.be/Es-lrB_b4T0",
    },
    {
        name: "Sensuelle",
        youtube: "https://youtu.be/FreNVC45GNU",
    },
    {
        name: "Sex (Remix)",
        youtube: "https://youtu.be/oSwJi2G6pSY",
    },
    {
        name: "CELINE",
        youtube: "https://youtu.be/Qm9L1JAvrNI",
    },
    {
        name: "Meet you at the Graveyard",
        youtube: "https://youtu.be/aPkttK7igs0",
    },
    {
        name: "Family Guy - Redneck Misfits (Official Music Video)",
        youtube: "https://youtu.be/W024oMmZsXs",
    },
    {
        name: "Elles (feat. SXM)",
        youtube: "https://youtu.be/C_g_7_I_35s",
    },
    {
        name: "I No Longer Fear the Razor Guarding My Heel (IV)",
        youtube: "https://youtu.be/x8uwoWPWFyo",
    },
    {
        name: "My Flaws Burn Through My Skin Like Demonic Flames from Hell",
        youtube: "https://youtu.be/S0KAAsanVms",
    },
    {
        name: "Dans ma vie",
        youtube: "https://youtu.be/smoK29hmTmE",
    },
    {
        name: "Chris Webby - Bad Day (feat. Millyz)",
        youtube: "https://youtu.be/hjjky8_CoEo",
    },
    {
        name: "CENTRAL CEE - LIMITLESS (MUSIC VIDEO)",
        youtube: "https://youtu.be/Ag2fJaNbw3Q",
    },
    {
        name: "CENTRAL CEE - UP NORTH (LYRICS)",
        youtube: "https://youtu.be/9XOA32QpWGU",
    },
    {
        name: "Truth In The Lies",
        youtube: "https://youtu.be/V20ffTTL9UQ",
    },
    {
        name: "LET GO",
        youtube: "https://youtu.be/bLXA_fjUsus",
    },
    {
        name: "Day in the Life",
        youtube: "https://youtu.be/Gz8BXRmjiM4",
    },
    {
        name: "Doja",
        youtube: "https://youtu.be/Txnqzr_DZYg",
    },
    {
        name: "Friday Night",
        youtube: "https://youtu.be/V4gIjZXzw94",
    },
    {
        name: "ALL ABOARD THE RAGETRAIN (feat. JØNE)",
        youtube: "https://youtu.be/r3Vk1IqhOgs",
    },
    {
        name: "menace Santana - Guapman (Prod. Lewnwv)",
        youtube: "https://youtu.be/CH2Bgx3R0F8",
    },
    {
        name: "Luv Resval - Tout s'en va (Clip officiel)",
        youtube: "https://youtu.be/fmttOmYMm6Q",
    },
    {
        name: "Peur",
        youtube: "https://youtu.be/VWhymdaUvZw",
    },
    {
        name: "9 1 1 3",
        youtube: "https://youtu.be/eVdC2lJFmGQ",
    },
    {
        name: "LA QUOI ? (feat. La Mano 1.9)",
        youtube: "https://youtu.be/2X3CC_fyqhY",
    },
    {
        name: "Mauvais oeil !",
        youtube: "https://youtu.be/3VxbaYySZv4",
    },
    {
        name: "Plizye Mennaj",
        youtube: "https://youtu.be/s56Pory9ieE",
    },
    {
        name: "Kalash Hyperpop",
        youtube: "https://youtu.be/0b2e_ANYtIE",
    },
    {
        name: "PETETE",
        youtube: "https://youtu.be/6UAPhrgIie8",
    },
    {
        name: "Jerrican",
        youtube: "https://youtu.be/xfs72_hSbd4",
    },
    {
        name: "Keroué - AMADEUS / Chicane (Visualizers officiels)",
        youtube: "https://youtu.be/eyT8I8TxvvQ",
    },
    {
        name: "menace Santana - Freestyle covid (Part.2) Prod.Waj knife",
        youtube: "https://youtu.be/vcgC1-GBAT0",
    },
    {
        name: "Kerchak - JFLM JMR",
        youtube: "https://youtu.be/XvjsES13agQ",
    },
    {
        name: "JACK UZI - JACK DE LA TOURETTE 3 (Clip Oficiel)",
        youtube: "https://youtu.be/FMLlzl48IEs",
    },
    {
        name: "futaba",
        youtube: "https://youtu.be/ivz5rMze9sM",
    },
    {
        name: "$can & Z.F.R - fusil à pompe (Official Video)",
        youtube: "https://youtu.be/tZ9d9x3aBdk",
    },
    {
        name: "$UICIDEBOY$ - I HUNG MYSELF FOR A PERSONA///NOW I'M UP TO MY NECK WITH OFFERS",
        youtube: "https://youtu.be/Dcy25od869k",
    },
    {
        name: "Favé - Grah ft. La Mano 1.9",
        youtube: "https://youtu.be/b301Y-tLM1c",
    },
    {
        name: "Olympe Chabert - Excuses ou Mensonges by ORELSAN",
        youtube: "https://youtu.be/UUjVvSwEE2c",
    },
    {
        name: "Tour du monde",
        youtube: "https://youtu.be/MpeotVsX79k",
    },
    {
        name: "Vintage Culture, Adam K - Save Me (feat. MKLA) (Official Music Video)",
        youtube: "https://youtu.be/M_PXXaubbyc",
    },
    {
        name: "Hollywood Undead - Bullet [Lyrics]",
        youtube: "https://youtu.be/pbvvL53fTTg",
    },
    {
        name: "Oliver Twist - Grain De Sable (feat. LeMind)",
        youtube: "https://youtu.be/6k8EsRIz-4M",
    },
    {
        name: "27",
        youtube: "https://youtu.be/eVgr-nsYWeY",
    },
    {
        name: "Waynewood x JavyDade x Lil Xan \"KIlling Me\" (Xanarchy Remix)",
        youtube: "https://youtu.be/zwLIojMk2ag",
    },
    {
        name: "Lil Peep - live forever (Official Video)",
        youtube: "https://youtu.be/x65yxfRo6rM",
    },
    {
        name: "NIGHTCORE NEVER DIES !!!",
        youtube: "https://youtu.be/vXqkBS4upcQ",
    },
    {
        name: "Rappeur de Montréal - GLT ft. Raccoon",
        youtube: "https://youtu.be/JO2B7ggEtBQ",
    },
    {
        name: "JtReal - Ma Vie (Shot.By MtlMello)",
        youtube: "https://youtu.be/rgb_L33wv08",
    },
    {
        name: "Wooz - Pillz (Feat. Coutz)",
        youtube: "https://youtu.be/s9CzltGqICY",
    },
    {
        name: "NUMB",
        youtube: "https://youtu.be/CkFYV9S0YDo",
    },
    {
        name: "Dead Eyes",
        youtube: "https://youtu.be/qp6Dzrm2MvU",
    },
    {
        name: "Lil Peep - JUST IN CASE (Official Video)",
        youtube: "https://youtu.be/UGp1Lv333BQ",
    },
    {
        name: "VALD - REGULATION (REMIX VLADIMIR CAUCHEMAR) Feat. Joyca",
        youtube: "https://youtu.be/Nkx8OOwxuwk",
    },
    {
        name: "Tabarnak",
        youtube: "https://youtu.be/NHJ0E5rIc9U",
    },
    {
        name: "DANE O$EVEN - PARENTS MISTAKE (OFFICIAL MUSIC VIDEO)",
        youtube: "https://youtu.be/icwmQJlMEQU",
    },
    {
        name: "lilbubblegum x 1nonly x savage ga$p - what it do (prod. okayjml x nate goyard)",
        youtube: "https://youtu.be/fHPw1zqiK14",
    },
    {
        name: "BURGOS - PANCAKES (OFFICIAL MUSIC VIDEO) PROD BY NEET.RO X BRANWEN",
        youtube: "https://youtu.be/4qvPzX8bUEg",
    },
    {
        name: "☆ lil peep ☆ // waste of time (sub español)",
        youtube: "https://youtu.be/zulX5424rfY",
    },
    {
        name: "Empty World",
        youtube: "https://youtu.be/hK5t2v0bxKY",
    },
    {
        name: "Ren - Seven Sins (Official Lyric Video)",
        youtube: "https://youtu.be/bXS2MF5XW60",
    },
    {
        name: "Ren - Money Game Part 3 (Official Music Video)",
        youtube: "https://youtu.be/nyWbun_PbTc",
    },
    {
        name: "Back With Me",
        youtube: "https://youtu.be/fpZcGjNx33w",
    },
    {
        name: "Moonlight",
        youtube: "https://youtu.be/ic9KOmxNrDc",
    },
    {
        name: "Lucid Dreams (Remix)",
        youtube: "https://youtu.be/5ftaYP9DdYs",
    },
    {
        name: "Lostboy Carlos - Après le Club (feat. M!ND) [Clip Officiel]",
        youtube: "https://youtu.be/4o9tlUfT86I",
    },
    {
        name: "Syme & Izz - Fou",
        youtube: "https://youtu.be/hrcf_n-Qsqk",
    },
    {
        name: "Kryptonite",
        youtube: "https://youtu.be/UjWZGLi-1jM",
    },
    {
        name: "Ozzy Osbourne - Diary of a Madman (Official Audio)",
        youtube: "https://youtu.be/YwWVE84OEIA",
    },
    {
        name: "Chris Webby - One Of One",
        youtube: "https://youtu.be/5Yjpjkic7Uw",
    },
    {
        name: "off the top (demo)",
        youtube: "https://youtu.be/NAmmBHCAFgo",
    },
    {
        name: "Back of the Macca's",
        youtube: "https://youtu.be/hxJldcGlIeo",
    },
    {
        name: "Furax Barbarossa - MONA LISA",
        youtube: "https://youtu.be/d-68pvHuHtI",
    },
    {
        name: "Cheak13 | Nature Morte (Prod. Cheak13)",
        youtube: "https://youtu.be/uR8fW8L0_kE",
    },
    {
        name: "Mockingbird (Remix)",
        youtube: "https://youtu.be/iD5KXPSjfHU",
    },
    {
        name: "Luv Resval - Découpage.",
        youtube: "https://youtu.be/6R0Mygzt9hM",
    },
    {
        name: "J'me pensais gawa",
        youtube: "https://youtu.be/3tfyfNP5mnk",
    },
    {
        name: "LA GRISAILLE",
        youtube: "https://youtu.be/RIXE0iI5y4c",
    },
    {
        name: "Tom Odell - Another Love (feat Ziak & MS)",
        youtube: "https://youtu.be/mLgAHwkcd34",
    },
    {
        name: "Loser",
        youtube: "https://youtu.be/g-9wdA-fjYY",
    },
    {
        name: "O.Z & PETiTOM - Je sais (Clip officiel)",
        youtube: "https://youtu.be/jzg5JHDtjkU",
    },
    {
        name: "Machine Gun Kelly - Bloody Valentine Acoustic (Official Video)",
        youtube: "https://youtu.be/vHiFxhPs2TQ",
    },
    {
        name: "Menace Santana - Freestyle covid (Part.1)",
        youtube: "https://youtu.be/LGtBgig6RpE",
    },
    {
        name: "Filthy Frank sings Slow Dancing in the Dark",
        youtube: "https://youtu.be/u9mC4YkNav4",
    },
    {
        name: "Joji - Glimpse of Us (Official Video)",
        youtube: "https://youtu.be/NgsWGfUlwJI",
    },
    {
        name: "Olympe Chabert - Rechute by VALD (Cover)",
        youtube: "https://youtu.be/yEfz-fJfh1Q",
    },
    {
        name: "Machine Gun Kelly - 5:3666 (feat. phem) (Official Music Video)",
        youtube: "https://youtu.be/z8tMgnSI0i8",
    },
    {
        name: "Buzétage - Roule un autre",
        youtube: "https://youtu.be/s7Zfu34yHHI",
    },
    {
        name: "JP « Le Pad » Tremblay - Maladie mentale",
        youtube: "https://youtu.be/o1_ISCfgAF4",
    },
    {
        name: "THEODORT - Tout péter (gage de Mastu...)",
        youtube: "https://youtu.be/iSDqOxRTaEY",
    },
    {
        name: "Mastu - Quotidien (gage en slip)",
        youtube: "https://youtu.be/bxskLwoNJ_k",
    },
    {
        name: "Compter les corps",
        youtube: "https://youtu.be/WEwoEdWzETw",
    },
    {
        name: "$UICIDEBOY$ - ANTARCTICA (Lyric Video)",
        youtube: "https://youtu.be/s1-0lt7b-78",
    },
    {
        name: "Lil Peep - Come Around",
        youtube: "https://youtu.be/mwrTFbnZEjA",
    },
    {
        name: "Fait chier",
        youtube: "https://youtu.be/1rGcTQJOjhA",
    },
    {
        name: "U Said",
        youtube: "https://youtu.be/rdOWMsc1oEQ",
    },
    {
        name: "Josh A & Jake Hill - Suicidal Thoughts (Lyric Video)",
        youtube: "https://youtu.be/gqDQSYg-EKI",
    },
    {
        name: "Lil Peep - Toxic City ft. Drip-133",
        youtube: "https://youtu.be/T4Ob4hx9nMA",
    },
    {
        name: "Émile Bilodeau - Amour de félin [official audio]",
        youtube: "https://youtu.be/dHQxM8IbI4A",
    },
    {
        name: "Sometimes, All the Time (feat. Charlotte Cardin)",
        youtube: "https://youtu.be/gBBQoi-GqoA",
    },
    {
        name: "s l o w e d // Daddy Issues",
        youtube: "https://youtu.be/F5VBKvjZnXs",
    },
    {
        name: "XXXTENTACION - UGLY (remix)",
        youtube: "https://youtu.be/0qhIBuxnyys",
    },
    {
        name: "$UICIDEBOY$ - TEMPURA",
        youtube: "https://youtu.be/RY3jS9SSXZs",
    },
    {
        name: "MVKO - K I N G feat WITCHOUSE 40K",
        youtube: "https://youtu.be/oo5te6zhswE",
    },
    {
        name: "Lukas Graham - 7 Years (Sik World Remix)",
        youtube: "https://youtu.be/Ukhq8rmrKxw",
    },
    {
        name: "lil peep - 16 lines ( slowed + reverb + bass boosted )",
        youtube: "https://youtu.be/37bxm6M-TfM",
    },
    {
        name: "The Big Bang Theory Song by Barenaked Ladies from The Big Bang Theory (TV series)",
        youtube: "https://youtu.be/CMSYv_Z4SI8",
    },
    {
        name: "antagonist (2)",
        youtube: "https://youtu.be/SKGhejJjsY8",
    },
    {
        name: "BICEP | GLUE (Official Video)",
        youtube: "https://youtu.be/A7ZxRs45tTg",
    },
    {
        name: "Billie Eilish | Bass Boosted Mix",
        youtube: "https://youtu.be/3IzleQ7UYLA",
    },
    {
        name: "L.Dre - only one - (xxxtentacion - i dont wanna do this anymore lofi flip)",
        youtube: "https://youtu.be/onbW3FQ4iY4",
    },
    {
        name: "Alice in Chains - Down in a Hole (Doomer)",
        youtube: "https://youtu.be/za9eVNnzc30",
    },
    {
        name: "Lil Peep - Veins (prod. greaf)",
        youtube: "https://youtu.be/0VaeyqMK0GU",
    },
    {
        name: "no.cape - bleeding in the battlefield (prod. nilowh)",
        youtube: "https://youtu.be/gXqc0Bz2a_k",
    },
    {
        name: "Cat Dealers - Your Body (UltimateBlast & Dorel Remix) ◉ GIF Video Clip 🍄 | Remixes of Popular Songs",
        youtube: "https://youtu.be/jfyx2ZNRfiU",
    },
    {
        name: "Daso - Meine",
        youtube: "https://youtu.be/h7qTI6Njp9g",
    },
    {
        name: "DJ AWOOOI - LITTLE DARLING - [REMIX 2018]",
        youtube: "https://youtu.be/QwHL26e6KzA",
    },
    {
        name: "LXST CXNTURY - GRAVE",
        youtube: "https://youtu.be/hwajfsHVZxY",
    },
    {
        name: "twenty one pilots - Neon Gravestones (Official Audio)",
        youtube: "https://youtu.be/5MeQ9rA2Ifg",
    },
    {
        name: "8 Graves - Bury Me Low",
        youtube: "https://youtu.be/En8JdFUvKZk",
    },
    {
        name: "Lil Peep - Don't Panic (Legendado)",
        youtube: "https://youtu.be/Fb54p8FAcIY",
    },
    {
        name: "smrtdeath - \"Back With Me\"",
        youtube: "https://youtu.be/3D6i7SS_Sng",
    },
    {
        name: "smrtdeath - pretty carcass",
        youtube: "https://youtu.be/bIXriNqgoMk",
    },
    {
        name: "xxxtentacion - numb (slowed + reverb)",
        youtube: "https://youtu.be/i1xiDzFjAnw",
    },
    {
        name: "Sidewalks and Skeletons - WHITE LIGHT (2015) FULL ALBUM",
        youtube: "https://youtu.be/xBWIY0CW3ag",
    },
    {
        name: "Teddy Hyde - Sex with a Ghost (Lyrics)",
        youtube: "https://youtu.be/bX-obw7vqSw",
    },
    {
        name: "Родная пой (feat. KADI)",
        youtube: "https://youtu.be/XUOZrZlUvl0",
    },
    {
        name: "Joce - Défend ce tissu feat Baggies (PROD DALFARO)",
        youtube: "https://youtu.be/ds1g52jUK60",
    },
    {
        name: "Roderick Porter - ghost (feat. ivri) [prod. Ocean Beats] @roderick.porter",
        youtube: "https://youtu.be/8_v77a0IY2Y",
    },
    {
        name: "Lil Peep x Lil Tracy - Blowing Kisses In The Wind (miro edit)",
        youtube: "https://youtu.be/KiV2FyUMwYw",
    },
    {
        name: "Post Malone - Take What You Want (Official Audio) ft. Ozzy Osbourne, Travis Scott",
        youtube: "https://youtu.be/LYa_ReqRlcs",
    },
    {
        name: "Ram Jam - Black Betty (Official Audio)",
        youtube: "https://youtu.be/4cn_woPvjQI",
    },
    {
        name: "Booba - Mona Lisa Feat. JSX (Clip Officiel)",
        youtube: "https://youtu.be/Cp9pk-FkE6E",
    },
    {
        name: "Lorn - Acid Rain (Official Music Video)",
        youtube: "https://youtu.be/nxg4C365LbQ",
    },
    {
        name: "Adam Jensen - Trouble (lyrics)",
        youtube: "https://youtu.be/PDrHTweArFw",
    },
    {
        name: "Ganja White Night, Liquid Stranger - Jungle Juice",
        youtube: "https://youtu.be/8lXZXdJwSv4",
    },
    {
        name: "Humble",
        youtube: "https://youtu.be/1FzzZzqnX9s",
    },
    {
        name: "Spotlight",
        youtube: "https://youtu.be/-v5BMl9bPMs",
    },
    {
        name: "Emoter - Heroes",
        youtube: "https://youtu.be/Y2L7E2ZzIks",
    },
    {
        name: "MONXX - FALLING",
        youtube: "https://youtu.be/qBvft8J5xxs",
    },
    {
        name: "n u a g e s - Dreams ❀",
        youtube: "https://youtu.be/9RMHHwJ9Eqk",
    },
    {
        name: "White-B - PRMF (Réalisé Par Ziad Prod)",
        youtube: "https://youtu.be/gCd1nbu8oII",
    },
    {
        name: "Hornet La Frappe - Si tôt feat. Alonzo (Clip officiel)",
        youtube: "https://youtu.be/PmKmDRHUhrg",
    },
    {
        name: "Be alone - lofi hip hop mix",
        youtube: "https://youtu.be/mu5CqEJ1e6E",
    },
    {
        name: "twenty one pilots - Levitate (Official Video)",
        youtube: "https://youtu.be/uv_1AKKKJnk",
    },
    {
        name: "twenty one pilots - Jumpsuit (Official Video)",
        youtube: "https://youtu.be/UOUBW8bkjQ4",
    },
    {
        name: "twenty one pilots - Level of Concern (lyric video)",
        youtube: "https://youtu.be/8c06z2f2a3g",
    },
    {
        name: "Moji x Sboy - Regarde moi (audio)",
        youtube: "https://youtu.be/1S_kYVwYxf4",
    },
    {
        name: "Lonepsi - La fille du bus (Piano Version)",
        youtube: "https://youtu.be/EY5ac2ujJtQ",
    },
    {
        name: "døves - four",
        youtube: "https://youtu.be/DTlZwU_gNY0",
    },
    {
        name: "Bigflo & Oli - Pour un pote ft. Jean Dujardin",
        youtube: "https://youtu.be/99AS1Rq5dIM",
    },
    {
        name: "twenty one pilots - Ride (Official Video)",
        youtube: "https://youtu.be/Pw-0pbY9JeU",
    },
    {
        name: "An'Om - Filer au soleil (clip)",
        youtube: "https://youtu.be/KePT8DWuBN0",
    },
    {
        name: "BLASST #8 - RICHMAN (13 salopards)",
        youtube: "https://youtu.be/6mIw8pZhLhU",
    },
    {
        name: "3OH!3 - Rich Man [AUDIO]",
        youtube: "https://youtu.be/Lrr6_oDFhpI",
    },
    {
        name: "Lil Pump - ESSKEETIT [Official Music Video]",
        youtube: "https://youtu.be/DPxL7dO5XPc",
    },
    {
        name: "22- Meilleur Lendemain | Le Chum x Brakeur (Prod. Le Chum)",
        youtube: "https://youtu.be/awOjQQMlLxE",
    },
    {
        name: "Orloge Simard - 12 Pouces",
        youtube: "https://youtu.be/9pDExMQnofE",
    },
    {
        name: "Monsieur Fly & L'Équivoque - La Sorcière (IND BEATS) officiel 2013",
        youtube: "https://youtu.be/GDY1_cT9Xuk",
    },
    {
        name: "FouKi - All Zay ft. Koriass // Vidéoclip officiel",
        youtube: "https://youtu.be/BB2S47AEY2s",
    },
    {
        name: "Loud - 56K",
        youtube: "https://youtu.be/jNph5c1hYMs",
    },
    {
        name: "Soulja Boy Tell'em - Crank That (Soulja Boy) (Official Music Video)",
        youtube: "https://youtu.be/8UFIYGkROII",
    },
    {
        name: "Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit)",
        youtube: "https://youtu.be/foE1mO2yM04",
    },
    {
        name: "Mike Posner - I Took A Pill In Ibiza (Original)",
        youtube: "https://youtu.be/41GZVVcxQps",
    },
    {
        name: "Moji x Sboy - Pas comme elles",
        youtube: "https://youtu.be/gBAuN7vjjW4",
    },
    {
        name: "CHEZ LE PSY ( JOHNJOHN FT SYME CHEAK13 SKYZO DENIRO ) prod cheak13",
        youtube: "https://youtu.be/Bdat4596HTc",
    },
    {
        name: "MOJI X SBOY - MA GO (Emma Peters Cover)",
        youtube: "https://youtu.be/otmCUDGprzw",
    },
    {
        name: "Premier leçon les roulements. Exercice caisse claire papa + maman",
        youtube: "https://youtu.be/R1I7_6nxJPY",
    },
    {
        name: "Twenty One Pilots - Self Titled (Full Album)",
        youtube: "https://youtu.be/QE282qnbhII",
    },
    {
        name: "2TH - RPG (Clip Officiel)",
        youtube: "https://youtu.be/QzJ8VpjIBRI",
    },
    {
        name: "Lorenzo - Tu le C (Clip Officiel)",
        youtube: "https://youtu.be/55b8JEmoBTk",
    },
    {
        name: "Max Manie - Sunday (KlangTherapeuten Remix)",
        youtube: "https://youtu.be/ugkK6_XmsaQ",
    },
    {
        name: "Golden God - Machine Gun Kelly (MGK)",
        youtube: "https://youtu.be/VNmhAYODQxI",
    },
    {
        name: "Skrillex & Damian \"Jr. Gong\" Marley - Make It Bun Dem [OFFICIAL VIDEO]",
        youtube: "https://youtu.be/BGpzGu9Yp6Y",
    },
    {
        name: "Sir Pathetik - Aquarium [[OFFICIAL]]",
        youtube: "https://youtu.be/te583D4A8zI",
    },
    {
        name: "Lomepal interprète \"Yeux disent\" en live dans #ONPC",
        youtube: "https://youtu.be/oVD5m9AV0Qg",
    },
    {
        name: "Gab3 - Hollywood Dreaming ft Lil Peep",
        youtube: "https://youtu.be/1ErdExuCuxM",
    },
    {
        name: "PLK - C'est Mort (Clip Officiel)",
        youtube: "https://youtu.be/p1bSBDprYbo",
    },
    {
        name: "Isaac charles - $O$ ft Baggies",
        youtube: "https://youtu.be/lnHFOKl_LJE",
    },
    {
        name: "Les Colocs - Je chante comme une casserole",
        youtube: "https://youtu.be/vxdV7gVpSEg",
    },
    {
        name: "Ren - Jenny's Tale (Official Music Video)",
        youtube: "https://youtu.be/ZT4PtvgakLU",
    },
    {
        name: "Ali Gatie - Can't Let You Go [Official Music Video]",
        youtube: "https://youtu.be/wMBUtcMLJlk",
    },
    {
        name: "Random - Déjà Vu",
        youtube: "https://youtu.be/JQeunRdKew4",
    },
    {
        name: "Clean Bandit and Mabel - Tick Tock (feat. 24kGoldn) [Official Video]",
        youtube: "https://youtu.be/yC8SPG2LwSA",
    },
    {
        name: "Dua Lipa - Break My Heart (Official Video)",
        youtube: "https://youtu.be/Nj2U6rhnucI",
    },
    {
        name: "Video Game Synthwave Mix (Legend of Zelda & Super Mario)",
        youtube: "https://youtu.be/jpyMaQ6afLk",
    },
    {
        name: "bbno$ - bad thoughts prod. Y2K (Official Music Video)",
        youtube: "https://youtu.be/9s_HrcAjRj8",
    },
    {
        name: "twenty one pilots - Chlorine (Official Video)",
        youtube: "https://youtu.be/eJnQBXmZ7Ek",
    },
    {
        name: "Belzébuth",
        youtube: "https://youtu.be/vISXH4osr8c",
    },
    {
        name: "Hippie Sabotage - THE DARKNESS",
        youtube: "https://youtu.be/1x0Np2Lm3ys",
    },
    {
        name: "Lucidious | Changes ft. Anna [MUSIC VIDEO]",
        youtube: "https://youtu.be/xExLkzE8mCE",
    },
    {
        name: "Adam Jensen -  The Mystic (Official Audio)",
        youtube: "https://youtu.be/rRUOGd_9orc",
    },
    {
        name: "Bepolaire - Le Nuage #2 (Dark Side)",
        youtube: "https://youtu.be/D9_DJKPYVnk",
    },
    {
        name: "smrtdeath & lil aaron - she told me to kill myself",
        youtube: "https://youtu.be/CHI3KxRN0mc",
    },
    {
        name: "Eminem - Not Afraid (2Scratch Remix)",
        youtube: "https://youtu.be/LszU72jevgs",
    },
    {
        name: "TrapNation x CloudKid Mix | The sound of 2018",
        youtube: "https://youtu.be/wgy3EuRLwdI",
    },
    {
        name: "Emoter - Purpose",
        youtube: "https://youtu.be/MeUJxbe4Yak",
    },
    {
        name: "Eminem - Mockingbird (Lyrics)",
        youtube: "https://youtu.be/t5rBx86Noa0",
    },
    {
        name: "$UICIDEBOY$ - PARIS",
        youtube: "https://youtu.be/nqtobIpZt68",
    },
    {
        name: "An'Om - Crève-Cœur (lyrics clip)",
        youtube: "https://youtu.be/GcgqcwrO2oc",
    },
    {
        name: "2Scratch - SOBER (feat. Swisha T & Pressa) | Models & Cars Showtime",
        youtube: "https://youtu.be/nlKXV0vBDls",
    },
    {
        name: "RUNN - Better (Lyrics)",
        youtube: "https://youtu.be/Ko8jOKSameI",
    },
    {
        name: "EDEN - Wake Up (Lyric Video)",
        youtube: "https://youtu.be/ABbJmDmA1Wc",
    },
    {
        name: "Afternoon Class - Animation Short Film (2014)",
        youtube: "https://youtu.be/CAYDRIbXFAc",
    },
    {
        name: "This Actually Happens A Lot",
        youtube: "https://youtu.be/3WKfgbUkSug",
    },
    {
        name: "Love",
        youtube: "https://youtu.be/KMMq6MInBAk",
    },
    {
        name: "Tree - Splitting Branches",
        youtube: "https://youtu.be/m5pmEI5FsEU",
    },
    {
        name: "𝐔𝐆𝐋𝐘 𝐈𝐒 𝐁𝐄𝐀𝐔𝐓𝐈𝐅𝐔𝐋 - 𝐎𝐋𝐈𝐕𝐄𝐑 𝐓𝐑𝐄𝐄 -  𝐅𝐔𝐋𝐋 𝐀𝐋𝐁𝐔𝐌 - 𝐋𝐘𝐑𝐈𝐂𝐒 𝐕𝐈𝐃𝐄𝐎",
        youtube: "https://youtu.be/OzMK4CoP4sE",
    },
    {
        name: "Freddie Dredd - GTG (Official Music Video)",
        youtube: "https://youtu.be/fslK9YTkcc0",
    },
    {
        name: "Freddie Dredd - Devil's Work (Official Video)",
        youtube: "https://youtu.be/chLDLK0Wjs8",
    },
    {
        name: "Machine Gun Kelly - Smoke and Drive",
        youtube: "https://youtu.be/jqKtxmf8x7A",
    },
    {
        name: "$uicideboy$ - Kill Your$elf Part I: The $uicide $aga (Full Mixtape)",
        youtube: "https://youtu.be/9Q7EOCyL13s",
    },
    {
        name: "PNL - Au DD [Official Video]",
        youtube: "https://youtu.be/BtyHYIpykN0",
    },
    {
        name: "Loud - Devenir immortel (et puis mourir)",
        youtube: "https://youtu.be/keuA7enn7a0",
    },
    {
        name: "Aswell - Leaving",
        youtube: "https://youtu.be/VhMKy-B_TIU",
    },
    {
        name: "Le Chum - Ferme Ta Yeule (Prod. Le Chum) (2008)",
        youtube: "https://youtu.be/YwieuGQT4EY",
    },
    {
        name: "Session Cypher",
        youtube: "https://youtu.be/aL4u2_BRjAs",
    },
    {
        name: "Lil Xan - Wake Up",
        youtube: "https://youtu.be/uthHP6FoBmk",
    },
    {
        name: "Travis Scott - WAKE UP",
        youtube: "https://youtu.be/yChnkXhauwM",
    },
    {
        name: "Famous Dex - Pick It Up feat. A$AP Rocky [Official Video]",
        youtube: "https://youtu.be/X6SaVOLRcF4",
    },
    {
        name: "$UICIDEBOY$ - I NO LONGER FEAR THE RAZOR GUARDING MY HEEL",
        youtube: "https://youtu.be/pb0fGJXS2Qg",
    },
    {
        name: "Juice WRLD -  Lean Wit Me (Official Music Video)",
        youtube: "https://youtu.be/5SejM_hBvMM",
    },
    {
        name: "Coolio - Gangsta's Paradise (feat. L.V.) [Official Music Video]",
        youtube: "https://youtu.be/fPO76Jlnz6c",
    },
    {
        name: "A$AP Rocky - Fukk Sleep (Official Video) ft. FKA twigs",
        youtube: "https://youtu.be/pM5XogpX1JA",
    },
    {
        name: "A$AP Mob - Yamborghini High (Official Video - Explicit) ft. Juicy J",
        youtube: "https://youtu.be/tt7gP_IW-1w",
    },
    {
        name: "Future - Life Is Good (Official Music Video) ft. Drake",
        youtube: "https://youtu.be/l0U7SxXHkPY",
    },
    {
        name: "Denzel Curry - CLOUT COBAIN | CLOUT CO13A1N",
        youtube: "https://youtu.be/tKAv7eOK2dg",
    },
    {
        name: "A$AP Rocky - Praise The Lord (Da Shine) (Official Video) ft. Skepta",
        youtube: "https://youtu.be/Kbj2Zss-5GY",
    },
    {
        name: "bbno$ x diamond pistols - help herself (Official Video)",
        youtube: "https://youtu.be/I6RVE0xYjoI",
    },
    {
        name: "Rich The Kid - Plug Walk",
        youtube: "https://youtu.be/ToY6sjSV8h8",
    },
    {
        name: "Masked Wolf - Astronaut In The Ocean (Maxun Remix)",
        youtube: "https://youtu.be/WfM5ylpEqx4",
    },
    {
        name: "Night Lovell - Still Cold / Liberty Walk GTR Performance",
        youtube: "https://youtu.be/ynAGvE_iscc",
    },
    {
        name: "Hippie Sabotage - Devil Eyes / 350Z Showtime",
        youtube: "https://youtu.be/o-_DVLacX4c",
    },
    {
        name: "[SFM] Can't Be Erased (JT Machinima/Music) - Bendy and the Ink Machine Rap",
        youtube: "https://youtu.be/7WpZXb6j_2E",
    },
    {
        name: "Soso Maness - TP (Clip officiel)",
        youtube: "https://youtu.be/7AFNhGtVmtE",
    },
    {
        name: "BLASST #13 - LODGICKO (13 salopards)",
        youtube: "https://youtu.be/_r06OojW-ew",
    },
    {
        name: "blackbear - the 1 (Official Music Video)",
        youtube: "https://youtu.be/DzAF9ctslI8",
    },
    {
        name: "Blackbear & Wiz Khalifa - CHEERS [Audio]",
        youtube: "https://youtu.be/gEjiMEEFSGI",
    },
    {
        name: "blackbear - smile again",
        youtube: "https://youtu.be/dKJsJcqubWw",
    },
    {
        name: "Stuck In the Sound - Let's Go [Official Video]",
        youtube: "https://youtu.be/52Gg9CqhbP8",
    },
    {
        name: "Hayley Kiyoko - Girls Like Girls [Official Music Video]",
        youtube: "https://youtu.be/I0MT8SwNa_U",
    },
    {
        name: "girl in red - bad idea!",
        youtube: "https://youtu.be/Xo8QvY0jOOE",
    },
    {
        name: "i'll die anyway",
        youtube: "https://youtu.be/6aQnW5l4wSg",
    },
    {
        name: "Monke Life Good",
        youtube: "https://youtu.be/5WTgEu5YJmw",
    },
    {
        name: "Et la marmotte met le petit chocolat dans le papier d'alu",
        youtube: "https://youtu.be/_Qg3Rk-B09o",
    },
    {
        name: "Mr. Robot - Hey You - Pink Floyd - Elliot",
        youtube: "https://youtu.be/lI1xZAHXIcM",
    },
    {
        name: "Radiohead - Black Mirror - Exit Music",
        youtube: "https://youtu.be/qCLPlqeWWqI",
    },
    {
        name: "Alt-J (∆) - Matilda",
        youtube: "https://youtu.be/d700g9X78cs",
    },
    {
        name: "Mac Miller x Lil Peep - Self Care (miro edit)",
        youtube: "https://youtu.be/qIUc8EF_xcQ",
    },
    {
        name: "VIC MENSA - SHELTER ft. Wyclef Jean, Chance The Rapper",
        youtube: "https://youtu.be/XvmEffQBHCo",
    },
    {
        name: "Contrat",
        youtube: "https://youtu.be/9sf8WWiojSk",
    },
    {
        name: "2TH - Pardonner (Clip Officiel)",
        youtube: "https://youtu.be/ryPMdyulTq0",
    },
    {
        name: "ASHE 22 - CRO COP",
        youtube: "https://youtu.be/oLDb58PYtmA",
    },
    {
        name: "Devenir Immortel, et puis, mourir...",
        youtube: "https://youtu.be/JVYA9zUrCwg",
    },
    {
        name: "Breezeblocks",
        youtube: "https://youtu.be/m1jv7D85x-0",
    },
    {
        name: "Where Is My Mind?",
        youtube: "https://youtu.be/49FB9hhoO6c",
    },
    {
        name: "House Of The Rising Sun",
        youtube: "https://youtu.be/sHbKdI26RkE",
    },
    {
        name: "Creedence Clearwater Revival - Fortunate Son (Official Music Video)",
        youtube: "https://youtu.be/ZWijx_AgPiA",
    },
    {
        name: "Ram Jam - Black Betty",
        youtube: "https://youtu.be/I_2D8Eo15wE",
    },
    {
        name: "Kenny Rogers - The Gambler",
        youtube: "https://youtu.be/7hx4gdlfamo",
    },
    {
        name: "Far Side Banks Of Jordan",
        youtube: "https://youtu.be/L4Nft_jS-_s",
    },
    {
        name: "Watsky- Sloppy Seconds [Cardboard Castles]",
        youtube: "https://youtu.be/VCEsveSK5to",
    },
    {
        name: "DJ Snake, AlunaGeorge - You Know You Like It (Audio)",
        youtube: "https://youtu.be/MIuJVYNvC-s",
    },
    {
        name: "Ryan Caraveo - Feelings (feat. Abby Gundersen)",
        youtube: "https://youtu.be/2tf0fPQtOCA",
    },
    {
        name: "Red Hot Chili Peppers - Can't Stop [Official Music Video]",
        youtube: "https://youtu.be/8DyziWtkfBw",
    },
    {
        name: "To Whom It May Concern",
        youtube: "https://youtu.be/cEQ6ZMNZheY",
    },
    {
        name: "Sex n' Drugs (feat. Harrison Sands & copper king)",
        youtube: "https://youtu.be/n_Qg5z1a6hc",
    },
    {
        name: "Ryan Caraveo - Paradise (OFFICIAL VIDEO)",
        youtube: "https://youtu.be/5FzFyAQzE44",
    },
    {
        name: "Cupidon - 21 (Clip Officiel)",
        youtube: "https://youtu.be/SqXdK_TdOM0",
    },
    {
        name: "Shreez  - 3.5 // Vidéoclip officiel",
        youtube: "https://youtu.be/eVaeKfEr7C0",
    },
    {
        name: "Enima (feat. RK) - Port d'arme [Clip Officiel]",
        youtube: "https://youtu.be/H1sTbwui4E4",
    },
    {
        name: "Les Anticipateurs - FINDSEMAINE",
        youtube: "https://youtu.be/5Vdap4DTd0Y",
    },
    {
        name: "Youri & DJ Weedim - Psilocybe #TsarBomba",
        youtube: "https://youtu.be/KhArdV0MWGw",
    },
    {
        name: "Frenchmen 10 - Le freestyle de Nusky & Vaati",
        youtube: "https://youtu.be/ODlY1jYV4V8",
    },
    {
        name: "Dj Weedim x Alkpote x Luv Resval - Synthèse",
        youtube: "https://youtu.be/BnPfE03n1xw",
    },
    {
        name: "Luv Resval - ¥5",
        youtube: "https://youtu.be/Isd93sI7bRY",
    },
    {
        name: "CSKILL - SCRAPP (Audio Officiel)",
        youtube: "https://youtu.be/1f3buUtaehM",
    },
    {
        name: "Luv Resval - ¥3 ( ¥88 #3)",
        youtube: "https://youtu.be/OOHM70szu44",
    },
    {
        name: "CSKILL - Tabarnak // Vidéoclip Officiel //",
        youtube: "https://youtu.be/i1_i4Rpfxf0",
    },
    {
        name: "CSKILL  - NINTENDO (VIDÉOCLIP OFFICIEL)",
        youtube: "https://youtu.be/kfBg_to-4wo",
    },
    {
        name: "CSKILL - GANGSTA (VideoClip Officiel) (prod. eisboy)",
        youtube: "https://youtu.be/g127orm1DJk",
    },
    {
        name: "NO CUENTO - 91ZULY (PROD. CARTEL DEITY)",
        youtube: "https://youtu.be/iA4ZSiw04RY",
    },
    {
        name: "Cupidon - Ice Cream (Clip Officiel)",
        youtube: "https://youtu.be/EChFuegTMYU",
    },
    {
        name: "12 Singes | Règne Animal | (Prod. Cheak) | (2015)",
        youtube: "https://youtu.be/KMmv8Ih3dQw",
    },
    {
        name: "Wooz - Rechute",
        youtube: "https://youtu.be/DPySFLBAYE4",
    },
    {
        name: "Wassup",
        youtube: "https://youtu.be/TgU7cT0cIaQ",
    },
    {
        name: "DANS L'COFFRE ( FAT GAB LE CHUM JOHNJOHN FIASCO )",
        youtube: "https://youtu.be/MeOicCzicb0",
    },
    {
        name: "68 28g",
        youtube: "https://youtu.be/8IVMrQmeGig",
    },
    {
        name: "Youri & DJ Weedim - Psilocybe 2",
        youtube: "https://youtu.be/mwAALeh9pug",
    },
    {
        name: "Kalibre & MOP - 12 Apôtres (Vidéoclip officiel)",
        youtube: "https://youtu.be/plERjfIbR-g",
    },
    {
        name: "scarlxrd & kordhell - MISS ME? (OFFICIAL VIDEO)",
        youtube: "https://youtu.be/aYtOKQ9LYYQ",
    },
    {
        name: "lil aaron - BADSIDE (LYRIC VIDEO)",
        youtube: "https://youtu.be/bLgZkNZCZlU",
    },
    {
        name: "Night Lovell - Live Television",
        youtube: "https://youtu.be/iWt8fP2BLu0",
    },
    {
        name: "Youri - Tel Aviv (Prod by DaRealright)",
        youtube: "https://youtu.be/Aiaob-0-6BY",
    },
    {
        name: "Kakuzo - Cash",
        youtube: "https://youtu.be/-gwF83mFdxo",
    },
    {
        name: "PLK - Demain (Clip Officiel)",
        youtube: "https://youtu.be/BvPszccELCA",
    },
    {
        name: "Reta feat Pakdur - blunt n cup",
        youtube: "https://youtu.be/Iq0YNF7u1Lk",
    },
    {
        name: "Felonie",
        youtube: "https://youtu.be/J3li6uGSOxs",
    },
    {
        name: "Redman - Dunfiato [Official Video]",
        youtube: "https://youtu.be/vu_tvemD578",
    },
    {
        name: "Aswell - Sandy (Clip Officiel)",
        youtube: "https://youtu.be/bEiW5tq-9AE",
    },
    {
        name: "PLK -  Nouvelles (Clip Officiel)",
        youtube: "https://youtu.be/-68R6v7JgjI",
    },
    {
        name: "PLK feat. JUL - Faut pas (clip officiel)",
        youtube: "https://youtu.be/y0J3vX9zuYo",
    },
    {
        name: "Key Largo - Screen #NoFake2 (Clip officiel)",
        youtube: "https://youtu.be/ZcKeRjJtCuk",
    },
    {
        name: "Luv Resval - Automne",
        youtube: "https://youtu.be/Z8Dtd0svpWA",
    },
    {
        name: "C'est ça qui veulent",
        youtube: "https://youtu.be/PEd6xQkcTmw",
    },
    {
        name: "Sto - BERLIN #DriftMusic2 (Prod. Lowonstage)",
        youtube: "https://youtu.be/MuzFM46U_aY",
    },
    {
        name: "Ok Ouin",
        youtube: "https://youtu.be/cdMOt-k2p_k",
    },
    {
        name: "Kalibre - Quille (Feat. 2Red Angelz) // Vidéoclip Officiel",
        youtube: "https://youtu.be/wp-MSGMJGmk",
    },
    {
        name: "Lil Peep - Shame On U (miro edit)",
        youtube: "https://youtu.be/ieUTAh6Wu-c",
    },
    {
        name: "LES ROSES & LES ÉPINES",
        youtube: "https://youtu.be/Fa8IOjS6O5s",
    },
    {
        name: "Sokra - GTA (Clip Officiel)",
        youtube: "https://youtu.be/wVhnywPSlUk",
    },
    {
        name: "Molly",
        youtube: "https://youtu.be/x_KKBAKelUk",
    },
    {
        name: "Your.Nash - herm",
        youtube: "https://youtu.be/Gi0BwmUiy6w",
    },
    {
        name: "DEMON Z33K - FR33STYLE v3",
        youtube: "https://youtu.be/aRzOuT0ij-U",
    },
    {
        name: "Mac Miller - Self Care",
        youtube: "https://youtu.be/SsKT0s5J8ko",
    },
    {
        name: "Carbonne - Imagine (Lyrics video)",
        youtube: "https://youtu.be/4A6_mBW03EI",
    },
    {
        name: "Youri - Doggy Bag (Prod by DaRealRight)",
        youtube: "https://youtu.be/ORZCxmeebr4",
    },
    {
        name: "Ziak - Talent (Prod. Scar, Nardey & Memo)",
        youtube: "https://youtu.be/fFyDo5Ufj8A",
    },
    {
        name: "PLK - Un peu de haine (Clip Officiel)",
        youtube: "https://youtu.be/KvmRDZy93Nc",
    },
    {
        name: "Youri - AK47 feat Lord Esperanza & Nelick (Prod by Piège)",
        youtube: "https://youtu.be/iOmw0iacMl0",
    },
    {
        name: "SDM - BOLIDE ALLEMAND 1/2 (Clip Officiel)",
        youtube: "https://youtu.be/WcX37NouKxw",
    },
    {
        name: "Deadi x Nizi - Plus ou moins ft. DJ Djel (Clip Officiel)",
        youtube: "https://youtu.be/inrSXu9PLq0",
    },
    {
        name: "Sober/Hungover (feat. Arizona Zervas)",
        youtube: "https://youtu.be/-Eebp7MWvyY",
    },
    {
        name: "Deadi x Nizi - J'continuerai ft. San-Nom (Clip Officiel)",
        youtube: "https://youtu.be/EjCR0DZ_h3Q",
    },
    {
        name: "Excuses ou mensonges",
        youtube: "https://youtu.be/WcFOQxitZHc",
    },
    {
        name: "Fat Nick - WTF [Audio]",
        youtube: "https://youtu.be/edFMjsK_Cjs",
    },
    {
        name: "R.A.F",
        youtube: "https://youtu.be/LjzToaS7hcM",
    },
    {
        name: "Imagine",
        youtube: "https://youtu.be/jGcSONGtfQw",
    },
    {
        name: "roll the windows up",
        youtube: "https://youtu.be/xaoFAhPDby4",
    },
    {
        name: "Matusalem",
        youtube: "https://youtu.be/hT6uR6Xkv-c",
    },
    {
        name: "T'étais où?",
        youtube: "https://youtu.be/dfYZ_jJLDBw",
    },
    {
        name: "Enima - Tellement ( Lyrics Video ) @EnimaOfficiel",
        youtube: "https://youtu.be/IDKnWuRe0CE",
    },
    {
        name: "Jay Scøtt - T'étais où?",
        youtube: "https://youtu.be/M0MV1Sfun2s",
    },
    {
        name: "Hyrule",
        youtube: "https://youtu.be/A30-86XGHTI",
    },
    {
        name: "çalavie",
        youtube: "https://youtu.be/IaWbfeT7-cY",
    },
    {
        name: "P.S.A",
        youtube: "https://youtu.be/io9eKg2iC4Q",
    },
    {
        name: "Vaï et reviens",
        youtube: "https://youtu.be/0IuFAovp53Y",
    },
    {
        name: "Tamashi (feat. YTD)",
        youtube: "https://youtu.be/b7vlzCo0IWo",
    },
    {
        name: "Off The Gas",
        youtube: "https://youtu.be/rNCuKvEEcb0",
    },
    {
        name: "Connaisseur Ticaso - Switch Up (Official Video)",
        youtube: "https://youtu.be/MDeh2SgyxzE",
    },
    {
        name: "Lost -  Trompé par le temps (Visualizer)",
        youtube: "https://youtu.be/fGgMR1ozgz0",
    },
    {
        name: "Lefa - Bitch (Clip officiel) ft. Vald",
        youtube: "https://youtu.be/M3iGcTxw5d4",
    },
    {
        name: "5Sang14 - La Folle (Clip Officiel)",
        youtube: "https://youtu.be/6mQG6WKv52g",
    },
    {
        name: "HOUDI | GRHÜNT #77",
        youtube: "https://youtu.be/Zv5E6Szbnkg",
    },
    {
        name: "Farfadet - Appel (Lyrics Video)",
        youtube: "https://youtu.be/-GCGnQHaLxk",
    },
    {
        name: "Appel (Remix)",
        youtube: "https://youtu.be/rLODnxlBsFM",
    },
    {
        name: "Paria",
        youtube: "https://youtu.be/zGZ_mTxO6Mk",
    },
    {
        name: "Problems",
        youtube: "https://youtu.be/-u1-NOI9LK0",
    },
    {
        name: "Shots & Squats",
        youtube: "https://youtu.be/5IupzXqVcvQ",
    },
    {
        name: "UFO (Radio Edit)",
        youtube: "https://youtu.be/pPFfpS6BGJA",
    },
    {
        name: "Addicted",
        youtube: "https://youtu.be/rR-1OdqjC3Q",
    },
    {
        name: "À l’heure où je me couche",
        youtube: "https://youtu.be/tptvLH2sOFs",
    },
    {
        name: "Nouvelle vie",
        youtube: "https://youtu.be/ujsFMld16sg",
    },
    {
        name: "Options",
        youtube: "https://youtu.be/q4esxUNu9sY",
    },
    {
        name: "Life Happens",
        youtube: "https://youtu.be/FTeKWYCC-_0",
    },
    {
        name: "Flatline",
        youtube: "https://youtu.be/1waPCFpkC_E",
    },
    {
        name: "Réflexions basses",
        youtube: "https://youtu.be/4IwuGjm42hQ",
    },
    {
        name: "Haut de gamme",
        youtube: "https://youtu.be/bBQufSF3XFE",
    },
    {
        name: "Hentai Bitch (feat. Kodama Boy & Big Gay)",
        youtube: "https://youtu.be/rddxMpDR8OQ",
    },
    {
        name: "Jamais (feat. PLK)",
        youtube: "https://youtu.be/CMS8o745dtY",
    },
    {
        name: "Cloud7 - Angels Of The Dark (Trippy Edit)",
        youtube: "https://youtu.be/qi2xhtVCh_c",
    },
    {
        name: "Shreez - Diamant (Visualizer)",
        youtube: "https://youtu.be/jAjT4c6kk3A",
    },
    {
        name: "TRAP DO DACRUZ - Mira invejada 🔫 Rizzo prod. JottaR",
        youtube: "https://youtu.be/hRuqHXxl9vM",
    },
    {
        name: "Naam Sujal - MOSHPITAL (Official Music Video)",
        youtube: "https://youtu.be/_XqME9skC1I",
    },
    {
        name: "Naps (ft. SCH) - La danse des bandits (Clip Officiel)",
        youtube: "https://youtu.be/BMqQDlH5JnQ",
    },
    {
        name: "Hostage",
        youtube: "https://youtu.be/5t9tH4DRd8s",
    },
    {
        name: "When the World Ended",
        youtube: "https://youtu.be/azlWxVOaqlk",
    },
    {
        name: "Nostalgia",
        youtube: "https://youtu.be/qoK35yWqTaA",
    },
    {
        name: "Nun Major",
        youtube: "https://youtu.be/FdAXiWaHiuk",
    },
    {
        name: "La Jeepeta (Remix)",
        youtube: "https://youtu.be/gmr-gQm3wNU",
    },
    {
        name: "Easy Money",
        youtube: "https://youtu.be/iOhdTlf9Ph4",
    },
    {
        name: "Your Soul",
        youtube: "https://youtu.be/abqU2YLFnJ8",
    },
    {
        name: "Hate It Or Love It",
        youtube: "https://youtu.be/B_1moEBS4TE",
    },
    {
        name: "Bands (feat. OhGeesy, Fenix Flexin & Master Kato)",
        youtube: "https://youtu.be/tjuWeMDyfX0",
    },
    {
        name: "Bags of December",
        youtube: "https://youtu.be/OxkEuicHMio",
    },
    {
        name: "Zinera - Glitch (Official Video)",
        youtube: "https://youtu.be/2s_8qHprP9k",
    },
    {
        name: "Fresh",
        youtube: "https://youtu.be/6xd3Nm7XocU",
    },
    {
        name: "RJ Pasin - Lobster",
        youtube: "https://youtu.be/pErNnyHJNlA",
    },
    {
        name: "Nakry - Léwé (Clip Officiel)",
        youtube: "https://youtu.be/xZ2Pq71i94c",
    },
    {
        name: "Favé - FLASHBACK ft. Gazo (Clip Officiel)",
        youtube: "https://youtu.be/zJPEOhz5zZ4",
    },
    {
        name: "ZIAK - UN MONDE PARFAIT ft.ILONA",
        youtube: "https://youtu.be/18OxeWMJeoM",
    },
    {
        name: "Kerchak - Play (Clip officiel)",
        youtube: "https://youtu.be/_fqOC4I--gI",
    },
    {
        name: "Les sécheresses du Sahara",
        youtube: "https://youtu.be/WPpBiHNLxzQ",
    },
    {
        name: "cocaine shawty",
        youtube: "https://youtu.be/svChxkzTdNM",
    },
    {
        name: "Through The Surface",
        youtube: "https://youtu.be/jxJooRT4g7o",
    },
    {
        name: "Jake Hill - Wake Up (Again)",
        youtube: "https://youtu.be/ygH7fF--7V0",
    },
    {
        name: "Jake Hill - Father Time",
        youtube: "https://youtu.be/qubHGr6Snx0",
    },
    {
        name: "Josh A - Suicide Benz",
        youtube: "https://youtu.be/mNj6O9zl8Ug",
    },
    {
        name: "Idiote",
        youtube: "https://youtu.be/bkM-RYPew44",
    },
    {
        name: "A la fin",
        youtube: "https://youtu.be/QJG_yJeAQoA",
    },
    {
        name: "Wow Wow Wow",
        youtube: "https://youtu.be/M3-9HlYPZRk",
    },
    {
        name: "Millionaire",
        youtube: "https://youtu.be/0Raya_0Gn3g",
    },
    {
        name: "Soulève-moi",
        youtube: "https://youtu.be/LSlW6fhl69Y",
    },
    {
        name: "Lost - Tequila no more (Visualizer)",
        youtube: "https://youtu.be/lnqv9115T64",
    },
    {
        name: "ZIAK - DERNIÈRE DANSE ft.INDILA",
        youtube: "https://youtu.be/h_WbcosVIzY",
    },
    {
        name: "Armageddon",
        youtube: "https://youtu.be/udWveZDqHO4",
    },
    {
        name: "Step Brothers",
        youtube: "https://youtu.be/Xty7c4TbMaU",
    },
    {
        name: "Walking on the Moon",
        youtube: "https://youtu.be/ABAV3pFkuF0",
    },
    {
        name: "allez",
        youtube: "https://youtu.be/mRNDYMvxPWY",
    },
    {
        name: "RENO",
        youtube: "https://youtu.be/gORdRnIw0jc",
    },
    {
        name: "Hasta la vista",
        youtube: "https://youtu.be/6S6HqNy5Bng",
    },
    {
        name: "Farfadet - Ça y est (Lyrics Video)",
        youtube: "https://youtu.be/5Vvrcam3DNQ",
    },
    {
        name: "Carbonne - Bene (Lyrics video)",
        youtube: "https://youtu.be/EvtO789LEr4",
    },
    {
        name: "Bijou",
        youtube: "https://youtu.be/X79j3hj8zno",
    },
    {
        name: "PLAGE ENNEIGEE",
        youtube: "https://youtu.be/10igmNnvW3M",
    },
    {
        name: "Gozier (feat. Paluch)",
        youtube: "https://youtu.be/RAHXECrCC6E",
    },
    {
        name: "Jay Scøtt - DOWN",
        youtube: "https://youtu.be/KzNPPMgi51A",
    },
    {
        name: "Jay Scøtt - Buzzé",
        youtube: "https://youtu.be/qjFGFkqHGFQ",
    },
    {
        name: "Kanoé - JOURNÉE  (Clip officiel)",
        youtube: "https://youtu.be/4CSLvgdKMTQ",
    },
    {
        name: "HYV - KNOW U LIKE THAT (OFFICIAL VIDEO)",
        youtube: "https://youtu.be/3w94Yg3_0o4",
    },
    {
        name: "Cupidon - Atari (Clip Officiel)",
        youtube: "https://youtu.be/h7IY3LWiGvw",
    },
    {
        name: "$can & Z.F.R - Poivre Cayenne",
        youtube: "https://youtu.be/06HTZuDxj-Y",
    },
    {
        name: "$CAN & ZFR - BAD BI SU MON SIDE",
        youtube: "https://youtu.be/ZUJXOXxu-oA",
    },
    {
        name: "Clip Jusmo & Dody Makaba (Père et Fils) -  Près Du Cœur",
        youtube: "https://youtu.be/4bLMIdzFIHc",
    },
    {
        name: "20 Benz",
        youtube: "https://youtu.be/5RIDNSNMH4s",
    },
    {
        name: "Dans l'espace bien gelés",
        youtube: "https://youtu.be/KYdWOu4zbnY",
    },
    {
        name: "ZFR & $CAN - QUAND LA NUIT TOMBE (DIR REVY + VEYBY)",
        youtube: "https://youtu.be/drxTD5BmjyM",
    },
    {
        name: "The WorDSmith - I Tried To Be A Friend",
        youtube: "https://youtu.be/rEyJYYZ5g1g",
    },
    {
        name: "Jay Scøtt - Caoutchouc",
        youtube: "https://youtu.be/RpT1b9jWP0o",
    },
    {
        name: "Lowlife",
        youtube: "https://youtu.be/FZTvotw0ml8",
    },
    {
        name: "MOKAELL & WESLOW RECAP COUP DE COEUR FRANCO",
        youtube: "https://youtu.be/cxp8W7wyAzk",
    },
    {
        name: "RK - INDIANA Ft. Guy2Bezbar & MIG (Clip officiel)",
        youtube: "https://youtu.be/GbM3orTsHIk",
    },
    {
        name: "Sur la mer",
        youtube: "https://youtu.be/v2r5du8ExQ8",
    },
    {
        name: "FUFU - SLOU (OFFICIAL VIDEO)",
        youtube: "https://youtu.be/JN4gBp3Ss24",
    },
    {
        name: "Jake Hill - dying lately (Lyric Video)",
        youtube: "https://youtu.be/05swrpJvaKI",
    },
    {
        name: "Trouble in Paradise",
        youtube: "https://youtu.be/KtpRfkeZR34",
    },
    {
        name: "Koba LaD - Freestyle Ténébreux #1",
        youtube: "https://youtu.be/-C9Izxw3rOw",
    },
    {
        name: "Zola - Scarface #HorsSérie (Clip officiel)",
        youtube: "https://youtu.be/HRGAEr4gxzE",
    },
    {
        name: "Gutta - Tour",
        youtube: "https://youtu.be/eiT06Avrpxk",
    },
    {
        name: "E4L NIGHT RECAP  (dir.@mokaell)",
        youtube: "https://youtu.be/evy3WQbWVFc",
    },
    {
        name: "Condom (feat. Sixxsix)",
        youtube: "https://youtu.be/IrXw52aGMF0",
    },
    {
        name: "Khapta Avec Les Khey (feat. Kurtcodeinn, Rdci & Awkward Richard)",
        youtube: "https://youtu.be/gwWfjBPsEzo",
    },
    {
        name: "Entre Dans Le Trap",
        youtube: "https://youtu.be/pX2sHyJI3U0",
    },
    {
        name: "JEUNE LOUP - SANS-FIL (PROD. NUMB BLOND)",
        youtube: "https://youtu.be/49phEUS2xkQ",
    },
    {
        name: "Icy Narco \"Link\" (WSHH Exclusive - Official Music Video)",
        youtube: "https://youtu.be/tbTuOOrICzA",
    },
    {
        name: "Corops - Dis moi (Prod By TheBeatGeneral)",
        youtube: "https://youtu.be/fRTzQfwT9Jc",
    },
    {
        name: "MENACE SANTANA - 2.4SALTY",
        youtube: "https://youtu.be/DkybTEicHnY",
    },
    {
        name: "White Migz x Jeune Loup - Pink Gas Mask (Clip Officiel) #LLJL",
        youtube: "https://youtu.be/Jjc43APOJxE",
    },
    {
        name: "Lostboy Carlos - Je suis Lui (Clip Officiel)",
        youtube: "https://youtu.be/xjbFNUK7UIM",
    },
    {
        name: "Kerchak - Saison 2 (Clip Officiel)",
        youtube: "https://youtu.be/V-FFXqIiOLI",
    },
    {
        name: "cal scruby - BRAINWASH (official music video)",
        youtube: "https://youtu.be/3KzMB0BAtuI",
    },
    {
        name: "Lil Xan - Betrayed",
        youtube: "https://youtu.be/_dL3AygsCMc",
    },
    {
        name: "Damien & Mononc Serge - Drogué (chanson de la drogue)",
        youtube: "https://youtu.be/3eghKZ_Rz4M",
    },
    {
        name: "Question?",
        youtube: "https://youtu.be/Feosskj-3AQ",
    },
    {
        name: "Gasoline (feat. Sixthells)",
        youtube: "https://youtu.be/bSrJNh5JxVA",
    },
    {
        name: "Don't Forget (to Forget Me)",
        youtube: "https://youtu.be/G7n-cD2SFcU",
    },
    {
        name: "Diam's - Confessions nocturnes feat. Vitaa (Clip officiel)",
        youtube: "https://youtu.be/TwhoaPgBwI8",
    },
    {
        name: "Jeune Loup - Booted Up (Clip Officiel)",
        youtube: "https://youtu.be/p5RVEgzcjTE",
    },
    {
        name: "Friday13thAugust2021",
        youtube: "https://youtu.be/ZoZsYFjmiu8",
    },
    {
        name: "King Von - Took Her To The O (Official Video)",
        youtube: "https://youtu.be/hzt31eJTGxo",
    },
    {
        name: "Favé - Mercedes (Clip Officiel)",
        youtube: "https://youtu.be/AitcwMp40MU",
    },
    {
        name: "Nono La Grinta - La Quoi ? Ft La Mano 1.9",
        youtube: "https://youtu.be/FKOQdoXz-ws",
    },
    {
        name: "Gazo x @levelsantana - Drill Fr 6 (S.M.B)",
        youtube: "https://youtu.be/avgPz2I2C1c",
    },
    {
        name: "Rach - Sans Refrain (Clip Officiel)",
        youtube: "https://youtu.be/HRZL7bEYg74",
    },
    {
        name: "Anti-Social - Daddy Mory/Davodka/Deadi/Swift Guad/Original Tonio/Cenza/Souffrance (prod Swift Guad )",
        youtube: "https://youtu.be/_0nnCD1pdLY",
    },
    {
        name: "Steve Aoki & Autoerotique - ILYSM (Official Music Video) [Chapter 1 of 4]",
        youtube: "https://youtu.be/iZxgOsmi1FM",
    },
    {
        name: "u r my star",
        youtube: "https://youtu.be/eRx-Sa86_8I",
    },
    {
        name: "White-B & MB - Mode de vie",
        youtube: "https://youtu.be/J_VSWsM453E",
    },
    {
        name: "White-B - Locked Up (Clip Officiel)",
        youtube: "https://youtu.be/x-9mWoiaziw",
    },
    {
        name: "Kilo - Plein la caisse (Official Music Video)",
        youtube: "https://youtu.be/pqvpjwqVmOE",
    },
    {
        name: "Lil Pump - Gucci Gang [Official Music Video]",
        youtube: "https://youtu.be/4LfJnj66HVQ",
    },
    {
        name: "Lil Pump - Boss [Official Music Video]",
        youtube: "https://youtu.be/xjUiFeDKo_0",
    },
    {
        name: "Le Gicko - Pourriel /// Vidéoclip officiel",
        youtube: "https://youtu.be/L3trv4FTDMM",
    },
    {
        name: "Le Gicko - ON&ON /// Vidéoclip officiel",
        youtube: "https://youtu.be/CzfgLMraONM",
    },
    {
        name: "SKIM - LA BRUME (Visualizer)",
        youtube: "https://youtu.be/DtIxGvaSOrA",
    },
    {
        name: "Swift Guad - B**se la Drill",
        youtube: "https://youtu.be/1ILUHstoC68",
    },
    {
        name: "Lil Peep - Worlds Away (Music Video)",
        youtube: "https://youtu.be/CrVF5gJwZg0",
    },
    {
        name: "Ziak - Babylone [Prod. J0R0]",
        youtube: "https://youtu.be/KmI92Iy6KcM",
    },
    {
        name: "HOLOCAUST",
        youtube: "https://youtu.be/rzJ-w3AVHjE",
    },
    {
        name: "Starship 92",
        youtube: "https://youtu.be/2c5UQWlVRTQ",
    },
    {
        name: "Juice WRLD - Lucid Dreams (Official Music Video)",
        youtube: "https://youtu.be/mzB1VGEGcSU",
    },
    {
        name: "La vie qu'on mène",
        youtube: "https://youtu.be/BJwovrr6XzI",
    },
    {
        name: "Lil Uzi Vert - XO Tour Llif3 (Official Music Video)",
        youtube: "https://youtu.be/WrsFXgQk5UI",
    },
    {
        name: "4u",
        youtube: "https://youtu.be/6rQh8dGjev8",
    },
    {
        name: "Vrai",
        youtube: "https://youtu.be/u-QWuWj1OZA",
    },
    {
        name: "White-B - PRMF Lyrics",
        youtube: "https://youtu.be/W6et_NeWyp8",
    },
    {
        name: "Balenciaga Runners",
        youtube: "https://youtu.be/YOP6HdgsXnY",
    },
    {
        name: "I Chose Violence",
        youtube: "https://youtu.be/5m7rNr91rC0",
    },
    {
        name: "Forever",
        youtube: "https://youtu.be/jAj3BWIVFMo",
    },
    {
        name: "Fast Life",
        youtube: "https://youtu.be/O00wjWVMZ9U",
    },
    {
        name: "Betrayed",
        youtube: "https://youtu.be/h2Ku62lG_-U",
    },
    {
        name: "J'ai mon blick",
        youtube: "https://youtu.be/DBa3rGHbZNw",
    },
    {
        name: "DEMBÉLÉ",
        youtube: "https://youtu.be/YVUfXozueWE",
    },
    {
        name: "Yung Lean ♦ Ginseng Strip 2002 ♦",
        youtube: "https://youtu.be/vrQWhFysPKY",
    },
    {
        name: "Snow Tha Product - AyAyAy! [Official Video]",
        youtube: "https://youtu.be/8_MOdouFugw",
    },
    {
        name: "Rob The Bank",
        youtube: "https://youtu.be/eQJ5KN15jBE",
    },
    {
        name: "me & ur ghost",
        youtube: "https://youtu.be/4vlBIYWYzh0",
    },
    {
        name: "LVL UP",
        youtube: "https://youtu.be/rwTh3Yr9FVU",
    },
    {
        name: "Degraded",
        youtube: "https://youtu.be/gaq5iEz0nmU",
    },
    {
        name: "Cry Baby 2",
        youtube: "https://youtu.be/q5EOK2quq88",
    },
    {
        name: "RICHMEN",
        youtube: "https://youtu.be/ZUUoxxE6GLc",
    },
    {
        name: "Baggies - Potéconaisse (Vidéoclip Officiel)",
        youtube: "https://youtu.be/SWgbvCaPw10",
    },
    {
        name: "IHY2LN",
        youtube: "https://youtu.be/QefxMWzpeF4",
    },
    {
        name: "Josman - Ailleurs",
        youtube: "https://youtu.be/KTNpff2rkTw",
    },
    {
        name: "Jake Hill & Josh A - Suicide Forest",
        youtube: "https://youtu.be/Z1n-Nkmt3Ks",
    },
    {
        name: "Craccin’",
        youtube: "https://youtu.be/8th0BgAG07E",
    },
    {
        name: "Paqueta",
        youtube: "https://youtu.be/T1OYjYXzfds",
    },
    {
        name: "Fanny",
        youtube: "https://youtu.be/s1K-2m4PHzM",
    },
    {
        name: "Space weed",
        youtube: "https://youtu.be/cNNDgyb-JBQ",
    },
    {
        name: "Cool Kids",
        youtube: "https://youtu.be/Ets3CvLwlV8",
    },
    {
        name: "JACK UZI - FREESTYLE 2 LÉTÉ (2022)",
        youtube: "https://youtu.be/_hTr2BBtByk",
    },
    {
        name: "JACK UZI - UZI DRILL 7 (FREESTYLE)",
        youtube: "https://youtu.be/cW49RszBdT8",
    },
    {
        name: "JACK UZI - UZI DRILL 5 (FREESTYLE)",
        youtube: "https://youtu.be/jSBd0KTd1Xw",
    },
    {
        name: "Kerchak - Femmes",
        youtube: "https://youtu.be/Q4orEIVs4d4",
    },
    {
        name: "Both Dead",
        youtube: "https://youtu.be/OF3xG4LfGSc",
    },
    {
        name: "Under the Graveyard",
        youtube: "https://youtu.be/7MDoHOzKZ_c",
    },
    {
        name: "Paralyzer",
        youtube: "https://youtu.be/ZD3kCxMqjuk",
    },
    {
        name: "OBLITERATION",
        youtube: "https://youtu.be/M1rVyiwUWlY",
    },
    {
        name: "Eyelids",
        youtube: "https://youtu.be/Pz5kji-JbDo",
    },
    {
        name: "Josh A - REVELATIONS",
        youtube: "https://youtu.be/hzQv11tDPmw",
    },
    {
        name: "LiL PEEP & LiL BO WEEP - Crash (mash up by tw1ls)",
        youtube: "https://youtu.be/gjSIM4Nll4M",
    },
    {
        name: "jay roxxx - oh my god ! (official music video)",
        youtube: "https://youtu.be/RoyHjppf1Qw",
    },
    {
        name: "Mia Rodriguez - Psycho (Acoustic) [Official Music Video]",
        youtube: "https://youtu.be/eVcBFTAh0co",
    },
    {
        name: "JACK UZI - UZI DRILL 12 (FREESTYLE)",
        youtube: "https://youtu.be/SmjXZd7tN8A",
    },
    {
        name: "CHECKMATE",
        youtube: "https://youtu.be/OZovci8ZS7Y",
    },
    {
        name: "Kerchak - FAKE (Clip Officiel)",
        youtube: "https://youtu.be/lnMFUFCbLkM",
    },
    {
        name: "Shotgun Willy - Winnebago",
        youtube: "https://youtu.be/CGbQHt74vq8",
    },
    {
        name: "ATL",
        youtube: "https://youtu.be/Geh-Sn_lW30",
    },
    {
        name: "bbno$ - i see london i see france",
        youtube: "https://youtu.be/b66I1ouXgKw",
    },
    {
        name: "Shotgun Willy - Married to the Bag",
        youtube: "https://youtu.be/g5X7WHVTN8I",
    },
    {
        name: "bbno$ - two",
        youtube: "https://youtu.be/HuZxb5xy5xY",
    },
    {
        name: "Trotski",
        youtube: "https://youtu.be/3Xow2kddrzw",
    },
    {
        name: "Youri - Absences (Prod by Big Tom)",
        youtube: "https://youtu.be/FQZ01u_2YH8",
    },
    {
        name: "STAB",
        youtube: "https://youtu.be/DGc0zeYUIN4",
    },
    {
        name: "Eazy Mac x Merkules - Charlie Bit Me",
        youtube: "https://youtu.be/miZr60PaIjc",
    },
    {
        name: "Lil Peep - California World (Cover)",
        youtube: "https://youtu.be/t6nUBCNSvvs",
    },
    {
        name: "Salt",
        youtube: "https://youtu.be/-cK4PgT0bE0",
    },
    {
        name: "Connor Price & Prinz & GRAHAM - Can't Give Up (Lyric Video) 🌎🇬🇧",
        youtube: "https://youtu.be/GM6u6kdiYqA",
    },
    {
        name: "Everywhere I Go",
        youtube: "https://youtu.be/U8pxJIYybko",
    },
    {
        name: "REI AMI - SNOWCONE (Official Music Video)",
        youtube: "https://youtu.be/wtZskz4zo24",
    },
    {
        name: "Aswell - Used To (Clip Officiel)",
        youtube: "https://youtu.be/yidd94LT7MQ",
    },
    {
        name: "Deadi - Banzaï (Clip officiel)",
        youtube: "https://youtu.be/NWpBYgtaUaU",
    },
    {
        name: "Happy Endings (feat. iann dior & UPSAHL) [Official Music Video] - Mike Shinoda",
        youtube: "https://youtu.be/vit9ZYPl-cs",
    },
    {
        name: "looking for you",
        youtube: "https://youtu.be/NerZnCTiPUk",
    },
    {
        name: "Lil Peep - Life Is Beautiful (OG Life Music VIdeo)",
        youtube: "https://youtu.be/1mkkflXYtcA",
    },
    {
        name: "Terminus",
        youtube: "https://youtu.be/NG9PPy4V-ME",
    },
    {
        name: "ZillaKami - NOT WORTH IT (Official Music Video)",
        youtube: "https://youtu.be/iaiPgyWPFTA",
    },
    {
        name: "Dead Summer",
        youtube: "https://youtu.be/MuUCQV7-3sI",
    },
    {
        name: "Lost & Found",
        youtube: "https://youtu.be/DPZKE30m-8E",
    },
    {
        name: "Let Go",
        youtube: "https://youtu.be/_7wObbv6N8A",
    },
    {
        name: "You - Icy Narco (Sub. Español)",
        youtube: "https://youtu.be/RVItlY1ONts",
    },
    {
        name: "NONSENSE (DEJA VU)",
        youtube: "https://youtu.be/WqFOR-RARQI",
    },
    {
        name: "Anti Social - Lately (Official Video)",
        youtube: "https://youtu.be/5tGL82zxXnE",
    },
    {
        name: "Another love - 🖤🎧 (slowed at the perfect time )",
        youtube: "https://youtu.be/6id9tZoEV5U",
    },
    {
        name: "LoKzzY - Après j'arrête ft. Angèle [IA] (Clip officiel)",
        youtube: "https://youtu.be/A-0PFPLjU6E",
    },
    {
        name: "I'd Rather Overdose - HONESTAV, Z",
        youtube: "https://youtu.be/mIBb4i-3M-I",
    },
    {
        name: "Lil Peep - Beamer Boy  ( slowed + reverb )",
        youtube: "https://youtu.be/2TNDrJDKQ0g",
    },
    {
        name: "honestav - I’d rather overdose (ft. Z) (I can’t let you go) [OFFICIAL MUSIC VIDEO]",
        youtube: "https://youtu.be/cq43FrpXGQs",
    },
    {
        name: "Lil Xan - NODA",
        youtube: "https://youtu.be/TZOINczkEK4",
    },
    {
        name: "the grass needs mowed",
        youtube: "https://youtu.be/J6uo4M25t_s",
    },
    {
        name: "On Road",
        youtube: "https://youtu.be/v9C-3GeozCY",
    },
    {
        name: "HISTOIRE NAUFRAGE",
        youtube: "https://youtu.be/w9DIOrQg4EU",
    },
    {
        name: "Filature",
        youtube: "https://youtu.be/AgOgEl-qqx8",
    },
    {
        name: "dirty laundry",
        youtube: "https://youtu.be/g3mx7qMOt54",
    },
    {
        name: "Lost",
        youtube: "https://youtu.be/QpcBtbSHblo",
    },
    {
        name: "Zemi ezanga mobali (Audit KABANGU) par Dody MAKABA",
        youtube: "https://youtu.be/yEwX9k1KCpg",
    },
    {
        name: "BAMBAM - Ängie, Harrison First (Official Music Video)",
        youtube: "https://youtu.be/dpdvf5hvP4U",
    },
    {
        name: "Juice WRLD - Heavy (Full Freestyle) (Unreleased)",
        youtube: "https://youtu.be/GL9DyRgRNRQ",
    },
    {
        name: "stuck sorry",
        youtube: "https://youtu.be/8Xq8v6Xp27w",
    },
    {
        name: "Thick Of It (feat. Trippie Redd)",
        youtube: "https://youtu.be/M1xBYPSsDA0",
    },
    {
        name: "Sprinter",
        youtube: "https://youtu.be/sjcgg9fSf1o",
    },
    {
        name: "Menace Santana - Arcade (prod sk3lly.beats)",
        youtube: "https://youtu.be/iPi47Iae45g",
    },
    {
        name: "Sueco - Paralyzed [Official Audio]",
        youtube: "https://youtu.be/7-r1CIl39Dw",
    },
    {
        name: "Twenty One Pilots - Live at Southside Music Festival (Full Set)",
        youtube: "https://youtu.be/1AyWoI2e7FM",
    },
    {
        name: "Peyton Parrish - Draugr (Viking Old Norse) (Rise of Vikingr Album)",
        youtube: "https://youtu.be/ViXtxlr7xtQ",
    },
    {
        name: "Confusion Beautiful Drifting out of lucidity",
        youtube: "https://youtu.be/agFW4sb_ag4",
    },
    {
        name: "Lil Peep - Suck my blood (Music Video) (Lyrics)",
        youtube: "https://youtu.be/020hXHnhd20",
    },
    {
        name: "Drug Factory",
        youtube: "https://youtu.be/HFdyjZhk4NQ",
    },
    {
        name: "Bruce Wayne (feat. Izzy-S)",
        youtube: "https://youtu.be/Qq8kgrVJQeU",
    },
    {
        name: "LeMind | Sombre Perte (Prod. Farfadet)",
        youtube: "https://youtu.be/4vuDo45O_HI",
    },
    {
        name: "Sopico Unplugged : La Nuit",
        youtube: "https://youtu.be/Kh7EuxIKLcs",
    },
    {
        name: "[FREE] Indie x Bedroom Pop x Dream Pop Type Beat - \"sentimental\"",
        youtube: "https://youtu.be/LlqSYztIc08",
    },
    {
        name: "F@#$ing MacBook",
        youtube: "https://youtu.be/0cnvD8pAHEs",
    },
    {
        name: "Picsou",
        youtube: "https://youtu.be/VxJTaDbZ4Kk",
    },
    {
        name: "Kaavaalaa (From \"Jailer\")",
        youtube: "https://youtu.be/F05tvfWHU_8",
    },
    {
        name: "Lil Pump - In Da Way (Official Music Video)",
        youtube: "https://youtu.be/iut6k7bcFHk",
    },
    {
        name: "Bad Guy",
        youtube: "https://youtu.be/sgwFUrfJsws",
    },
    {
        name: "Adieu tous les cons",
        youtube: "https://youtu.be/xBUgCDQDz0w",
    },
    {
        name: "1nonly",
        youtube: "https://youtu.be/mdjhrYsJPZM",
    },
    {
        name: "Nudes",
        youtube: "https://youtu.be/xFa7M4tm_Bg",
    },
    {
        name: "OrelSan - Rêves bizarres (feat. Damso) [CLIP OFFICIEL]",
        youtube: "https://youtu.be/iXzBdNjpYw0",
    },
    {
        name: "Black tabou",
        youtube: "https://youtu.be/9ga4tBQ4jP8",
    },
    {
        name: "Les Anticipateurs - 100 TITRES",
        youtube: "https://youtu.be/byoebn8ZIfU",
    },
    {
        name: "Québec Redneck Bluegrass Project - Me d'mandait ma blonde (audio officiel)",
        youtube: "https://youtu.be/Rnl05Wc6X-Y",
    },
    {
        name: "K. - Cigarettes After Sex",
        youtube: "https://youtu.be/Cp3XFmEr9oA",
    },
    {
        name: "The Glorious Octagon of Destiny",
        youtube: "https://youtu.be/ddWJatRxfz8",
    },
    {
        name: "FREDZ - 3 Accords (Clip officiel)",
        youtube: "https://youtu.be/oCHSN4MHf6E",
    },
    {
        name: "Niska - Bon Déjà | A COLORS SHOW",
        youtube: "https://youtu.be/UcdINqRC8Ac",
    },
    {
        name: "Olympe Chabert - LE CODE by Myth Syzer (cover)",
        youtube: "https://youtu.be/NGahU-J93Ac",
    },
    {
        name: "Olympe Chabert - XNXX (Dinos)",
        youtube: "https://youtu.be/nT-fCBjx1l4",
    },
    {
        name: "freeze corleone  ft nekfeu (Luv resval Tout S'en Va)",
        youtube: "https://youtu.be/6fWv1bhebOw",
    },
    {
        name: "KREATOR - 666 - World Divided (OFFICIAL MUSIC VIDEO)",
        youtube: "https://youtu.be/DZpt8YXFwso",
    },
    {
        name: "Suicidal Tendencies - \"Institutionalized\" Frontier Records - Official Music Video",
        youtube: "https://youtu.be/LoF_a0-7xVQ",
    },
    {
        name: "KREATOR - Satan Is Real (OFFICIAL VIDEO)",
        youtube: "https://youtu.be/mUv8GxrqXPk",
    },
    {
        name: "Menace Santana - QLNT (Slowed Reverb)",
        youtube: "https://youtu.be/bGHHXg2XDyU",
    },
    {
        name: "Deadi - Le voisin du 4ème (Clip Officiel)",
        youtube: "https://youtu.be/SHRqFD8RjYA",
    },
    {
        name: "No Signal",
        youtube: "https://youtu.be/SG8LO4DO_YY",
    },
    {
        name: "Dreams & Nightmares",
        youtube: "https://youtu.be/0CTYz1nOZ8Y",
    },
    {
        name: "Ol Zico feat Swift Guad et La Gale - C'est ça l idée  ( Prod Misere record )",
        youtube: "https://youtu.be/WeNs8H5yLyU",
    },
    {
        name: "LE DÉ - TRIPLE BICÉPHALE",
        youtube: "https://youtu.be/DEuIN3kKhuo",
    },
    {
        name: "RNZO \\ ÉNERGIE",
        youtube: "https://youtu.be/QK5cYsfXPm8",
    },
    {
        name: "Goodbye",
        youtube: "https://youtu.be/NkxnIIzwWvA",
    },
    {
        name: "Jailbreak the Tesla",
        youtube: "https://youtu.be/nGYXsGWLpNg",
    },
    {
        name: "Rusty Cage - Get Your Head Chopped Off",
        youtube: "https://youtu.be/pJX73wNJuRA",
    },
    {
        name: "Soignez moi la tête",
        youtube: "https://youtu.be/pZ6me_5mQjA",
    },
    {
        name: "6LACK - PRBLMS [Official Music Video]",
        youtube: "https://youtu.be/fS9m0Ac8PCU",
    },
    {
        name: "Chacun sa manière (Souldia, Enima, Fou Furieux)",
        youtube: "https://youtu.be/tc1O8tbP-Qw",
    },
    {
        name: "Blue Ridge Bluegrass Banjo",
        youtube: "https://youtu.be/BlOuUEeKnJg",
    },
    {
        name: "Luv Resval  - AZNVR (une minute de musique) - Clip officiel",
        youtube: "https://youtu.be/INYZ6zIxoEI",
    },
    {
        name: "(FREE) Lofi Type Beat - take away the pain (prod. yusei ft. lul patchy)",
        youtube: "https://youtu.be/XhQKx2e_A6k",
    },
    {
        name: "Yusei - We could have been so good together (Official Video)",
        youtube: "https://youtu.be/BB0c_VuEanU",
    },
    {
        name: "Freeze Corleone Shavkat Reaction",
        youtube: "https://youtu.be/MTGDegtNB5U",
    },
    {
        name: "Dans l'dos (interlude)",
        youtube: "https://youtu.be/poHEwCxIEBk",
    },
    {
        name: "Tech N9ne - Strangeulation Cypher",
        youtube: "https://youtu.be/okdbKcprsgY",
    },
    {
        name: "Shawn James - \"Through the Valley\" - Official Music Video",
        youtube: "https://youtu.be/xXcKSLijghs",
    },
    {
        name: "Sara Dufour et Léandre Joly-Pelletier - Le p'tit camp à Denis (session d'enregistrement)",
        youtube: "https://youtu.be/wt2qn9IvXic",
    },
    {
        name: "Québec Redneck Bluegrass Project - Sevrage (audio officiel)",
        youtube: "https://youtu.be/iLFUppZnLHI",
    },
    {
        name: "Ziak - Même pas un grincement  (Prod. Sam Tiba)",
        youtube: "https://youtu.be/XPY1wCaVKI8",
    },
    {
        name: "Kerchak - Scar ft. menace Santana",
        youtube: "https://youtu.be/Ei6Efw6Wveg",
    },
    {
        name: "menace Santana - Pas De Coeur [Prod. J0R0]",
        youtube: "https://youtu.be/VCEbkfP4utY",
    },
    {
        name: "MaDrug ?",
        youtube: "https://youtu.be/avvT4WHGwWc",
    },
    {
        name: "KENNY BEATS & ZACK FOX FREESTYLE | The Cave: Episode 5",
        youtube: "https://youtu.be/vSSLqHJzy6Y",
    },
    {
        name: "Trunk 25-Nuit de Marde Et De Minouches",
        youtube: "https://youtu.be/kabD2IL-55U",
    },
    {
        name: "Leftøver - Sick [Lyrics x AMV]",
        youtube: "https://youtu.be/G3M-ZJY8gjI",
    },
    {
        name: "Luv Resval - La sieste à Joyca",
        youtube: "https://youtu.be/JyTVh2hu3rs",
    },
    {
        name: "Rymz - Marchand de sable (Official Video) ft. Karim Ouellet",
        youtube: "https://youtu.be/rmC-FVB3R7o",
    },
    {
        name: "Youri & DJ Weedim - Butters",
        youtube: "https://youtu.be/may3qc0bBYQ",
    },
    {
        name: "Ça vaut pas la peine - Sir Pathétik",
        youtube: "https://youtu.be/3GfRWlWnZn8",
    },
    {
        name: "Criminls - NOUVEL ORDRE ft. Freeze Corleone (Official Video)",
        youtube: "https://youtu.be/mGyDdPZype4",
    },
    {
        name: "6 dogs - it's worth feeling empty",
        youtube: "https://youtu.be/fQFyAmenArw",
    },
    {
        name: "Notorious B.I.G. - I Wanna Go To Hell (Da Godfatha' Remix)",
        youtube: "https://youtu.be/PvO0Zx1P0vg",
    },
    {
        name: "WarEnd - Feu",
        youtube: "https://youtu.be/dnqspkKURkg",
    },
    {
        name: "Sir Pathétik - Apprendre à vivre",
        youtube: "https://youtu.be/VsSUWWn6Dlw",
    },
    {
        name: "Tana Mongeau - Hefner ft. Bella Thorne (Official Music Video)",
        youtube: "https://youtu.be/HvGur0cF414",
    },
    {
        name: "Kill Dyll x Pranav.Wav - SMOKE OPPS NOT CIGS",
        youtube: "https://youtu.be/sBDWrbGYSAQ",
    },
    {
        name: "Robe de Soie",
        youtube: "https://youtu.be/X6nFbpekPK8",
    },
    {
        name: "Youri - Parle Pas feat. Elias (Prod by Nick Vanelli)",
        youtube: "https://youtu.be/yP0SSJN5Qbg",
    },
    {
        name: "menace Santana - Dead [Prod.J0R0]",
        youtube: "https://youtu.be/Y7kc7UazTi0",
    },
    {
        name: "Django - Arès",
        youtube: "https://youtu.be/XJHLqLzK8BA",
    },
    {
        name: "Swift Guad x Paco - Dans ma fourrière",
        youtube: "https://youtu.be/IA_a0QBxNM4",
    },
    {
        name: "Angèle - Reine Ft. Ziak",
        youtube: "https://youtu.be/nYb6cy1sKx4",
    },
    {
        name: "Si facile",
        youtube: "https://youtu.be/wLcawf9lMao",
    },
    {
        name: "Chercheur de phases",
        youtube: "https://youtu.be/h1AcKMDilT4",
    },
    {
        name: "Midi 20",
        youtube: "https://youtu.be/zEDJcXsynLI",
    },
    {
        name: "Django - Film",
        youtube: "https://youtu.be/7FyoFFmuhPQ",
    },
    {
        name: "Ziak-Raspoutine x Espace (Remix chill )✨🫀",
        youtube: "https://youtu.be/M_mBHBfArCc",
    },
    {
        name: "6 dogs - OK",
        youtube: "https://youtu.be/CC_e8Elet9Y",
    },
    {
        name: "Aswell - Hard To Love (Clip Officiel)",
        youtube: "https://youtu.be/2GdK75d82IU",
    },
    {
        name: "Kerchak - Peur feat. @ZiakCC (Clip Officiel)",
        youtube: "https://youtu.be/fWVTp63stlQ",
    },
    {
        name: "E1 (3x3) - Mocking Bird Remix - Traduction UK-FR",
        youtube: "https://youtu.be/njTT5cgM8VU",
    },
    {
        name: "Dying - Lil Peep feat . Cold Hart [Lyrics]",
        youtube: "https://youtu.be/5IhwJvvJ2VA",
    },
    {
        name: "Stromae - Formidable (feat Ziak)",
        youtube: "https://youtu.be/F3Uxk1GNwqo",
    },
    {
        name: "Lil Windex Ft Caspian - FMU (Official Video)",
        youtube: "https://youtu.be/jVeApPyNYVs",
    },
    {
        name: "Dazed & Confused (feat. Rittz)",
        youtube: "https://youtu.be/wyXX3Wzjmmk",
    },
    {
        name: "Playing bass with a bow actually sounds HEAVENLY",
        youtube: "https://youtu.be/e4McVxHYg24",
    },
    {
        name: "Lil Peep - \"Switch Up\" Official Video",
        youtube: "https://youtu.be/7Bbv6gL-NAA",
    },
    {
        name: "Joji - Glimpse Of Us (Full Edit)",
        youtube: "https://youtu.be/1TkhtbBr_aw",
    },
    {
        name: "Aswell - Solo (Visuel Officiel)",
        youtube: "https://youtu.be/V56SWHbgl4M",
    },
    {
        name: "FREDZ - Guitar Hero (audio officiel)",
        youtube: "https://youtu.be/DcdZ36MALXg",
    },
    {
        name: "Eazy Mac - Tortured Genius (Official Video)",
        youtube: "https://youtu.be/tsfzHVy6Pk0",
    },
    {
        name: "Trunk 25 - Les Ninjas Dla Marde",
        youtube: "https://youtu.be/67JMYPGMDtU",
    },
    {
        name: "Blackbear - \"Idfc\" OFFICIAL VERSION",
        youtube: "https://youtu.be/2MTwzhmIrJM",
    },
    {
        name: "Blackbear - \"Idfc\" (Acoustic) OFFICIAL VERSION",
        youtube: "https://youtu.be/-N89TPQdX2o",
    },
    {
        name: "lil peep playlist",
        youtube: "https://youtu.be/Nf-P_06xofc",
    },
    {
        name: "Post Malone - Congratulations (Official Music Video) ft. Quavo",
        youtube: "https://youtu.be/SC4xMk98Pdc",
    },
    {
        name: "Lil Peep -- 16 Lines (Official Video)",
        youtube: "https://youtu.be/DxNt7xV5aII",
    },
    {
        name: "Souldia - Valentina [Vidéoclip Officiel]",
        youtube: "https://youtu.be/AAxcazj2HAI",
    },
    {
        name: "B STORY - Back Then (Official Video)",
        youtube: "https://youtu.be/vN0qZCro2SQ",
    },
    {
        name: "Anticipateur Lyrics - J'ai rebesoin",
        youtube: "https://youtu.be/Go36h5xkxrc",
    },
    {
        name: "Décaliss Décriss (Feat. WAV & SillyNAEME) [Vidéo Officiel]",
        youtube: "https://youtu.be/XxPwYzFSV40",
    },
    {
        name: "System Of A Down - Lonely Day (Official HD Video)",
        youtube: "https://youtu.be/DnGdoEa1tPg",
    },
    {
        name: "I Think I Like When It Rains",
        youtube: "https://youtu.be/HpYdA-06jTc",
    },
    {
        name: "Mode Difficile",
        youtube: "https://youtu.be/RxWqlH1fwKU",
    },
    {
        name: "Tassez-vous de d'là - Les Colocs (with English subs)",
        youtube: "https://youtu.be/v5gidM31MCM",
    },
    {
        name: "LITTLE BIG - GO BANANAS (Official Music Video)",
        youtube: "https://youtu.be/ADlGkXAz1D0",
    },
    {
        name: "FRIENDS",
        youtube: "https://youtu.be/lPaFesZWRug",
    },
    {
        name: "$UICIDEBOY$ - Handzum Suicide [feat Rozz Dyliams] (Lyrics)",
        youtube: "https://youtu.be/XBrVARtT-_U",
    },
    {
        name: "send this to someone you hate",
        youtube: "https://youtu.be/P5BKSWsiZ9Q",
    },
    {
        name: "Party Girl",
        youtube: "https://youtu.be/Fbcknkkuscg",
    },
    {
        name: "SKRAB",
        youtube: "https://youtu.be/cWNRuQ2-X-A",
    },
    {
        name: "Bitch go die {lyrics} ~ SPEED GANG",
        youtube: "https://youtu.be/QfKes-3zUvM",
    },
    {
        name: "Thigh High (feat. Kodama Boy & Big Gay)",
        youtube: "https://youtu.be/lvf0nofSKvI",
    },
    {
        name: "Ride Alone",
        youtube: "https://youtu.be/Nbx53WFobQs",
    },
    {
        name: "Cha Cha",
        youtube: "https://youtu.be/EA8RxRkNveM",
    },
    {
        name: "Boi amène le sac",
        youtube: "https://youtu.be/F7EeLK0PJbQ",
    },
    {
        name: "Uber",
        youtube: "https://youtu.be/Rn4SM_tQ8YE",
    },
    {
        name: "Seyté - Fonsdé",
        youtube: "https://youtu.be/7AISqEqi3qU",
    },
    {
        name: "Seyté - Niente",
        youtube: "https://youtu.be/Scg1l2Vp2-w",
    },
    {
        name: "Décaliss Décriss (Feat. WAV & SillyNAEME) [Vidéo krazyE",
        youtube: "https://youtu.be/SwbCmOxZ17U",
    },
    {
        name: "Sèxe Illégal - Boucherville taedium vitae",
        youtube: "https://youtu.be/Bt9kYB8cqFU",
    },
    {
        name: "Jay Scøtt - Nous2",
        youtube: "https://youtu.be/YeRzRmGIFUo",
    },
    {
        name: "Jay Scøtt - Saute Pas. (Acoustique)",
        youtube: "https://youtu.be/T5JATgmalwE",
    },
    {
        name: "OrelSan - Paradis [CLIP OFFICIEL]",
        youtube: "https://youtu.be/DxkSPr3CAHs",
    },
    {
        name: "OrelSan - La pluie (feat. Stromae) [CLIP OFFICIEL]",
        youtube: "https://youtu.be/37StRy0LEbI",
    },
    {
        name: "Funambule",
        youtube: "https://youtu.be/kV7TQ44LaWI",
    },
    {
        name: "THE STIXXX - CRYSTAL METH MUSIC",
        youtube: "https://youtu.be/tVq_X-lvhsw",
    },
    {
        name: "Joe Stixxx-The Dopest Shit In The Woods \"Crystal Meth Music Part 2\"",
        youtube: "https://youtu.be/kGxzsB-Sr0k",
    },
    {
        name: "Sir Path - Fier de l'être (avec Alex Lavoie)",
        youtube: "https://youtu.be/xk0xj8Ftu-8",
    },
    {
        name: "Loin de ceux que j'aime",
        youtube: "https://youtu.be/ZwFJBe_GmD0",
    },
    {
        name: "Monotonie",
        youtube: "https://youtu.be/yx-XC_Hmu80",
    },
    {
        name: "Sortie de la taule",
        youtube: "https://youtu.be/88-UMKIsT_4",
    },
    {
        name: "Envolée",
        youtube: "https://youtu.be/sd2Oar18t1k",
    },
    {
        name: "Québec Redneck Bluegrass Project - Mange-moé l'pad (audio officiel)",
        youtube: "https://youtu.be/pIvxoj5HQx8",
    },
    {
        name: "I discovered this after 12 years..",
        youtube: "https://youtu.be/gD8rwQ2Pb0Q",
    },
    {
        name: "Jack Johnson",
        youtube: "https://youtu.be/Ltyk--O30Jk",
    },
    {
        name: "Désolé",
        youtube: "https://youtu.be/vbm--pUOqaE",
    },
    {
        name: "Enfant de la DPJ",
        youtube: "https://youtu.be/OtJEuDB_POg",
    },
    {
        name: "Seyté - Milonga",
        youtube: "https://youtu.be/Xd-ovXS5q8A",
    },
    {
        name: "Tarkov | Roll over and play dead",
        youtube: "https://youtu.be/Uzs7CGbfz4A",
    },
    {
        name: "jeremy - pearl jam (cover) by alicia widar",
        youtube: "https://youtu.be/TCGKEr8CVDg",
    },
    {
        name: "Homer Simpson play bass",
        youtube: "https://youtu.be/YPhO5g39vpg",
    },
    {
        name: "JP « Le Pad » Tremblay - Tu sens bon",
        youtube: "https://youtu.be/rCrwvXik934",
    },
    {
        name: "Sorry-LIL BO WEEP(Прости-Aleks ft. A.T./Russian version)",
        youtube: "https://youtu.be/G24Vctg4G6w",
    },
    {
        name: "twenty one pilots - Can't Help Falling In Love (Elvis Cover)",
        youtube: "https://youtu.be/6ThQkrXHdh4",
    },
    {
        name: "Ｗｈａｔ　Ｗｏｕｌｄ　Ｉ　Ｄｏ　Ｉｆ　Ｙｏｕ　Ｗｅｒｅｎ＇ｔ　Ｈｅｒｅ？",
        youtube: "https://youtu.be/52LJ-1FXTSw",
    },
    {
        name: "Famille d'affaires",
        youtube: "https://youtu.be/GM4BOob6rPU",
    },
    {
        name: "Slipknot - Vermilion Pt. 2 [OFFICIAL VIDEO] [HD]",
        youtube: "https://youtu.be/LvetJ9U_tVY",
    },
    {
        name: "lil peep - the way i see things [extended w/ lyrics]",
        youtube: "https://youtu.be/9dOzcVLIn6A",
    },
    {
        name: "lil peep - gym class",
        youtube: "https://youtu.be/heJNHYCSsIc",
    },
    {
        name: "Lil Peep - Belgium (Official Video)",
        youtube: "https://youtu.be/yArjtdk_QuA",
    },
    {
        name: "Radiohead - Creep",
        youtube: "https://youtu.be/XFkzRNyygfk",
    },
    {
        name: "Nirvana - The Man Who Sold The World (MTV Unplugged)",
        youtube: "https://youtu.be/fregObNcHC8",
    },
    {
        name: "Seether - Broken ft. Amy Lee",
        youtube: "https://youtu.be/hPC2Fp7IT7o",
    },
    {
        name: "Avenged Sevenfold - So Far Away [Official Music Video]",
        youtube: "https://youtu.be/A7ry4cx6HfY",
    },
    {
        name: "Three Days Grace - Never Too Late",
        youtube: "https://youtu.be/lL2ZwXj1tXM",
    },
    {
        name: "Slipknot - Before I Forget [OFFICIAL VIDEO] [HD]",
        youtube: "https://youtu.be/qw2LU1yS7aw",
    },
    {
        name: "Thirty Seconds To Mars - The Kill (Bury Me)",
        youtube: "https://youtu.be/8yvGCAvOAfM",
    },
    {
        name: "Staind - It's Been Awhile (Official Video)",
        youtube: "https://youtu.be/araU0fZj6oQ",
    },
    {
        name: "System Of A Down - Hypnotize (Official HD Video)",
        youtube: "https://youtu.be/LoheCz4t2xc",
    },
    {
        name: "Limp Bizkit - Behind Blue Eyes - Lyrics",
        youtube: "https://youtu.be/8IEQpfA528M",
    },
    {
        name: "Slipknot - Wait And Bleed [OFFICIAL VIDEO] [HD]",
        youtube: "https://youtu.be/B1zCN0YhW1s",
    },
    {
        name: "Chris Cornell  - \"Nothing Compares 2 U\" (Prince Cover) [Live @ SiriusXM] | Lithium",
        youtube: "https://youtu.be/IuUDRU9-HRk",
    },
    {
        name: "Oasis - Don’t Look Back In Anger",
        youtube: "https://youtu.be/cmpRLQZkTb8",
    },
    {
        name: "Slipknot - Killpop [OFFICIAL VIDEO]",
        youtube: "https://youtu.be/mhJh5_6MuCk",
    },
    {
        name: "Slipknot - Sulfur [OFFICIAL VIDEO] [HD]",
        youtube: "https://youtu.be/PAAvNmoqDq0",
    },
    {
        name: "Star Shopping",
        youtube: "https://youtu.be/nMJIBrcBgCc",
    },
    {
        name: "Stone Sour - Through Glass [OFFICIAL VIDEO]",
        youtube: "https://youtu.be/GIzDsGyxsQM",
    },
    {
        name: "twenty one pilots - My Blood (Official Video)",
        youtube: "https://youtu.be/8mn-FFjIbo8",
    },
    {
        name: "Slipknot - Left Behind [OFFICIAL VIDEO] [HD]",
        youtube: "https://youtu.be/D1jQKpse7Yw",
    },
    {
        name: "Slipknot - Spit It Out [OFFICIAL VIDEO] [HD]",
        youtube: "https://youtu.be/ZPUZwriSX4M",
    },
    {
        name: "Slipknot - Solway Firth [OFFICIAL VIDEO]",
        youtube: "https://youtu.be/V3ADK6gsDGg",
    },
    {
        name: "Lil Peep - Problems [Audio]",
        youtube: "https://youtu.be/KQBRM1GK3T4",
    },
    {
        name: "The Cranberries - Zombie (Alt. Version)",
        youtube: "https://youtu.be/95HqlWRFrAk",
    },
    {
        name: "Lil Peep - Runaway (Official Video)",
        youtube: "https://youtu.be/zMCVp6INpnw",
    },
    {
        name: "lil peep x lil tracy - your favorite dress (official video)",
        youtube: "https://youtu.be/Rx3szmh_Ogc",
    },
    {
        name: "Slipknot - Vermilion [OFFICIAL VIDEO] [HD]",
        youtube: "https://youtu.be/xKcbYUwmmlE",
    },
    {
        name: "I spoke to the devil in miami, he said everything would be fine",
        youtube: "https://youtu.be/THdie-5vC-s",
    },
    {
        name: "Lil Peep - Cry Alone (Official Video)",
        youtube: "https://youtu.be/fzV_QZODisQ",
    },
    {
        name: "Slipknot - People = Shit (Audio)",
        youtube: "https://youtu.be/qqK1FrO3BdM",
    },
    {
        name: "lil peep - haunt u [extended w/lyrics]",
        youtube: "https://youtu.be/boSjjHOvb0U",
    },
    {
        name: "Nirvana - Heart-Shaped Box (Director's Cut)",
        youtube: "https://youtu.be/UThKn_TmfmM",
    },
    {
        name: "Promoting Sounds & Ocean - where did u go?",
        youtube: "https://youtu.be/aDKtrnCWFX4",
    },
    {
        name: "Slipknot - The Negative One [OFFICIAL VIDEO]",
        youtube: "https://youtu.be/sgA7KIwKlOE",
    },
    {
        name: "Taiwan MC - Let The Weed Bun feat. Davojah (Music Video)",
        youtube: "https://youtu.be/ONyrc0jHb3A",
    },
    {
        name: "Snuff",
        youtube: "https://youtu.be/Yi0YbsT0TJ0",
    },
    {
        name: "LiL PEEP - let me bleed [prod. nedarb nagrom]",
        youtube: "https://youtu.be/h0A1vs-ZWAE",
    },
    {
        name: "Lil Peep - california world (feat. Craig Xen) (Official Video)",
        youtube: "https://youtu.be/piuovGiAFvo",
    },
    {
        name: "Lil Peep - lil kennedy (Official Video)",
        youtube: "https://youtu.be/c_rMC5cC4Fk",
    },
    {
        name: "Lil Peep - Downtown (Extended+Lyrics)",
        youtube: "https://youtu.be/5zs8W_JAoVo",
    },
    {
        name: "Nirvana - Something In The Way (Audio)",
        youtube: "https://youtu.be/4VxdufqB9zg",
    },
    {
        name: "Lil Peep - ghost boy (Official Audio)",
        youtube: "https://youtu.be/NiWFVHbB_Eo",
    },
    {
        name: "The Way I See Things",
        youtube: "https://youtu.be/ilz19n9MOeg",
    },
    {
        name: "Cold Hart & Lil Peep - \"Me and You\"",
        youtube: "https://youtu.be/uFloXhFcsNE",
    },
    {
        name: "LiL PEEP - Nuts ( Slowed to perfection )",
        youtube: "https://youtu.be/yY8dxBvRwoQ",
    },
    {
        name: "lil peep - worlds away [extended w/lyrics]",
        youtube: "https://youtu.be/kcsCvBojYrk",
    },
    {
        name: "'Til We Die",
        youtube: "https://youtu.be/z8M8YZj71NM",
    },
    {
        name: "Slipknot - Circle (Audio)",
        youtube: "https://youtu.be/5T6vdak5Qoo",
    },
    {
        name: "lil peep - lose my mind [extended w/lyrics]",
        youtube: "https://youtu.be/RlZyO7Rja_g",
    },
    {
        name: "FouKi X Jay Scøtt - Copilote // Vidéoclip officiel",
        youtube: "https://youtu.be/5K4SwZ1Ft3g",
    },
    {
        name: "Lil Peep - Dying (Without Feature, Lyrics)",
        youtube: "https://youtu.be/Ap4liHZ5iek",
    },
    {
        name: "Radiohead - Creep (Best live performance)",
        youtube: "https://youtu.be/US0CUegPr3g",
    },
    {
        name: "Lil Peep - Bullet (Extended+Lyrics)",
        youtube: "https://youtu.be/x74fHVpzX8A",
    },
    {
        name: "Lil Peep - Mud On My Gucci (Extended+Lyrics)",
        youtube: "https://youtu.be/Bw-qdVc1zQA",
    },
    {
        name: "Top 10  Most Depressing Lil Peep Songs",
        youtube: "https://youtu.be/tjOGgmpb90A",
    },
    {
        name: "Lund - F*ck Love (slowed+reverb)",
        youtube: "https://youtu.be/dpZM1xf8m9I",
    },
    {
        name: "Jay Scøtt - Broken",
        youtube: "https://youtu.be/BR-2iQ4at0I",
    },
    {
        name: "Teen Romance",
        youtube: "https://youtu.be/N_8rJ0jkLAI",
    },
    {
        name: "Jay Scøtt - Fou 4u",
        youtube: "https://youtu.be/_5HPxPJV3z4",
    },
    {
        name: "Vermillion Pt. 2 (Slowed and Reverbed)",
        youtube: "https://youtu.be/MEkD-P8ZtzA",
    },
    {
        name: "JP « Le Pad » Tremblay - T'en as tout c'qu'y faut",
        youtube: "https://youtu.be/dbx3XGzOa2o",
    },
    {
        name: "Slipknot - Vermilion Pt. 2 (Cover 2022)",
        youtube: "https://youtu.be/6dF3T_W03Gw",
    },
    {
        name: "Chris Webby - So Free (prod. Nox Beatz)",
        youtube: "https://youtu.be/QYzlAp3TDDU",
    },
    {
        name: "Chris Webby - Lord Knows (feat. Justin Clancy) [Official Video]",
        youtube: "https://youtu.be/00ILT6JlxS0",
    },
    {
        name: "Chris Webby - Chemical Romance (Official Video)",
        youtube: "https://youtu.be/ZdxKJQVcdY4",
    },
    {
        name: "J'hésite",
        youtube: "https://youtu.be/FMCRMGN4Ngc",
    },
    {
        name: "Live or Die",
        youtube: "https://youtu.be/5FfLcVrnm6U",
    },
    {
        name: "I've Been Waiting",
        youtube: "https://youtu.be/iathIUYqTrg",
    },
    {
        name: "Triple One - Valentine Kid (Official Music Video)",
        youtube: "https://youtu.be/J0Oy_29OSmI",
    },
    {
        name: "Linkin Park - The little things give you away  Lyrics",
        youtube: "https://youtu.be/qphxUyYA95s",
    },
    {
        name: "Dark Necessities",
        youtube: "https://youtu.be/ZICUilv4KF0",
    },
    {
        name: "Aujourd'hui ma vie c'est d'la marde",
        youtube: "https://youtu.be/lGtq-Jp8ArA",
    },
    {
        name: "Le pouding à l'arsenic",
        youtube: "https://youtu.be/tykiW_eSLEo",
    },
    {
        name: "Bane",
        youtube: "https://youtu.be/GXsahWg9OWQ",
    },
    {
        name: "Kimmy Granger. HD Dope - Rebel Yell (Cover Billy Idol)",
        youtube: "https://youtu.be/hffzvR2v6iY",
    },
    {
        name: "Twenty One Pilots - The Outside (Official Video)",
        youtube: "https://youtu.be/eNcvblM8-_o",
    },
    {
        name: "Motley Crew",
        youtube: "https://youtu.be/eq6lKYNgs8Y",
    },
    {
        name: "Be Like Me (feat. Lil Wayne)",
        youtube: "https://youtu.be/wZqAt8-NDTg",
    },
    {
        name: "Swang",
        youtube: "https://youtu.be/60-l6nNyK70",
    },
    {
        name: "Life Goes On (feat. Trippie Redd & Ski Mask The Slump God)",
        youtube: "https://youtu.be/oWPYcc2fKOY",
    },
    {
        name: "SEMBLANT - Enrage (Official Video)",
        youtube: "https://youtu.be/32vyLhQo4Y8",
    },
    {
        name: "Blue Foundation - Eyes On Fire (Official Music Video)",
        youtube: "https://youtu.be/LAxCqlU-OAo",
    },
    {
        name: "Hippie Sabotage - \"Whiskey\" [Official Audio]",
        youtube: "https://youtu.be/QpgevVPHI-4",
    },
    {
        name: "JOYCA x JULINDIEN - \"BUSHIDŌ\" (INSTRUMENTAL)",
        youtube: "https://youtu.be/-xK3AaASDs8",
    },
    {
        name: "DEADI - FREESTYLE FDP (version longue)",
        youtube: "https://youtu.be/qWPqf4Ygnk8",
    },
    {
        name: "Poutine",
        youtube: "https://youtu.be/7FHSLVSecHE",
    },
    {
        name: "Joyca - Soulève Moi",
        youtube: "https://youtu.be/M2HpETVtRHQ",
    },
    {
        name: "Joyca - True Du Q",
        youtube: "https://youtu.be/O6B2G7IxPtI",
    },
    {
        name: "★ Bob Bissonnette - La balade des malades ★ (vidéoclip officiel)",
        youtube: "https://youtu.be/TmHR_4aT31E",
    },
    {
        name: "Stromae - Santé (Official Video)",
        youtube: "https://youtu.be/P3QS83ubhHE",
    },
    {
        name: "Deprime De Mastu Edit Remix Remake. {Fan Made Video)",
        youtube: "https://youtu.be/hL6t7x2VGBE",
    },
    {
        name: "BLASST #4 ième régiment - BAGGIES (13 salopards)",
        youtube: "https://youtu.be/BTS-v82TS5U",
    },
    {
        name: "Odd Future - \"Oldie\"",
        youtube: "https://youtu.be/fzi24Nssiow",
    },
    {
        name: "John Gabbana - “Thot Curse\" (Official Music Video - WSHH Exclusive)",
        youtube: "https://youtu.be/ub_X56Wo3Tw",
    },
    {
        name: "Alexandre Poulin - L'écrivain (Acoustique)",
        youtube: "https://youtu.be/i-LwttzA72Y",
    },
    {
        name: "LE SHIT LE SHIT (Jeune Castillo)",
        youtube: "https://youtu.be/vgeeYpGDnz4",
    },
    {
        name: "The Acid Didn't Work",
        youtube: "https://youtu.be/CaPxRsqDPpY",
    },
    {
        name: "Django - Juin",
        youtube: "https://youtu.be/EQVqf7LCT18",
    },
    {
        name: "Nailed & Drugged",
        youtube: "https://youtu.be/bkGRXkSnIOI",
    },
    {
        name: "Terror Reid - Bounce Back",
        youtube: "https://youtu.be/ROfhFvaX_0s",
    },
    {
        name: "Cal Scruby - MONEY BUY DRUGS (Official Music Video)",
        youtube: "https://youtu.be/mZ4Mv8qnpOM",
    },
    {
        name: "cal scruby - CAPTAIN AMERICA (Official Music Video)",
        youtube: "https://youtu.be/DviqacxbJnU",
    },
    {
        name: "Alkpote ft ZZCCMXTP - Violette & Citronnelle (Clip Officiel) - #zzccmxtp",
        youtube: "https://youtu.be/IJmaAy4bRGU",
    },
    {
        name: "L'accroc du trippe 2",
        youtube: "https://youtu.be/5mZetMix2LA",
    },
    {
        name: "Z SLUMP - Ziak dans cauchemar en cuisine (Sans Outro)",
        youtube: "https://youtu.be/TothNVk5qfE",
    },
    {
        name: "Isaac Charles - Ego Death (EP complet)",
        youtube: "https://youtu.be/53HZtOXAxI4",
    },
    {
        name: "Youri & Dj Weedim - Humain",
        youtube: "https://youtu.be/aBl4DmYCCEo",
    },
    {
        name: "Youri - Drogue (Prod by Asot.One)",
        youtube: "https://youtu.be/UgWRIPP8xsU",
    },
    {
        name: "PINK SEASON: THE PROPHECY (FT. GETTER, BORGORE, AXEL BOY, TASTYTREAT)",
        youtube: "https://youtu.be/4B-wFx0aMlw",
    },
    {
        name: "Pink Guy - Are You Serious (Axel Boy Remix) - OFFICIAL VIDEO",
        youtube: "https://youtu.be/k_0UdJhl_rc",
    },
    {
        name: "I Am Alive (Rick and Morty Remix)",
        youtube: "https://youtu.be/KnmQdHSRQ1U",
    },
    {
        name: "miro - faire semblant (cover)",
        youtube: "https://youtu.be/EnnASRH3YP8",
    },
    {
        name: "Jamikaz - Derrière mon masque (vidéoclip officiel)",
        youtube: "https://youtu.be/IISSryUdKqc",
    },
    {
        name: "Ziak - 123 Soleil (Prod. Focus Beatz)",
        youtube: "https://youtu.be/vYBYOSvvF_Q",
    },
    {
        name: "Miro - Perdu (Clip Officiel)",
        youtube: "https://youtu.be/OFNh5Q3G5f8",
    },
    {
        name: "SCH - Mannschaft feat. Freeze Corleone (Clip officiel)",
        youtube: "https://youtu.be/cgDZN44WpoE",
    },
    {
        name: "Eryn Martin - Middle Class (Official Music Video)",
        youtube: "https://youtu.be/tpyUZIUmPCI",
    },
    {
        name: "Eryn Martin - Ball (Jerry Folk Remix) [Official Video]",
        youtube: "https://youtu.be/UEtYS-xzREs",
    },
    {
        name: "PLK - Problèmes [PAROLES]",
        youtube: "https://youtu.be/P4ZMOwxtPWE",
    },
    {
        name: "GAZO - CELINE 3x",
        youtube: "https://youtu.be/wWblPXLnv6k",
    },
    {
        name: "Ziak - Arsenic [Prod. J0R0]",
        youtube: "https://youtu.be/MX3rjO2OAIQ",
    },
    {
        name: "DAVE: Le fluffer de concierge",
        youtube: "https://youtu.be/2xOWpZ9Yf-Q",
    },
    {
        name: "SCH - Autobahn (Clip officiel)",
        youtube: "https://youtu.be/pN-TLYBDkWc",
    },
    {
        name: "$atori Zoom - TURBO",
        youtube: "https://youtu.be/GjcSteNskRA",
    },
    {
        name: "and i love her (kurt's version) - the beatles (cover) by alicia widar",
        youtube: "https://youtu.be/At4gAv8OE48",
    },
    {
        name: "Josman - Intro (Clip Officiel)",
        youtube: "https://youtu.be/pGvyagv4yks",
    },
    {
        name: "ceuxquejereconnaiscommemesfrères.",
        youtube: "https://youtu.be/84tUmfMDIbs",
    },
    {
        name: "montmartre (feat. Franky Fade)",
        youtube: "https://youtu.be/sct87SNy0xY",
    },
    {
        name: "DONEDEKADO",
        youtube: "https://youtu.be/xiNiZ9nbOqs",
    },
    {
        name: "DROGUE",
        youtube: "https://youtu.be/bc3i1Vy7Mfs",
    },
    {
        name: "Fuck Love",
        youtube: "https://youtu.be/8aaoYbPXOPs",
    },
    {
        name: "your eyes",
        youtube: "https://youtu.be/5DvmR-MZ1Iw",
    },
    {
        name: "Favorite Drug",
        youtube: "https://youtu.be/9FVCe8mI31A",
    },
    {
        name: "bad vibes forever (feat. PnB Rock & Trippie Redd)",
        youtube: "https://youtu.be/ITtUs0fKmPM",
    },
    {
        name: "BROKE",
        youtube: "https://youtu.be/6kJr-frs30I",
    },
    {
        name: "MORT",
        youtube: "https://youtu.be/P9Tk8589Y3E",
    },
    {
        name: "Où je m'en vais",
        youtube: "https://youtu.be/lnZSMBRSGos",
    },
    {
        name: "Chloé KDL X Demon DOA - Parler caca dans l'aile ( Videoclip Officiel )  @yannmonteylevolume",
        youtube: "https://youtu.be/-gptCl1hUbY",
    },
    {
        name: "Couleur plume",
        youtube: "https://youtu.be/-QCh27uVGgQ",
    },
    {
        name: "Lil Peep - Star Shopping (Lyrics) (Music video)",
        youtube: "https://youtu.be/UBMuucEmfkg",
    },
    {
        name: "Lil Peep - Hate My Life (Lyrics) [HD]",
        youtube: "https://youtu.be/MR60gtmBFBE",
    },
    {
        name: "☆LiL PEEP☆ - white wine",
        youtube: "https://youtu.be/0wRU53KuNbA",
    },
    {
        name: "Broken Smile (My All)",
        youtube: "https://youtu.be/Awtr8SyortY",
    },
    {
        name: "Rappeur de Montréal - Marie Pier Toupin ft. Fléau Dicaprio",
        youtube: "https://youtu.be/up52v55OrFw",
    },
    {
        name: "MAXAM, YuB, NIVEK - DIABOLIKA (No A Las Drogas)",
        youtube: "https://youtu.be/413TW6wt80w",
    },
    {
        name: "Cro Cop",
        youtube: "https://youtu.be/fDJUIDP7Ml4",
    },
    {
        name: "Cérébral",
        youtube: "https://youtu.be/20rzgofOV6c",
    },
    {
        name: "Ruelle (feat. Trei Ochi, Rymz, Tizzo)",
        youtube: "https://youtu.be/e04hIsjuhtY",
    },
    {
        name: "FDC",
        youtube: "https://youtu.be/SvjKAPlu4xo",
    },
    {
        name: "Petit Sauvage (feat. Souldia)",
        youtube: "https://youtu.be/UzeAmbKsA1E",
    },
    {
        name: "Ямаджи, Фейджи - Минимум (Almaz Remix)",
        youtube: "https://youtu.be/-9vYmrydN-8",
    },
    {
        name: "Highschool",
        youtube: "https://youtu.be/BWvAnLPZhRs",
    },
    {
        name: "1 SIDED LOVE",
        youtube: "https://youtu.be/lW8ERSEB6p4",
    },
    {
        name: "SONG REQUEST",
        youtube: "https://youtu.be/Bx6WG_aPplc",
    },
    {
        name: "GET SMACKED",
        youtube: "https://youtu.be/heN_l614tN4",
    },
    {
        name: "Ding Dong",
        youtube: "https://youtu.be/s-SJqP2X7F0",
    },
    {
        name: "Whiplash",
        youtube: "https://youtu.be/mKWSXcpJCYc",
    },
    {
        name: "Restricted & Vortek's - FCKN LOUD [RV003]",
        youtube: "https://youtu.be/Sv2Z538RT3g",
    },
    {
        name: "Mozart (Hardstyle Remix)",
        youtube: "https://youtu.be/SpCzjCkOnPA",
    },
    {
        name: "Go Fuck Yourself",
        youtube: "https://youtu.be/DuQGokwsWF8",
    },
    {
        name: "FRESH ROLEX",
        youtube: "https://youtu.be/PJ3C_E4MBtI",
    },
    {
        name: "Overnight - Qveen Herby // Le Monde  (Lyrics Video)",
        youtube: "https://youtu.be/KRD7Gak_OR0",
    },
    {
        name: "J'passe mon temps",
        youtube: "https://youtu.be/PWll6mbkFkU",
    },
    {
        name: "menace Santana   Casper",
        youtube: "https://youtu.be/YHZZD_VtJJg",
    },
    {
        name: "menace Santana - Casper - prod.by tein6n [SoundCloud]",
        youtube: "https://youtu.be/hDhdy8Dz624",
    },


]

// Random music order?
// "true" or "false"
config.music_random_order = true

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
config.music_volume = 28

// Use Gmod volume for the music instead of manual volume
config.music_gmod_volume = false

// Enable custom messages?
// "true" or "false"
config.messages_enable = true

// Enter your custom messages below
config.messages_list = [
     "Bienvenue sur BananaPowerRoleplay !",
    "Bienvenue dans l’univers déjanté de BananaPowerRoleplay !",
    "Entrez dans le monde unique de BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, le serveur des vrais !",
    "Explore BananaPowerRoleplay dès maintenant !",
    "Plonge dans l’expérience BananaPowerRoleplay !",
    "Prépare-toi pour BananaPowerRoleplay !",
    "BananaPowerRoleplay t’ouvre ses portes !",
    "Rejoins BananaPowerRoleplay et découvre l'inattendu !",
    "Bienvenue chez BananaPowerRoleplay, là où tout peut arriver !",
    "BananaPowerRoleplay : le RP comme jamais vu !",
    "Le serveur BananaPowerRoleplay t’attend !",
    "Bienvenue dans l’aventure BananaPowerRoleplay !",
    "BananaPowerRoleplay commence ici !",
    "Entrez dans la légende BananaPowerRoleplay !",
    "BananaPowerRoleplay : sois le héros de l’histoire !",
    "Ici commence BananaPowerRoleplay !",
    "BananaPowerRoleplay : plus qu’un RP, une expérience !",
    "Bienvenue sur BananaPowerRoleplay, le royaume des bananes !",
    "BananaPowerRoleplay t'invite à jouer !",
    "Tu es sur BananaPowerRoleplay, amuse-toi bien !",
    "Rejoins BananaPowerRoleplay et vis une nouvelle vie !",
    "BananaPowerRoleplay : ta seconde maison !",
    "Bienvenue sur BananaPowerRoleplay, enjoy !",
    "BananaPowerRoleplay est heureux de t’accueillir !",
    "L’aventure BananaPowerRoleplay commence ici !",
    "Bien le bonjour sur BananaPowerRoleplay !",
    "BananaPowerRoleplay : une histoire à écrire !",
    "Bienvenue dans BananaPowerRoleplay, RP 100% fun !",
    "Ton aventure sur BananaPowerRoleplay débute maintenant !",
    "BananaPowerRoleplay, le serveur des vrais joueurs RP !",
    "Bienvenue sur BananaPowerRoleplay, prépare-toi !",
    "RP, fun et bananes : BananaPowerRoleplay t’attend !",
    "Bienvenue sur BananaPowerRoleplay, amuse-toi !",
    "Nouveau sur BananaPowerRoleplay ? Bienvenue !",
    "BananaPowerRoleplay : vis ta meilleure vie RP !",
    "Bienvenue sur BananaPowerRoleplay, soldat du fun !",
    "BananaPowerRoleplay : où la folie commence !",
    "Hello et bienvenue sur BananaPowerRoleplay !",
    "BananaPowerRoleplay : RP version sauvage !",
    "Bienvenue sur BananaPowerRoleplay, bonne chance !",
    "BananaPowerRoleplay : le seul, l’unique !",
    "Heureux de te voir sur BananaPowerRoleplay !",
    "BananaPowerRoleplay : l’aventure ultime !",
    "Bienvenue sur BananaPowerRoleplay, héros des bananes !",
    "RP + bananes = BananaPowerRoleplay !",
    "T’es prêt pour BananaPowerRoleplay ? Bienvenue !",
    "BananaPowerRoleplay : le RP sans limite !",
    "Bienvenue sur BananaPowerRoleplay, légende !",
    "BananaPowerRoleplay : l’empire du RP fun !",
    "Fais-toi une place sur BananaPowerRoleplay !",
    "BananaPowerRoleplay t'ouvre grand ses bras !",
    "Bienvenue dans l’univers BananaPowerRoleplay !",
    "Ici c’est BananaPowerRoleplay, sois prêt !",
    "Entre sans crainte sur BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, futur champion !",
    "Le monde de BananaPowerRoleplay s’offre à toi !",
    "RP ? Fun ? BananaPowerRoleplay est là !",
    "Ton destin t’attend sur BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, soldat RP !",
    "BananaPowerRoleplay te souhaite la bienvenue !",
    "Que l’aventure BananaPowerRoleplay commence !",
    "BananaPowerRoleplay : la banane attitude !",
    "Bienvenue sur BananaPowerRoleplay, aventurier RP !",
    "RP, folie, délire : BananaPowerRoleplay !",
    "Prêt pour BananaPowerRoleplay ? Go !",
    "BananaPowerRoleplay : entrez dans la légende !",
    "Bien le bonjour sur BananaPowerRoleplay !",
    "BananaPowerRoleplay : un serveur comme aucun autre !",
    "Bienvenue à bord de BananaPowerRoleplay !",
    "Ton nouveau monde : BananaPowerRoleplay !",
    "BananaPowerRoleplay : RP et surprises garanties !",
    "Bienvenue sur BananaPowerRoleplay, roi du RP !",
    "Viens défier le destin sur BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, légende du RP !",
    "BananaPowerRoleplay : fun et bananes assurés !",
    "Ici c’est BananaPowerRoleplay : enjoy !",
    "BananaPowerRoleplay : ose l'aventure RP !",
    "Bienvenue sur BananaPowerRoleplay, l’élite du RP !",
    "Que la partie commence sur BananaPowerRoleplay !",
    "BananaPowerRoleplay : le RP next level !",
    "Bienvenue chez les fous de BananaPowerRoleplay !",
    "Rejoins BananaPowerRoleplay, l’île des RP perdus !",
    "BananaPowerRoleplay : le serveur des vrais fous !",
    "RP unique ? C’est sur BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, héroïque inconnu !",
    "BananaPowerRoleplay : le fun avant tout !",
    "Entre dans la jungle BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, guerrier RP !",
    "BananaPowerRoleplay : RP, folie, bananes !",
    "Légendes naissent sur BananaPowerRoleplay !",
    "BananaPowerRoleplay : rejoins la révolte RP !",
    "Bienvenue sur BananaPowerRoleplay, l’univers sans règles !",
    "BananaPowerRoleplay : RP ou folie ? À toi de choisir !",
    "Bienvenue sur BananaPowerRoleplay, joyeux RP !",
    "BananaPowerRoleplay : RP épique garanti !",
    "Fais l’histoire sur BananaPowerRoleplay !",
    "BananaPowerRoleplay t’attend pour écrire la légende !",
    "RP extrême ? C’est BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, survivant RP !",
    "BananaPowerRoleplay : le serveur qui rend fou !",
    "Prêt pour BananaPowerRoleplay ? L’aventure débute !",
    "Bienvenue sur BananaPowerRoleplay, explorateur !",
    "BananaPowerRoleplay : RP sans limite !",
    "BananaPowerRoleplay : deviens une star du RP !",
    "Bienvenue sur BananaPowerRoleplay, fou du RP !",
    "RP, bananes et fun : BananaPowerRoleplay !",
    "Ton avenir RP commence sur BananaPowerRoleplay !",
    "BananaPowerRoleplay : pour les vrais joueurs RP !",
    "Bienvenue sur BananaPowerRoleplay, maître RP !",
    "BananaPowerRoleplay : l’expérience ultime !",
    "Vis l’impossible sur BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, pionnier RP !",
    "BananaPowerRoleplay : prépare-toi à tout !",
    "Le chaos RP est là : BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, créateur de légendes !",
    "BananaPowerRoleplay : quand le RP devient réel !",
    "RP pas comme les autres ? BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, assoiffé d'aventure !",
    "BananaPowerRoleplay : où le fun explose !",
    "Deviens héros sur BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, aventurier fou !",
    "BananaPowerRoleplay : la folie est permise !",
    "Bienvenue sur BananaPowerRoleplay, survivant !",
    "BananaPowerRoleplay : RP hardcore !",
    "Bienvenue sur BananaPowerRoleplay, futur roi du RP !",
    "BananaPowerRoleplay : un RP déjanté t'attend !",
    "Bienvenue sur BananaPowerRoleplay, guerrier légendaire !",
    "BananaPowerRoleplay : RP + action !",
    "Bienvenue sur BananaPowerRoleplay, fou furieux !",
    "RP pur jus ? BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, esprit libre !",
    "BananaPowerRoleplay : sans limites ni règles !",
    "Bienvenue sur BananaPowerRoleplay, le chaos RP !",
    "BananaPowerRoleplay : ton destin t’attend !",
    "Bienvenue sur BananaPowerRoleplay, maître du jeu !",
    "BananaPowerRoleplay : RP + bananes forever !",
    "Bienvenue sur BananaPowerRoleplay, guerrier des RP !",
    "BananaPowerRoleplay : deviens une légende !",
    "Bienvenue sur BananaPowerRoleplay, survivant ultime !",
    "RP mythique ? C’est BananaPowerRoleplay !",
    "Bienvenue sur BananaPowerRoleplay, soldat de l’impossible !",
    "BananaPowerRoleplay : RP sauvage activé !",
    "Bienvenue sur BananaPowerRoleplay, roi du RP !",
    "BananaPowerRoleplay : RP suprême garanti !",
    "Bienvenue sur BananaPowerRoleplay, joueur de l’extrême !",
    "BananaPowerRoleplay : la folie version RP !",
    "Bienvenue sur BananaPowerRoleplay, le vrai du RP !",
    "BananaPowerRoleplay : RP version apocalypse !",
    "Bienvenue sur BananaPowerRoleplay, seigneur des RP !",
    "BananaPowerRoleplay : RP épique activé !",
    "Bienvenue sur BananaPowerRoleplay, fan de bananes !",
    "BananaPowerRoleplay : RP boosté !",
    "Bienvenue sur BananaPowerRoleplay, survivant des légendes !",
    "BananaPowerRoleplay : RP + action + fun !",
    "Bienvenue sur BananaPowerRoleplay, joueur maudit !",
    "BananaPowerRoleplay : RP du futur !",
    "Bienvenue sur BananaPowerRoleplay, légende naissante !",
    "BananaPowerRoleplay : RP total garanti !",
    "Bienvenue sur BananaPowerRoleplay, as du RP !",
    "BananaPowerRoleplay : RP sans fin !",
    "Bienvenue sur BananaPowerRoleplay, conquérant RP !",
    "BananaPowerRoleplay : RP ultime assuré !",
    "Bienvenue sur BananaPowerRoleplay, le fun t'attend !",
    "BananaPowerRoleplay : RP sans limites !",
    "Bienvenue sur BananaPowerRoleplay, maître de la banane !",
    "BananaPowerRoleplay : RP sauvage confirmé !",
    "Bienvenue sur BananaPowerRoleplay, aventurier confirmé !",
    "BananaPowerRoleplay : RP démentiel activé !",
    "La banane est techniquement une baie, selon la botanique.",
    "Les bananes ne poussent pas sur des arbres, mais sur des herbes géantes.",
    "Les bananes sont légèrement radioactives à cause du potassium-40.",
    "Le mot 'banane' vient de l'arabe 'banan' qui signifie doigt.",
    "Il existe plus de 1 000 variétés de bananes dans le monde.",
    "La variété Cavendish représente 99% des exportations mondiales.",
    "Les bananes étaient autrefois rouges ou violettes avant la Cavendish.",
    "Les bananes contiennent du tryptophane, précurseur de la sérotonine.",
    "L'Inde est le premier producteur mondial de bananes.",
    "Une banane contient en moyenne 105 calories.",
    "La banane peut flotter sur l'eau.",
    "Les bananes mûrissent plus vite quand elles sont placées à côté d'autres fruits.",
    "Les bananes ont été introduites en Europe au XVe siècle.",
    "Les chips de banane sont une spécialité en Amérique Latine.",
    "La banane est le 4ème aliment de base au monde après le riz, le blé et le maïs.",
    "Une banane contient environ 450 mg de potassium.",
    "Les singes préfèrent souvent les bananes non mûres.",
    "Le jus de banane est rarement produit car il devient vite pâteux.",
    "Le bananier meurt après avoir produit des fruits.",
    "La fibre de bananier est utilisée pour fabriquer des tissus au Japon.",
    "Le Guinness des records inclut une banane épluchée par un singe en moins de 10 secondes.",
    "Les premières bananes cultivées remontent à 7 000 ans en Papouasie-Nouvelle-Guinée.",
    "La banane peut être utilisée pour polir des chaussures.",
    "Il existe une variété appelée 'banane bleue' à la saveur de crème glacée.",
    "Le bananier n’a pas de tronc en bois, mais des feuilles enroulées.",
    "La banane plantain est souvent cuite, jamais mangée crue.",
    "Les bananes étaient autrefois rares et chères en Europe.",
    "La peau de banane contient des antioxydants bénéfiques pour la peau humaine.",
    "Les bananes produisent de l’éthylène, un gaz de maturation.",
    "La banane fait partie de l’alimentation des astronautes de la NASA.",
    "L’huile extraite de la fleur de bananier est utilisée en cosmétique.",
    "Les bananes mûres sont plus sucrées car l'amidon se transforme en sucre.",
    "L'île de la Réunion est un producteur réputé de bananes françaises.",
    "Des chercheurs créent des bananes génétiquement résistantes aux maladies.",
    "La banane géante du Congo peut atteindre 30 cm de long.",
    "La banane est un symbole de fertilité dans certaines cultures africaines.",
    "Les bananes trop mûres peuvent remplacer les œufs en pâtisserie végétalienne.",
    "Les éléphants d’Asie adorent les bananes comme friandises.",
    "En Thaïlande, on fait des soupes à base de fleur de bananier.",
    "Les bananes étaient servies sur le Titanic comme dessert exotique.",
    "Une chanson célèbre des années 20 s'appelle 'Yes! We Have No Bananas'.",
    "Les bananes miniatures existent et s'appellent 'bananes naines'.",
    "La république de Bananeraie désigne des États économiquement dépendants de l’exportation de bananes.",
    "En Ouganda, on consomme plus de 500 kg de bananes par personne et par an.",
    "Le mythe de glisser sur une peau de banane est né au XIXe siècle à New York.",
    "Les bananes rouges sont plus riches en bêta-carotène que les jaunes.",
    "La banane est un ingrédient principal dans la bière de banane en Afrique.",
    "On peut faire des chips salées de banane plantain.",
    "Le bananier est une plante monocarpique : il ne fleurit qu'une fois.",
    "Les bananes sont stériles : elles ne produisent pas de graines viables.",
    "Les anciennes bananes sauvages contenaient d'énormes graines dures.",
    "Les bananes Cavendish risquent l'extinction à cause d’un champignon mortel.",
    "Le premier enregistrement télévisé de Donkey Kong montre une banane géante.",
    "Les bananes ont inspiré des œuvres d'art de Andy Warhol.",
    "L'effet 'banane' désigne un artefact en photographie.",
    "En Polynésie, le bananier est considéré comme un arbre sacré.",
    "Le 'banana split' a été inventé en 1904 en Pennsylvanie.",
    "Une étude montre que l’odeur de banane réduit le stress.",
    "Les bananes sont interdites sur certains bateaux par superstition de marins.",
    "En Chine ancienne, les feuilles de bananier servaient de papier d'écriture.",
    "Les bananes vertes ont un index glycémique plus bas que les mûres.",
    "Le mot anglais 'banana' n’a été utilisé qu'à partir du XVIIe siècle.",
    "Certains insectes pondent leurs œufs dans des bananes non traitées.",
    "Les singes capucins épluchent les bananes par l'extrémité opposée à celle des humains.",
    "Une peau de banane contient des composés analgésiques naturels.",
    "Les bananes ont été les premiers fruits emballés sous vide dans les supermarchés.",
    "La plante de banane peut être utilisée pour fabriquer du papier écologique.",
    "Le potassium des bananes peut aider à réduire la tension artérielle.",
    "L’Afrique est le second producteur mondial de bananes après l’Asie.",
    "Le terme 'république bananière' vient d'une critique de l'empire bananier de l'UFC.",
    "Les bananes surgelées servent à fabriquer des smoothies épais.",
    "Les oiseaux frugivores raffolent des bananes mûres laissées dans les jardins.",
    "Des sculptures entières peuvent être faites dans la chair d'une banane.",
    "La fibre du bananier est utilisée dans certains billets de banque au Japon.",
    "Les bananes sont l’un des premiers aliments solides donnés aux bébés.",
    "On peut fabriquer du vinaigre à partir de bananes fermentées.",
    "Une banane bien mûre a 80% de son amidon converti en sucres simples.",
    "Les bananes peuvent accélérer la digestion grâce à leurs fibres.",
    "Certains peuples mangent même la peau de banane, cuite ou frite.",
    "Le record du monde de vitesse d’épluchage de bananes est de 10 en 60 secondes.",
    "Les feuilles de bananier remplacent les assiettes en Asie du Sud.",
    "Le jus extrait du tronc du bananier est utilisé en médecine traditionnelle.",
    "Le bananier peut absorber des métaux lourds dans des sols pollués.",
    "Les bananes ont servi à des expériences de mesure de radioactivité naturelle.",
    "Le 'bunch' moyen de bananes pèse environ 15 kg à la récolte.",
    "Des chercheurs créent des bananes enrichies en vitamine A pour l’Afrique.",
    "Les bananes rouges contiennent plus de vitamine C que les jaunes.",
    "Les ours à lunettes des Andes se nourrissent de bananes sauvages.",
    "Certaines bananes sont naturellement carrées à cause de mutations génétiques.",
    "Des gâteaux de banane sont populaires dans la cuisine hawaïenne.",
    "Des records Guinness existent pour la plus grosse grappe de bananes (473 fruits).",
    "Des fibres de bananier sont utilisées dans la fabrication de tapis éco-responsables.",
    "Les bananes mûres peuvent attirer les moustiques.",
    "Le mot 'banana' a inspiré le nom du groupe 'The Bananarama'.",
    "Des bananes déshydratées sont utilisées comme rations militaires.",
    "L’huile de banane est utilisée pour aromatiser les bonbons artificiels.",
    "La banane est présente sur le drapeau de certaines tribus amazoniennes.",
    "Les bananes contiennent des prébiotiques naturels pour la flore intestinale.",
    "Les chimpanzés apprennent à partager des bananes avec leurs congénères.",
    "La peau de banane peut servir à traiter les verrues plantaires.",
    "Des bananes fossilisées ont été découvertes dans des sédiments anciens.",
    "Certaines bananes miniatures ne dépassent pas 3 cm de long.",
    "Les bananes Cavendish descendent d'une seule plante clonée en 1836.",
    "La 'banane-citron' est une variété rare à l’arôme citronné.",
    "Certains peuples d’Afrique font fermenter les bananes pour faire de l’alcool.",
    "L’odeur de banane artificielle est différente car elle est basée sur l’isoamyl-acétate pur.",
    "Les koalas ne mangent jamais de bananes, contrairement à la croyance populaire.",
    "Le bananier absorbe jusqu'à 20 litres d'eau par jour en saison humide.",
    "En Malaisie, les bananes servent d'offrandes religieuses.",
    "La banane est le fruit le plus exporté au monde.",
    "Le plus gros producteur de bananes d'Amérique latine est l'Équateur.",
    "Les bananes peuvent brunir rapidement si stockées au frigo.",
    "Les bananes contiennent de la dopamine, un antioxydant naturel.",
    "La plus longue banane du monde mesurait 2,5 mètres.",
    "Les bananes peuvent provoquer des allergies croisées chez certains allergiques au latex.",
    "Les fleurs mâles du bananier tombent après pollinisation.",
    "Les bananes cavendish remplacèrent la variété Gros Michel disparue du marché mondial.",
    "La variété de bananes Cavendish que nous mangeons risque l’extinction à cause d’un champignon incurable : le Fusarium TR4.",
    "L’ancienne variété 'Gros Michel', plus sucrée, a disparu à cause d'une pandémie fongique dans les années 1950.",
    "Le transport massif de bananes à travers le monde favorise la prolifération de maladies fongiques mortelles pour la plante.",
    "Certains lots de bananes ont été trouvés infestés d’araignées bananes, l'une des espèces les plus venimeuses du monde.",
    "Des cargaisons de bananes ont déjà servi à dissimuler des tonnes de cocaïne lors de trafics internationaux.",
    "En 2001, des bananes vendues en supermarché britannique contenaient des œufs d’araignées tueuses.",
    "Les grandes compagnies bananières ont historiquement soutenu des dictatures pour protéger leurs intérêts commerciaux, donnant naissance au terme 'république bananière'.",
    "Le travail dans les plantations de bananes est parfois associé à de l'exploitation humaine et à des conditions proches de l'esclavage.",
    "Certains pesticides utilisés dans les plantations de bananes sont interdits ailleurs à cause de leur toxicité élevée.",
    "Des accidents mortels se sont produits lors de la récolte de bananes à cause des serpents cachés dans les régimes.",
    "Les singes qui mangent trop de bananes en captivité peuvent développer de graves troubles digestifs et métaboliques.",
    "Le surtransport des bananes engendre une pollution massive, contribuant à l’émission de CO2 global.",
    "Dans certains pays, les terres fertiles pour les bananes ont été volées à des communautés autochtones.",
    "Des souches de Fusarium pourraient rendre impossible toute culture commerciale de bananes d'ici quelques décennies.",
    "Les bananes exportées subissent parfois un traitement au gaz d'éthylène en chambre close, dangereux pour les ouvriers non protégés.",
    "Des histoires circulent sur des bananes transportant des larves d'insectes capables d'infecter la peau humaine à l’ouverture.",
    "La culture intensive de bananes détruit les forêts tropicales primaires en Amérique Latine.",
    "Des travailleurs de plantations de bananes ont développé des cancers liés à l’exposition prolongée à des fongicides interdits.",
    "Des résidus toxiques de pesticides sur des bananes non biologiques peuvent dépasser les seuils sanitaires recommandés.",
    "Certains chercheurs craignent l’émergence d’une super-maladie qui anéantirait toutes les bananes modernes clonées.",
    "Des cas documentés montrent que des clients ont découvert des scorpions vivants cachés dans les régimes de bananes.",
    "La consommation excessive de bananes peut causer une hyperkaliémie, une intoxication grave au potassium chez certains individus.",
    "Des plantations de bananes ont été à l'origine d'accidents environnementaux majeurs, polluant des rivières entières.",
    "L’exploitation des enfants a été signalée dans certaines chaînes de production de bananes en Afrique de l’Ouest.",
    "Certaines bananes importées d'Amérique du Sud ont été retrouvées porteuses de champignons pathogènes pour l’homme.",
    "L'industrie bananière a parfois couvert des massacres de populations locales opposées à l’expansion des plantations.",
    "Des travailleurs agricoles sont devenus stériles après une exposition répétée à un pesticide utilisé sur les bananes.",
    "Des rats géants ont envahi certaines plantations de bananes abandonnées en Afrique, causant des épidémies locales.",
    "Le coût humain des bananes bon marché inclut des suicides parmi les ouvriers surexploités en Amérique centrale.",
    "L'emballage plastique des bananes génère des millions de tonnes de déchets chaque année dans le monde.",
    "Des cas de maladies pulmonaires graves ont été relevés chez des ouvriers manipulant des fûts de gaz éthylène pour bananes.",
    "Des rumeurs urbaines parlent de bananes 'empoisonnées' volontairement pour sabotage économique pendant la guerre froide.",
    "Certaines bananes importées en Europe ont montré des traces de métaux lourds accumulés dans des sols pollués.",
    "Les plantations industrielles de bananes entraînent la disparition locale de milliers d’espèces animales.",
    "Dans certaines régions, les braconniers empoisonnent les bananes pour capturer illégalement des singes ou des oiseaux rares.",
    "Le traitement antifongique post-récolte de certaines bananes utilise des produits potentiellement cancérigènes.",
    "Certaines bananes biologiques sont faussement étiquetées pour contourner les contrôles stricts d'importation.",
    "Des groupes paramilitaires ont été financés par des géants de la banane pour mater des syndicats ouvriers.",
    "Des fragments de plastique ont été retrouvés à l’intérieur de certaines bananes exportées après conditionnement défectueux.",
    "La monoculture bananière provoque un appauvrissement dramatique des sols tropicaux.",
    "Les plantations de bananes provoquent des conflits armés pour le contrôle des terres en Afrique subsaharienne.",
    "Des déversements accidentels de produits chimiques liés à la culture de bananes ont contaminé des nappes phréatiques entières.",
    "Dans certaines régions, les plantations de bananes favorisent la prolifération de moustiques vecteurs de maladies.",
    "Des accidents graves se produisent chaque année lors de l’usage d’hélicoptères pulvérisateurs dans les bananeraies.",
    "Des légendes racontent que des esprits protecteurs de la forêt maudissent ceux qui coupent les bananiers sacrés.",
    "Des tentatives de sabotage industriel ont visé l’empoisonnement volontaire de cargaisons entières de bananes dans les années 70.",
    "Le risque sanitaire lié à la présence de champignons invisibles sur certaines bananes mal stockées est réel.",
    "Des lots entiers de bananes ont été rappelés après détection de bactéries pathogènes comme la salmonelle.",
    "Certains ouvriers des bananeraies d’Amérique du Sud développent des troubles neurologiques irréversibles liés aux pesticides.",
]

// Random message order?
// "true" or "false"
config.messages_random_order = true

// Delay between message changes
// in milliseconds
config.messages_delay = 5000

// Messages fade duration
// in milliseconds
config.messages_fade_duration = 1000

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// "true" or "false"
config.errors_show_ingame = true
