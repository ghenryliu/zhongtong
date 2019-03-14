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


import { setCookie,getCookie,delCookie } from  "@/api/cookie";
import { Logout } from '@/api/login'

export default {

  data(){
    return{
      displaySubMenu:true,
      account:''
    }
  },

  mounted(){
    /*页面挂载获取保存的cookie值，渲染到页面上*/
    if(this.isLogin==undefined || this.isLogin==""){
      this.$router.replace('/')
    }
    else{
      console.log("mounterd>>>???",this.isLogin)
      this.account=getCookie('account')
    }
  },




  methods: {

    //新增：
    logout(){
      Logout().then(
        res => {
        console.log("返回的数据>>>", res.data)
        if(res.data.code===1){
          Toasts("用户未登录或已过期，请重新登录！")
          this.router.push({path:'/'})
        }
        else if(res.data.code===0){
          Toasts("保存成功")
        }
      })




      // delCookie("account")
      // console.log("navbar>>>delccookie")
      // let uname = getCookie('account')
      // console.log("navbar>>>???")
      // if(uname == ""){
      //   this.$router.push('/')
      // }


    },

    toggleSubMenu(){
      this.displaySubMenu==true? this.displaySubMenu=false:this.displaySubMenu=true
    },

    assetsmg(){
      this.displaySubMenu=false
    }
  },

  computed:{
    isLogin(){
      this.account=getCookie('account')
      console.log("this.account",this.account)
      return this.account
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >

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
