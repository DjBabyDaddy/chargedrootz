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
      foot: "Rooted in nature. Backed by intention. Made for you."
    },
    email: "contact@chargedrootz.com",
    phone: "314-566-5749",
    city:        { value: "St. Louis City, St. Louis County, St. Charles, and surrounding Metro East Illinois communities, including Fairview Heights, Granite City, and Alton." },
    stretchName: "Stretch by Charged Rootz",
    cert:        "Certified in stretch therapy through CNU Stretch.",
    /* The single biggest differentiator: she travels to the client. */
    concierge:   "You don't come to me. I come to you.",
    pay: {
      cashapp:  "$ChargedRootz",
      paypal:   "paypal.me/ChargedRootz",
      applepay: "314-566-5749"
    }
  },


  /* ------------------------------------------------------------------
     BOOKING DESTINATIONS
     acuity: paste the Acuity scheduling URL from your screenshot here.
     Until it is filled in, both buttons fall back to the inquiry form.
     ------------------------------------------------------------------ */
  booking: {
    /* From her Acuity embed code (owner 31437308). The iframe is embedded in the
       booking section; this URL is the direct link every [data-book] control uses. */
    acuity:      "https://app.acuityscheduling.com/schedule.php?owner=31437308",
    acuityEmbed: "https://app.acuityscheduling.com/schedule.php?owner=31437308&ref=embedded_csp",
    acuityJs:    "https://embed.acuityscheduling.com/js/embed.js",
    party:       "#book"
  },

  stretch: {
    lead: "Stretch therapy, brought to you",
    blurb: "Stretch therapy is guided, professional stretching. I move your body through targeted stretches to improve flexibility, mobility and recovery. Think of it like a massage — but instead of kneading muscles, we are lengthening them.",
    hook: "Most people don't realise how tight they are until someone shows them what loose feels like.",

    /* Real numbers, from her own copy. No placeholders here. */
    sessions: [
      { name: "50-Minute Session", dur: "50 min", price: "$120",
        desc: "Full-body stretch therapy. Your first session includes the 12-point assessment.",
        includes: ["Every major joint taken through its range", "Customised to what your body needs that day", "Take-home stretch for the tightest zone"],
        featured: true },
      { name: "25-Minute Session", dur: "25 min", price: "$60",
        desc: "Targeted stretch focused on specific areas — hips, shoulders, lower back.",
        includes: ["Focused on one or two problem zones", "Good between full sessions", "Same hands-on approach"] },
      { name: "Stretch Party", dur: "Customized based on group size", price: "Contact for a custom quote",
        desc: "I bring stretch therapy to your group — birthdays, team days, girls' nights, recovery sessions after a race.",
        includes: ["Multiple guests, one visit", "You pick the space", "Send the details and I will quote it"],
        party: true }
    ],

    /* What actually happens, corrected for the concierge model. */
    steps: [
      { k: "Book",    t: "Pick your time",       d: "Choose a session length and a slot that works. Tell me what is bothering you when you book." },
      { k: "I arrive", t: "I come to you",       d: "You need a comfortable space — a bed, couch, floor mat or yoga mat. I bring everything else." },
      { k: "Assess",  t: "We don't guess",       d: "Your first visit starts with a full-body mobility assessment to identify areas of tightness, restriction, and imbalance." },
      { k: "Release", t: "You stay passive",     d: "I move you through the stretches your body needs that day. Some days it is hips. Some days shoulders or lower back." }
    ],

    /* The 12-point assessment — the signature of the practice.
       The count is hers and confirmed. The zone names below are the standard
       full-body mobility zones and are marked tbd until she confirms her own list. */
    assessment: {
      count: 12,
      lede: "Full-body mobility assessment to identify areas of tightness, restriction, and imbalance.",
      zonesAreTbd: true,
      zones: [
        { n: "Neck",            s: "cervical rotation and side bend" },
        { n: "Shoulders",       s: "overhead reach, internal rotation" },
        { n: "Chest",           s: "pec length, front-line tension" },
        { n: "Thoracic spine",  s: "upper-back rotation" },
        { n: "Lats",            s: "shoulder-to-hip chain" },
        { n: "Lower back",      s: "lumbar flexion and extension" },
        { n: "Hip flexors",     s: "front of hip, desk tightness" },
        { n: "Glutes",          s: "deep hip rotation" },
        { n: "Hamstrings",      s: "back-line length" },
        { n: "Quads",           s: "front-thigh length" },
        { n: "Calves",          s: "lower-leg and achilles" },
        { n: "Ankles",          s: "dorsiflexion range" }
      ]
    },

    /* Practical prep — straight from her copy. */
    prep: [
      { t: "What to wear",  d: "Comfortable, loose-fitting clothing you can move in. Sweatpants, leggings, gym clothes. Nothing restrictive." },
      { t: "Socks on",      d: "Socks must be worn for the whole session. This is for hygiene and safety during stretching." },
      { t: "What you need", d: "Just a clear space of approximately 6 ft × 9 ft for me to comfortably set up and move around my professional stretch table. I bring the table and everything needed for your session. You simply show up, get comfortable, and let me do the stretching. That’s the beauty of concierge stretch therapy — you don’t come to me, I come to you." }
    ],

    /* Footer promise. Every line is lifted from her own copy — nothing added. */
    promise: [
      "Certified through CNU Stretch",
      "In your home or at the pop-up studio",
      "Every first visit starts with the 12-point assessment",
      "Customised to what your body needs that day",
      "We don't guess — we assess"
    ]
  },


  img: {
    logo:      "assets/img/logo-768.png",
    logoAlpha: "assets/img/logo-alpha-768.png",
    logoSm:    "assets/img/logo-320.png",
    stretch: [
      { src: "assets/img/stretch-1-1100.jpg", sm: "assets/img/stretch-1-640.jpg", alt: "Guiding a client through an assisted leg stretch on the table" },
      { src: "assets/img/stretch-2-1100.jpg", sm: "assets/img/stretch-2-640.jpg", alt: "Working a client through an assisted stretch, hands supporting the knee" },
      { src: "assets/img/stretch-3-1100.jpg", sm: "assets/img/stretch-3-640.jpg", alt: "An assisted stretch session in progress at the gym" },
      { src: "assets/img/stretch-4-1100.jpg", sm: "assets/img/stretch-4-640.jpg", alt: "Assisted leg stretch with a client lying on the table" }
    ]
  },

  /* Surfaced on the review page so she can answer in one pass. */
  questions: [
    "The 12-point assessment — what are your actual twelve points? The zone names on the body map are placeholders until you send yours.",
    "Which days and hours do you take bookings, and how far ahead?",
    "Do you want your own name on the site, or keep it all under Charged Rootz?"
  ]
};
