<template>
  <div :class="classObj" class="app-wrapper">
    <!--<div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>-->
    <!--<sidebar class="sidebar-container"/>-->

    <!--<div class="main-container">-->
      <split-pane :min-percent='10' :default-percent='15' split="vertical" @resize="resize">
        <!--1  @resize="resize"-->
        <template slot="paneL">
          <navbar/>
        </template>

        <template slot="paneR">
          <!--<split-pane split="horizontal" >-->
            <!--<template slot="paneL">-->
              <!--&lt;!&ndash;<tags-view  />&ndash;&gt;-->
            <!--</template>-->
            <!--<template slot="pane"R>-->
              <app-main />
            <!--</template>-->
          <!--</split-pane>-->
        </template>
      </split-pane>
    <!--</div>-->
  </div>
</template>

<script>
  import { Navbar, Sidebar, AppMain, TagsView } from './components'
  import ResizeMixin from './mixin/ResizeHandler'
  import SplitPane from "vue-splitpane/src/split-pane/index";

  import splitPane from 'vue-splitpane'

  export default {
    name: 'Layout',
    components: {
      splitPane,
      SplitPane,
      Navbar,
      Sidebar,
      AppMain,
      TagsView
    },
    mixins: [ResizeMixin],
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      },
      device() {
        return this.$store.state.app.device
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    },
    methods: {
      handleClickOutside() {
        this.$store.dispatch('closeSideBar', { withoutAnimation: false })
      },
      resize() {
        console.log('resize')
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    background-color: green;  /*除开tag位置的其它地方的颜色*/
    &.mobile.openSidebar{
      position: fixed;
      top: 5rem; /*当打开  侧边栏时 页面的位置会向下移动5rem  */
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.5;   /*侧边栏打开时的主页面透明度*/
    width: 100%;
    top: 13rem;
    height: 100%;
    position: absolute;
    z-index: 999;

  }




  .main-container{
    /*height: 100%;*/
    /*width: 100%;*/

  background-color: yellow;
  }
  /*.left-container {*/
  /*background-color: #F38181;*/
  /*width:150px;*/
  /*}*/
</style>

