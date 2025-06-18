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
	"Welcome to ddddSleekLoad!",
	"Customize your loading screen by editing the config file",
	"Enjoy!",
]

// Random message order?
// "true" or "false"
config.messages_random_order = false

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
