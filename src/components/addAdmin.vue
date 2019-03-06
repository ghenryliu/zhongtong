<template>
<div class="mainpart">
  <div class="title">
       <span>添加管理员</span>
  </div>
  <div class="empty"></div>

  <div class="content">
    <!--<div>-->
      <!--<p><span>原密码</span><input name="pwd" type="password" id="pwd" size="10" placeholder="请输入原密码" /> </p>-->
      <!--<p><span>新密码</span><input name="pwd" type="password" id="pwd1" size="10" placeholder="请输入6-16位字母加数字的密码"/></p>-->
      <!--<p><span>确认新密码</span><input name="pwd" type="password" id="pwd2" size="10" placeholder="再此输入新密码"/></p>-->
    <!--</div>-->


    <div class="plusremind">
      <div><span>账号</span><p><input name="pwd" type="password" id="pwd4" size="10" placeholder="请输入账号" style="width:150px" /> <span v-if="isSame">原密码输入错误</span></p></div>
      <div><span>用户名</span><p><input name="pwd"  id="pwd5" size="10" placeholder="请输入用户名" style="width:300px"/></p></div>
      <div><span>手机号</span><p><input name="pwd"  id="pwd6" size="10" placeholder="请输入手机号" style="width:170px"/></p></div>
      <div><span>密码</span><p><input name="pwd" type="password" id="pwd7" size="10" placeholder="请输入6-16位字母加数字的密码" style="width:170px"/></p></div>
    </div>


    <div><span></span><span class="savebtn" @click="submit">提交</span></div>
  </div>







</div>
</template>

<script>


export default {

  data(){
    return{
      isSame:true,
      saveSuccessful:true
    }
  },

  methods: {
    submit() {
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

  .title >span{
    margin-left: 3rem;
    font-weight:bold;
    font-family: PingFangSC-Semibold;
    font-size: 1.6rem;
    color: #333333;
    letter-spacing: 0;
    line-height: 48px;
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
  }

  .content >div:first-child>p{
    width:95%;
    border-bottom:  1px solid #C6CBD4;
    height: 4rem;
    display: flex;
    align-items: center;


  }

  .content >div:first-child>p>span{
    width:5vw;                      /*修改新密码的宽度*/
    height: 2rem;
    margin-left: 2.7rem;
    margin-right:1.1rem;
    display: flex;
    justify-content:flex-end;
    align-items: center;

    font-weight: bold;
    font-family: PingFangSC-Regular;
    font-size: 0.8rem;
    color: #333333;
    letter-spacing: 0;
    text-align: right;
  }

  /*input{*/       /*for no remind*/
    /*width:63vw;*/
    /*height: 2rem;*/
    /*padding-left: 1rem;*/
    /*border: 1px solid #C6CBD4;*/
    /*border-radius: 20px;*/
    /*color:#C6CBD4*/
  /*}*/

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


   /*一下用于设置  plusremid中的格式*/
   .plusremind{
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
    }

  .plusremind div{
    width:95%;
    border-bottom:  1px solid #C6CBD4;
    height: 4rem;
    display: flex;
    align-items: center;
  }

  .plusremind div>span{

    width:5vw;                      /*修改新密码的宽度*/
    height: 2rem;
    margin-left: 2.7rem;
    margin-right:1.1rem;
    display: flex;
    justify-content:flex-end;
    align-items: center;

    font-weight: bold;
    font-family: PingFangSC-Regular;
    font-size: 0.8rem;
    color: #333333;
    letter-spacing: 0;
    text-align: right;

  }

  .plusremind div>p{

    width:63vw;
    height: 2rem;
    padding-left: 1rem;
    border: 1px solid #C6CBD4;
    border-radius: 20px;
    color:#C6CBD4;

    display:flex;
    align-items: center;
  }




  input{       /*for  remind*/
    /*width:15vw;*/
    margin-right: 1.5rem;
    height: 1.8rem;
    padding-left: 1rem;
  /*border: 1px solid #C6CBD4;*/
    border-radius: 20px;
    color:#C6CBD4;
    border:none;
    /*background-color: #1e6abc;*/
    width:auto;
    /*background-color: yellow;*/

    font-family: PingFangSC-Regular;
    font-size: 0.8rem;
    color: #C6CBD4;
    letter-spacing: 0;
  }

  .plusremind div>p>span{
    font-family: PingFangSC-Regular;
    font-size: 0.8rem;
    color: #F06E64;
    letter-spacing: 0;

  }

</style>
