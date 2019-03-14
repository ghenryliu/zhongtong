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
            placeholder="请输入账号"
            name="account"
            type="text"
            auto-complete="on"
          />
          <span class="svg-container">
            <svg-icon icon-class="user" />
            <!--加小人头像-->
          </span>

        </el-form-item>


        <el-form-item prop="pwd">
          <el-input
            v-model="loginForm.pwd"
            :type="passwordType"
            placeholder="请输入密码"
            name="pwd"
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
          登录
        </el-button>
      </el-form>



    </div>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import {loginByUsername} from "../api/login";
import {setCookie,getCookie} from "../utils/cookie";



export default {
  name: 'Login',
  // components: { LangSelect, SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      // console.log("对用户名进行验证",value,)
      if (!validUsername(value)) {
        callback(new Error('请输入正确用户名(4-16位字母数字下划线) '))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      // console.log("对密码的长度进行验证",value,)
      if (value.length < 4) {
        // console.log("password value",value)
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      pswPass: false,
      loginForm: {
        account:'',
        pwd:''
      },
      loginRules: {
        account: [{ required: true, trigger: 'blur', validator: validateUsername }],
        pwd: [{ required: true, trigger: 'blur', validator: validatePassword }],
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
    }
  },


  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },


    handleLogin() {
      //console.log("username&password",this.loginForm)
      // loginByUsername1(this.loginForm)
      loginByUsername(this.loginForm.account,this.loginForm.pwd).then(
        res=>{
          //console.log("返回的数据>>>",res.data)
          if (res.data.code===0){
            // this.$router.push('/zhongtong/personal')
            setCookie('account',this.loginForm.account,1000*60)
            setTimeout(function(){
              this.$router.push('/personalCenter')}
                .bind(this),1000)
          }
          else{
            this.pswPass=true
          }
      })
    },
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

