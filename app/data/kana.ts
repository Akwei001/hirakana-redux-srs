// /app/data/kana.ts

export type KanaChar = {
  symbol: string;
  romaji: string;
  group: string;
};

// HIRAGANA
export const hiragana: KanaChar[] = [
  // Basic vowels
  { symbol: "あ", romaji: "a", group: "a" },
  { symbol: "い", romaji: "i", group: "a" },
  { symbol: "う", romaji: "u", group: "a" },
  { symbol: "え", romaji: "e", group: "a" },
  { symbol: "お", romaji: "o", group: "a" },

  // K-row
  { symbol: "か", romaji: "ka", group: "ka" },
  { symbol: "き", romaji: "ki", group: "ka" },
  { symbol: "く", romaji: "ku", group: "ka" },
  { symbol: "け", romaji: "ke", group: "ka" },
  { symbol: "こ", romaji: "ko", group: "ka" },
  // G-row (diacritics)
  { symbol: "が", romaji: "ga", group: "ga" },
  { symbol: "ぎ", romaji: "gi", group: "ga" },
  { symbol: "ぐ", romaji: "gu", group: "ga" },
  { symbol: "げ", romaji: "ge", group: "ga" },
  { symbol: "ご", romaji: "go", group: "ga" },

  // S-row
  { symbol: "さ", romaji: "sa", group: "sa" },
  { symbol: "し", romaji: "shi", group: "sa" },
  { symbol: "す", romaji: "su", group: "sa" },
  { symbol: "せ", romaji: "se", group: "sa" },
  { symbol: "そ", romaji: "so", group: "sa" },
  // Z-row (diacritics)
  { symbol: "ざ", romaji: "za", group: "za" },
  { symbol: "じ", romaji: "ji", group: "za" },
  { symbol: "ず", romaji: "zu", group: "za" },
  { symbol: "ぜ", romaji: "ze", group: "za" },
  { symbol: "ぞ", romaji: "zo", group: "za" },

  // T-row
  { symbol: "た", romaji: "ta", group: "ta" },
  { symbol: "ち", romaji: "chi", group: "ta" },
  { symbol: "つ", romaji: "tsu", group: "ta" },
  { symbol: "て", romaji: "te", group: "ta" },
  { symbol: "と", romaji: "to", group: "ta" },
  // D-row (diacritics)
  { symbol: "だ", romaji: "da", group: "da" },
  { symbol: "ぢ", romaji: "ji", group: "da" }, // alt reading for 'ji'
  { symbol: "づ", romaji: "zu", group: "da" }, // alt reading for 'zu'
  { symbol: "で", romaji: "de", group: "da" },
  { symbol: "ど", romaji: "do", group: "da" },

  // N-row
  { symbol: "な", romaji: "na", group: "na" },
  { symbol: "に", romaji: "ni", group: "na" },
  { symbol: "ぬ", romaji: "nu", group: "na" },
  { symbol: "ね", romaji: "ne", group: "na" },
  { symbol: "の", romaji: "no", group: "na" },

  // H-row
  { symbol: "は", romaji: "ha", group: "ha" },
  { symbol: "ひ", romaji: "hi", group: "ha" },
  { symbol: "ふ", romaji: "fu", group: "ha" },
  { symbol: "へ", romaji: "he", group: "ha" },
  { symbol: "ほ", romaji: "ho", group: "ha" },
  // B-row (dakuten)
  { symbol: "ば", romaji: "ba", group: "ba" },
  { symbol: "び", romaji: "bi", group: "ba" },
  { symbol: "ぶ", romaji: "bu", group: "ba" },
  { symbol: "べ", romaji: "be", group: "ba" },
  { symbol: "ぼ", romaji: "bo", group: "ba" },
  // P-row (handakuten)
  { symbol: "ぱ", romaji: "pa", group: "pa" },
  { symbol: "ぴ", romaji: "pi", group: "pa" },
  { symbol: "ぷ", romaji: "pu", group: "pa" },
  { symbol: "ぺ", romaji: "pe", group: "pa" },
  { symbol: "ぽ", romaji: "po", group: "pa" },

  // M-row
  { symbol: "ま", romaji: "ma", group: "ma" },
  { symbol: "み", romaji: "mi", group: "ma" },
  { symbol: "む", romaji: "mu", group: "ma" },
  { symbol: "め", romaji: "me", group: "ma" },
  { symbol: "も", romaji: "mo", group: "ma" },

  // Y-row
  { symbol: "や", romaji: "ya", group: "ya" },
  { symbol: "ゆ", romaji: "yu", group: "ya" },
  { symbol: "よ", romaji: "yo", group: "ya" },

  // R-row
  { symbol: "ら", romaji: "ra", group: "ra" },
  { symbol: "り", romaji: "ri", group: "ra" },
  { symbol: "る", romaji: "ru", group: "ra" },
  { symbol: "れ", romaji: "re", group: "ra" },
  { symbol: "ろ", romaji: "ro", group: "ra" },

  // W-row
  { symbol: "わ", romaji: "wa", group: "wa" },
  { symbol: "を", romaji: "wo", group: "wa" },

  // N
  { symbol: "ん", romaji: "n", group: "n" },

  // Combo sounds (Yōon)
  { symbol: "きゃ", romaji: "kya", group: "combo" },
  { symbol: "きゅ", romaji: "kyu", group: "combo" },
  { symbol: "きょ", romaji: "kyo", group: "combo" },
  { symbol: "しゃ", romaji: "sha", group: "combo" },
  { symbol: "しゅ", romaji: "shu", group: "combo" },
  { symbol: "しょ", romaji: "sho", group: "combo" },
  { symbol: "ちゃ", romaji: "cha", group: "combo" },
  { symbol: "ちゅ", romaji: "chu", group: "combo" },
  { symbol: "ちょ", romaji: "cho", group: "combo" },
  { symbol: "にゃ", romaji: "nya", group: "combo" },
  { symbol: "にゅ", romaji: "nyu", group: "combo" },
  { symbol: "にょ", romaji: "nyo", group: "combo" },
  { symbol: "ひゃ", romaji: "hya", group: "combo" },
  { symbol: "ひゅ", romaji: "hyu", group: "combo" },
  { symbol: "ひょ", romaji: "hyo", group: "combo" },
  { symbol: "みゃ", romaji: "mya", group: "combo" },
  { symbol: "みゅ", romaji: "myu", group: "combo" },
  { symbol: "みょ", romaji: "myo", group: "combo" },
  { symbol: "りゃ", romaji: "rya", group: "combo" },
  { symbol: "りゅ", romaji: "ryu", group: "combo" },
  { symbol: "りょ", romaji: "ryo", group: "combo" },
  // Dakuten combos
  { symbol: "ぎゃ", romaji: "gya", group: "combo" },
  { symbol: "ぎゅ", romaji: "gyu", group: "combo" },
  { symbol: "ぎょ", romaji: "gyo", group: "combo" },
  { symbol: "じゃ", romaji: "ja", group: "combo" },
  { symbol: "じゅ", romaji: "ju", group: "combo" },
  { symbol: "じょ", romaji: "jo", group: "combo" },
  { symbol: "びゃ", romaji: "bya", group: "combo" },
  { symbol: "びゅ", romaji: "byu", group: "combo" },
  { symbol: "びょ", romaji: "byo", group: "combo" },
  { symbol: "ぴゃ", romaji: "pya", group: "combo" },
  { symbol: "ぴゅ", romaji: "pyu", group: "combo" },
  { symbol: "ぴょ", romaji: "pyo", group: "combo" }
];

// KATAKANA follows exactly the same structure, just with katakana symbols:
export const katakana: KanaChar[] = [
  // Vowels
  { symbol: "ア", romaji: "a", group: "a" },
  { symbol: "イ", romaji: "i", group: "a" },
  { symbol: "ウ", romaji: "u", group: "a" },
  { symbol: "エ", romaji: "e", group: "a" },
  { symbol: "オ", romaji: "o", group: "a" },

  // K-row
  { symbol: "カ", romaji: "ka", group: "ka" },
  { symbol: "キ", romaji: "ki", group: "ka" },
  { symbol: "ク", romaji: "ku", group: "ka" },
  { symbol: "ケ", romaji: "ke", group: "ka" },
  { symbol: "コ", romaji: "ko", group: "ka" },
  // G-row (diacritics)
  { symbol: "ガ", romaji: "ga", group: "ga" },
  { symbol: "ギ", romaji: "gi", group: "ga" },
  { symbol: "グ", romaji: "gu", group: "ga" },
  { symbol: "ゲ", romaji: "ge", group: "ga" },
  { symbol: "ゴ", romaji: "go", group: "ga" },

  // S-row
  { symbol: "サ", romaji: "sa", group: "sa" },
  { symbol: "シ", romaji: "shi", group: "sa" },
  { symbol: "ス", romaji: "su", group: "sa" },
  { symbol: "セ", romaji: "se", group: "sa" },
  { symbol: "ソ", romaji: "so", group: "sa" },
  // Z-row (diacritics)
  { symbol: "ザ", romaji: "za", group: "za" },
  { symbol: "ジ", romaji: "ji", group: "za" },
  { symbol: "ズ", romaji: "zu", group: "za" },
  { symbol: "ゼ", romaji: "ze", group: "za" },
  { symbol: "ゾ", romaji: "zo", group: "za" },

  // T-row
  { symbol: "タ", romaji: "ta", group: "ta" },
  { symbol: "チ", romaji: "chi", group: "ta" },
  { symbol: "ツ", romaji: "tsu", group: "ta" },
  { symbol: "テ", romaji: "te", group: "ta" },
  { symbol: "ト", romaji: "to", group: "ta" },
  // D-row (diacritics)
  { symbol: "ダ", romaji: "da", group: "da" },
  { symbol: "ヂ", romaji: "ji", group: "da" },
  { symbol: "ヅ", romaji: "zu", group: "da" },
  { symbol: "デ", romaji: "de", group: "da" },
  { symbol: "ド", romaji: "do", group: "da" },

  // N-row
  { symbol: "ナ", romaji: "na", group: "na" },
  { symbol: "ニ", romaji: "ni", group: "na" },
  { symbol: "ヌ", romaji: "nu", group: "na" },
  { symbol: "ネ", romaji: "ne", group: "na" },
  { symbol: "ノ", romaji: "no", group: "na" },

  // H-row
  { symbol: "ハ", romaji: "ha", group: "ha" },
  { symbol: "ヒ", romaji: "hi", group: "ha" },
  { symbol: "フ", romaji: "fu", group: "ha" },
  { symbol: "ヘ", romaji: "he", group: "ha" },
  { symbol: "ホ", romaji: "ho", group: "ha" },
  // B-row (dakuten)
  { symbol: "バ", romaji: "ba", group: "ba" },
  { symbol: "ビ", romaji: "bi", group: "ba" },
  { symbol: "ブ", romaji: "bu", group: "ba" },
  { symbol: "ベ", romaji: "be", group: "ba" },
  { symbol: "ボ", romaji: "bo", group: "ba" },
  // P-row (handakuten)
  { symbol: "パ", romaji: "pa", group: "pa" },
  { symbol: "ピ", romaji: "pi", group: "pa" },
  { symbol: "プ", romaji: "pu", group: "pa" },
  { symbol: "ペ", romaji: "pe", group: "pa" },
  { symbol: "ポ", romaji: "po", group: "pa" },

  // M-row
  { symbol: "マ", romaji: "ma", group: "ma" },
  { symbol: "ミ", romaji: "mi", group: "ma" },
  { symbol: "ム", romaji: "mu", group: "ma" },
  { symbol: "メ", romaji: "me", group: "ma" },
  { symbol: "モ", romaji: "mo", group: "ma" },

  // Y-row
  { symbol: "ヤ", romaji: "ya", group: "ya" },
  { symbol: "ユ", romaji: "yu", group: "ya" },
  { symbol: "ヨ", romaji: "yo", group: "ya" },

  // R-row
  { symbol: "ラ", romaji: "ra", group: "ra" },
  { symbol: "リ", romaji: "ri", group: "ra" },
  { symbol: "ル", romaji: "ru", group: "ra" },
  { symbol: "レ", romaji: "re", group: "ra" },
  { symbol: "ロ", romaji: "ro", group: "ra" },

  // W-row
  { symbol: "ワ", romaji: "wa", group: "wa" },
  { symbol: "ヲ", romaji: "wo", group: "wa" },

  // N
  { symbol: "ン", romaji: "n", group: "n" },

  // Combo sounds (Yōon)
  { symbol: "キャ", romaji: "kya", group: "combo" },
  { symbol: "キュ", romaji: "kyu", group: "combo" },
  { symbol: "キョ", romaji: "kyo", group: "combo" },
  { symbol: "シャ", romaji: "sha", group: "combo" },
  { symbol: "シュ", romaji: "shu", group: "combo" },
  { symbol: "ショ", romaji: "sho", group: "combo" },
  { symbol: "チャ", romaji: "cha", group: "combo" },
  { symbol: "チュ", romaji: "chu", group: "combo" },
  { symbol: "チョ", romaji: "cho", group: "combo" },
  { symbol: "ニャ", romaji: "nya", group: "combo" },
  { symbol: "ニュ", romaji: "nyu", group: "combo" },
  { symbol: "ニョ", romaji: "nyo", group: "combo" },
  { symbol: "ヒャ", romaji: "hya", group: "combo" },
  { symbol: "ヒュ", romaji: "hyu", group: "combo" },
  { symbol: "ヒョ", romaji: "hyo", group: "combo" },
  { symbol: "ミャ", romaji: "mya", group: "combo" },
  { symbol: "ミュ", romaji: "myu", group: "combo" },
  { symbol: "ミョ", romaji: "myo", group: "combo" },
  { symbol: "リャ", romaji: "rya", group: "combo" },
  { symbol: "リュ", romaji: "ryu", group: "combo" },
  { symbol: "リョ", romaji: "ryo", group: "combo" },
  // Dakuten combos
  { symbol: "ギャ", romaji: "gya", group: "combo" },
  { symbol: "ギュ", romaji: "gyu", group: "combo" },
  { symbol: "ギョ", romaji: "gyo", group: "combo" },
  { symbol: "ジャ", romaji: "ja", group: "combo" },
  { symbol: "ジュ", romaji: "ju", group: "combo" },
  { symbol: "ジョ", romaji: "jo", group: "combo" },
  { symbol: "ビャ", romaji: "bya", group: "combo" },
  { symbol: "ビュ", romaji: "byu", group: "combo" },
  { symbol: "ビョ", romaji: "byo", group: "combo" },
  { symbol: "ピャ", romaji: "pya", group: "combo" },
  { symbol: "ピュ", romaji: "pyu", group: "combo" },
  { symbol: "ピョ", romaji: "pyo", group: "combo" }
];
