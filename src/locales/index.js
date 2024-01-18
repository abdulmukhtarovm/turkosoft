import { LANGUAGE } from "../tools/constants";
// import { en } from "./EN";
import { ru } from "./RU";
import { uz } from "./UZ";
import { en } from "./EN";
import { tr } from "./TR";

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
  return getLanguage() === "ru"
    ? ru[word]
    : getLanguage() === "en"
    ? en[word]
    : getLanguage() === "tr"
    ? tr[word]
    : uz[word];
};
