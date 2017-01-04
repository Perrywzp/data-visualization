<!----------------
 --@description
 --@author wangzhipei
 --@date 2016/12/30/0030.
------------------>
<template>
  <div class="sideBar">
    <div class="header">
      <input type="text" :value="searchValue">
    </div>
    <devicelist :devices="devices" ref="this"></devicelist>
  </div>
</template>
<script type="text/ecmascript-6">
  import devicelist from '../deivcelist/devicelist.vue';
  import mock from '../../mock/mock';
  import _ from 'lodash';

  export default {
    data () {
      return {
        devices: [],
        device: {}
      }
    },

    computed: {
      searchValue () {
        return _.isEmpty(this.devices) ? '请输入设备名称' : this.devices[0].name
      }
    },
    created () {
      var that = this;
      mock.getDevices(function (data) {
        console.log(data);
        that.devices = data.data;
      });
    },
    components: {
      devicelist
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sideBar
    position fixed
    z-index 100
    left 0
    top 0
    width 440px
    height 100%
    background-image url('imgs/side-bg.png')
    background-position left top
    background-repeat no-repeat
    background-color rgba(7, 19, 22, .4)
    .header
      box-sizing border-box
      width 380px
      height 91px
      line-height 91px
      margin 20px 0 25px 45px
      padding 0 85px 0 40px
      background url('imgs/device-search.png') -8px -3px no-repeat
      input
        background transparent
        width 250px
        height 91px
        margin none
        padding none
        line-height 91px
        font-size 38px
        color rgb(188, 250, 255)
        font-weight 300
        border none
        outline none

</style>

