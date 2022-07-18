// this file should be imported only ONCE GLOBALlY, since there are init scripts.

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: 'en-US',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18next;
