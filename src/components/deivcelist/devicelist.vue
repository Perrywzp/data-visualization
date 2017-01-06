<!--
** descripition:[desc]
** author perry
** date 16/12/31
-->
<template>
  <div class="device-box" ref="devicebox">
    <div v-show="listShow" class="devicelist-content blue-ps">
      <ul class="devicelist" ref="devicelist">
        <li @click="showDevice(device, $event)" v-for="(device, index) in devices" :key="device.id">{{index+1}}. {{ device.name }}</li>
      </ul>
    </div>
    <device-info :deviceData="selectedDevice" ref="deviceInfo"></device-info>
  </div>
</template>
<script type="text/ecmascript-6">
  import deviceinfo from '../deviceinfo/deviceinfo.vue'
  import mock from '../../mock/mock'
  import Ps from 'perfect-scrollbar'
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        selectedDevice: {},
        listShow: true
      }
    },

    props: {
      devices: {
        type: Array,
        default () {
          return [{
            'id': 1420, 'model': 'iPhone7,2', 'name': '\u82F9\u679C'
          }];
        }
      }
    },

    mounted () {
      Ps.initialize(this.$refs.devicelist, {theme: 'blue'});
    },
    updated () {
      Ps.update(this.$refs.devicelist);
    },
    methods: {
      showDevice (device, $event) {
        var that = this;
        mock.getDeviceInfo((data) => {
          that.selectedDevice = data.data;
          that.updateDevice(data.data);
          that.listShow = false;
          that.$refs.deviceInfo.show();
        })
      },
      showList () {
        this.listShow = true;
      },
      initScroll () {
        Ps.initialize(this.$refs.devicebox, {theme: 'blue'});
      },

      ...mapActions(['updateDevice'])
    },
    components: {
      'device-info': deviceinfo
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/interpolation.styl"
  .device-box
    position fixed
    left 45px
    top 130px
    bottom 10px
    width 388px

  .devicelist-content
    box-sizing border-box
    width 360px
    height 380px
    margin-left 8px
    padding 15px 35px 30px 20px
    background url('imgs/devicelist.png') 2px 0 no-repeat

  .devicelist
    position relative
    width 100%;
    height 100%;
    margin 0
    padding 0 16px 0 5px
    list-style none
    color rgb(188, 250, 255)
    li
      height 52px
      line-height 52px
      font-size 34px
      font-weight 700
      border-bottom 2px solid rgb(10, 245, 248)
      cursor pointer

</style>
