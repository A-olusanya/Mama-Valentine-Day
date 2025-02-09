"use client";

import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [lang, setLang] = useState("en");

  const translations = {
    en: {
      question: "Will you be my Valentine, Mama Mia? 💖",
      yes: "Yes! 😍",
      no: "No 😥",
      funnyResponses: [
        "No",
        "Are you sure, my love? 🥺",
        "Think about it again! 🤔",
        "Mama Mia, don’t break my heart! 💔",
        "Please, my heart is fragile! 🥹",
        "If you say no, I’ll cry! 😭",
        "You’re too cute to say no! 🥰",
        "Last chance, my queen! 👑",
      ],
      loveMessage: "My love, my heart beats only for you. Every moment with you is like a dream, and I wouldn't trade it for anything. You are my forever, my happiness, my everything. 💖💋",
    },
    pidgin: {
      question: "Mama Mia, you go be my Val? 💖",
      yes: "I go do am! 😍",
      no: "Mbanu 😥",
      funnyResponses: [
        "Nooo",
        "You dey sure so? 🥺",
        "Abeg reason am again! 🤔",
        "Mama Mia, no wound my heart o! 💔",
        "Abeg, I no fit chop breakfast! 🥹",
        "If you say no, I go start dey cry o! 😭",
        "You too fine to say no! 🥰",
        "Last chance o, my queen! 👑",
      ],
      loveMessage: "Ah! Mama Mia, my belle dey sweet me die! You be my peace, my joy, my wahala wey I no go ever tire for. I love you pass anything! 💖💋",
    },
    yoruba: {
      question: "Mama Mia, se o fe je oko mi? 💖",
      yes: "Beni o! 😍",
      no: "Rara o 😥",
      funnyResponses: [
        "Rara",
        "Se o da? 🥺",
        "Tunto ro e o! 🤔",
        "Mama Mia, e jo, ma binu si mi o! 💔",
        "Ma jeki n kan’ra mi o! 🥹",
        "Ti o ba so rara, emi a sunkun o! 😭",
        "O fine ju lati so rara! 🥰",
        "Eleyi ni ayeye o, my queen! 👑",
      ],
      loveMessage: "Mama Mia, ife ti mo ni si e ko ni lara, o wa jin, o wa tobi. Iwo ni ayaba mi, opo ewa, eni ti mo fe titi lai. Mo ni ife re ju gbogbo aye lo. 💖💋",
    },
  };

  const t = translations[lang];
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount((prev) => prev + 1);
  };

  const toggleLanguage = () => {
    const languages = Object.keys(translations);
    const currentIndex = languages.indexOf(lang);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLang(languages[nextIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {/* Language Switch Button */}
      <button
        onClick={toggleLanguage}
        className="absolute top-5 left-5 bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Switch to {lang === "en" ? "Pidgin" : lang === "pidgin" ? "Yoruba" : "English"}
      </button>

      {yesPressed ? (
        <div>
          <img
            src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.webp"
            alt="Romantic"
            className="mx-auto h-60"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-red-600">{t.loveMessage}</h1>
        </div>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Love"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold">{t.question}</h1>
          <div className="mt-8 space-x-5">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              {t.yes}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded"
              onClick={handleNoClick}
            >
              {noCount === 0 ? t.no : t.funnyResponses[noCount % t.funnyResponses.length]}
            </button>
          </div>
        </>
      )}
    </div>
  );
}