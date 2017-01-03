// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import './common/stylus/libs/perfect-scroll-theme-blue.css';
import './common/icons/iconfont/iconfont.css';
import './common/stylus/index.styl';

import Index from './containers/index.vue';
import store from './store/index';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Index
      }
    }
  ]
});

export default new Vue({
  el: '#index',
  store,
  router,
  render: h => h('router-view')
});

