const data = [
  {
    year: 2020,
    words: "people, just, professor",
    sentiment: 0.17150000000000012,
    count: 23,
    rank: 1,
  },
  {
    year: 2020,
    words: "picture, took, today",
    sentiment: -1.55742,
    count: 2,
    rank: 2,
  },
  {
    year: 2020,
    words: "seen, urbana, illini",
    sentiment: 1.9739200000000001,
    count: 3,
    rank: 3,
  },
  {
    year: 2020,
    words: "mascot, new, illinois",
    sentiment: 1.7378200000000001,
    count: 8,
    rank: 5,
  },
  {
    year: 2020,
    words: "times, email, did",
    sentiment: 0.46053000000000055,
    count: 12,
    rank: 4,
  },
  {
    year: 2020,
    words: "quad, ece, uiuc",
    sentiment: 2.12509,
    count: 10,
    rank: 9,
  },
  {
    year: 2020,
    words: "just, semester, online",
    sentiment: 1.73259,
    count: 18,
    rank: 8,
  },
  {
    year: 2020,
    words: "night, like, know",
    sentiment: 3.1111699999999995,
    count: 20,
    rank: 6,
  },
  {
    year: 2020,
    words: "people, alma, right",
    sentiment: 1.6006,
    count: 16,
    rank: 7,
  },
  {
    year: 2020,
    words: "bruh, covid, test",
    sentiment: 2.2547200000000003,
    count: 12,
    rank: 0,
  },
  {
    year: 2021,
    words: "time, got, like",
    sentiment: 2.0147999999999997,
    count: 30,
    rank: 9,
  },
  {
    year: 2021,
    words: "st, street, green",
    sentiment: 2.1229,
    count: 44,
    rank: 2,
  },
  {
    year: 2021,
    words: "anybody, incoming, uiuc",
    sentiment: -0.30467,
    count: 11,
    rank: 6,
  },
  {
    year: 2021,
    words: "night, year, new",
    sentiment: 2.55497,
    count: 18,
    rank: 5,
  },
  {
    year: 2021,
    words: "closed, just, know",
    sentiment: 0.4533500000000001,
    count: 31,
    rank: 3,
  },
  {
    year: 2021,
    words: "sign, classes, semester",
    sentiment: 3.698079999999999,
    count: 14,
    rank: 8,
  },
  {
    year: 2021,
    words: "big, campus, took",
    sentiment: 0.9520799999999997,
    count: 13,
    rank: 7,
  },
  {
    year: 2021,
    words: "squirrel, ill, illinois",
    sentiment: 3.0877099999999995,
    count: 29,
    rank: 0,
  },
  {
    year: 2021,
    words: "getting, nice, day",
    sentiment: -0.6524799999999996,
    count: 23,
    rank: 4,
  },
  {
    year: 2021,
    words: "freshmen, spring, school",
    sentiment: -0.45540999999999987,
    count: 7,
    rank: 1,
  },
  {
    year: 2022,
    words: "dead, pinto, bean",
    sentiment: -0.36939999999999984,
    count: 5,
    rank: 3,
  },
  {
    year: 2022,
    words: "psa, class, like",
    sentiment: 1.7660799999999997,
    count: 11,
    rank: 4,
  },
  {
    year: 2022,
    words: "bus, just, fools",
    sentiment: 1.0123999999999995,
    count: 12,
    rank: 6,
  },
  {
    year: 2022,
    words: "geese, 2022, congrats",
    sentiment: 0,
    count: 0,
    rank: 0,
  },
  {
    year: 2022,
    words: "vs, spotted, green",
    sentiment: 1.22281,
    count: 3,
    rank: 8,
  },
  {
    year: 2022,
    words: "good, photos, campus",
    sentiment: 4.096629999999999,
    count: 12,
    rank: 1,
  },
  {
    year: 2022,
    words: "champaign, quad, years",
    sentiment: 1.2216799999999997,
    count: 4,
    rank: 2,
  },
  {
    year: 2022,
    words: "people, need, make",
    sentiment: 0.5635199999999998,
    count: 13,
    rank: 5,
  },
  {
    year: 2022,
    words: "foellinger, let, squirrel",
    sentiment: 2.4282399999999997,
    count: 5,
    rank: 7,
  },
  {
    year: 2022,
    words: "just, storm, today",
    sentiment: 1.7266999999999997,
    count: 14,
    rank: 9,
  },
  {
    year: 2023,
    words: "town, saw, just",
    sentiment: 0.006059999999999566,
    count: 18,
    rank: 8,
  },
  {
    year: 2023,
    words: "despite, area, safe",
    sentiment: 0.23339999999999983,
    count: 5,
    rank: 1,
  },
  {
    year: 2023,
    words: "line, caught, student",
    sentiment: 0.9694799999999998,
    count: 10,
    rank: 6,
  },
  {
    year: 2023,
    words: "way, amazing, uiuc",
    sentiment: 0.7348699999999998,
    count: 7,
    rank: 7,
  },
  {
    year: 2023,
    words: "watching, like, got",
    sentiment: 0.03495999999999988,
    count: 12,
    rank: 5,
  },
  {
    year: 2023,
    words: "coming, professor, bro",
    sentiment: 1.7611899999999998,
    count: 6,
    rank: 9,
  },
  {
    year: 2023,
    words: "trying, bean, pinto",
    sentiment: 1.4862699999999998,
    count: 5,
    rank: 3,
  },
  {
    year: 2023,
    words: "main, light, champaign",
    sentiment: 0.06876000000000004,
    count: 5,
    rank: 2,
  },
  {
    year: 2023,
    words: "cold, meme, cool",
    sentiment: 0.4477199999999999,
    count: 2,
    rank: 4,
  },
  {
    year: 2023,
    words: "campus, quad, schedule",
    sentiment: -0.24757000000000012,
    count: 6,
    rank: 0,
  },
];

const colorBand = [
  "#67001f",
  "#6a011f",
  "#6d0220",
  "#700320",
  "#730421",
  "#760521",
  "#790622",
  "#7b0722",
  "#7e0823",
  "#810923",
  "#840a24",
  "#870b24",
  "#8a0c25",
  "#8c0d26",
  "#8f0f26",
  "#921027",
  "#941127",
  "#971228",
  "#9a1429",
  "#9c1529",
  "#9f172a",
  "#a1182b",
  "#a41a2c",
  "#a61c2d",
  "#a81d2d",
  "#aa1f2e",
  "#ad212f",
  "#af2330",
  "#b12531",
  "#b32732",
  "#b52933",
  "#b72b34",
  "#b82e35",
  "#ba3036",
  "#bc3238",
  "#be3539",
  "#bf373a",
  "#c13a3b",
  "#c33c3d",
  "#c43f3e",
  "#c6413f",
  "#c74441",
  "#c94742",
  "#ca4943",
  "#cc4c45",
  "#cd4f46",
  "#ce5248",
  "#d0544a",
  "#d1574b",
  "#d25a4d",
  "#d45d4e",
  "#d56050",
  "#d66252",
  "#d86554",
  "#d96855",
  "#da6b57",
  "#db6d59",
  "#dd705b",
  "#de735d",
  "#df755f",
  "#e07861",
  "#e17b63",
  "#e27d65",
  "#e48067",
  "#e58369",
  "#e6856b",
  "#e7886d",
  "#e88b6f",
  "#e98d71",
  "#ea9073",
  "#eb9276",
  "#ec9578",
  "#ed977a",
  "#ee9a7c",
  "#ee9c7f",
  "#ef9f81",
  "#f0a183",
  "#f1a486",
  "#f2a688",
  "#f2a88b",
  "#f3ab8d",
  "#f4ad90",
  "#f4af92",
  "#f5b295",
  "#f5b497",
  "#f6b69a",
  "#f6b89c",
  "#f7ba9f",
  "#f7bda1",
  "#f8bfa4",
  "#f8c1a6",
  "#f8c3a9",
  "#f9c5ab",
  "#f9c7ae",
  "#f9c9b0",
  "#facab3",
  "#faccb5",
  "#faceb8",
  "#fad0ba",
  "#fad2bc",
  "#fad3bf",
  "#fad5c1",
  "#fbd7c4",
  "#fbd8c6",
  "#fbdac8",
  "#fbdbca",
  "#fbddcc",
  "#fadecf",
  "#fae0d1",
  "#fae1d3",
  "#fae2d5",
  "#fae3d7",
  "#fae5d8",
  "#fae6da",
  "#f9e7dc",
  "#f9e8de",
  "#f9e9e0",
  "#f8eae1",
  "#f8eae3",
  "#f7ebe4",
  "#f7ece6",
  "#f6ede7",
  "#f6ede8",
  "#f5eee9",
  "#f4eeeb",
  "#f4efec",
  "#f3efed",
  "#f2efed",
  "#f1efee",
  "#f0f0ef",
  "#eff0f0",
  "#eef0f0",
  "#edf0f1",
  "#eceff1",
  "#ebeff1",
  "#eaeff2",
  "#e9eff2",
  "#e7eef2",
  "#e6eef2",
  "#e5edf2",
  "#e3edf2",
  "#e2ecf2",
  "#e0ecf2",
  "#dfebf2",
  "#ddeaf2",
  "#dbeaf1",
  "#dae9f1",
  "#d8e8f1",
  "#d6e7f0",
  "#d4e6f0",
  "#d3e6f0",
  "#d1e5ef",
  "#cfe4ef",
  "#cde3ee",
  "#cbe2ee",
  "#c9e1ed",
  "#c7e0ed",
  "#c5dfec",
  "#c2ddec",
  "#c0dceb",
  "#bedbea",
  "#bcdaea",
  "#bad9e9",
  "#b7d8e8",
  "#b5d7e8",
  "#b2d5e7",
  "#b0d4e6",
  "#aed3e6",
  "#abd1e5",
  "#a9d0e4",
  "#a6cfe3",
  "#a3cde3",
  "#a1cce2",
  "#9ecae1",
  "#9cc9e0",
  "#99c7e0",
  "#96c6df",
  "#93c4de",
  "#91c3dd",
  "#8ec1dc",
  "#8bc0db",
  "#88beda",
  "#85bcd9",
  "#83bbd8",
  "#80b9d7",
  "#7db7d7",
  "#7ab5d6",
  "#77b3d5",
  "#74b2d4",
  "#71b0d3",
  "#6faed2",
  "#6cacd1",
  "#69aad0",
  "#66a8cf",
  "#64a7ce",
  "#61a5cd",
  "#5ea3cc",
  "#5ba1cb",
  "#599fca",
  "#569dc9",
  "#549bc8",
  "#5199c7",
  "#4f98c6",
  "#4d96c5",
  "#4b94c4",
  "#4892c3",
  "#4690c2",
  "#448ec1",
  "#428cc0",
  "#408bbf",
  "#3e89be",
  "#3d87bd",
  "#3b85bc",
  "#3983bb",
  "#3781ba",
  "#3680b9",
  "#347eb7",
  "#337cb6",
  "#317ab5",
  "#3078b4",
  "#2e76b2",
  "#2d75b1",
  "#2c73b0",
  "#2a71ae",
  "#296fad",
  "#286dab",
  "#266baa",
  "#2569a8",
  "#2467a6",
  "#2365a4",
  "#2164a2",
  "#2062a0",
  "#1f609e",
  "#1e5e9c",
  "#1d5c9a",
  "#1b5a98",
  "#1a5895",
  "#195693",
  "#185490",
  "#17528e",
  "#164f8b",
  "#154d89",
  "#134b86",
  "#124983",
  "#114781",
  "#10457e",
  "#0f437b",
  "#0e4178",
  "#0d3f75",
  "#0c3d73",
  "#0a3b70",
  "#09386d",
  "#08366a",
  "#073467",
  "#063264",
  "#053061",
];

const minFontSize = 14;
const maxFontSize = 23;
const numSizes = 10;
const stepSize = (maxFontSize - minFontSize) / (numSizes - 1);

const fontSizes = [];
for (let i = 0; i < numSizes; i++) {
  const fontSize = minFontSize + i * stepSize;
  fontSizes.push(fontSize);
}

console.log(fontSizes);

const posts = {
  "people, just, professor": [
    {
      title: "stop counting the bad assignments and make my gpa great again",
      url: "https://redd.it/joto3j",
    },
    {
      title:
        "man imagine inperson classes being cancelled all because chad and his brothers from chi apple pi can\u2019t go one damn weekend without partying",
      url: "https://redd.it/ilcoa3",
    },
    { title: "just finished my phd", url: "https://redd.it/k5kdmn" },
    { title: "math 415 final curved down", url: "https://redd.it/kfqval" },
    { title: "hit my breaking point today", url: "https://redd.it/jts5o6" },
    { title: "exchange i had with a man today", url: "https://redd.it/ih32t8" },
    {
      title: "i know why this semester has been so difficult it is so obvious",
      url: "https://redd.it/kg1pbb",
    },
    {
      title:
        "idea you put in what courses youve already taken and it tells you minors that youre close to finishing",
      url: "https://redd.it/j6w6mk",
    },
    {
      title: "uiucs poor handling of covid cases",
      url: "https://redd.it/ilbp05",
    },
    {
      title: "we shouldnt have to pay for proctoring services",
      url: "https://redd.it/i478uk",
    },
    {
      title:
        "ui receives fda approval for salivabased covid19 test first offered on campus",
      url: "https://redd.it/icvkxn",
    },
    {
      title:
        "uiuc being investigated for antisemitism thoughts as a jewish student",
      url: "https://redd.it/jvkb6t",
    },
    { title: "dunkin on green", url: "https://redd.it/j5mcar" },
    {
      title: "the bars and greek life are single handedly ruining the semester",
      url: "https://redd.it/ilcu9g",
    },
    {
      title: "i\u2019m officially burnt out \ud83d\ude14",
      url: "https://redd.it/jg99tz",
    },
    {
      title: "someone just hit me with their car and drove away",
      url: "https://redd.it/jjh4oy",
    },
    {
      title:
        "the oh shit i fcked up and i think ive been exposed coronavirus helpline megathread",
      url: "https://redd.it/ierrzn",
    },
    { title: "im done", url: "https://redd.it/jwwq8u" },
    {
      title: "i declare all that i got a\u2019s",
      url: "https://redd.it/jp1e2h",
    },
    {
      title: "uiuc senate passes a crnc resolution 8833",
      url: "https://redd.it/jxz66b",
    },
    {
      title: "petition uiuc crnc passfail option fall 2020",
      url: "https://redd.it/jhddhi",
    },
    {
      title:
        "i have zero confidence that i am aware of all of my current assignments and responsibilities",
      url: "https://redd.it/ih4prp",
    },
    {
      title: "anyone else done with everything but still feel stressed",
      url: "https://redd.it/kgnbl2",
    },
  ],
  "picture, took, today": [
    { title: "dunkin on green", url: "https://redd.it/j5mcar" },
    {
      title:
        "the oh shit i fcked up and i think ive been exposed coronavirus helpline megathread",
      url: "https://redd.it/ierrzn",
    },
  ],
  "seen, urbana, illini": [
    {
      title:
        "uiuc senate votes 1052 to support the adoption of kingfisher as campus mascot",
      url: "https://redd.it/ixavue",
    },
    {
      title:
        "ui receives fda approval for salivabased covid19 test first offered on campus",
      url: "https://redd.it/icvkxn",
    },
    {
      title: "lowest positivity rate 025 since campus open midaugust",
      url: "https://redd.it/is1wzr",
    },
  ],
  "mascot, new, illinois": [
    {
      title:
        "uiuc senate votes 1052 to support the adoption of kingfisher as campus mascot",
      url: "https://redd.it/ixavue",
    },
    {
      title: "uiucs poor handling of covid cases",
      url: "https://redd.it/ilbp05",
    },
    {
      title:
        "ui receives fda approval for salivabased covid19 test first offered on campus",
      url: "https://redd.it/icvkxn",
    },
    {
      title:
        "uiuc being investigated for antisemitism thoughts as a jewish student",
      url: "https://redd.it/jvkb6t",
    },
    {
      title:
        "the oh shit i fcked up and i think ive been exposed coronavirus helpline megathread",
      url: "https://redd.it/ierrzn",
    },
    {
      title: "uiuc senate passes a crnc resolution 8833",
      url: "https://redd.it/jxz66b",
    },
    {
      title: "lowest positivity rate 025 since campus open midaugust",
      url: "https://redd.it/is1wzr",
    },
    {
      title:
        "pledged not to renew or sign a new lease for next year unless and until",
      url: "https://redd.it/ioujt7",
    },
  ],
  "times, email, did": [
    {
      title: "what i wish i knew in undergrad more on life love etc",
      url: "https://redd.it/j9ghdh",
    },
    { title: "math 415 final curved down", url: "https://redd.it/kfqval" },
    {
      title: "petition to ban proctorio at uiuc",
      url: "https://redd.it/j3dyak",
    },
    { title: "i am ascending", url: "https://redd.it/jw812m" },
    {
      title: "i know why this semester has been so difficult it is so obvious",
      url: "https://redd.it/kg1pbb",
    },
    {
      title: "uiucs poor handling of covid cases",
      url: "https://redd.it/ilbp05",
    },
    {
      title:
        "uiuc being investigated for antisemitism thoughts as a jewish student",
      url: "https://redd.it/jvkb6t",
    },
    { title: "i want to slap myself", url: "https://redd.it/k2y6mt" },
    {
      title: "someone just hit me with their car and drove away",
      url: "https://redd.it/jjh4oy",
    },
    {
      title:
        "the oh shit i fcked up and i think ive been exposed coronavirus helpline megathread",
      url: "https://redd.it/ierrzn",
    },
    {
      title: "uiuc senate passes a crnc resolution 8833",
      url: "https://redd.it/jxz66b",
    },
    {
      title:
        "pledged not to renew or sign a new lease for next year unless and until",
      url: "https://redd.it/ioujt7",
    },
  ],
  "quad, ece, uiuc": [
    {
      title: "what i wish i knew in undergrad more on life love etc",
      url: "https://redd.it/j9ghdh",
    },
    {
      title: "becoming a 50 yr old freshman dumb idea",
      url: "https://redd.it/k080ko",
    },
    { title: "1000000th spitter", url: "https://redd.it/jtjpo7" },
    {
      title: "uiucs poor handling of covid cases",
      url: "https://redd.it/ilbp05",
    },
    {
      title:
        "ui receives fda approval for salivabased covid19 test first offered on campus",
      url: "https://redd.it/icvkxn",
    },
    {
      title:
        "uiuc being investigated for antisemitism thoughts as a jewish student",
      url: "https://redd.it/jvkb6t",
    },
    {
      title:
        "the oh shit i fcked up and i think ive been exposed coronavirus helpline megathread",
      url: "https://redd.it/ierrzn",
    },
    {
      title: "i declare all that i got a\u2019s",
      url: "https://redd.it/jp1e2h",
    },
    {
      title: "uiuc senate passes a crnc resolution 8833",
      url: "https://redd.it/jxz66b",
    },
    {
      title: "petition uiuc crnc passfail option fall 2020",
      url: "https://redd.it/jhddhi",
    },
  ],
  "just, semester, online": [
    { title: "just finished my phd", url: "https://redd.it/k5kdmn" },
    { title: "math 415 final curved down", url: "https://redd.it/kfqval" },
    { title: "hit my breaking point today", url: "https://redd.it/jts5o6" },
    {
      title: "i know why this semester has been so difficult it is so obvious",
      url: "https://redd.it/kg1pbb",
    },
    {
      title:
        "idea you put in what courses youve already taken and it tells you minors that youre close to finishing",
      url: "https://redd.it/j6w6mk",
    },
    {
      title: "uiucs poor handling of covid cases",
      url: "https://redd.it/ilbp05",
    },
    {
      title:
        "ui receives fda approval for salivabased covid19 test first offered on campus",
      url: "https://redd.it/icvkxn",
    },
    {
      title:
        "uiuc being investigated for antisemitism thoughts as a jewish student",
      url: "https://redd.it/jvkb6t",
    },
    {
      title: "the bars and greek life are single handedly ruining the semester",
      url: "https://redd.it/ilcu9g",
    },
    {
      title: "i\u2019m officially burnt out \ud83d\ude14",
      url: "https://redd.it/jg99tz",
    },
    {
      title: "someone just hit me with their car and drove away",
      url: "https://redd.it/jjh4oy",
    },
    {
      title:
        "the oh shit i fcked up and i think ive been exposed coronavirus helpline megathread",
      url: "https://redd.it/ierrzn",
    },
    { title: "im done", url: "https://redd.it/jwwq8u" },
    {
      title: "i declare all that i got a\u2019s",
      url: "https://redd.it/jp1e2h",
    },
    {
      title: "uiuc senate passes a crnc resolution 8833",
      url: "https://redd.it/jxz66b",
    },
    {
      title: "petition uiuc crnc passfail option fall 2020",
      url: "https://redd.it/jhddhi",
    },
    {
      title:
        "i have zero confidence that i am aware of all of my current assignments and responsibilities",
      url: "https://redd.it/ih4prp",
    },
    {
      title: "anyone else done with everything but still feel stressed",
      url: "https://redd.it/kgnbl2",
    },
  ],
  "night, like, know": [
    {
      title: "what i wish i knew in undergrad more on life love etc",
      url: "https://redd.it/j9ghdh",
    },
    {
      title:
        "man imagine inperson classes being cancelled all because chad and his brothers from chi apple pi can\u2019t go one damn weekend without partying",
      url: "https://redd.it/ilcoa3",
    },
    { title: "math 415 final curved down", url: "https://redd.it/kfqval" },
    { title: "hit my breaking point today", url: "https://redd.it/jts5o6" },
    { title: "i am ascending", url: "https://redd.it/jw812m" },
    { title: "exchange i had with a man today", url: "https://redd.it/ih32t8" },
    { title: "1000000th spitter", url: "https://redd.it/jtjpo7" },
    {
      title:
        "idea you put in what courses youve already taken and it tells you minors that youre close to finishing",
      url: "https://redd.it/j6w6mk",
    },
    {
      title: "green street chipotle covid violations",
      url: "https://redd.it/iofak7",
    },
    {
      title: "uiucs poor handling of covid cases",
      url: "https://redd.it/ilbp05",
    },
    {
      title:
        "ui receives fda approval for salivabased covid19 test first offered on campus",
      url: "https://redd.it/icvkxn",
    },
    {
      title:
        "uiuc being investigated for antisemitism thoughts as a jewish student",
      url: "https://redd.it/jvkb6t",
    },
    {
      title: "the bars and greek life are single handedly ruining the semester",
      url: "https://redd.it/ilcu9g",
    },
    {
      title: "someone just hit me with their car and drove away",
      url: "https://redd.it/jjh4oy",
    },
    {
      title:
        "the oh shit i fcked up and i think ive been exposed coronavirus helpline megathread",
      url: "https://redd.it/ierrzn",
    },
    { title: "im done", url: "https://redd.it/jwwq8u" },
    {
      title: "i declare all that i got a\u2019s",
      url: "https://redd.it/jp1e2h",
    },
    {
      title: "petition uiuc crnc passfail option fall 2020",
      url: "https://redd.it/jhddhi",
    },
    {
      title:
        "pledged not to renew or sign a new lease for next year unless and until",
      url: "https://redd.it/ioujt7",
    },
    {
      title: "anyone else done with everything but still feel stressed",
      url: "https://redd.it/kgnbl2",
    },
  ],
  "people, alma, right": [
    {
      title: "what i wish i knew in undergrad more on life love etc",
      url: "https://redd.it/j9ghdh",
    },
    {
      title:
        "man imagine inperson classes being cancelled all because chad and his brothers from chi apple pi can\u2019t go one damn weekend without partying",
      url: "https://redd.it/ilcoa3",
    },
    { title: "just finished my phd", url: "https://redd.it/k5kdmn" },
    { title: "hit my breaking point today", url: "https://redd.it/jts5o6" },
    { title: "exchange i had with a man today", url: "https://redd.it/ih32t8" },
    {
      title: "i know why this semester has been so difficult it is so obvious",
      url: "https://redd.it/kg1pbb",
    },
    {
      title: "we shouldnt have to pay for proctoring services",
      url: "https://redd.it/i478uk",
    },
    {
      title:
        "ui receives fda approval for salivabased covid19 test first offered on campus",
      url: "https://redd.it/icvkxn",
    },
    {
      title:
        "uiuc being investigated for antisemitism thoughts as a jewish student",
      url: "https://redd.it/jvkb6t",
    },
    { title: "dunkin on green", url: "https://redd.it/j5mcar" },
    {
      title: "the bars and greek life are single handedly ruining the semester",
      url: "https://redd.it/ilcu9g",
    },
    {
      title: "someone just hit me with their car and drove away",
      url: "https://redd.it/jjh4oy",
    },
    {
      title:
        "the oh shit i fcked up and i think ive been exposed coronavirus helpline megathread",
      url: "https://redd.it/ierrzn",
    },
    {
      title: "petition uiuc crnc passfail option fall 2020",
      url: "https://redd.it/jhddhi",
    },
    {
      title:
        "i have zero confidence that i am aware of all of my current assignments and responsibilities",
      url: "https://redd.it/ih4prp",
    },
    {
      title:
        "pledged not to renew or sign a new lease for next year unless and until",
      url: "https://redd.it/ioujt7",
    },
  ],
  "bruh, covid, test": [
    { title: "hit my breaking point today", url: "https://redd.it/jts5o6" },
    { title: "1000000th spitter", url: "https://redd.it/jtjpo7" },
    {
      title: "green street chipotle covid violations",
      url: "https://redd.it/iofak7",
    },
    {
      title: "uiucs poor handling of covid cases",
      url: "https://redd.it/ilbp05",
    },
    {
      title:
        "ui receives fda approval for salivabased covid19 test first offered on campus",
      url: "https://redd.it/icvkxn",
    },
    {
      title:
        "uiuc being investigated for antisemitism thoughts as a jewish student",
      url: "https://redd.it/jvkb6t",
    },
    {
      title: "the bars and greek life are single handedly ruining the semester",
      url: "https://redd.it/ilcu9g",
    },
    {
      title:
        "fridays singleday positivity rate was 031 the lowest since august 17th",
      url: "https://redd.it/irmt83",
    },
    {
      title:
        "the oh shit i fcked up and i think ive been exposed coronavirus helpline megathread",
      url: "https://redd.it/ierrzn",
    },
    { title: "im done", url: "https://redd.it/jwwq8u" },
    {
      title: "uiuc senate passes a crnc resolution 8833",
      url: "https://redd.it/jxz66b",
    },
    {
      title: "lowest positivity rate 025 since campus open midaugust",
      url: "https://redd.it/is1wzr",
    },
  ],
  "time, got, like": [
    {
      title: "im tired of the fetishization of cs majors",
      url: "https://redd.it/quz6if",
    },
    {
      title:
        "my name is ivor thank you all for the support heres what i want to say",
      url: "https://redd.it/lmajmi",
    },
    {
      title:
        "the retreat has an illegal lease please be careful if you are thinking about signing",
      url: "https://redd.it/na4t53",
    },
    {
      title: "hi my name is megan and im asking you to wear a mask",
      url: "https://redd.it/oun098",
    },
    { title: "spiderman is an idiot", url: "https://redd.it/rsctjg" },
    {
      title: "just wanna share my happiness and relief",
      url: "https://redd.it/ncesgg",
    },
    {
      title:
        "four years ago i was hazed by pi kappa alpha and spent three months at carle",
      url: "https://redd.it/qjyq10",
    },
    {
      title: "illinois football topples 7 penn state",
      url: "https://redd.it/qeclfi",
    },
    {
      title:
        "to everyone feeling alone and afraid even those who arent saying it",
      url: "https://redd.it/panbod",
    },
    {
      title: "how do i get an engineering major bf",
      url: "https://redd.it/qwk8hf",
    },
    { title: "fuck pike", url: "https://redd.it/qv2m8l" },
    {
      title: "parting alumni words of a campus ghost",
      url: "https://redd.it/n7d19d",
    },
    {
      title:
        "im so done t\u0336r\u0336y\u0336i\u0336n\u0336g\u0336 \u0336t\u0336o\u0336 having sex at this school",
      url: "https://redd.it/ly7p1p",
    },
    { title: "fuck the counseling center", url: "https://redd.it/pyr4qd" },
    { title: "racism on daniel street", url: "https://redd.it/qgpi9r" },
    {
      title:
        "illinois industrial engineering student rosemarie garza was killed in hitandrun on i94",
      url: "https://redd.it/ogotkk",
    },
    { title: "overcharged on tution again", url: "https://redd.it/l0mpae" },
    {
      title:
        "if the covid testing disciplinary system has cast the net wide enough to kick out ivor chen for something that seems so benign then the system itself needs to be reworked",
      url: "https://redd.it/lj6ovq",
    },
    {
      title: "y\u2019all please just let chief die",
      url: "https://redd.it/pdldw1",
    },
    {
      title: "replacing spring break with three wednesdays was a terrible idea",
      url: "https://redd.it/m01gqi",
    },
    {
      title: "altgeld dairy queen will be closed during winter break",
      url: "https://redd.it/realr2",
    },
    {
      title:
        "hey professors even if no one says anything you should always have a mask on",
      url: "https://redd.it/l7adgc",
    },
    { title: "where did the time go", url: "https://redd.it/rmm24k" },
    {
      title: "first column living keeps spinning out a new story everyday",
      url: "https://redd.it/mo7zqc",
    },
    { title: "dear dining hall patrons", url: "https://redd.it/qfingc" },
    {
      title: "dear passengers you deserve an apology",
      url: "https://redd.it/pzb0p0",
    },
    {
      title:
        "my older brother committed suicide four years ago my only remaining sibling my older sister is at risk i need to vent",
      url: "https://redd.it/pln3lj",
    },
    {
      title:
        "sincere apology to the ruiuc subreddit for misleading picture posted yesterday",
      url: "https://redd.it/ku3i53",
    },
    {
      title:
        "how can uiuc students file a real complaint about university covid rules",
      url: "https://redd.it/ljwz0t",
    },
    {
      title: "want to support struggling local restaurants stop using grubhub",
      url: "https://redd.it/leqtvu",
    },
  ],
  "st, street, green": [
    {
      title: "im tired of the fetishization of cs majors",
      url: "https://redd.it/quz6if",
    },
    {
      title:
        "my name is ivor thank you all for the support heres what i want to say",
      url: "https://redd.it/lmajmi",
    },
    {
      title:
        "the retreat has an illegal lease please be careful if you are thinking about signing",
      url: "https://redd.it/na4t53",
    },
    {
      title: "hi my name is megan and im asking you to wear a mask",
      url: "https://redd.it/oun098",
    },
    { title: "after all three wellness days", url: "https://redd.it/mqv5gx" },
    { title: "spiderman is an idiot", url: "https://redd.it/rsctjg" },
    {
      title: "just wanna share my happiness and relief",
      url: "https://redd.it/ncesgg",
    },
    {
      title:
        "four years ago i was hazed by pi kappa alpha and spent three months at carle",
      url: "https://redd.it/qjyq10",
    },
    {
      title: "how difficult is it to marry rich if i go to uiuc",
      url: "https://redd.it/n6izix",
    },
    {
      title:
        "to everyone feeling alone and afraid even those who arent saying it",
      url: "https://redd.it/panbod",
    },
    { title: "aaaaaaaaaaaaaa", url: "https://redd.it/m2x5pi" },
    { title: "fuck the counseling center", url: "https://redd.it/lw594m" },
    {
      title: "how do i get an engineering major bf",
      url: "https://redd.it/qwk8hf",
    },
    { title: "fuck pike", url: "https://redd.it/qv2m8l" },
    {
      title:
        "ladies gents and themts our fellow illini got her ass handed to her in georgia",
      url: "https://redd.it/ks4vz6",
    },
    {
      title: "parting alumni words of a campus ghost",
      url: "https://redd.it/n7d19d",
    },
    {
      title:
        "im so done t\u0336r\u0336y\u0336i\u0336n\u0336g\u0336 \u0336t\u0336o\u0336 having sex at this school",
      url: "https://redd.it/ly7p1p",
    },
    { title: "fuck the counseling center", url: "https://redd.it/pyr4qd" },
    { title: "goodbye ruiuc", url: "https://redd.it/nd2v4a" },
    { title: "racism on daniel street", url: "https://redd.it/qgpi9r" },
    {
      title:
        "illinois industrial engineering student rosemarie garza was killed in hitandrun on i94",
      url: "https://redd.it/ogotkk",
    },
    { title: "overcharged on tution again", url: "https://redd.it/l0mpae" },
    {
      title:
        "if the covid testing disciplinary system has cast the net wide enough to kick out ivor chen for something that seems so benign then the system itself needs to be reworked",
      url: "https://redd.it/lj6ovq",
    },
    { title: "covid second wave in india", url: "https://redd.it/n0rkix" },
    {
      title: "y\u2019all please just let chief die",
      url: "https://redd.it/pdldw1",
    },
    { title: "love is love", url: "https://redd.it/npxfaw" },
    {
      title:
        "thanks for posting the pictures of the people in bar lines it made me change my ways",
      url: "https://redd.it/lxavc3",
    },
    {
      title: "replacing spring break with three wednesdays was a terrible idea",
      url: "https://redd.it/m01gqi",
    },
    { title: "have yall ever considered", url: "https://redd.it/kvi9zo" },
    {
      title: "altgeld dairy queen will be closed during winter break",
      url: "https://redd.it/realr2",
    },
    {
      title: "you know what\u2019s fucking weird about college",
      url: "https://redd.it/m78ne9",
    },
    {
      title:
        "hey professors even if no one says anything you should always have a mask on",
      url: "https://redd.it/l7adgc",
    },
    {
      title: "reinstate antonio ruiz to the university of illinois",
      url: "https://redd.it/mogv5h",
    },
    { title: "where did the time go", url: "https://redd.it/rmm24k" },
    {
      title: "to whoever stole my package yesterday on illinois street",
      url: "https://redd.it/nnrdhm",
    },
    {
      title: "first column living keeps spinning out a new story everyday",
      url: "https://redd.it/mo7zqc",
    },
    { title: "dear dining hall patrons", url: "https://redd.it/qfingc" },
    {
      title: "freshmen dont start skipping classes",
      url: "https://redd.it/q6764z",
    },
    {
      title: "dear passengers you deserve an apology",
      url: "https://redd.it/pzb0p0",
    },
    {
      title:
        "my older brother committed suicide four years ago my only remaining sibling my older sister is at risk i need to vent",
      url: "https://redd.it/pln3lj",
    },
    {
      title:
        "sincere apology to the ruiuc subreddit for misleading picture posted yesterday",
      url: "https://redd.it/ku3i53",
    },
    {
      title: "psa urbana guy masturbating outside windows",
      url: "https://redd.it/my2et9",
    },
    {
      title:
        "how can uiuc students file a real complaint about university covid rules",
      url: "https://redd.it/ljwz0t",
    },
    {
      title: "want to support struggling local restaurants stop using grubhub",
      url: "https://redd.it/leqtvu",
    },
  ],
  "anybody, incoming, uiuc": [
    {
      title:
        "my name is ivor thank you all for the support heres what i want to say",
      url: "https://redd.it/lmajmi",
    },
    {
      title:
        "the retreat has an illegal lease please be careful if you are thinking about signing",
      url: "https://redd.it/na4t53",
    },
    {
      title: "hi my name is megan and im asking you to wear a mask",
      url: "https://redd.it/oun098",
    },
    { title: "spiderman is an idiot", url: "https://redd.it/rsctjg" },
    { title: "dear frat boys in the car", url: "https://redd.it/mx9paz" },
    {
      title:
        "four years ago i was hazed by pi kappa alpha and spent three months at carle",
      url: "https://redd.it/qjyq10",
    },
    {
      title: "how difficult is it to marry rich if i go to uiuc",
      url: "https://redd.it/n6izix",
    },
    {
      title:
        "ladies gents and themts our fellow illini got her ass handed to her in georgia",
      url: "https://redd.it/ks4vz6",
    },
    {
      title: "parting alumni words of a campus ghost",
      url: "https://redd.it/n7d19d",
    },
    { title: "goodbye ruiuc", url: "https://redd.it/nd2v4a" },
    {
      title:
        "my older brother committed suicide four years ago my only remaining sibling my older sister is at risk i need to vent",
      url: "https://redd.it/pln3lj",
    },
  ],
  "night, year, new": [
    {
      title:
        "the retreat has an illegal lease please be careful if you are thinking about signing",
      url: "https://redd.it/na4t53",
    },
    {
      title: "hi my name is megan and im asking you to wear a mask",
      url: "https://redd.it/oun098",
    },
    {
      title: "just wanna share my happiness and relief",
      url: "https://redd.it/ncesgg",
    },
    {
      title:
        "four years ago i was hazed by pi kappa alpha and spent three months at carle",
      url: "https://redd.it/qjyq10",
    },
    {
      title:
        "to everyone feeling alone and afraid even those who arent saying it",
      url: "https://redd.it/panbod",
    },
    { title: "fuck pike", url: "https://redd.it/qv2m8l" },
    {
      title: "parting alumni words of a campus ghost",
      url: "https://redd.it/n7d19d",
    },
    {
      title:
        "im so done t\u0336r\u0336y\u0336i\u0336n\u0336g\u0336 \u0336t\u0336o\u0336 having sex at this school",
      url: "https://redd.it/ly7p1p",
    },
    { title: "goodbye ruiuc", url: "https://redd.it/nd2v4a" },
    { title: "racism on daniel street", url: "https://redd.it/qgpi9r" },
    {
      title:
        "illinois industrial engineering student rosemarie garza was killed in hitandrun on i94",
      url: "https://redd.it/ogotkk",
    },
    { title: "where did the time go", url: "https://redd.it/rmm24k" },
    {
      title: "first column living keeps spinning out a new story everyday",
      url: "https://redd.it/mo7zqc",
    },
    { title: "dear dining hall patrons", url: "https://redd.it/qfingc" },
    {
      title: "dear passengers you deserve an apology",
      url: "https://redd.it/pzb0p0",
    },
    {
      title:
        "my older brother committed suicide four years ago my only remaining sibling my older sister is at risk i need to vent",
      url: "https://redd.it/pln3lj",
    },
    {
      title:
        "sincere apology to the ruiuc subreddit for misleading picture posted yesterday",
      url: "https://redd.it/ku3i53",
    },
    {
      title: "psa urbana guy masturbating outside windows",
      url: "https://redd.it/my2et9",
    },
  ],
  "closed, just, know": [
    {
      title: "im tired of the fetishization of cs majors",
      url: "https://redd.it/quz6if",
    },
    {
      title:
        "my name is ivor thank you all for the support heres what i want to say",
      url: "https://redd.it/lmajmi",
    },
    {
      title:
        "the retreat has an illegal lease please be careful if you are thinking about signing",
      url: "https://redd.it/na4t53",
    },
    {
      title: "hi my name is megan and im asking you to wear a mask",
      url: "https://redd.it/oun098",
    },
    { title: "spiderman is an idiot", url: "https://redd.it/rsctjg" },
    {
      title: "just wanna share my happiness and relief",
      url: "https://redd.it/ncesgg",
    },
    {
      title:
        "four years ago i was hazed by pi kappa alpha and spent three months at carle",
      url: "https://redd.it/qjyq10",
    },
    {
      title:
        "to everyone feeling alone and afraid even those who arent saying it",
      url: "https://redd.it/panbod",
    },
    { title: "fuck the counseling center", url: "https://redd.it/lw594m" },
    {
      title: "how do i get an engineering major bf",
      url: "https://redd.it/qwk8hf",
    },
    { title: "fuck pike", url: "https://redd.it/qv2m8l" },
    {
      title: "parting alumni words of a campus ghost",
      url: "https://redd.it/n7d19d",
    },
    {
      title:
        "im so done t\u0336r\u0336y\u0336i\u0336n\u0336g\u0336 \u0336t\u0336o\u0336 having sex at this school",
      url: "https://redd.it/ly7p1p",
    },
    { title: "fuck the counseling center", url: "https://redd.it/pyr4qd" },
    { title: "racism on daniel street", url: "https://redd.it/qgpi9r" },
    {
      title:
        "illinois industrial engineering student rosemarie garza was killed in hitandrun on i94",
      url: "https://redd.it/ogotkk",
    },
    { title: "overcharged on tution again", url: "https://redd.it/l0mpae" },
    {
      title:
        "if the covid testing disciplinary system has cast the net wide enough to kick out ivor chen for something that seems so benign then the system itself needs to be reworked",
      url: "https://redd.it/lj6ovq",
    },
    { title: "covid second wave in india", url: "https://redd.it/n0rkix" },
    {
      title: "y\u2019all please just let chief die",
      url: "https://redd.it/pdldw1",
    },
    {
      title: "replacing spring break with three wednesdays was a terrible idea",
      url: "https://redd.it/m01gqi",
    },
    {
      title: "altgeld dairy queen will be closed during winter break",
      url: "https://redd.it/realr2",
    },
    {
      title: "you know what\u2019s fucking weird about college",
      url: "https://redd.it/m78ne9",
    },
    {
      title:
        "hey professors even if no one says anything you should always have a mask on",
      url: "https://redd.it/l7adgc",
    },
    { title: "where did the time go", url: "https://redd.it/rmm24k" },
    {
      title: "to whoever stole my package yesterday on illinois street",
      url: "https://redd.it/nnrdhm",
    },
    {
      title: "dear passengers you deserve an apology",
      url: "https://redd.it/pzb0p0",
    },
    {
      title:
        "my older brother committed suicide four years ago my only remaining sibling my older sister is at risk i need to vent",
      url: "https://redd.it/pln3lj",
    },
    {
      title:
        "sincere apology to the ruiuc subreddit for misleading picture posted yesterday",
      url: "https://redd.it/ku3i53",
    },
    {
      title: "psa urbana guy masturbating outside windows",
      url: "https://redd.it/my2et9",
    },
    {
      title: "want to support struggling local restaurants stop using grubhub",
      url: "https://redd.it/leqtvu",
    },
  ],
  "sign, classes, semester": [
    {
      title:
        "my name is ivor thank you all for the support heres what i want to say",
      url: "https://redd.it/lmajmi",
    },
    {
      title:
        "the retreat has an illegal lease please be careful if you are thinking about signing",
      url: "https://redd.it/na4t53",
    },
    {
      title: "hi my name is megan and im asking you to wear a mask",
      url: "https://redd.it/oun098",
    },
    {
      title: "just wanna share my happiness and relief",
      url: "https://redd.it/ncesgg",
    },
    {
      title:
        "to everyone feeling alone and afraid even those who arent saying it",
      url: "https://redd.it/panbod",
    },
    { title: "fuck the counseling center", url: "https://redd.it/pyr4qd" },
    { title: "goodbye ruiuc", url: "https://redd.it/nd2v4a" },
    { title: "overcharged on tution again", url: "https://redd.it/l0mpae" },
    {
      title:
        "if the covid testing disciplinary system has cast the net wide enough to kick out ivor chen for something that seems so benign then the system itself needs to be reworked",
      url: "https://redd.it/lj6ovq",
    },
    {
      title: "altgeld dairy queen will be closed during winter break",
      url: "https://redd.it/realr2",
    },
    {
      title: "freshmen dont start skipping classes",
      url: "https://redd.it/q6764z",
    },
    {
      title: "dear passengers you deserve an apology",
      url: "https://redd.it/pzb0p0",
    },
    {
      title:
        "my older brother committed suicide four years ago my only remaining sibling my older sister is at risk i need to vent",
      url: "https://redd.it/pln3lj",
    },
    {
      title:
        "sincere apology to the ruiuc subreddit for misleading picture posted yesterday",
      url: "https://redd.it/ku3i53",
    },
  ],
  "big, campus, took": [
    {
      title: "im tired of the fetishization of cs majors",
      url: "https://redd.it/quz6if",
    },
    {
      title:
        "my name is ivor thank you all for the support heres what i want to say",
      url: "https://redd.it/lmajmi",
    },
    {
      title: "hi my name is megan and im asking you to wear a mask",
      url: "https://redd.it/oun098",
    },
    {
      title:
        "four years ago i was hazed by pi kappa alpha and spent three months at carle",
      url: "https://redd.it/qjyq10",
    },
    {
      title: "how do i get an engineering major bf",
      url: "https://redd.it/qwk8hf",
    },
    { title: "fuck pike", url: "https://redd.it/qv2m8l" },
    {
      title: "parting alumni words of a campus ghost",
      url: "https://redd.it/n7d19d",
    },
    { title: "racism on daniel street", url: "https://redd.it/qgpi9r" },
    {
      title: "replacing spring break with three wednesdays was a terrible idea",
      url: "https://redd.it/m01gqi",
    },
    {
      title: "first column living keeps spinning out a new story everyday",
      url: "https://redd.it/mo7zqc",
    },
    {
      title:
        "my older brother committed suicide four years ago my only remaining sibling my older sister is at risk i need to vent",
      url: "https://redd.it/pln3lj",
    },
    {
      title:
        "sincere apology to the ruiuc subreddit for misleading picture posted yesterday",
      url: "https://redd.it/ku3i53",
    },
    {
      title:
        "how can uiuc students file a real complaint about university covid rules",
      url: "https://redd.it/ljwz0t",
    },
  ],
  "squirrel, ill, illinois": [
    {
      title:
        "my name is ivor thank you all for the support heres what i want to say",
      url: "https://redd.it/lmajmi",
    },
    {
      title:
        "the retreat has an illegal lease please be careful if you are thinking about signing",
      url: "https://redd.it/na4t53",
    },
    {
      title: "hi my name is megan and im asking you to wear a mask",
      url: "https://redd.it/oun098",
    },
    { title: "after all three wellness days", url: "https://redd.it/mqv5gx" },
    { title: "spiderman is an idiot", url: "https://redd.it/rsctjg" },
    {
      title:
        "four years ago i was hazed by pi kappa alpha and spent three months at carle",
      url: "https://redd.it/qjyq10",
    },
    {
      title: "illinois football topples 7 penn state",
      url: "https://redd.it/qeclfi",
    },
    {
      title:
        "to everyone feeling alone and afraid even those who arent saying it",
      url: "https://redd.it/panbod",
    },
    { title: "fuck the counseling center", url: "https://redd.it/lw594m" },
    {
      title: "how do i get an engineering major bf",
      url: "https://redd.it/qwk8hf",
    },
    { title: "fuck pike", url: "https://redd.it/qv2m8l" },
    {
      title:
        "ladies gents and themts our fellow illini got her ass handed to her in georgia",
      url: "https://redd.it/ks4vz6",
    },
    {
      title: "parting alumni words of a campus ghost",
      url: "https://redd.it/n7d19d",
    },
    { title: "racism on daniel street", url: "https://redd.it/qgpi9r" },
    {
      title:
        "illinois industrial engineering student rosemarie garza was killed in hitandrun on i94",
      url: "https://redd.it/ogotkk",
    },
    { title: "overcharged on tution again", url: "https://redd.it/l0mpae" },
    {
      title: "replacing spring break with three wednesdays was a terrible idea",
      url: "https://redd.it/m01gqi",
    },
    {
      title: "altgeld dairy queen will be closed during winter break",
      url: "https://redd.it/realr2",
    },
    {
      title: "you know what\u2019s fucking weird about college",
      url: "https://redd.it/m78ne9",
    },
    {
      title: "reinstate antonio ruiz to the university of illinois",
      url: "https://redd.it/mogv5h",
    },
    {
      title: "to whoever stole my package yesterday on illinois street",
      url: "https://redd.it/nnrdhm",
    },
    {
      title: "first column living keeps spinning out a new story everyday",
      url: "https://redd.it/mo7zqc",
    },
    { title: "dear dining hall patrons", url: "https://redd.it/qfingc" },
    {
      title: "dear passengers you deserve an apology",
      url: "https://redd.it/pzb0p0",
    },
    {
      title: "i don\u2019t know how they do it",
      url: "https://redd.it/rb3lqi",
    },
    {
      title:
        "my older brother committed suicide four years ago my only remaining sibling my older sister is at risk i need to vent",
      url: "https://redd.it/pln3lj",
    },
    {
      title:
        "sincere apology to the ruiuc subreddit for misleading picture posted yesterday",
      url: "https://redd.it/ku3i53",
    },
    {
      title: "psa urbana guy masturbating outside windows",
      url: "https://redd.it/my2et9",
    },
    {
      title: "want to support struggling local restaurants stop using grubhub",
      url: "https://redd.it/leqtvu",
    },
  ],
  "getting, nice, day": [
    {
      title: "im tired of the fetishization of cs majors",
      url: "https://redd.it/quz6if",
    },
    {
      title:
        "my name is ivor thank you all for the support heres what i want to say",
      url: "https://redd.it/lmajmi",
    },
    {
      title:
        "the retreat has an illegal lease please be careful if you are thinking about signing",
      url: "https://redd.it/na4t53",
    },
    {
      title: "hi my name is megan and im asking you to wear a mask",
      url: "https://redd.it/oun098",
    },
    {
      title: "instead of chambana we should call it urpain",
      url: "https://redd.it/ndbafv",
    },
    { title: "spiderman is an idiot", url: "https://redd.it/rsctjg" },
    {
      title: "just wanna share my happiness and relief",
      url: "https://redd.it/ncesgg",
    },
    {
      title:
        "four years ago i was hazed by pi kappa alpha and spent three months at carle",
      url: "https://redd.it/qjyq10",
    },
    {
      title:
        "to everyone feeling alone and afraid even those who arent saying it",
      url: "https://redd.it/panbod",
    },
    { title: "fuck the counseling center", url: "https://redd.it/lw594m" },
    {
      title:
        "ladies gents and themts our fellow illini got her ass handed to her in georgia",
      url: "https://redd.it/ks4vz6",
    },
    {
      title: "parting alumni words of a campus ghost",
      url: "https://redd.it/n7d19d",
    },
    {
      title:
        "im so done t\u0336r\u0336y\u0336i\u0336n\u0336g\u0336 \u0336t\u0336o\u0336 having sex at this school",
      url: "https://redd.it/ly7p1p",
    },
    { title: "fuck the counseling center", url: "https://redd.it/pyr4qd" },
    { title: "overcharged on tution again", url: "https://redd.it/l0mpae" },
    {
      title:
        "if the covid testing disciplinary system has cast the net wide enough to kick out ivor chen for something that seems so benign then the system itself needs to be reworked",
      url: "https://redd.it/lj6ovq",
    },
    {
      title: "replacing spring break with three wednesdays was a terrible idea",
      url: "https://redd.it/m01gqi",
    },
    {
      title:
        "hey professors even if no one says anything you should always have a mask on",
      url: "https://redd.it/l7adgc",
    },
    {
      title: "dear passengers you deserve an apology",
      url: "https://redd.it/pzb0p0",
    },
    {
      title: "i don\u2019t know how they do it",
      url: "https://redd.it/rb3lqi",
    },
    {
      title:
        "my older brother committed suicide four years ago my only remaining sibling my older sister is at risk i need to vent",
      url: "https://redd.it/pln3lj",
    },
    {
      title:
        "sincere apology to the ruiuc subreddit for misleading picture posted yesterday",
      url: "https://redd.it/ku3i53",
    },
    {
      title:
        "how can uiuc students file a real complaint about university covid rules",
      url: "https://redd.it/ljwz0t",
    },
  ],
  "freshmen, spring, school": [
    {
      title: "hi my name is megan and im asking you to wear a mask",
      url: "https://redd.it/oun098",
    },
    { title: "goodbye ruiuc", url: "https://redd.it/nd2v4a" },
    {
      title: "replacing spring break with three wednesdays was a terrible idea",
      url: "https://redd.it/m01gqi",
    },
    {
      title: "spring break lookin real sexy rn",
      url: "https://redd.it/m2kq32",
    },
    { title: "have yall ever considered", url: "https://redd.it/kvi9zo" },
    {
      title:
        "my older brother committed suicide four years ago my only remaining sibling my older sister is at risk i need to vent",
      url: "https://redd.it/pln3lj",
    },
    {
      title:
        "how can uiuc students file a real complaint about university covid rules",
      url: "https://redd.it/ljwz0t",
    },
  ],
  "dead, pinto, bean": [
    {
      title: "what really happened to the girl at lion this past friday night",
      url: "https://redd.it/t93wf3",
    },
    { title: "pinto bean is dead", url: "https://redd.it/xytc7q" },
    { title: "pinto bean secured", url: "https://redd.it/xyyo5t" },
    {
      title:
        "if you think that someone you know wants to end their life please reach out",
      url: "https://redd.it/sotba9",
    },
    {
      title: "illinois beat minnesota to top big 10 west",
      url: "https://redd.it/y4w1ku",
    },
  ],
  "psa, class, like": [
    {
      title:
        "i\u2019ve heard a lot of people complaining about online school for a week and having to get tested which just got changed so you can get all tests on campus land i just wanted to provide a little perspective on the current situation",
      url: "https://redd.it/rwspkv",
    },
    {
      title:
        "update on fuck smile student living city of urbana just saved our ass",
      url: "https://redd.it/zxkzow",
    },
    {
      title: "creepy guy driving around urbana be careful",
      url: "https://redd.it/umx29w",
    },
    { title: "shoutout to this guy", url: "https://redd.it/xea2py" },
    {
      title: "concerns about an illinois bioengineering lab",
      url: "https://redd.it/tvbgqn",
    },
    {
      title: "a couple of wine feels soooo good",
      url: "https://redd.it/scv6as",
    },
    { title: "dear smelly smelly students", url: "https://redd.it/zfi2yx" },
    {
      title:
        "psa if youre hacking up a lung in class from coughing please stay home or at least wear a mask",
      url: "https://redd.it/xfxgmd",
    },
    {
      title:
        "if you think that someone you know wants to end their life please reach out",
      url: "https://redd.it/sotba9",
    },
    {
      title: "i\u2019m tired of the fetishization of faa majors",
      url: "https://redd.it/v2wqfq",
    },
    { title: "illini tower crisis", url: "https://redd.it/zw46nr" },
  ],
  "bus, just, fools": [
    { title: "the uiuc dream is real", url: "https://redd.it/v1vr61" },
    {
      title:
        "i\u2019ve heard a lot of people complaining about online school for a week and having to get tested which just got changed so you can get all tests on campus land i just wanted to provide a little perspective on the current situation",
      url: "https://redd.it/rwspkv",
    },
    {
      title: "creepy guy driving around urbana be careful",
      url: "https://redd.it/umx29w",
    },
    {
      title: "psa tiger sugar treats its workers very poorly",
      url: "https://redd.it/tjpwpg",
    },
    { title: "feeling real excited", url: "https://redd.it/wr1mp8" },
    {
      title: "concerns about an illinois bioengineering lab",
      url: "https://redd.it/tvbgqn",
    },
    { title: "cs for everyone", url: "https://redd.it/v4gung" },
    { title: "ban cars on green st", url: "https://redd.it/tc2p1f" },
    {
      title:
        "if you think that someone you know wants to end their life please reach out",
      url: "https://redd.it/sotba9",
    },
    { title: "hey you belong here", url: "https://redd.it/sxva5e" },
    {
      title: "i\u2019m tired of the fetishization of faa majors",
      url: "https://redd.it/v2wqfq",
    },
    { title: "bus etiquette 101", url: "https://redd.it/x0wpgv" },
  ],
  "geese, 2022, congrats": [],
  "vs, spotted, green": [
    { title: "shoutout to this guy", url: "https://redd.it/xea2py" },
    { title: "ban cars on green st", url: "https://redd.it/tc2p1f" },
    {
      title: "i\u2019m tired of the fetishization of faa majors",
      url: "https://redd.it/v2wqfq",
    },
  ],
  "good, photos, campus": [
    { title: "the uiuc dream is real", url: "https://redd.it/v1vr61" },
    {
      title:
        "i\u2019ve heard a lot of people complaining about online school for a week and having to get tested which just got changed so you can get all tests on campus land i just wanted to provide a little perspective on the current situation",
      url: "https://redd.it/rwspkv",
    },
    { title: "some shots of campus this sem", url: "https://redd.it/yey7cd" },
    { title: "feeling real excited", url: "https://redd.it/wr1mp8" },
    { title: "shoutout to this guy", url: "https://redd.it/xea2py" },
    {
      title: "concerns about an illinois bioengineering lab",
      url: "https://redd.it/tvbgqn",
    },
    { title: "ban cars on green st", url: "https://redd.it/tc2p1f" },
    {
      title: "a couple of wine feels soooo good",
      url: "https://redd.it/scv6as",
    },
    { title: "dear smelly smelly students", url: "https://redd.it/zfi2yx" },
    { title: "cops called on me at meb", url: "https://redd.it/xpc2me" },
    {
      title: "i\u2019m tired of the fetishization of faa majors",
      url: "https://redd.it/v2wqfq",
    },
    {
      title:
        "try and make new friends my dad said what\u2019s the worse that can happen he said",
      url: "https://redd.it/1007jsv",
    },
  ],
  "champaign, quad, years": [
    {
      title:
        "i\u2019ve heard a lot of people complaining about online school for a week and having to get tested which just got changed so you can get all tests on campus land i just wanted to provide a little perspective on the current situation",
      url: "https://redd.it/rwspkv",
    },
    { title: "feeling real excited", url: "https://redd.it/wr1mp8" },
    { title: "ban cars on green st", url: "https://redd.it/tc2p1f" },
    {
      title: "illinois beat minnesota to top big 10 west",
      url: "https://redd.it/y4w1ku",
    },
  ],
  "people, need, make": [
    { title: "the uiuc dream is real", url: "https://redd.it/v1vr61" },
    {
      title: "what really happened to the girl at lion this past friday night",
      url: "https://redd.it/t93wf3",
    },
    {
      title:
        "i\u2019ve heard a lot of people complaining about online school for a week and having to get tested which just got changed so you can get all tests on campus land i just wanted to provide a little perspective on the current situation",
      url: "https://redd.it/rwspkv",
    },
    {
      title:
        "update on fuck smile student living city of urbana just saved our ass",
      url: "https://redd.it/zxkzow",
    },
    {
      title: "creepy guy driving around urbana be careful",
      url: "https://redd.it/umx29w",
    },
    {
      title: "psa tiger sugar treats its workers very poorly",
      url: "https://redd.it/tjpwpg",
    },
    {
      title: "concerns about an illinois bioengineering lab",
      url: "https://redd.it/tvbgqn",
    },
    { title: "ban cars on green st", url: "https://redd.it/tc2p1f" },
    { title: "dear smelly smelly students", url: "https://redd.it/zfi2yx" },
    { title: "cops called on me at meb", url: "https://redd.it/xpc2me" },
    {
      title:
        "if you think that someone you know wants to end their life please reach out",
      url: "https://redd.it/sotba9",
    },
    {
      title: "i\u2019m tired of the fetishization of faa majors",
      url: "https://redd.it/v2wqfq",
    },
    { title: "bus etiquette 101", url: "https://redd.it/x0wpgv" },
  ],
  "foellinger, let, squirrel": [
    {
      title:
        "update on fuck smile student living city of urbana just saved our ass",
      url: "https://redd.it/zxkzow",
    },
    {
      title: "concerns about an illinois bioengineering lab",
      url: "https://redd.it/tvbgqn",
    },
    { title: "cops called on me at meb", url: "https://redd.it/xpc2me" },
    {
      title: "i\u2019m tired of the fetishization of faa majors",
      url: "https://redd.it/v2wqfq",
    },
    { title: "bus etiquette 101", url: "https://redd.it/x0wpgv" },
  ],
  "just, storm, today": [
    { title: "the uiuc dream is real", url: "https://redd.it/v1vr61" },
    {
      title:
        "i\u2019ve heard a lot of people complaining about online school for a week and having to get tested which just got changed so you can get all tests on campus land i just wanted to provide a little perspective on the current situation",
      url: "https://redd.it/rwspkv",
    },
    {
      title: "creepy guy driving around urbana be careful",
      url: "https://redd.it/umx29w",
    },
    {
      title: "psa tiger sugar treats its workers very poorly",
      url: "https://redd.it/tjpwpg",
    },
    { title: "feeling real excited", url: "https://redd.it/wr1mp8" },
    {
      title: "concerns about an illinois bioengineering lab",
      url: "https://redd.it/tvbgqn",
    },
    { title: "cs for everyone", url: "https://redd.it/v4gung" },
    { title: "ban cars on green st", url: "https://redd.it/tc2p1f" },
    { title: "dear smelly smelly students", url: "https://redd.it/zfi2yx" },
    {
      title:
        "if you think that someone you know wants to end their life please reach out",
      url: "https://redd.it/sotba9",
    },
    {
      title: "i\u2019m tired of the fetishization of faa majors",
      url: "https://redd.it/v2wqfq",
    },
    {
      title: "illinois beat minnesota to top big 10 west",
      url: "https://redd.it/y4w1ku",
    },
    { title: "i finally know what humid is", url: "https://redd.it/vbljcr" },
    { title: "bus etiquette 101", url: "https://redd.it/x0wpgv" },
  ],
  "town, saw, just": [
    { title: "i lied to my student ta", url: "https://redd.it/18jhx57" },
    {
      title: "shout out to the real cool frat bros at theta xi",
      url: "https://redd.it/12ld5uo",
    },
    { title: "do not shop at target rn", url: "https://redd.it/12ytdlv" },
    {
      title: "why engineer students are so rude and condescending",
      url: "https://redd.it/180prvm",
    },
    {
      title: "how do i add a tip to my parking ticket",
      url: "https://redd.it/18s8riq",
    },
    {
      title:
        "rest in peace to the recent grad killed at neuschwanstein castle and prayers for recovery for the one injured absolutely awful",
      url: "https://redd.it/14b2aqw",
    },
    { title: "uiuc police sucks", url: "https://redd.it/146mw9h" },
    {
      title:
        "warning if a random guy comes up to you and asks if you want to join his sounding club do not go",
      url: "https://redd.it/185f2oe",
    },
    {
      title: "i\u2019m a cs major i just felt grass for the first time",
      url: "https://redd.it/12fnvv7",
    },
    {
      title: "to the guy who almost killed my wife tonight",
      url: "https://redd.it/168njyh",
    },
    {
      title: "shut the fuck up during lectures",
      url: "https://redd.it/10l5llm",
    },
    { title: "harassing men", url: "https://redd.it/16mvlhg" },
    { title: "creepy guy on the quad", url: "https://redd.it/13yt46w" },
    { title: "psa about the dangers of uiuc", url: "https://redd.it/15i673g" },
    {
      title: "psa if youre a guy in cs 225 please read this",
      url: "https://redd.it/18qxrdi",
    },
    {
      title: "my roommate asks chatgpt weird stuff and i dont know what to do",
      url: "https://redd.it/12f7km5",
    },
    { title: "hate crime on green fifth", url: "https://redd.it/18jhb6i" },
    { title: "will i get rescinded urgent", url: "https://redd.it/11lhmlf" },
  ],
  "despite, area, safe": [
    { title: "harassing men", url: "https://redd.it/16mvlhg" },
    { title: "rejected from uiuc", url: "https://redd.it/10ntc5j" },
    { title: "is this a safe area", url: "https://redd.it/15ehivq" },
    { title: "creepy guy on the quad", url: "https://redd.it/13yt46w" },
    { title: "psa about the dangers of uiuc", url: "https://redd.it/15i673g" },
  ],
  "line, caught, student": [
    { title: "i asked my student out", url: "https://redd.it/180j1tl" },
    { title: "i lied to my student ta", url: "https://redd.it/18jhx57" },
    {
      title: "why engineer students are so rude and condescending",
      url: "https://redd.it/180prvm",
    },
    {
      title: "how do i add a tip to my parking ticket",
      url: "https://redd.it/18s8riq",
    },
    {
      title: "what happens if you cheat on an exam in college",
      url: "https://redd.it/18jc4wo",
    },
    { title: "is this a safe area", url: "https://redd.it/15ehivq" },
    { title: "psa about the dangers of uiuc", url: "https://redd.it/15i673g" },
    {
      title: "went on a tour of campus and this rude guy cut through our group",
      url: "https://redd.it/12uqcni",
    },
    { title: "hate crime on green fifth", url: "https://redd.it/18jhb6i" },
    { title: "will i get rescinded urgent", url: "https://redd.it/11lhmlf" },
  ],
  "way, amazing, uiuc": [
    { title: "i lied to my student ta", url: "https://redd.it/18jhx57" },
    {
      title: "how do i add a tip to my parking ticket",
      url: "https://redd.it/18s8riq",
    },
    { title: "psa about the dangers of uiuc", url: "https://redd.it/15i673g" },
    {
      title: "psa if youre a guy in cs 225 please read this",
      url: "https://redd.it/18qxrdi",
    },
    {
      title:
        "university of illinois\u2019 wheelchair racer susannah scaroni won her first boston marathon on monday despite having to stop before the halfway mark to repair a wheel",
      url: "https://redd.it/12plcv5",
    },
    {
      title: "my roommate asks chatgpt weird stuff and i dont know what to do",
      url: "https://redd.it/12f7km5",
    },
    {
      title: "went on a tour of campus and this rude guy cut through our group",
      url: "https://redd.it/12uqcni",
    },
  ],
  "watching, like, got": [
    { title: "i lied to my student ta", url: "https://redd.it/18jhx57" },
    {
      title: "shout out to the real cool frat bros at theta xi",
      url: "https://redd.it/12ld5uo",
    },
    { title: "uiuc police sucks", url: "https://redd.it/146mw9h" },
    { title: "harassing men", url: "https://redd.it/16mvlhg" },
    {
      title: "what happens if you cheat on an exam in college",
      url: "https://redd.it/18jc4wo",
    },
    {
      title: "best places to go on a formal date in champaignurbana",
      url: "https://redd.it/124xwub",
    },
    { title: "psa about the dangers of uiuc", url: "https://redd.it/15i673g" },
    {
      title: "psa if youre a guy in cs 225 please read this",
      url: "https://redd.it/18qxrdi",
    },
    {
      title: "researchers at the chicago field museum know about pinto bean",
      url: "https://redd.it/11s3159",
    },
    {
      title: "my roommate asks chatgpt weird stuff and i dont know what to do",
      url: "https://redd.it/12f7km5",
    },
    {
      title: "went on a tour of campus and this rude guy cut through our group",
      url: "https://redd.it/12uqcni",
    },
    { title: "will i get rescinded urgent", url: "https://redd.it/11lhmlf" },
  ],
  "coming, professor, bro": [
    { title: "creepy guy on the quad", url: "https://redd.it/13yt46w" },
    {
      title: "best places to go on a formal date in champaignurbana",
      url: "https://redd.it/124xwub",
    },
    {
      title: "best places to take my wife on a formal date in champaignurbana",
      url: "https://redd.it/125f9h9",
    },
    {
      title: "man watching pornography in 3th floor grainger",
      url: "https://redd.it/17w7fv3",
    },
    {
      title: "my roommate asks chatgpt weird stuff and i dont know what to do",
      url: "https://redd.it/12f7km5",
    },
    {
      title: "avoid using illinoisedu email for important matters",
      url: "https://redd.it/10sa5uj",
    },
  ],
  "trying, bean, pinto": [
    {
      title: "shout out to the real cool frat bros at theta xi",
      url: "https://redd.it/12ld5uo",
    },
    { title: "uiuc police sucks", url: "https://redd.it/146mw9h" },
    { title: "creepy guy on the quad", url: "https://redd.it/13yt46w" },
    {
      title: "psa if youre a guy in cs 225 please read this",
      url: "https://redd.it/18qxrdi",
    },
    {
      title: "researchers at the chicago field museum know about pinto bean",
      url: "https://redd.it/11s3159",
    },
  ],
  "main, light, champaign": [
    {
      title:
        "david brandt ohio farmer and face of the its not much but its honest work meme dies in vehicle crash in urbana",
      url: "https://redd.it/13r2t5o",
    },
    {
      title: "to the guy who almost killed my wife tonight",
      url: "https://redd.it/168njyh",
    },
    { title: "rejected from uiuc", url: "https://redd.it/10ntc5j" },
    { title: "creepy guy on the quad", url: "https://redd.it/13yt46w" },
    {
      title: "avoid using illinoisedu email for important matters",
      url: "https://redd.it/10sa5uj",
    },
  ],
  "cold, meme, cool": [
    {
      title: "shout out to the real cool frat bros at theta xi",
      url: "https://redd.it/12ld5uo",
    },
    {
      title: "went on a tour of campus and this rude guy cut through our group",
      url: "https://redd.it/12uqcni",
    },
  ],
  "campus, quad, schedule": [
    { title: "uiuc police sucks", url: "https://redd.it/146mw9h" },
    { title: "harassing men", url: "https://redd.it/16mvlhg" },
    { title: "creepy guy on the quad", url: "https://redd.it/13yt46w" },
    { title: "psa about the dangers of uiuc", url: "https://redd.it/15i673g" },
    {
      title: "went on a tour of campus and this rude guy cut through our group",
      url: "https://redd.it/12uqcni",
    },
    { title: "hate crime on green fifth", url: "https://redd.it/18jhb6i" },
  ],
};