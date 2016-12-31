<template>
  <div class="index" id="index">
    <sidebar></sidebar>
    <v-map></v-map>
  </div>
</template>

<script type="text/ecmascript-6">
  import map from '../components/map/map';
  import sidebar from '../components/sidebar/sidebar';

  export default {
    name: 'index',
    data () {
      return {};
    },
    components: {
      'v-map': map,
      sidebar
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .index
    width 100%
    height 100%
</style>
