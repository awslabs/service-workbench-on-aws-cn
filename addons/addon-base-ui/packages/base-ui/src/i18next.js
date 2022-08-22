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
    partialBundledLanguages: true,
    /* The resources of the utils namespace must be placed here, 
    because the relevant content will be rendered before the init function completes */
    resources: {
      en: {
        utils: {
          progress: {
            header: 'Just one second',
            subheader: 'Great things are now happening, please wait!',
          },
          error: {
            header: 'We have a problem',
            subheader: 'See if refreshing the browser will resolve your issue',
          },
        },
      },
      zh: {
        utils: {
          progress: {
            header: '稍等片刻',
            subheader: '正在准备中，马上就好！',
          },
          error: {
            header: '我们遇到了一些问题',
            subheader: '你可以刷新一下试试看能不能解决这个问题',
          },
        },
      },
    },
    ns: [
      'accounts',
      'auth',
      'common',
      'data',
      'dashboard',
      'files',
      'sidebar',
      'ssh',
      'studies',
      'types',
      'users',
      'workspaces',
    ],
    defaultNS: 'common',
    fallbackLng: 'en',
    debug: false,
    returnObjects: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
