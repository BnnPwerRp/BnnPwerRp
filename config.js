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
		name: "Cupidon - 21",
		youtube: "https://youtu.be/SqXdK_TdOM0?si=r3XsW_MfpOGuP-4F",
	},
	{
		name: "Shreez - 3.5",
		youtube: "https://youtu.be/eVaeKfEr7C0?si=4hprAFKcLx-GQFkL",
	},
	{
		name: "Enima - Port d'arme ",
		youtube: "https://youtu.be/H1sTbwui4E4?si=HJkZRGQBEvIA8lI5",
	},
	{
		name: "Aswell - Sandy",
		youtube: "https://youtu.be/bEiW5tq-9AE?si=eyn-WnZBHWEBi56e",
	},
	{
		name: "Les Anticipateurs - FINDSEMAINE",
		youtube: "https://youtu.be/5Vdap4DTd0Y?si=Tcr3glSKzbIetxBx",
	},
	{
		name: "Isaac charles - $O$ ft Baggies",
		youtube: "https://youtu.be/lnHFOKl_LJE?si=jSM7NjQ7cgdgftbO",
	},
	{
		name: "Youri & DJ Weedim - Psilocybe #TsarBomba",
		youtube: "https://youtu.be/KhArdV0MWGw?si=vI0joxCUydqyAUKq",
	},
	{
		name: "Youri & DJ Weedim - Psilocybe 2",
		youtube: "https://youtu.be/mwAALeh9pug?si=Ihxowl0yKONVXLGk",
	},
	{
		name: "Frenchmen 10 - Nusky & Vaati",
		youtube: "https://youtu.be/ODlY1jYV4V8?si=gOgtogMYwxGJONCb",
	},
	{
		name: "Dj Weedim x Alkpote x Luv Resval - Synthèse",
		youtube: "https://youtu.be/BnPfE03n1xw?si=NFm_JZVMsBM-vYZR",
	},
	{
		name: "Luv Resval - ¥5",
		youtube: "https://youtu.be/Isd93sI7bRY?si=pvIQ_o9lGcqMVxXm",
	},
	{
		name: "CSKILL - SCRAPP",
		youtube: "https://youtu.be/1f3buUtaehM?si=k_qlwEhF2GBpcWjB",
	},
	{
		name: "Luv Resval - ¥3",
		youtube: "https://youtu.be/OOHM70szu44?si=97zuEvzVFVYEqODH",
	},
	{
		name: "CSKILL - Tabarnak",
		youtube: "https://youtu.be/i1_i4Rpfxf0?si=g386U2qd4H4A55Rd",
	},
	{
		name: "CSKILL - NINTENDO",
		youtube: "https://youtu.be/kfBg_to-4wo?si=QZ2FOX1CKZyzRVt6",
	},
	{
		name: "CSKILL - GANGSTA",
		youtube: "https://youtu.be/g127orm1DJk?si=B0akMNSkApGr4Aza",
	},
	{
		name: "NO CUENTO - 91ZULY",
		youtube: "https://youtu.be/iA4ZSiw04RY?si=-CXf42_MMQxDe0k7",
	},
	{
		name: "Cupidon - Ice Cream",
		youtube: "https://youtu.be/EChFuegTMYU?si=BmjZJTtEOGRvB1yo",
	},
	{
		name: "Clandestine - Cocaina",
		youtube: "https://youtu.be/JJgGg1OXj90?si=ByxdtloB-IJVBURQ",
	},
	{
		name: "12 Singes | Règne Animal",
		youtube: "https://youtu.be/KMmv8Ih3dQw?si=_BXEfO0-Y6Y4Hx7O",
	},
	{
		name: "Zinera - Qatari",
		youtube: "https://youtu.be/CgocPirvQcY?si=caims7IUtFFiU_Tc",
	},
	{
		name: "Wooz - Rechute",
		youtube: "https://youtu.be/DPySFLBAYE4?si=FU8qpOhUh1lRRMs6",
	},
	{
		name: "Wassup",
		youtube: "hhttps://youtu.be/TgU7cT0cIaQ?si=MAKZZbZPgHXfy9EU",
	},
	{
		name: "DANS L'COFFRE",
		youtube: "https://youtu.be/MeOicCzicb0?si=yYFWUFZo_dpVp0ax",
	},
	{
		name: "$UICIDEBOY$ - I HUNG MYSELF FOR A PERSONA///NOW I'M UP TO MY NECK WITH OFFERS",
		youtube: "https://youtu.be/Dcy25od869k?si=opbLtAZizhL7phAY",
	},
	{
		name: "68 28g",
		youtube: "https://youtu.be/8IVMrQmeGig?si=L4s1IYM8DzRz21kV",
	},
	{
		name: "LA GRISAILLE",
		youtube: "https://youtu.be/RIXE0iI5y4c?si=uka9y8oVbfakTs_J",
	},
	{
		name: "Kalibre & MOP - 12 Apôtres ",
		youtube: "https://youtu.be/plERjfIbR-g?si=J34DJzY79k0B0Gu1",
	},
	{
		name: "scarlxrd & kordhell - MISS ME? ",
		youtube: "https://youtu.be/aYtOKQ9LYYQ?si=DEFAj0CMUYtsezov",
	},
	{
		name: "lil aaron - BADSIDE",
		youtube: "https://youtu.be/bLgZkNZCZlU?si=xqjmbgVqiDYhqm1A",
	},
	{
		name: "Night Lovell - Barbie Doll",
		youtube: "https://youtu.be/htDyjeqHSfI?si=jZS2UMHZLRjQ2h6L",
	},
	{
		name: "Night Lovell - Live Television",
		youtube: "https://youtu.be/iWt8fP2BLu0?si=Xf-5YTK29kSTmujf",
	},
	{
		name: "Youri - Tel Aviv",
		youtube: "https://youtu.be/Aiaob-0-6BY?si=JM793qua6VkYO22W",
	},
	{
		name: "Kakuzo - Cash",
		youtube: "https://youtu.be/-gwF83mFdxo?si=eNUmECwUBzWKaYVw",
	},
	{
		name: "PLK - Demain",
		youtube: "https://youtu.be/BvPszccELCA?si=X13bc8abfYpTiSmQ",
	},
	{
		name: "Reta feat Pakdur - blunt n cup",
		youtube: "https://youtu.be/Iq0YNF7u1Lk?si=EBz4Uf3jr9yo27yk",
	},
	{
		name: "Felonie ft white B",
		youtube: "https://youtu.be/J3li6uGSOxs?si=1Pi76L-wRD6sjDjG",
	},
	{
		name: "Redman - Dunfiato",
		youtube: "https://youtu.be/vu_tvemD578?si=DCivu1WC1_B9zgWa",
	},
	{
		name: "Aswell - Sandy",
		youtube: "https://youtu.be/bEiW5tq-9AE?si=-nz9dL_seYtxeDlQ",
	},
	{
		name: "PLK - Nouvelles",
		youtube: "https://youtu.be/-68R6v7JgjI?si=gsNEQX-Hd8MPCChP",
	},
	{
		name: "PLK feat. JUL - Faut pas",
		youtube: "https://youtu.be/y0J3vX9zuYo?si=F-_qJRMxHBEtMpkU",
	},
	{
		name: "Aswell - Highschool",
		youtube: "https://youtu.be/bE1E5XujfsM?si=hH5e-8O_8t4vJ1_h",
	},
	{
		name: "Key Largo - Screen #NoFake2",
		youtube: "https://youtu.be/ZcKeRjJtCuk?si=DhdGV3hXv3J8Ualr",
	},
	{
		name: "Luv Resval - Automne",
		youtube: "https://youtu.be/Z8Dtd0svpWA?si=awLX1d_zjKBci2pk",
	},
	{
		name: "C'est ça qui veulent",
		youtube: "https://youtu.be/PEd6xQkcTmw?si=z68IqLRfhn7mYxQl",
	},
]

// Random music order?
// "true" or "false"
config.music_random_order = true

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
config.music_volume = 15

// Use Gmod volume for the music instead of manual volume
config.music_gmod_volume = true

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
