/* =====================================================================
   GOA SUNSET · PALM INVITATION  -  EDIT ONLY THIS FILE FOR EACH COUPLE
   Keep the "quotes" and the commas. Pictures live in the images folder.
   ===================================================================== */
window.WEDDING = {

  /* ---- couple ---- */
  groom: "Karthik",
  bride: "Ananya",
  monogram: "K & A",
  groomParents: "Mr. Raghavan & Mrs. Lakshmi Iyer",
  groomLabel: "Son of",
  brideParents: "Mr. Suresh & Mrs. Meenakshi Nair",
  brideLabel: "Daughter of",

  /* ---- words ---- */
  gateEyebrow: "The wedding of",       /* small text above the names on the gate */
  gateText: "Tap the seal to open your invitation",
  cardFooter: null,                    /* last line of the invitation card; null = auto (date + venue), "" = hide */
  heroEyebrow: "With the blessings of our elders",
  place: "Goa · By the Arabian Sea",
  blessing: "Shri Ganeshaya Namah",
  tagline: "Under swaying palms and a golden Goa sky, two hearts become one.",
  inviteLine: "We joyfully invite you and your family to celebrate the wedding of our children.",

  /* ---- pictures (leave "" to hide) ---- */
  heroImage: "images/resort-1.jpg",    /* resort photo behind the doors and full-screen at the top */
  heroFocus: "50% 55%",                /* which part of that photo shows */
  footerImage: "images/resort-3.jpg",  /* photo at the very bottom ("" = hide) */
  couplePhoto: "",                     /* optional photo in the invitation card */
  venueImage: "images/resort-2.jpg",
  venueFocus: "62% 50%",
  /* postcard collage of the venue (3 photos look best) */
  postcardEyebrow: "Wish you were here",
  postcardTitle: "Sunsets, Palms & Forever",
  postcardNote: "Three golden days at our favourite place by the sea",
  postcards: [
    { src: "images/resort-2.jpg", cap: "Where the palms meet the sea" },
    { src: "images/resort-1.jpg", cap: "Golden hour by the pool" },
    { src: "images/resort-3.jpg", cap: "Our evenings under the stars" }
  ],
  gallery: [                           /* replace with the couple's photos (portrait looks best); cap = caption */
    { src: "images/resort-1.jpg",     cap: "Golden hour in Goa" },
    { src: "images/ev-pheras.jpg",    cap: "Two hearts, one beautiful beginning" },
    { src: "images/ev-sangeet.jpg",   cap: "Dancing into forever" },
    { src: "images/resort-2.jpg",     cap: "Where it all begins" },
    { src: "images/ev-reception.jpg", cap: "Hand in hand" },
    { src: "images/ev-haldi.jpg",     cap: "Laughter & light" }
  ],

  /* ---- date (the three scratch cards reveal this) ---- */
  weddingDateTime: "2027-01-24T10:30:00+05:30",
  dateDay: "24", dateMonth: "JAN", dateYear: "2027",
  sealText: "Scratch each card, one by one, to reveal the date",
  dateNote: "Muhurtham at 10:42 in the morning",
  rememberReveal: false,               /* false = scratch cards every visit; true = guests scratch only once */

  /* ---- events (add / remove / reorder freely) ----
     focus = which part of the picture shows: "top", "center", "bottom"  */
  eventsEyebrow: "Three days by the sea",
  events: [
    { date: "22 Jan", time: "6:00 PM",  title: "Welcome Sundowner",  note: "Sunset, sea breeze & cocktails on the beach", image: "images/resort-3.jpg" },
    { date: "23 Jan", time: "10:00 AM", title: "Haldi & Mehendi",    note: "Marigolds, turmeric & laughter",             image: "images/ev-haldi.jpg" },
    { date: "23 Jan", time: "7:30 PM",  title: "Sangeet",            note: "Music, dance & a starlit dinner",           image: "images/ev-sangeet.jpg" },
    { date: "24 Jan", time: "10:30 AM", title: "Muhurtham",          note: "The sacred wedding ceremony",               image: "images/ev-pheras.jpg" },
    { date: "24 Jan", time: "8:00 PM",  title: "Reception",          note: "An evening of celebration & dinner",        image: "images/ev-reception.jpg" }
  ],
  muhurat: { title: "Auspicious Muhurtham", label: "Thaali Kettu", time: "10:42 AM", text: "Please be seated by 10:15 AM" },

  /* ---- venue ---- */
  venueNote: "Where the river meets the Arabian Sea, among swaying palms and golden sands. We would be honoured to celebrate with you.",
  venueCity: "Venue · South Goa",
  venueName: "The St. Regis Goa Resort",
  venueAddress: "Mobor, Cavelossim, Goa 403731",
  mapQuery: "The St. Regis Goa Resort Mobor Cavelossim Goa",

  /* ---- wardrobe planner ----
     colors = colour chips for that event (any hex codes, 3 or 4 work best)
     poster = optional full dress-code poster ("images/dress-haldi.jpg"); "" = show the colour card
     look   = use | for a new line      image = optional small outfit picture ("" = none)   */
  dressEyebrow: "Dress for the moment",
  dressTitle: "Wardrobe Planner",
  dressCode: [
    { event: "Overview",       look: "", colors: [], image: "", poster: "images/dress-planner.jpg" },
    { event: "Mandvo & Pithi", look: "Yellow traditional|Summer wear",          colors: ["#f6d04d"], image: "", poster: "images/dress-pithi.jpg" },
    { event: "Pool Party",     look: "Casual pool & swimwear",                  colors: ["#a9d4d2"], image: "", poster: "images/dress-pool.jpg" },
    { event: "Reception",      look: "Cocktail dresses & summer suits",         colors: ["#1f3d7a"], image: "", poster: "images/dress-reception.jpg" }
  ],

  /* ---- RSVP & closing ---- */
  whatsapp: "910000000000",            /* country code + number, no + sign. e.g. 919876543210 */
  rsvpBy: "5 Jan 2027",
  closing: "Your presence and blessings will make our celebration complete.",
  families: "With love — The Iyer & Nair Families",
  hashtag: "",                         /* "" = auto #KarthikWedsAnanya */
  music: "music/song.mp3",             /* "" = no music */

  /* ---- colours (hex) ---- */
  theme: { ink: "#4a2a22", blue: "#2c8c8f", sky: "#f6d2bd", mist: "#fdf3e7", gold: "#c9a043" },

  /* hide sections: any of "date", "events", "venue", "gallery", "dress", "rsvp"  e.g. ["gallery"] */
  hideSections: []
};
