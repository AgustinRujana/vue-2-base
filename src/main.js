import Vue from 'vue';
import App from '@/App.vue';
import i18n from '@plugins/i18n'

/**
 * Style
 */
import "@assets/css/tailwind.css";
import "@assets/css/main.css";

Vue.config.productionTip = false;

/**
 * Vue Instance
 */
new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app');
