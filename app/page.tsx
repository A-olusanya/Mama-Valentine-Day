"use client";

import { useState } from "react";

// Define the type for translations
type Language = "en" | "pidgin" | "yoruba";

const translations: Record<
  Language,
  {
    question: string;
    yes: string;
    no: string;
    funnyResponses: string[];
    loveMessage: string;
  }
> = {
  en: {
    question: "Mama Mia, will you be my Valentine?",
    yes: "Yes",
    no: "No 😥",
    funnyResponses: [
      "Are you sure??🙄",
      "Really sure?🤔",
      "Are you positive???😶",
      "Please my love...🙏",
      "Just think about it🥺",
      "If you say no, I'll be very sad🙁",
      "I'll be very very sad😕",
      "I'll be very very very sad😓",
      "I'll be very very very very sad😖",
      "Ok fine😡, I'll stop asking...",
      "Just kidding, PLEASE SAY YES🙏",
      "You're breaking my heart😥😥😥",
    ],
    loveMessage: "Thank you, my dearest Mama Mia. You’ve made me the happiest person alive. I love you endlessly!",
  },
  pidgin: {
    question: "Mama Mia, you go be my Val?",
    yes: "I go be your Val 💕",
    no: "Mbanu 😥",
    funnyResponses: [
      "You sure so?🙄",
      "You sure sure?🤔",
      "You wan break my heart??😶",
      "Abeg na, my love...🙏",
      "Abeg think am well🥺",
      "If you talk no, I go cry🙁",
      "I go cry die o😕",
      "E go pain me scatter 😓",
      "You wan make I no sleep???😖",
      "Ok, I no go ask again😡...",
      "No vex, abeg SAY YES🙏",
      "You dey scatter my heart o😥😥😥",
    ],
    loveMessage: "Mama Mia, na you be my world. You don make me the happiest person. I go love you till forever finish!",
  },
  yoruba: {
    question: "Mama Mia, ṣe iwọ yoo jẹ Val mi?",
    yes: "Bẹẹni, mo fẹran rẹ 💕",
    no: "Rara 😥",
    funnyResponses: [
      "Ṣe o da mi loju?🙄",
      "Ṣe o mọ daju gaan?🤔",
      "O fẹ ṣe mi ni ipọnju??😶",
      "Jọwọ, ifẹ mi...🙏",
      "Ronú daradara o🥺",
      "Ti o ba sọ rara, inu mi yoo bajẹ 🙁",
      "O ṣe mi le koko o😕",
      "Inu mi yoo bajẹ ju😓",
      "O fẹ ki n ṣubu lulẹ??😖",
      "O daa, mi o ni bi o lẹẹkan si😡...",
      "Ẹ ṣe idariji, JOWỌ sọ BẸẸNI🙏",
      "O n fọ ọkàn mi o😥😥😥",
    ],
    loveMessage: "Mama Mia, iwọ ni ẹmi ati ọkàn mi. O ti jẹ ki n di eniyan ayọ julọ. Mo nifẹ rẹ laelae!",
  },
};

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [lang, setLang] = useState<Language>("en"); // Explicitly set type

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
  };

  const t = translations[lang]; // Translations lookup

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {/* Language Selector */}
      <div className="absolute top-4 left-4">
        <button
          className={`mx-2 px-3 py-1 rounded ${
            lang === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleLanguageChange("en")}
        >
          English
        </button>
        <button
          className={`mx-2 px-3 py-1 rounded ${
            lang === "pidgin" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleLanguageChange("pidgin")}
        >
          Pidgin
        </button>
        <button
          className={`mx-2 px-3 py-1 rounded ${
            lang === "yoruba" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleLanguageChange("yoruba")}
        >
          Yoruba
        </button>
      </div>

      {yesPressed ? (
        <>
          <img
            src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.webp"
            alt="Animated Bear Kiss"
          />
          <div className="text-[2rem] font-bold text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            {t.loveMessage}
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Love Bear"
          />
          <h1 className="text-[2rem] text-center leading-tight md:text-5xl md:leading-snug bg-gradient-to-r from-green-600 via-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
            {t.question}
          </h1>
          <div className="text-center space-y-5">
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              {t.yes}
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0
                ? t.no
                : t.funnyResponses[noCount % t.funnyResponses.length]}
            </button>
          </div>
        </>
      )}
    </div>
  );
}