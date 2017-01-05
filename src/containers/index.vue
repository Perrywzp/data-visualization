<template>
  <div class="index" id="index">
    <amap></amap>
    <sidebar></sidebar>
  </div>
</template>

<script type="text/ecmascript-6">
  import sidebar from '../components/sidebar/sidebar';
  import amap from '../components/amap/amap';
  export default {
    name: 'index',
    data () {
      return {};
    },
    components: {
      sidebar,
      amap
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .index
    width 100%
    height 100%
</style>
