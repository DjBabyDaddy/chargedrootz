/* Charged Rootz — shared content for all three concepts.
   Menu items and prices are the client's own, taken from her printed menus.
   Anything marked tbd:true renders with a dotted underline and is listed
   in each page's "needs your input" legend. Nothing here is invented silently. */
window.CR = {
  brand: {
    name: "Charged Rootz",
    est: "2021",
    tagline: "Rooted. Nourished. Elevated.",
    lines: {
      bar:  "Craft elevated botanical beverages at home.",
      food: "Whole foods. Real ingredients. Real healing.",
      foot: "Rooted in nature. Backed by intention. Made for you."
    },
    email: "contact@chargedrootz.com",
    phone: "314-566-5749",
    city:        { tbd: true, value: "Your city" },
    stretchName: { tbd: true, value: "Charged Rootz Stretch" },
    pay: {
      cashapp:  "$ChargedRootz",
      paypal:   "paypal.me/ChargedRootz",
      applepay: "314-566-5749"
    }
  },

  scope: {
    price: "$100 flat",
    hosting: "You handle hosting and the domain",
    included: [
      "One site, with the stretch practice leading",
      "About you, and what a session actually involves",
      "Session types and a booking request form that emails you",
      "Your botanical bar menu on the same site — juices, shots, add-ons",
      "Contact details and your existing payment handles",
      "Mobile-first, accessible, fast, search-engine ready"
    ],
    notIncluded: [
      "Separate sub-sites for each business lane",
      "Live checkout or card processing",
      "Event ticketing and weekend-retreat booking",
      "Customer accounts or a login area",
      "Calendar-synced real-time availability",
      "Ongoing content updates after handover"
    ],
    note: "Concept 3 sketches how a multi-lane hub could grow later. That is a separate, larger build — it is not part of this round."
  },

  stretch: {
    lead: "Assisted stretch sessions",
    blurb: "One-on-one assisted stretching. You lie down and stay passive. I move you through the ranges your body has stopped reaching on its own, and we work on what is actually holding.",
    sessions: [
      { name: "First Visit", dur: { tbd: true, value: "30 min" }, price: { tbd: true, value: "$45" },
        desc: "We talk through what hurts and what you want back, then an intro stretch so you can feel the difference.",
        includes: ["Movement check-in", "Assisted stretch", "Something to work on at home"] },
      { name: "Full Session", dur: { tbd: true, value: "60 min" }, price: { tbd: true, value: "$80" },
        desc: "Full-body assisted stretch, unhurried, working through the chains that hold tension front to back.",
        includes: ["Full-body assisted stretch", "Breath pacing", "Take-home stretch"], featured: true },
      { name: "Stretch + Tonic", dur: { tbd: true, value: "90 min" }, price: { tbd: true, value: "$115" },
        desc: "The full session, then a wellness shot or juice chosen for what we just worked on.",
        includes: ["Everything in Full Session", "Longer hip and shoulder work", "Wellness shot or 16 oz juice"] }
    ],
    steps: [
      { k: "Book",    t: "Tell me what hurts",   d: "Send the form with what is bothering you and when you are free. I reply to set a time." },
      { k: "Arrive",  t: "Come as you are",      d: "Wear something you can move in. No prep and no warm-up needed." },
      { k: "Release", t: "I do the work",        d: "You stay passive. I take each joint through its range and hold where it needs holding." },
      { k: "Refuel",  t: "Leave with something", d: "A cold-pressed juice or wellness shot from the bar, matched to the session." }
    ]
  },

  bar: {
    juices: { unit: "16 oz", price: "$9.00", items: [
      { n: "Green Vitality",              i: "Green Apple, Celery, Cucumber, Lemon, Ginger", b: ["Hydration", "Digestion", "Vitality"],              c: "green"   },
      { n: "Watermelon Flush",            i: "Watermelon, Lemon, Lime",                      b: ["Hydration", "Detox", "Refresh"],                   c: "crimson" },
      { n: "Rooted Glow",                 i: "Beet, Pineapple, Carrot",                      b: ["Blood support", "Antioxidant", "Nutrient rich"],   c: "crimson" },
      { n: "Golden Metabolic",            i: "Pineapple, Ginger, Lemon, Turmeric",           b: ["Digestion", "Metabolism", "Immunity"],             c: "gold"    },
      { n: "Purple Rootz",                i: "Purple Cabbage, Apple, Lemon",                 b: ["Antioxidant", "Cell protection", "Inflammation"],  c: "purple"  },
      { n: "Electric Green Grape",        i: "Green Grapes, Cucumber, Lime",                 b: ["Hydration", "Antioxidant", "Refresh"],             c: "green"   },
      { n: "Strawberry Hibiscus Lemonade",i: "Strawberry, Hibiscus, Fresh Lemon",            b: ["Antioxidant", "Heart health", "Refresh"],          c: "crimson" },
      { n: "Pineapple Ginger Lemonade",   i: "Pineapple, Ginger, Fresh Lemon",               b: ["Digestion", "Immunity", "Energy"],                 c: "gold"    },
      { n: "Blue Spirulina Lemonade",     i: "Fresh Lemon, Blue Spirulina",                  b: ["Detox", "Alkalizing", "Immunity"],                 c: "blue"    },
      { n: "Peach Lemonade",              i: "Peach, Fresh Lemon",                           b: ["Hydration", "Vitamin C", "Refresh"],               c: "gold"    },
      { n: "Pineapple Carrot",            i: "Pineapple, Carrot",                            b: ["Eye health", "Immunity", "Energy"],                c: "gold"    }
    ]},
    shots: { unit: "2 oz", price: "$3.00", items: [
      { n: "Energy Shot",          i: "Natural energy boost without the crash.",              c: "gold"    },
      { n: "Circulation Shot",     i: "Supports healthy circulation and blood flow.",         c: "crimson" },
      { n: "Joint Support Shot",   i: "Anti-inflammatory support for joints and muscles.",    c: "flame"   },
      { n: "Apple + Burdock Shot", i: "Detoxifying roots to support liver and skin health.",  c: "green"   },
      { n: "Ginger Turmeric Shot", i: "Lemon, Ginger, Turmeric, Pineapple",                   c: "gold"    },
      { n: "Green Iron Shot",      i: "Lemon, Spinach, Blackstrap Molasses",                  c: "green"   }
    ]},
    addons: [
      { n: "Sea Moss Gel",      u: "2 oz", p: "$5.00" },
      { n: "Energy Syrup",      u: "1 oz", p: "$4.00" },
      { n: "Electrolyte Boost", u: "",     p: "$2.00" },
      { n: "Chlorophyll",       u: "1 oz", p: "$2.00" }
    ],
    smoothie: {
      n: "Charged Rootz Smoothie", p: "$11.00",
      i: "Blueberry, Mango, Banana, Spinach, Coconut Milk, Lemon, Blackstrap Molasses",
      b: ["Nourishing", "Mineral rich", "Energy"]
    },
    promise: ["Plant powered ingredients", "Functional benefits", "No artificial anything", "Made with intention", "Good for you. Good for the planet."]
  },

  img: {
    logo:      "assets/img/logo-768.png",
    logoAlpha: "assets/img/logo-alpha-768.png",
    logoSm:    "assets/img/logo-320.png",
    shots:     { src: "assets/img/shots-2000.jpg",     sm: "assets/img/shots-700.jpg",  alt: "Charged Rootz wellness shots beside a pineapple, lemon and fresh ginger" },
    lineup:    { src: "assets/img/lineup-2000.jpg",    sm: "assets/img/lineup-700.jpg", alt: "Cold-pressed juices in glass bottles beside the produce they are made from" },
    infusions: { src: "assets/img/infusions-1400.jpg", sm: "assets/img/infusions-800.jpg", alt: "Three Charged Rootz herbal infusions with mint and citrus, labels facing out" },
    menuJuice: { src: "assets/img/menu-juice-1206.jpg", sm: "assets/img/menu-juice-700.jpg", alt: "The printed Charged Rootz juice and wellness shot menu" },
    menuFood:  { src: "assets/img/menu-food-1206.jpg",  sm: "assets/img/menu-food-700.jpg",  alt: "The printed Charged Rootz food plan menu" },
    stretch: [
      { src: "assets/img/stretch-1-1100.jpg", sm: "assets/img/stretch-1-640.jpg", alt: "Guiding a client through an assisted leg stretch on the table" },
      { src: "assets/img/stretch-2-1100.jpg", sm: "assets/img/stretch-2-640.jpg", alt: "Working a client through an assisted stretch, hands supporting the knee" },
      { src: "assets/img/stretch-3-1100.jpg", sm: "assets/img/stretch-3-640.jpg", alt: "An assisted stretch session in progress at the gym" },
      { src: "assets/img/stretch-4-1100.jpg", sm: "assets/img/stretch-4-640.jpg", alt: "Assisted leg stretch with a client lying on the table" }
    ]
  },

  /* Surfaced on the review page so she can answer in one pass. */
  questions: [
    "Your shirt says CNU Stretch. Is that a certification, a studio you work under, or a name you want on the site?",
    "Which city and gym should the site send people to? Your number is 314 but the flag on the wall is Arkansas.",
    "Session lengths and prices are placeholders. What do you actually charge?",
    "Do you want your own name on the site, or keep it all under Charged Rootz?",
    "Which days do you stretch, and how far ahead do you take bookings?",
    "Do you want the juice menu to take orders, or just show what you make?"
  ]
};
