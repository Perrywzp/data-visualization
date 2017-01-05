// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// import './common/stylus/libs/perfect-scroll-theme-blue.css';
import 'node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.css';
import './common/icons/iconfont/iconfont.css';
import './common/stylus/index.styl';

import Index from './containers/index.vue';
import store from './store/index';
import AMap from 'vue-amap';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(AMap);

AMap.initAMapApiLoader({
  key: 'map',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

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

