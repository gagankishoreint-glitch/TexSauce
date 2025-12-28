// FMHY Resources Data Structure
const fmhyResources = {
    gaming: {
        title: "Gaming Resources",
        description: "Free games, ROMs, emulators, gaming tools, and communities",
        fmhyUrl: "https://fmhy.net/gaming",
        categories: [
            {
                name: "Download Games",
                links: [
                    { name: "🌟 FitGirl Repacks", url: "https://fitgirl-repacks.site/", desc: "Highly compressed game repacks" },
                    { name: "🌟 DODI Repacks", url: "https://dodi-repacks.site/", desc: "Quality game repacks" },
                    { name: "🌟 SteamRIP", url: "https://steamrip.com/", desc: "Direct download games" },
                    { name: "GOG Games", url: "https://gog-games.to/", desc: "DRM-free games" },
                    { name: "CS.RIN.RU", url: "https://cs.rin.ru/forum/", desc: "Gaming forum & downloads" }
                ]
            },
            {
                name: "Emulation & ROMs",
                links: [
                    { name: "🌟 Vimm's Lair", url: "https://vimm.net/", desc: "Safe ROM downloads" },
                    { name: "🌟 CDRomance", url: "https://cdromance.org/", desc: "ROMs & ISOs" },
                    { name: "Myrient", url: "https://myrient.erista.me/", desc: "No-intro ROM sets" },
                    { name: "r/Roms Megathread", url: "https://r-roms.github.io/", desc: "ROM collection" },
                    { name: "RetroArch", url: "https://www.retroarch.com/", desc: "All-in-one emulator" }
                ]
            },
            {
                name: "Browser Games",
                links: [
                    { name: "Poki", url: "https://poki.com/", desc: "Free online games" },
                    { name: "CrazyGames", url: "https://www.crazygames.com/", desc: "Browser games" },
                    { name: "Armor Games", url: "https://armorgames.com/", desc: "Flash & HTML5 games" },
                    { name: "Kongregate", url: "https://www.kongregate.com/", desc: "Browser gaming platform" }
                ]
            }
        ]
    },

    reading: {
        title: "Reading Resources",
        description: "Millions of books, comics, manga, and magazines at your fingertips",
        fmhyUrl: "https://fmhy.net/reading",
        categories: [
            {
                name: "Ebook Sites",
                links: [
                    { name: "🌟 Anna's Archive", url: "https://annas-archive.org/", desc: "Largest shadow library" },
                    { name: "🌟 Z-Library", url: "https://singlelogin.re/", desc: "Millions of ebooks" },
                    { name: "🌟 Library Genesis", url: "https://libgen.is/", desc: "Scientific articles & books" },
                    { name: "Project Gutenberg", url: "https://www.gutenberg.org/", desc: "70,000+ free ebooks" },
                    { name: "PDF Drive", url: "https://www.pdfdrive.com/", desc: "Free PDF search engine" }
                ]
            },
            {
                name: "Comics & Manga",
                links: [
                    { name: "🌟 GetComics", url: "https://getcomics.org/", desc: "Comics downloads" },
                    { name: "🌟 MangaDex", url: "https://mangadex.org/", desc: "Manga reader" },
                    { name: "🌟 Comick", url: "https://comick.io/", desc: "Comics & manga" },
                    { name: "ReadComicsOnline", url: "https://readcomiconline.li/", desc: "Online comics" },
                    { name: "MangaSee", url: "https://mangasee123.com/", desc: "Manga online" }
                ]
            },
            {
                name: "Audiobooks",
                links: [
                    { name: "🌟 AudioBook Bay", url: "http://audiobookbay.lu/", desc: "Audiobook torrents" },
                    { name: "Tokybook", url: "https://tokybook.com/", desc: "Free audiobooks" },
                    { name: "LibriVox", url: "https://librivox.org/", desc: "Public domain audiobooks" },
                    { name: "AudioBooks Cloud", url: "https://audiobooks.cloud/", desc: "Audiobook streaming" }
                ]
            }
        ]
    },

    downloading: {
        title: "Download Sites",
        description: "Direct download sites, file hosts, and download managers",
        fmhyUrl: "https://fmhy.net/downloading",
        categories: [
            {
                name: "Download Sites",
                links: [
                    { name: "🌟 FileCR", url: "https://filecr.com/", desc: "Software downloads" },
                    { name: "🌟 SoftArchive", url: "https://sanet.st/", desc: "Software & media" },
                    { name: "Mobilism", url: "https://forum.mobilism.org/", desc: "Apps & ebooks forum" },
                    { name: "DDLBase", url: "https://ddlbase.net/", desc: "Download directories" },
                    { name: "Nsane Forums", url: "https://www.nsaneforums.com/", desc: "Software releases" }
                ]
            },
            {
                name: "Software Sites",
                links: [
                    { name: "🌟 M0nkrus", url: "http://w14.monkrus.ws/", desc: "Cracked software (Russian)" },
                    { name: "RSLOAD", url: "https://rsload.net/", desc: "Software downloads (Russian)" },
                    { name: "LRepacks", url: "https://lrepacks.net/", desc: "Repacked software" },
                    { name: "Appnee", url: "https://appnee.com/", desc: "Freeware & cracks" }
                ]
            },
            {
                name: "Debrid Services",
                links: [
                    { name: "Real-Debrid", url: "https://real-debrid.com/", desc: "Premium link generator" },
                    { name: "AllDebrid", url: "https://alldebrid.com/", desc: "Unrestrict download links" },
                    { name: "Premiumize", url: "https://www.premiumize.me/", desc: "Cloud storage & debrid" }
                ]
            }
        ]
    },

    torrenting: {
        title: "Torrenting Resources",
        description: "Torrent sites, clients, and utilities for P2P file sharing",
        fmhyUrl: "https://fmhy.net/torrenting",
        categories: [
            {
                name: "Torrent Sites",
                links: [
                    { name: "🌟 1337x", url: "https://1337x.to/", desc: "Popular torrent site" },
                    { name: "🌟 RARGB", url: "https://therarbg.com/", desc: "RARBG replacement" },
                    { name: "🌟 TorrentGalaxy", url: "https://torrentgalaxy.to/", desc: "Quality torrents" },
                    { name: "The Pirate Bay", url: "https://thepiratebay.org/", desc: "Classic torrent site" },
                    { name: "EZTV", url: "https://eztv.re/", desc: "TV show torrents" }
                ]
            },
            {
                name: "Torrent Clients",
                links: [
                    { name: "🌟 qBittorrent", url: "https://www.qbittorrent.org/", desc: "Best free client" },
                    { name: "🌟 Transmission", url: "https://transmissionbt.com/", desc: "Lightweight client" },
                    { name: "Deluge", url: "https://deluge-torrent.org/", desc: "Feature-rich client" },
                    { name: "BiglyBT", url: "https://www.biglybt.com/", desc: "Advanced client" }
                ]
            },
            {
                name: "Private Trackers",
                links: [
                    { name: "BroadcastTheNet", url: "https://broadcasthe.net/", desc: "TV shows (invite only)" },
                    { name: "PassThePopcorn", url: "https://passthepopcorn.me/", desc: "Movies (invite only)" },
                    { name: "RED", url: "https://redacted.ch/", desc: "Music (invite only)" },
                    { name: "r/OpenSignups", url: "https://www.reddit.com/r/OpenSignups/", desc: "Track open signups" }
                ]
            }
        ]
    },

    educational: {
        title: "Educational Resources",
        description: "Free courses, tutorials, academic papers, and learning resources",
        fmhyUrl: "https://fmhy.net/educational",
        categories: [
            {
                name: "Courses & Learning",
                links: [
                    { name: "🌟 Coursera", url: "https://www.coursera.org/", desc: "University courses (audit free)" },
                    { name: "🌟 edX", url: "https://www.edx.org/", desc: "Free online courses" },
                    { name: "🌟 Khan Academy", url: "https://www.khanacademy.org/", desc: "Free learning platform" },
                    { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/", desc: "Free MIT cours materials" },
                    { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/", desc: "Learn to code" }
                ]
            },
            {
                name: "Academic Papers",
                links: [
                    { name: "🌟 Sci-Hub", url: "https://sci-hub.se/", desc: "Free research papers" },
                    { name: "Google Scholar", url: "https://scholar.google.com/", desc: "Academic search engine" },
                    { name: "CORE", url: "https://core.ac.uk/", desc: "Open access papers" },
                    { name: "ResearchGate", url: "https://www.researchgate.net/", desc: "Academic network" }
                ]
            },
            {
                name: "Programming & Dev",
                links: [
                    { name: "🌟 The Odin Project", url: "https://www.theodinproject.com/", desc: "Full-stack curriculum" },
                    { name: "🌟 CS50", url: "https://cs50.harvard.edu/", desc: "Harvard's intro to CS" },
                    { name: "Exercism", url: "https://exercism.org/", desc: "Code practice" },
                    { name: "LeetCode", url: "https://leetcode.com/", desc: "Coding challenges" }
                ]
            }
        ]
    },

    mobile: {
        title: "Android / iOS Resources",
        description: "Mobile apps, games, utilities, and customization tools",
        fmhyUrl: "https://fmhy.net/mobile",
        categories: [
            {
                name: "Android APKs",
                links: [
                    { name: "🌟 Mobilism", url: "https://forum.mobilism.org/", desc: "APK forum" },
                    { name: "🌟 APKMirror", url: "https://www.apkmirror.com/", desc: "Safe APK downloads" },
                    { name: "🌟 APKPure", url: "https://apkpure.com/", desc: "Alternative app store" },
                    { name: "F-Droid", url: "https://f-droid.org/", desc: "FOSS Android apps" },
                    { name: "Aurora Store", url: "https://auroraoss.com/", desc: "Google Play alternative" }
                ]
            },
            {
                name: "Modded APKs",
                links: [
                    { name: "🌟 ReVanced", url: "https://revanced.app/", desc: "YouTube & more mods" },
                    { name: "Mobilism Modded Apps", url: "https://forum.mobilism.org/viewforum.php?f=398", desc: "Modded APKs forum" },
                    { name: "ModDroid", url: "https://moddroid.com/", desc: "Modded Android apps" },
                    { name: "HappyMod", url: "https://happymod.com/", desc: "Game mods" }
                ]
            },
            {
                name: "iOS Apps",
                links: [
                    { name: "🌟 AppDB", url: "https://appdb.to/", desc: "IPA library" },
                    { name: "🌟 iOSGods", url: "https://iosgods.com/", desc: "Modded iOS apps" },
                    { name: "AltStore", url: "https://altstore.io/", desc: "Alternative app store" },
                    { name: "Sideloadly", url: "https://sideloadly.io/", desc: "IPA sideloader" }
                ]
            }
        ]
    },

    os: {
        title: "Linux / macOS Resources",
        description: "Unix-based system resources, tools, and software",
        fmhyUrl: "https://fmhy.net/linux-macos",
        categories: [
            {
                name: "Linux Distros",
                links: [
                    { name: "🌟 Ubuntu", url: "https://ubuntu.com/", desc: "Popular beginner distro" },
                    { name: "🌟 Linux Mint", url: "https://linuxmint.com/", desc: "Windows-like experience" },
                    { name: "🌟 Pop!_OS", url: "https://pop.system76.com/", desc: "Gaming & development" },
                    { name: "Arch Linux", url: "https://archlinux.org/", desc: "Advanced DIY distro" },
                    { name: "Fedora", url: "https://getfedora.org/", desc: "Cutting-edge tech" }
                ]
            },
            {
                name: "Linux Software",
                links: [
                    { name: "Flathub", url: "https://flathub.org/", desc: "Flatpak apps" },
                    { name: "Snap Store", url: "https://snapcraft.io/store", desc: "Snap packages" },
                    { name: "AppImage Hub", url: "https://www.appimagehub.com/", desc: "AppImage apps" },
                    { name: "AUR", url: "https://aur.archlinux.org/", desc: "Arch User Repository" }
                ]
            },
            {
                name: "Mac Software",
                links: [
                    { name: "🌟 MacApps.link", url: "https://macapps.link/", desc: "Mac apps collection" },
                    { name: "🌟 TNT", url: "https://appstorrent.ru/", desc: "Mac apps torrents" },
                    { name: "Homebrew", url: "https://brew.sh/", desc: "Package manager" },
                    { name: "Awesome macOS", url: "https://github.com/jaywcjlove/awesome-mac", desc: "Curated apps list" }
                ]
            }
        ]
    },

    streaming: {
        title: "Streaming Resources",
        description: "Movies, TV shows, anime, and live streams anywhere, anytime",
        fmhyUrl: "https://fmhy.net/video",
        categories: [
            {
                name: "Streaming Sites",
                links: [
                    { name: "🌟 FMovies", url: "https://fmovies.name/", desc: "HD movies & TV" },
                    { name: "🌟 SFlix", url: "https://sflix.to/", desc: "No ads streaming" },
                    { name: "🌟 HuraWatch", url: "https://hurawatch.ru/", desc: "Clean interface" },
                    { name: "🌟 BingeWatch", url: "https://bingewatch.to/", desc: "Quality streams" },
                    { name: "LookMovie", url: "https://lookmovie2.to/", desc: "Free streaming" }
                ]
            },
            {
                name: "Anime Streaming",
                links: [
                    { name: "🌟 Aniwave", url: "https://aniwave.to/", desc: "Best anime streaming" },
                    { name: "🌟 HiAnime", url: "https://hianime.to/", desc: "Sub & dub anime" },
                    { name: "🌟 AnimeSuge", url: "https://animesuge.to/", desc: "HD anime" },
                    { name: "GogoAnime", url: "https://gogoanime3.co/", desc: "Popular anime site" },
                    { name: "Crunchyroll", url: "https://www.crunchyroll.com/", desc: "Official (free with ads)" }
                ]
            },
            {
                name: "Live TV & Sports",
                links: [
                    { name: "🌟 StreamEast", url: "https://streameast.io/", desc: "Live sports" },
                    { name: "🌟 Pluto TV", url: "https://pluto.tv/", desc: "Free live TV (legal)" },
                    { name: "🌟 USTV247", url: "https://ustv247.net/", desc: "US channels" },
                    { name: "Live NetTV", url: "https://www.livenettv.to/", desc: "Live channels" }
                ]
            }
        ]
    },

    tools: {
        title: "Tools & Utilities",
        description: "Productivity tools, converters, editors, and essential utilities",
        fmhyUrl: "https://fmhy.net/system-tools",
        categories: [
            {
                name: "System Tools",
                links: [
                    { name: "🌟 Ninite", url: "https://ninite.com/", desc: "Bulk app installer" },
                    { name: "🌟 PowerToys", url: "https://github.com/microsoft/PowerToys", desc: "Windows utilities" },
                    { name: "🌟 Winaero Tweaker", url: "https://winaerotweaker.com/", desc: "Windows customization" },
                    { name: "Ventoy", url: "https://www.ventoy.net/", desc: "Bootable USB tool" },
                    { name: "Revo Uninstaller", url: "https://www.revouninstaller.com/", desc: "Complete uninstaller" }
                ]
            },
            {
                name: "File Tools",
                links: [
                    { name: "🌟 7-Zip", url: "https://www.7-zip.org/", desc: "File archiver" },
                    { name: "🌟 Everything", url: "https://www.voidtools.com/", desc: "Instant file search" },
                    { name: "WinDirStat", url: "https://windirstat.net/", desc: "Disk usage analyzer" },
                    { name: "Bulk Rename Utility", url: "https://www.bulkrenameutility.co.uk/", desc: "Batch file renamer" }
                ]
            },
            {
                name: "Media Tools",
                links: [
                    { name: "🌟 VLC Media Player", url: "https://www.videolan.org/", desc: "Universal media player" },
                    { name: "🌟 HandBrake", url: "https://handbrake.fr/", desc: "Video transcoder" },
                    { name: "🌟 OBS Studio", url: "https://obsproject.com/", desc: "Screen recording" },
                    { name: "Audacity", url: "https://www.audacityteam.org/", desc: "Audio editor" }
                ]
            }
        ]
    }
};
