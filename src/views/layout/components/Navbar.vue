<template>
  <div class="navbar">
    <div class="top">

    <img class="log" src="@/assets/ztkd_black.png" alt="中通快递log"/>
    <div class="instr">硬件资产维修管理系统</div>

    <div class="menu">

    <div class="usermg" @click="toggleSubMenu">用户管理
      <ul v-if="displaySubMenu">
      <li >管理员</li>
        <!--1 @click="toPersonalPage"-->
      <li  >维修人员</li>
        <!--2 @click="toMaintainPage"-->
      </ul>
    </div>

    <div class="assetsmg" @click="assetsmg">资产管理</div>

    </div>

    </div>

    <div class="bottom">
      <img class="logoutpic" src="@/assets/logout.png" alt="中通快递logout"/>
      <div class="logoutbtn" @click="logout">退出登录</div>
    </div>



    <!--<hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>-->
    <!--<breadcrumb class="breadcrumb-container"/>-->
    <!--<div class="right-menu">-->
      <!--<template v-if="device!=='mobile'">-->

        <!--<div>"device!=='mobile'" </div>-->
        <!--<search class="right-menu-item" />-->

        <!--<error-log class="errLog-container right-menu-item hover-effect"/>-->

        <!--<screenfull class="right-menu-item hover-effect"/>-->

        <!--<el-tooltip :content="$t('navbar.size')" effect="dark" placement="bottom">-->
          <!--<size-select class="right-menu-item hover-effect"/>-->
        <!--</el-tooltip>-->

        <!--<lang-select class="right-menu-item hover-effect"/>-->

        <!--<el-tooltip :content="$t('navbar.theme')" effect="dark" placement="bottom">-->
          <!--<theme-picker class="right-menu-item hover-effect"/>-->
        <!--</el-tooltip>-->
      <!--</template>-->



      <!--<el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">-->

        <!--<div class="avatar-wrapper">-->
          <!--&lt;!&ndash;1  动图的设置&ndash;&gt;-->
          <!--<img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
          <!--&lt;!&ndash;<2>   三角形下表箭头&ndash;&gt;-->
          <!--<i class="el-icon-caret-bottom"/>-->
        <!--</div>-->

        <!--<el-dropdown-menu slot="dropdown">-->

          <!--&lt;!&ndash;<3   一下三个的顺序决定  在页面上 显示的顺序  &ndash;&gt;-->

          <!--<a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">-->
            <!--<el-dropdown-item>-->
              <!--{{ $t('navbar.github') }}-->
            <!--</el-dropdown-item>-->
          <!--</a>-->


          <!--<router-link to="/">-->
            <!--<el-dropdown-item>-->
              <!--{{ $t('navbar.dashboard') }}-->
            <!--</el-dropdown-item>-->
          <!--</router-link>-->


          <!--&lt;!&ndash;<4   加入” divided “  进行分组  &ndash;&gt;-->

          <!--<el-dropdown-item divided >-->
            <!--<span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>-->
          <!--</el-dropdown-item>-->


        <!--</el-dropdown-menu>-->

      <!--</el-dropdown>-->



    <!--</div>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'     //用于弹出   左边的  弹出列表框
import Breadcrumb from '@/components/Breadcrumb'   //  拿到  "dashboard"
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import LangSelect from '@/components/LangSelect'
import ThemePicker from '@/components/ThemePicker'    //选择主题
import Search from '@/components/HeaderSearch'

export default {

  data(){
    return{
      displaySubMenu:true
    }
  },


  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    LangSelect,
    ThemePicker,
    Search
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'device'
    ])
  },
  methods: {
    // toggleSideBar() {
    //   this.$store.dispatch('toggleSideBar')
    // },
    // logout() {
    //   this.$store.dispatch('LogOut').then(() => {
    //     location.reload()// In order to re-instantiate the vue-router object to avoid bugs
    //   })
    // },



    //新增：
    logout(){
        this.$store.dispatch('LogOut').then(() => {
          location.reload()// In order to re-instantiate the vue-router object to avoid bugs
        })
    },
    toggleSubMenu(){
      this.displaySubMenu==true? this.displaySubMenu=false:this.displaySubMenu=true
    },

    assetsmg(){
      this.displaySubMenu=false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  *{
    list-style: none;
  }
.navbar {
  height: 100vh;
  /*width:10.8rem;*/
  overflow: hidden;
  background-color: #333333;
}

  /*<!--.hamburger-container {-->
    <!--background-color: green;-->
    <!--line-height: 46px;-->
    <!--height: 100%;-->
    <!--float: left;-->
    <!--cursor: pointer;-->
    <!--transition: background .3s;-->

    <!--&:hover {-->
      <!--background: rgba(0, 0, 0, .025)-->
    <!--}-->
  <!--}-->

  <!--.breadcrumb-container {-->
    <!--float: left;-->
    <!--background-color: black;-->
  <!--}-->

  <!--.errLog-container {-->
    <!--display: inline-block;-->
    <!--vertical-align: top;-->
  <!--}-->

  <!--.right-menu {-->
    <!--float: right;-->
    <!--height: 100%;-->
    <!--line-height: 50px;-->
    <!--background-color: brown;-->

    <!--&:focus {-->
      <!--outline: none;-->
    <!--}-->

    <!--.right-menu-item {-->
      <!--background-color: #1e6abc;-->
      <!--display: inline-block;-->
      <!--padding: 0 8px;-->
      <!--height: 100%;-->
      <!--font-size: 18px;-->
      <!--color: #5a5e66;-->
      <!--vertical-align: text-bottom;-->

      <!--&.hover-effect {-->
        <!--cursor: pointer;-->
        <!--transition: background 0.3s;-->

        <!--&:hover {-->
          <!--background: rgba(0, 0, 0, .025)-->
        <!--}-->
      <!--}-->
    <!--}-->

    <!--.avatar-container {-->
      <!--margin-right: 30px;-->

      <!--.avatar-wrapper {-->
        <!--margin-top: 0px;-->
        <!--position: relative;-->

        <!--.user-avatar {-->
          <!--cursor: pointer;-->
          <!--width: 40px;-->
          <!--height: 40px;-->
          <!--border-radius: 10px;-->
        <!--}-->

        <!--.el-icon-caret-bottom {-->
          <!--cursor: pointer;-->
          <!--position: absolute;-->
          <!--right: -20px;-->
          <!--top: 25px;-->
          <!--font-size: 32px;   //12 px-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--}-->*/



//以下为新增的格式
.navbar{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.top{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.bottom{
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.bottom span{

}
  .log{
    margin-top: 0.85rem;
  }
  .instr{
    margin-top: 0.5rem;
    font-family: PingFangSC-Semibold;
    font-size: 0.8rem;
    color: #FFFFFF;
    letter-spacing: 0;

  }
 .menu{
  margin-top: 1.3rem;
  width: 92.5%;
  background-color: #1e6abc;
 }

  .memu>div{
    font-family: PingFangSC-Semibold;
    font-size: 0.7rem;
    color: #FBFBFB;
    letter-spacing: 0;
    line-height: 24px;

  }

  .logoutpic{
    margin-bottom:1.5rem;
  }
  .logoutbtn{
    width: 10rem;
    height: 2rem;
    background: #4A4A4A;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .usermg{

    font-family: PingFangSC-Semibold;
    font-size: 0.7rem;
    color: #FBFBFB;
    letter-spacing: 0;
    line-height: 24px;

  }

</style>
