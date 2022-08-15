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
    ns: ['accounts', 'common', 'data', 'files', 'ssh', 'studies', 'types', 'users', 'workspaces'],
    defaultNS: 'common',
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
