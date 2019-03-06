<template>
<div class="mainpart">
  <div class="title">
    <span>个人中心</span>

    <router-link :to="'/zhongtong/editAdmin/'">
        <span class="btn1">修改密码</span>
    </router-link>
  </div>
  <div class="empty"></div>
  <div class="content">
    <div>
      <p><span>账号</span><input placeholder="example@163.com"/></p>
      <p><span>用户名</span><input placeholder="请输入用户名"/></p>
      <p><span>手机号</span><input placeholder="请输入手机号"/></p>
    </div>
    <div><span></span><span class="savebtn" @click="submit">保存</span></div>
  </div>

  <div v-if="saveSuccessful" class="savesuccessful">保存成功</div>
</div>
</template>
<script>


export default {

  data(){
    return{
      saveSuccessful:true
    }
  },

  methods:{
    submit(){
      console.log("将数据保存至服务器")
    }
  }


}
</script>

<style>

  *{
    margin: 0;
  }

  .mainpart{

    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FBFBFB;
  }

  .title{
    height: 4.38rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    /*opacity: 0.1;*/
    border-bottom: 1px solid rgba(51,51,51,0.1);


  }

  .title >span:first-child{
    margin-left: 3rem;
    font-weight:bold;
    font-family: PingFangSC-Semibold;
    font-size: 1.6rem;
    color: #333333;
    letter-spacing: 0;
    line-height: 48px;
  }

  .btn1{
    margin-right: 2.3rem;
    font-family: PingFangSC-Regular;
    font-size: 0.7rem;
    color: #fff;
    letter-spacing: 0;
    text-align: center;
    line-height: 19px;
    background-color:#F5A623 ;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
    height: 1.6rem;
    border-radius: 1.2rem;
  }

  .empty{
    background-color: #fff;
    height:3.13rem;
    width: 100%;
    margin-bottom: 1rem;
  }
 .content{
   height: 85%;
   margin-bottom: 1.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:92%;
 }

  .content >div:first-child{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*background-color: brown;*/
  }

  .content >div:first-child>p{
    width:95%;
    border-bottom:  1px solid #C6CBD4;
    height: 4rem;
    display: flex;
    align-items: center;
    /*background-color: yellow;*/
  }

  .content >div:first-child>p>span{
    width:5vw;
    /*min-width:3rem;*/
    height: 2rem;
    margin-left: 2.7rem;
    margin-right:1.1rem;
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

  input{
    width:68vw;    /*使用vw 来进行自适应*/
    height: 2rem;
    padding-left: 1rem;
    border: 1px solid #C6CBD4;
    border-radius: 20px;
    color:#C6CBD4


  }

  .content >div:last-child{
    width:95%;
    /*border-bottom:  1px solid #C6CBD4;*/
    height: 4rem;
    display: flex;
    align-items: center;
    /*background-color: yellow;*/
  }

  .content >div:last-child>span:first-child{
    width:5vw;
    background-color: brown;
  }

  .savebtn{
    margin-left: 3.7rem;   /*如何对齐这个按钮？？？？*/
    width: 7.5rem;
    height: 2rem;
    background: #4B74FF;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
  }

  .savesuccessful{
    position: absolute;
    top:15.75rem;
    height:3rem;
    width:15rem;
    background: rgba(51,51,51,0.50);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: PingFangSC-Regular;
    font-size: 1rem;
    color: #FFFFFF;
    letter-spacing: 0;}





</style>
