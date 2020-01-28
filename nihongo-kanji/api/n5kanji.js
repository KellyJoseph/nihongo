//http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml
module.exports = {
  getN5Kanji: async (event, context) => {
    const response = [
      {
        kanji: "一",
        unicode: "4E00",
        grade: "N5",
        meaning: "One",
        kunyomi: "hito(tsu), hito-",
        onyomi: "ICHI, ITSU",
        option1: "One",
        option2: "Two",
        option3: "Three",
        option4: "Four"
      },
      {
        kanji: "ニ",
        unicode: "4E8C",
        grade: "N5",
        meaning: "Two",
        kunyomi: "futa(tsu), futa-",
        onyomi: "NI",
        option1: "One",
        option2: "Two",
        option3: "Three",
        option4: "Four"
      },
      {
        kanji: "三",
        unicode: "4E09",
        grade: "N5",
        meaning: "",
        kunyomi: "mit(tsu), mi-",
        onyomi: "SAN",
        option1: "Two",
        option2: "Three",
        option3: "Four",
        option4: "Five"
      },
      {
        kanji: "四",
        unicode: "56DB",
        grade: "N5",
        meaning: "Four",
        kunyomi: "yo(ttsu), yu(tsu), yo-, yon-",
        onyomi: "SHI",
        option1: "Four",
        option2: "Five",
        option3: "East",
        option4: "West"
      },
      {
        kanji: "五",
        unicode: "4E94",
        grade: "N5",
        meaning: "Five",
        kunyomi: "itsu(tsu), itsu-",
        onyomi: "GO",
        option1: "Four",
        option2: "Five",
        option3: "Six",
        option4: "Seven"
      },
      {
        kanji: "七",
        unicode: "4E03",
        grade: "N5",
        meaning: "Seven",
        kunyomi: "nana(tsu), nana-, nano-",
        onyomi: "SHICHI",
        option1: "Four",
        option2: "Five",
        option3: "Six",
        option4: "Seven"
      },
      {
        kanji: "八",
        unicode: "516B",
        grade: "N5",
        meaning: "Eight",
        kunyomi: "yat(tsu), ya(tsu), ya-, you-",
        onyomi: "HACHI",
        option1: "Seven",
        option2: "Eight",
        option3: "Nine",
        option4: "Ten"
      },
      {
        kanji: "九",
        unicode: "4E5D",
        meaning: "Nine",
        grade: "N5",
        kunyomi: "kokono(tsu), kokono-",
        onyomi: "KYUU, KU",
        option1: "Seven",
        option2: "Eight",
        option3: "Nine",
        option4: "Ten"
      },
      {
        kanji: "十",
        unicode: "5341",
        grade: "N5",
        meaning: "Ten",
        kunyomi: "too, to-",
        onyomi: "JUU, JI",
        option1: "Seven",
        option2: "Eight",
        option3: "Nine",
        option4: "Ten"
      },
      {
        kanji: "土",
        unicode: "571F",
        grade: "N5",
        meaning: "Earth",
        kunyomi: "tsuchi",
        onyomi: "DO, TO",
        option1: "Earth",
        option2: "Wind",
        option3: "Fire",
        option4: "Water"
      },
      {
        kanji: "火",
        unicode: "706B",
        grade: "N5",
        meaning: "Fire",
        kunyomi: "hi",
        onyomi: "KA",
        option1: "Earth",
        option2: "Fire",
        option3: "Wind",
        option4: "Water"
      },
      {
        kanji: "水",
        unicode: "6C34",
        grade: "N5",
        meaning: "Water",
        kunyomi: "mizu",
        onyomi: "SUI",
        option1: "Earth",
        option2: "Wind",
        option3: "Fire",
        option4: "Water"
      },
      {
        kanji: "飲",
        unicode: "98F2",
        grade: "N5",
        meaning: "to drink",
        kunyomi: "IN",
        onyomi: "no(mu)",
        option1: "to eat",
        option2: "to drink",
        option3: "to see",
        option4: "to hear"
      },
      {
        kanji: "食",
        unicode: "98DF",
        grade: "N5",
        meaning: "to eat",
        kunyomi: "ta(beru), ku(ru), ku(rau)",
        onyomi: "SHOKU",
        option1: "to eat",
        option2: "to drink",
        option3: "to see",
        option4: "to hear"
      }
    ];

    return response;
  }
};
