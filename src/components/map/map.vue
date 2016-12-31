<!--
** descripition:[desc]
** author perry
** date 16/12/31
-->
<template>
  <div id="map" class="map"></div>
</template>
<script type="text/ecmascript-6">
  export default {
    mounted () {
      /* eslint-disable no-new */
      /* eslint-disable no-undef */
      new AMap.Map('map');
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .map
    width 100%
    height 100%
</style>
