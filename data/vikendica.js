/*
 * Harmonija · Vlašić - podaci za stranicu (bosanski i engleski).
 * Sve što piše ovdje preuzeto je sa Instagram profila @harmonija.vlasic.
 * Stvari označene sa "PROVJERITI" treba potvrditi sa vlasnikom prije objave.
 */
window.VIKENDICA = {
  name: 'Harmonija',
  kind: { bs: 'Smještaj', en: 'Guesthouse' },
  place: 'Vlašić',
  title: { bs: 'Harmonija · Vlašić', en: 'Harmonija · Vlašić' },
  badge: { bs: 'Udoban smještaj', en: 'Cosy stay' },
  tagline: {
    bs: 'Udoban smještaj za vaš boravak. Vaš odmor počinje ovdje.',
    en: 'A cosy place to stay on Vlašić. Your holiday starts here.'
  },
  seasons: false,
  defaultSeason: 'winter',
  demo: true,
  demoNote: {
    bs: 'Prijedlog nove web stranice za Harmoniju, pripremljen kao primjer. Stranica nije javno objavljena.',
    en: 'A proposal for a new Harmonija website, prepared as an example. This page is not public.'
  },
  credit: null,

  /* prvi ekran: video u krug i animirani logo */
  heroVideo: 'assets/img/hero.mp4',
  heroPoster: 'assets/img/hero-poster.jpg',
  heroVideoWebm: 'assets/img/hero.webm',
  heroVideoLoop: true,
  heroLogo: { mark: 'assets/img/mark-white.png', word: 'assets/img/word-white.png' },
  /* logo u zaglavlju (bijeli preko videa, tamni kad se skrola) i footeru */
  brandLogo: { light: 'assets/img/brand-light.png', dark: 'assets/img/brand-dark.png' },
  /* istaknuto na prvom ekranu */
  heroChips: [
    { icon: 'coffee', label: { bs: 'Doručak', en: 'Breakfast' } },
    { icon: 'wifi', label: { bs: 'Wi-Fi', en: 'Wi-Fi' } },
    { icon: 'parking', label: { bs: 'Parking', en: 'Parking' } },
    { icon: 'ski', label: { bs: 'Blizu staze', en: 'Near the slopes' } }
  ],

  /* boje u stilu njihovog brenda (bež, taupe) */
  theme: {
    bg: '#f5f1eb', 'bg-alt': '#ece5da', card: '#fffdf9', ink: '#2b2622', muted: '#6e655b', line: 'rgba(43, 38, 34, 0.1)',
    accent: '#8c7a5e', 'accent-ink': '#6f5f45', 'accent-2': '#4a4036', 'on-accent': '#fff', shade: 'rgba(18, 14, 10, 0.6)'
  },

  contact: {
    phone: '+387 61 216 939',
    viber: '+38761216939',
    whatsapp: '38761216939',
    instagram: 'harmonija.vlasic'
  },

  facts: [
    { icon: 'bed', label: { bs: 'dvokrevetne, četverokrevetne i porodične sobe', en: 'double, quadruple and family rooms' } },
    { icon: 'coffee', label: { bs: 'doručak', en: 'breakfast' } },
    { icon: 'wifi', label: { bs: 'Wi-Fi', en: 'Wi-Fi' } },
    { icon: 'parking', label: { bs: 'parking', en: 'parking' } },
    { icon: 'fire', label: { bs: 'dnevni boravak sa kaminom', en: 'lounge with fireplace' } },
    { icon: 'pin', label: { bs: 'odlična lokacija', en: 'great location' } }
  ],

  rooms: [
    { image: 'assets/img/soba-1.webp', title: { bs: 'Dvokrevetne sobe', en: 'Double rooms' }, beds: { bs: 'bračni krevet', en: 'double bed' }, guests: 2,
      label: { bs: 'Dvokrevetna soba', en: 'Double room' },
      text: { bs: 'Za parove: bračni krevet, toplo i moderno uređenje.', en: 'For couples: a double bed with warm, modern furnishing.' } },
    { image: 'assets/img/soba-2.webp', title: { bs: 'Četverokrevetne sobe', en: 'Quadruple rooms' }, beds: { bs: '4 kreveta', en: '4 beds' }, guests: 4,
      label: { bs: 'Četverokrevetna soba', en: 'Quadruple room' },
      text: { bs: 'Idealno za prijateljske grupe i manje porodice.', en: 'Ideal for groups of friends and smaller families.' } },
    { image: 'assets/img/soba-3.webp', title: { bs: 'Porodične sobe', en: 'Family rooms' }, beds: { bs: '5 kreveta', en: '5 beds' }, guests: 5,
      label: { bs: 'Porodična soba', en: 'Family room' },
      text: { bs: 'Prostrano, sa dovoljno mjesta za cijelu porodicu.', en: 'Spacious, with room for the whole family.' } }
  ],
  roomsLead: {
    bs: 'Prostrane i udobne sobe sa modernim i toplim uređenjem, idealne za porodice, prijateljske grupe i sve koji žele ugodan i bezbrižan odmor.',
    en: 'Spacious, comfortable rooms with warm, modern furnishing, ideal for families, groups of friends and anyone who wants a relaxed stay.'
  },

  gallery: [
    { image: 'assets/img/objekat-zima.webp', label: { bs: 'Harmonija zimi', en: 'Harmonija in winter' } },
    { image: 'assets/img/dnevni-boravak.webp', label: { bs: 'Dnevni boravak', en: 'Lounge' } },
    { image: 'assets/img/kamin.webp', label: { bs: 'Kamin', en: 'Fireplace' } },
    { image: 'assets/img/soba-1.webp', label: { bs: 'Dvokrevetna soba', en: 'Double room' } },
    { image: 'assets/img/salon.webp', label: { bs: 'Pogled na šumu', en: 'Forest view' } },
    { image: 'assets/img/soba-2.webp', label: { bs: 'Soba sa odvojenim krevetima', en: 'Twin beds' } },
    { image: 'assets/img/soba-4.webp', label: { bs: 'Detalji', en: 'Details' } },
    { image: 'assets/img/sanjke.webp', label: { bs: 'Zima na Vlašiću', en: 'Winter on Vlašić' } }
  ],

  about: {
    bs: [
      'Harmonija je smještaj na Vlašiću, na mirnom mjestu među jelkama, a opet blizu svega što vam treba za odmor na planini.',
      'Zajednički dnevni boravak sa kaminom i velikim prozorima prema šumi pravo je mjesto za jutarnju kafu ili večer nakon skijanja.',
      'Sobe su prostrane i toplo uređene, za parove, porodice i prijateljske grupe.'
    ],
    en: [
      'Harmonija is a place to stay on Vlašić, in a quiet spot among the pine trees, yet close to everything you need for a mountain holiday.',
      'The shared lounge with a fireplace and large windows facing the forest is the perfect place for morning coffee or an evening after skiing.',
      'The rooms are spacious and warmly furnished, for couples, families and groups of friends.'
    ]
  },

  amenities: [
    { icon: 'wifi', label: { bs: 'Wi-Fi', en: 'Wi-Fi' } },
    { icon: 'coffee', label: { bs: 'Doručak', en: 'Breakfast' } },
    { icon: 'parking', label: { bs: 'Parking', en: 'Parking' } },
    { icon: 'fire', label: { bs: 'Kamin u dnevnom boravku', en: 'Fireplace in the lounge' } },
    { icon: 'tv', label: { bs: 'TV', en: 'TV' } },
    { icon: 'view', label: { bs: 'Pogled na šumu', en: 'Forest view' } },
    { icon: 'linen', label: { bs: 'Posteljina i peškiri', en: 'Bed linen and towels' } },
    { icon: 'ski', label: { bs: 'Blizu ski staze', en: 'Close to the slopes' } }
  ],

  /* cijene nisu javne: stranica prikazuje "cijena na upit" i upit na Viber/WhatsApp */
  pricing: null,
  maxGuests: 12,
  minNights: 1,

  locationImage: 'assets/img/lokacija.webp',
  locationLead: {
    bs: 'Par minuta hoda do skakaonice, ski staze i restorana Mont Blanc.',
    en: 'A few minutes on foot to the ski jump, the slopes and Mont Blanc restaurant.'
  },
  /* PROVJERITI sa vlasnikom tačna vremena */
  distances: [
    { icon: 'ski', place: { bs: 'Skakaonica i staza', en: 'Ski jump and slope' }, time: { bs: 'par min hoda', en: 'short walk' } },
    { icon: 'kitchen', place: { bs: 'Restoran Mont Blanc', en: 'Mont Blanc restaurant' }, time: { bs: 'par min hoda', en: 'short walk' } },
    { icon: 'car', place: { bs: 'Travnik', en: 'Travnik' }, time: { bs: '30 min', en: '30 min' } }
  ],
  mapQuery: 'Vlašić Skakaonica, Babanovac',

  activities: {
    winter: [
      { icon: 'ski', title: { bs: 'Skijanje', en: 'Skiing' }, text: { bs: 'Staze za početnike i iskusne, ski škola i oprema na Babanovcu.', en: 'Slopes for all levels, ski school and rental at Babanovac.' } },
      { icon: 'sled', title: { bs: 'Sanjkanje', en: 'Sledding' }, text: { bs: 'Zimska zabava za djecu i odrasle.', en: 'Winter fun for kids and grown-ups.' } }
    ],
    summer: [
      { icon: 'hike', title: { bs: 'Šetnje i planinarenje', en: 'Walks and hiking' }, text: { bs: 'Staze kroz livade i borove šume.', en: 'Trails through meadows and pine forests.' } },
      { icon: 'view', title: { bs: 'Vidikovci', en: 'Viewpoints' }, text: { bs: 'Pogled sa Paljenika i zalasci sunca.', en: 'Views and sunsets from Paljenik.' } }
    ],
    food: {
      title: { bs: 'Vlašićki sir i domaća kuhinja', en: 'Vlašić cheese and home cooking' },
      text: { bs: 'Probajte čuveni vlašićki sir i domaća jela u restoranima u blizini.', en: 'Try the famous Vlašić cheese and local dishes in nearby restaurants.' }
    }
  },

  aboutImages: [
    { image: 'assets/img/dnevni-boravak.webp', label: { bs: 'Dnevni boravak', en: 'Lounge' } },
    { image: 'assets/img/objekat-zima.webp', label: { bs: 'Harmonija zimi', en: 'Harmonija in winter' } }
  ],

  /* tekstovi interfejsa prilagođeni Harmoniji (sobe, ne vikendica) */
  ui: {
    galleryLead: { bs: 'Pogledajte svaki kutak Harmonije.', en: 'Take a look around Harmonija.' },
    aboutTitle: { bs: 'O nama', en: 'About us' },
    amenitiesLead: { bs: 'Sve što treba za ugodan i bezbrižan boravak.', en: 'Everything you need for a relaxed stay.' },
    'nav.about': { bs: 'O nama', en: 'About' }
  },

  /* vrijeme uživo na stranici (open-meteo.com, besplatno). Koordinate: Babanovac, Vlašić */
  weather: { lat: 44.29, lon: 17.65, title: { bs: 'Trenutno na Vlašiću', en: 'Right now on Vlašić' } },

  /* PROVJERITI sa vlasnikom: šta tačno ulazi u doručak i u koliko sati */
  breakfast: {
    text: { bs: 'Dan na planini počinje dobrim doručkom. Spremamo ga svako jutro, sa domaćim proizvodima i toplom kafom, dok gledate snijeg kroz prozor.', en: 'A mountain day starts with a good breakfast. We make it every morning with local produce and hot coffee, while you watch the snow outside.' },
    items: [
      { bs: 'Domaća jaja, pripremljena kako volite', en: 'Farm eggs, cooked the way you like' },
      { bs: 'Vlašićki sir, kajmak i suhomesnato', en: 'Vlašić cheese, kajmak and cured meats' },
      { bs: 'Svjež hljeb, džem i med', en: 'Fresh bread, jam and honey' },
      { bs: 'Kafa, čaj i topla čokolada', en: 'Coffee, tea and hot chocolate' }
    ],
    time: { bs: 'Doručak svako jutro od 8 do 10 h', en: 'Breakfast every morning, 8 to 10 am' },
    note: { bs: 'Imate posebne želje (vegetarijanski, za djecu)? Samo napišite u upitu.', en: 'Special requests (vegetarian, for kids)? Just mention it in your inquiry.' }
  },

  /* PROVJERITI: tačna lokacija za navigaciju (najbolje koordinate sa Google Maps pina) */
  directions: {
    destination: 'Vlašić Skakaonica, Babanovac',
    steps: [
      { icon: 'car', text: { bs: 'Iz Travnika: put prema Turbetu, pa skretanje za Vlašić. Oko 30 minuta vožnje do Babanovca.', en: 'From Travnik: head towards Turbe, then turn off for Vlašić. About 30 minutes to Babanovac.' } },
      { icon: 'road', text: { bs: 'Iz Sarajeva oko 1,5 do 2 sata (preko Zenice i Travnika), iz Banje Luke oko 2 sata (preko Skender Vakufa ili Travnika).', en: 'From Sarajevo about 1.5 to 2 hours (via Zenica and Travnik), from Banja Luka about 2 hours.' } },
      { icon: 'ski', text: { bs: 'Na Babanovcu pratite put prema skakaonici. Harmonija je par minuta hoda od staze.', en: 'In Babanovac follow the road to the ski jump. Harmonija is a short walk from the slope.' } },
      { icon: 'parking', text: { bs: 'Besplatan parking za goste je ispred objekta.', en: 'Free guest parking in front of the house.' } }
    ],
    tip: { bs: 'Zimi obavezno zimske gume, a lanci u autu dobro dođu. Ako niste sigurni za stanje puta, nazovite nas prije polaska.', en: 'In winter, winter tyres are a must and snow chains are handy. Not sure about road conditions? Call us before you set off.' }
  },

  /* sekcija "Pratite nas na Instagramu" (slike vode na profil iz contact.instagram) */
  instagramFeed: {
    images: [
      { image: 'assets/img/objekat-zima.webp', label: { bs: 'Harmonija zimi', en: 'Harmonija in winter' } },
      { image: 'assets/img/kamin.webp', label: { bs: 'Kamin', en: 'Fireplace' } },
      { image: 'assets/img/sanjke.webp', label: { bs: 'Sanjkanje', en: 'Sledding' } },
      { image: 'assets/img/salon.webp', label: { bs: 'Salon', en: 'Lounge' } },
      { image: 'assets/img/soba-1.webp', label: { bs: 'Soba', en: 'Room' } },
      { image: 'assets/img/dnevni-boravak.webp', label: { bs: 'Dnevni boravak', en: 'Living room' } }
    ]
  },

  reviews: [],
  faq: []
};
