import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const availableLanguage = ['ko', 'en', 'chi'];
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
const option = {
  order: ['navigator', 'htmlTag', 'path', 'subdomail'],
  checkwhitelist: true,
};
i18n
  .init({
    fallbackLng: 'en',
    debug: true,
    // whitelist: availableLanguage,
    detection: option,
    interpolation: {
      escapeValue: false,
    },
    // Other options...
  })
  .then((t) => {
    // Your code after initialization
  });

// load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
// learn more: https://github.com/i18next/i18next-http-backend
// want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
// i18n
//   .use(Backend)
//   // detect user language
//   // learn more: https://github.com/i18next/i18next-browser-languageDetector
//   .use(LanguageDetector)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // init i18next
//   // for all options read: https://www.i18next.com/overview/configuration-options
//   .init({
//     fallbackLng: 'en',
//     debug: true,
//     whitelist: availableLanguage,
//     detection: option,

//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     },
//   });

export default i18n;
