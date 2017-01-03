<!--
** descripition:[desc]
** author perry
** date 16/12/31
-->
<template>
  <div class="devicelist-content blue-ps">
    <ul class="devicelist" ref="devicelist">
      <li @click="showDevice" v-for="(device, index) in devices" :key="device.id">{{index+1}}. {{ device.name }}</li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import Ps from 'perfect-scrollbar';

  export default {
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
      showDevice () {

      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/interpolation.styl"

  .devicelist-content
    box-sizing border-box
    width 360px
    height 380px
    margin 0 0 0 50px
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
