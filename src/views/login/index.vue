<template>

  <div class="main">

    <div class="middle"/>
    <div class="login-container">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

        <div class="headblue"/>
        <div class="ztkd">
          <img class="ztkdpic" src="@/assets/ztkd.png" alt="404">
          <div>硬件资产维修管理系统</div>
        </div>













        <el-form-item prop="account">
          <el-input
            v-model="loginForm.account"
            placeholder="admin"
            name="username"
            type="text"
            auto-complete="on"
          />
          <span class="svg-container">
            <svg-icon icon-class="user" />
            <!--加小人-->
          </span>

        </el-form-item>


        <el-form-item prop="pwd">

          <el-input
            v-model="loginForm.pwd"
            :type="passwordType"
            placeholder="admin"
            name="password"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />

          <span class="svg-container">
            <svg-icon icon-class="password"/>
          </span>
          <!--<span class="show-pwd" @click="showPwd">-->
          <!--<svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />-->
          <!--</span>-->
        </el-form-item>









        <div v-if="pswPass" class="psw"> 账号密码错误！请重试</div>

        <el-button :loading="loading" type="primary" style="width:80%;margin-bottom:30px;" @click.native.prevent="handleLogin">
          {{ ('login.logIn') }}
        </el-button>


      </el-form>



    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

// import LangSelect from '@/components/LangSelect'
// import SocialSign from './socialsignin'


import {loginByUsername} from "../../api/login";

import {setCookie} from "../../utils/cookie";


export default {
  name: 'Login',
  // components: { LangSelect, SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      console.log("对用户名进行验证",value,)
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      console.log("对密码的长度进行验证",value,)
      if (value.length < 4) {
        console.log("password value",value)

        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }







    return {
      pswPass: true,
      loginForm: {
        // username: 'admin',
        // password: '111112',
        account:'admin',
        pwd:'admin'
      },
      loginRules: {
        // username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        // password: [{ required: true, trigger: 'blur', validator: validatePassword }],

        account: [{ required: true, trigger: 'blur', validator: validateUsername }],
        pwd: [{ required: true, trigger: 'blur', validator: validatePassword }],
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined,
      account:'',
    }
  },


  // mounted(){
  //   if(getCookie('account')){
  //     this.$route.push('/dashboard')
  //   }
  // },


  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  // created() {
  //   // window.addEventListener('hashchange', this.afterQRScan)
  // },
  // destroyed() {
  //   // window.removeEventListener('hashchange', this.afterQRScan)
  // },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },


    handleLogin() {

      console.log("username&password",this.loginForm)
      // loginByUsername1(this.loginForm)

      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     console.log('success',valid)
      //     this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
      //
      //       this.loading = false
      //       console.log("go this way llll" ,this.loginFrom,this.redirect)
      //       this.$router.push({ path:'generalCenter' })
      //     })
      //       .catch(() => {
      //         console.log("go this way")
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })



      loginByUsername(this.loginForm.account,this.loginForm.pwd).then(
        res=>{
          console.log("返回的数据>>>",res.data)

          if (res.data.code===0){
            // this.$router.push('/zhongtong/personal')
            setCookie('account',this.loginForm.account,1000*60)
            setTimeout(function(){
              this.$router.push('/zhongtong/personalCenter')}
                .bind(this),1000)
          }
      })







      // this.$refs.loginForm.validate(valid => {
      //   console.log("this.$refs.loginForm.validate,对服务器进行登录请求...")
      //   if (valid) {
      //     this.loading = true
      //     const data="account=admin&pwd=admin"
      //
      //     this.$store.dispatch('LoginByUsername', data).then(() => {
      //
      //       this.loading = false
      //       console.log("this.loginForm",this.loginForm,this.loading)
      //       // this.$router.push({ path: this.redirect || '/' })
      //       console.log("this.redirect",this.redirect)
      //     }).catch(() => {
      //       console.log("loading false")
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('error submit!!  ,The submit is error')
      //     return false
      //   }
      // })
      // console.log("handleLogin>>>Totheend")



    },



    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  *{
  margin:0;
  padding:0;
  list-style:none;
  font-size:10px
  }
  .main{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:  #FBFBFB;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .middle{
    position: absolute;
    width:100%;
    height: 30%;
    background-color:#333333;
  }
  .login-container{
    background-color: #f0f0f0;
    z-index: 1;
    }

  .login-form{
    width:25rem;
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  .headblue{
    width:100%;
    height: 1rem;
    background-color:#4B74FF;
  }

  .ztkd{
    margin-top: 1.55rem;
    margin-bottom: 1.5rem;
    height:5.05rem;
    width:14rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

   .ztkdpic{
     width:10rem;
     height: 2rem;
   }

   .ztkd div{
     height: 2rem;

     font-family: PingFangSC-Semibold;
     font-size: 1.4rem;
     color: #0362B3;
     letter-spacing: 0;
     color:#0362B3;
   }
   .psw{
     margin-top: 0.5rem;
     margin-bottom:0.75rem;
     width:75%;
     font-family: PingFangSC-Regular;
     font-size: 0.9rem;
     color: #F06E64;
     letter-spacing: 0;
   }

  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  /*$bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }

  /* reset element-ui css */

  /*
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
           -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
             -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
             -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }   */
  .login-form {
    .el-form-item {   /*设置输入框外框*/

      width:80%;
      border: 1px solid #4B74FF;
      border-radius:30px;
    }
    .el-input {
      display: inline-block;
      height:3rem;
      width: 85%;   /*设置后可以调整人头的位置*/
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        /*color: $light_gray;*/
        height: 10px;
        /*caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
         /* -webkit-text-fill-color: $cursor !important;
        }*/
      }
    }

  }

</style>

<!--<style rel="stylesheet/scss" lang="scss" scoped>-->
<!--$bg:#2d3a4b;-->
<!--$dark_gray:#889aa4;-->
<!--$light_gray:#eee;-->

<!--.login-container {-->
  <!--min-height: 100%;-->
  <!--width: 100%;-->
  <!--background-color: $bg;-->
  <!--overflow: hidden;-->
  <!--.login-form {-->
    <!--position: relative;-->
    <!--width: 520px;-->
    <!--max-width: 100%;-->
    <!--padding: 160px 35px 0;-->
    <!--margin: 0 auto;-->
    <!--overflow: hidden;-->
  <!--}-->
  <!--.tips {-->
    <!--font-size: 14px;-->
    <!--color: #fff;-->
    <!--margin-bottom: 10px;-->
    <!--span {-->
      <!--&:first-of-type {-->
        <!--margin-right: 16px;-->
      <!--}-->
    <!--}-->
  <!--}-->
  <!--.svg-container {-->
    <!--padding: 6px 5px 6px 15px;-->
    <!--color: $dark_gray;-->
    <!--vertical-align: middle;-->
    <!--width: 30px;-->
    <!--display: inline-block;-->
  <!--}-->
  <!--.title-container {-->
    <!--position: relative;-->
    <!--background-color: saddlebrown;    //h-->
    <!--.title {-->
      <!--font-size: 26px;-->
      <!--color: $light_gray;-->
      <!--margin: 0px auto 40px auto;-->
      <!--text-align: center;-->
      <!--font-weight: bold;-->

      <!--background-color: green;  //h-->
    <!--}-->
    <!--.set-language {-->
      <!--color: #fff;-->
      <!--position: absolute;-->
      <!--top: 3px;-->
      <!--font-size:18px;-->
      <!--right: 0px;-->
      <!--cursor: pointer;-->
    <!--}-->
  <!--}-->
  <!--.show-pwd {-->
    <!--position: absolute;-->
    <!--right: 10px;-->
    <!--top: 7px;-->
    <!--font-size: 16px;-->
    <!--color: $dark_gray;-->
    <!--cursor: pointer;-->
    <!--user-select: none;-->
  <!--}-->
  <!--.thirdparty-button {-->
    <!--position: absolute;-->
    <!--right: 0;-->
    <!--bottom: 6px;-->
  <!--}-->
<!--}-->
<!--/*</style>*/-->
