<!----------------
 --@description
 --@author wangzhipei
 --@date 2017/1/5/0005.
------------------>
<template>
  <div class="map-container">
    <el-amap :vid="vid" :zoom="zoom" :center="center">
      <el-amap-marker v-for="marker in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable"></el-amap-marker>
    </el-amap>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'amap',
    data () {
      return {
        vid: 'amap',
        zoom: 5,
        center: [98.92548, 32.928166],
        /* markers: [
          {
            position: [120.228592, 30.196997],
            events: {
              click: () => {
                /!* eslint-disable no-undef *!/
                alert('click marker');
                console.log(this);
              },
              dragend: (e) => {
                console.log(e);
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
              }
            },
            visible: true,
            draggable: false
          }
        ] */
      };
    },
    mehtods: {
      makeMarkers () {

      }
    },
    computed: {
      markers () {
        let markers = [];
        let device = this.$store.state.device;
        device.cityLoc.forEach((item) => {
          markers.push({
            position: [item.lng, item.lat],
            events: {
              click: () => {
                /* eslint-disable no-undef */
                alert('click marker');
                console.log(this);
              },
              dragend: (e) => {
                console.log(e);
                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
              }
            },
            /* eslint-disable no-undef */
            icon: new AMap.Icon({
              image: 'http://localhost:8080/static/imgs/amap/arrived.png',
              /* eslint-disable no-undef */
              size: new AMap.Size(24, 24)
            }),
            visible: true,
            draggable: false
          });
        });
        return markers;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .map-container
    width 100%
    height 100%
    .arrived-city
      width 46px
      height 46px
      background-color red
      background url('imgs/arrived.png') 0 0 no-repeat
</style>
