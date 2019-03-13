<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <!--<keep-alive :include="cachedViews">-->
        <router-view :key="key"/>
      <!--</keep-alive>-->
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    // cachedViews() {
    //   console.log('layout>>>Appmain>>>this.$store.state.tagsView.cachedViews', this.$store.state.tagsView.cachedViews)
    //   return this.$store.state.tagsView.cachedViews
    // },
    key() {
      console.log('layout>>>Appmain>>>this.$route.fullPath', this.$route.fullPath)
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  /*min-height: calc(100vh - 84px);*/
  /*min-width:calc(100vw - 216px);*/
  height:100vh;

  /*height: 100%;*/    /*设置100% height 不现实！！！*/
  position: relative;
  overflow: hidden;
  background-color: brown;
}
</style>

