import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import pt from 'vuetify/es5/locale/pt';
import en from 'vuetify/es5/locale/en';

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#1D1D36',
        secondary: '#62c6c4',
        accent: '#4B38E6',
        error: '#f05050',
        info: '#44699C',
        success: '#27c24c',
        warning: '#ff902b',
        orange: '#f3713e',
        lightGrey: '#f9f9fc',
        greyDark: '#efeff5',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
  lang: {
    locales: { pt, en },
    current: 'pt',
  },
});
