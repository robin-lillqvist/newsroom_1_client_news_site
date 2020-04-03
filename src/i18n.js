import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
// import { sv, en } from "./locales";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false
    }
    // debug: true,
    // resources: {
    //   sv: {
    //     common: sv.sv
    //   },
    //   en: {
    //     common: en.en
    //   }
    // },
    // fallbackLng: "en",
    // ns: ["common"],
    // defaultNS: "common"
  });

export default i18n;
