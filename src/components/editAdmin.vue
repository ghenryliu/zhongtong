<template>
  <div class="mainpart">
    <div class="title">
      <span>个人中心</span>
      <router-link :to="'/modifyPsw/'">
        <span class="btn1">修改密码</span>
      </router-link>
    </div>
    <div class="empty"></div>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form1" auto-complete="on"
             label-position="left">
      <!--<div class="content">-->
      <div class="formcontent">
        <p><span>账号</span>
          <span>
            <el-form-item prop="account">
              <el-input
                v-model="loginForm.account"
                :placeholder="isLogin"
                name="account"
                type="text"
                disabled="disabled"
                auto-complete="on"/>
            </el-form-item>
          </span>
        </p>
        <p><span>用户名</span>
          <span>
            <el-form-item prop="name">
              <el-input
                v-model="loginForm.name"
                placeholder="请输入用户名"
                name="name"
                type="text"
                auto-complete="on"
              />
            </el-form-item>
          </span>
        </p>
        <p><span>手机号</span>
          <span>
            <el-form-item prop="phone">
              <el-input
                v-model="loginForm.phone"
                placeholder="请输入手机号"
                name="phone"
                type="number"
                auto-complete="on"
              />
            </el-form-item>
          </span>
        </p>
      </div>
      <div><span></span><span class="savebtn" @click="submit">保存</span></div>
      <!--</div>-->
    </el-form>
    <!--<div v-if="saveSuccessful" class="savesuccessful">保存成功</div>-->
  </div>
</template>
<script>

  import {getCookie} from "../api/cookie";
  import {validUsername, validPhone} from '../api/validate'
  import {updatePersonalInfo} from "../api/login";
  import {Toasts, open, close} from '../mintUi';

  export default {
    data() {
      // const validateUsername = (rule, value, callback) => {
      //   if (!validUsername(value)) {
      //     callback(new Error('请输入6-16位字母加数字的账号 '))
      //   } else {
      //     callback()
      //   }
      // }
      const validateName = (rule, value, callback) => {

        if (!validUsername(value)) {
          callback(new Error('请输入6-16位字母加数字的用户名'))
        } else {
          callback()
        }
      }
      const validatePhone = (rule, value, callback) => {
        if (!validPhone(value)) {
          callback(new Error('请输入正确手机号码'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          account: '',
          name: '',
          phone: ''
        },
        loginRules: {
          // account: [{required: true, trigger: 'blur', validator: validateUsername}],
          name: [{required: true, trigger: 'blur', validator: validateName}],
          phone: [{required: true, trigger: 'blur', validator: validatePhone}],
        },
        saveSuccessful: true,
      }
    },
    // mounted() {
    //   if (this.isLogin == undefined || this.isLogin == "") {
    //     this.$router.replace('/')
    //   }
    //   else {
    //     console.log(">>>???")
    //     this.account = getCookie('account')
    //     this.sidebarStatus = getCookie('sidebarStatus')
    //   }
    // },
    methods: {
      submit() {
        //console.log("将数据保存至服务器", this.account, this.userName, this.phoneNo)
        this.loginForm.account = this.isLogin
        console.log("this.loginForm.account", this.loginForm.account)
        updatePersonalInfo(this.loginForm.account, this.loginForm.name, this.loginForm.phone).then(
          res => {
            console.log("返回的数据>>>", res.data)
            if (res.data.code === 201) {
              Toasts("用户未登录或已过期，请重新登录！")
              this.router.push({path: '/'})
            }
            else if (res.data.code === 0) {
              Toasts("保存成功")
            }
          })
      }
    },

    computed: {
      isLogin() {
        // this.sidebarStatus=getCookie('sidebarStatus')
        this.account = getCookie('account')
        console.log("this.account", this.account)
        return this.account
      }
    }
  }
</script>

<style>

  * {
    margin: 0;
  }

  .mainpart {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FBFBFB;
  }

  .title {
    height: 4.38rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    /*opacity: 0.1;*/
    border-bottom: 1px solid rgba(51, 51, 51, 0.1);
  }

  .title > span:first-child {
    margin-left: 3rem;
    font-weight: bold;
    font-family: PingFangSC-Semibold;
    font-size: 1.6rem;
    color: #333333;
    letter-spacing: 0;
    line-height: 48px;
  }

  .btn1 {
    margin-right: 2.3rem;
    font-family: PingFangSC-Regular;
    font-size: 0.7rem;
    color: #fff;
    letter-spacing: 0;
    text-align: center;
    line-height: 19px;
    background-color: #F5A623;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 1.6rem;
    border-radius: 1.2rem;
  }

  .empty {
    background-color: #fff;
    height: 3.13rem;
    width: 100%;
    margin-bottom: 1rem;
  }

  .login-form1 {
    height: 85%;
    width: 92%;
    margin-bottom: 1.5rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .formcontent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
  }

  .formcontent > p {
    width: 95%;
    border-bottom: 1px solid #C6CBD4;
    height: 6rem; /*design  4 rem*/
    display: flex;
    align-items: center;
    /*background-color: yellow;*/
  }

  .formcontent > p > span:first-child {
    width: 5vw;
    /*min-width:3rem;*/
    height: 2rem;
    margin-left: 2.7rem;
    margin-right: 1.1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    font-family: PingFangSC-Regular;
    font-size: 0.8rem;
    color: #333333;
    letter-spacing: 0;
    text-align: right;
  }

  .formcontent > p > span:last-child {
    margin-top: 1.5rem;
  }

  .el-input__inner {
    border: none;
    width: 65vw; /*使用vw 来进行自适应*/
    height: 2rem;
    padding-left: 1rem;
    border: 1px solid #C6CBD4;
    border-radius: 20px;
    color: #C6CBD4;
    /*background-color: green;*/
  }

  .login-form1 > div:last-child {
    width: 95%;
    /*border-bottom:  1px solid #C6CBD4;*/
    height: 4rem;
    display: flex;
    align-items: center;
    /*background-color: yellow;*/
  }

  .login-form1 > div:last-child > span:first-child {
    width: 5vw;
    background-color: #fff;
  }

  .savebtn {
    margin-left: 3.7rem; /*如何对齐这个按钮？？？？*/
    width: 7.5rem;
    height: 2rem;
    background: #4B74FF;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .savesuccessful {
    position: absolute;
    top: 15.75rem;
    height: 3rem;
    width: 15rem;
    background: rgba(51, 51, 51, 0.50);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 1rem;
    color: #FFFFFF;
    letter-spacing: 0;
  }
</style>
