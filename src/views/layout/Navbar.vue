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

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Hamburger from '@/components/Hamburger'     //用于弹出   左边的  弹出列表框
// import Breadcrumb from '@/components/Breadcrumb'   //  拿到  "dashboard"
// import ErrorLog from '@/components/ErrorLog'
// import Screenfull from '@/components/Screenfull'
// import SizeSelect from '@/components/SizeSelect'
// import LangSelect from '@/components/LangSelect'
// import ThemePicker from '@/components/ThemePicker'    //选择主题
import Search from '@/components/HeaderSearch'

export default {

  data(){
    return{
      displaySubMenu:true
    }
  },


  components: {
    //Breadcrumb,
    //Hamburger,
    //ErrorLog,
    //Screenfull,
    //SizeSelect,
    //LangSelect,
    //ThemePicker,
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
