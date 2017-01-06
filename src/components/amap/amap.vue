<!----------------
 --@description
 --@author wangzhipei
 --@date 2017/1/5/0005.
------------------>
<template>
  <div class="map-container">
    <el-amap :mapStyle="mapStyle" :vid="vid" :zoom="zoom" :map-manager="amapManager" :center="center" :events="events">
      <el-amap-marker v-for="marker in markers" :position="marker.position" :events="marker.events"
                      :content="marker.content" :visible="marker.visible"></el-amap-marker>
      <el-amap-info-window v-for="window in windows" :position="window.position" :content="window.content"
                           :offset="window.offset"
                           :isCustom="true" :open="window.open" :events="window.events"></el-amap-info-window>
    </el-amap>
  </div>
</template>
<script type="text/ecmascript-6">
  // const RESIDENT = '常驻位置';
  // const CURRENT = '当前位置';
  const OFFICE = '办公位置';
  const HOME = '家庭住址';

  import { AMapManager } from 'vue-amap';
  /* eslint-disable no-new */
  let amapManager = new AMapManager();
  export default {
    name: 'amap',
    data () {
      return {
        vid: 'amap',
        zoom: 5,
        center: [98.92548, 32.928166],
        mapStyle: 'dark',
        amapManager: amapManager,
        events: {
          'zoomchange': () => {
            let zoom = this.amapManager.getMap().getZoom();
            if (zoom > 10) {
              console.log(111);
            } else {
              console.log(222);
            }
          }
        },
        windows: []
      };
    },
    computed: {
      markers () {
        let device = this.$store.state.device;
        let _homeMark = this.homeMark(device);
        let _compMark = this.compMark(device);
        let markers = this.cityMarks(device);
        markers.push(_homeMark)
        markers.push(_compMark)
        return markers;
      }
    },
    methods: {
      getContent (type, name) {
        let _icon = '<div class="img_bg"></div>';
        if (type === 'home') {
          _icon = `<span class="iconfont icon-jia"></span>`;
        }
        if (type === 'office') {
          _icon = '<span class="iconfont icon-gongsi"></span>';
        }
        return `<div class="${type}-pos">
                    ${_icon}
                    <span class="name">${name || ''}</span>
                </div>`;
      },

      largeZoom () {
        let device = this.$store.state.device;
        this.markers = this.cityMarks(device).push(this.homeMark()).push(this.compMark());
      },

      tinyZoom () {
        let device = this.$store.state.device;
        this.markers = this.provinceMarks(device).push(this.homeMark()).push(this.compMark());
      },
      provinceMarks (device) {
        let markers = [];
        device.provinceLoc.forEach((item) => {
          markers.push({
            position: [item.lng, item.lat],
            events: {
              mouseover: (e) => {
                this.getWindows(e.lnglat);
              },
              mouseout: (e) => {
                this.removeWindows();
              }
            },
            content: this.getContent('arrived'),
            visible: true
          })
        });
        return markers;
      },

      cityMarks (device) {
        let markers = [];
        console.log(device);
        device.cityLoc.forEach((item) => {
          markers.push({
            position: [item.lng, item.lat],
            events: {
              mouseover: (e) => {
                console.log(e);
                this.getWindows(e.target.G.position, '');
              },
              mouseout: (e) => {
                this.removeWindows();
              }
            },
            content: this.getContent('arrived'),
            visible: true
          })
        });
        return markers;
      },

      homeMark (device) {
        return {
          position: [device.home.lng, device.home.lat],
          content: this.getContent('home', HOME),
          visible: true
        }
      },

      compMark (device) {
        return {
          position: [device.comp.lng, device.comp.lat],
          content: this.getContent('office', OFFICE),
          visible: true
        }
      },
      getWindows (pos, data) {
        this.windows = [{
          isCustom: true,
          offset: [170, -10],
          position: [pos.lng, pos.lat],
          open: true,
          content: this.getWindowContent(data)
        }];
      },

      getWindowContent (data) {
        console.log(111);
        let type = 'province';
        let content = '到过次数：3次';
        if (type === 'province') {
          content = '<p>到过次数：3次</p>';
        }
        return `<div class="window-info">
                  <div class="${type}-content">
                    <div class="content">${content}</div>
                  </div>
                  <div class="bottom-line"></div>
                </div>`;
      },

      removeWindows () {
        this.windows = [];
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .map-container
    width 100%
    height 100%
    .arrived-pos,
    .home-pos,
    .office-pos
      .iconfont
        display block
        text-align center
        font-size 24px
      .img_bg
        width 46px
        height 46px
        background url('imgs/arrived.png') 0 0 no-repeat
      .img_bg:hover
        background url('imgs/arrived_hover.png') 13px 13px no-repeat
      .name
        font-size 14px
        text-align center
        display block
        margin-top 8px
    .office-pos
      width 100px
      color gold
    .home-pos
      width 100px
      color #FF5809
    /* 清楚vue-amap信息窗口的默认样式*/
    .amap-info-content
      background none
      border none
      padding 0
      outline none
      box-shadow none
    .amap-info-close, .amap-info-sharp
      display none
    .window-info
      .city-content
        height 62px
        line-height 62px
        font-size 22px
        color #fff
        margin-left 105px
        background url('imgs/popo.png') 0 0 no-repeat
        .content
          box-sizing border-box
          width 180px
          height 100%;
          margin-left 28px
          padding 0 10px
      .province-content
        height 218px
        margin-left 135px
        box-sizing border-box
        padding 15px
        color #fff
        background url('imgs/province_content_bg.png') 0 0 no-repeat
        .content
          box-sizing border-box
          width 180px
          height 100%
          padding 10px 15px 10px 0
          p
            padding 0
            margin 0
            line-height 28px
            text-indent 10px
            font-size 22px
      .bottom-line
        width 182px
        height 37px
        background url('imgs/bottom_line.png') 0 0 no-repeat
</style>
