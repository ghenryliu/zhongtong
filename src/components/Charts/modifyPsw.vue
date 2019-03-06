<template>
<div class="mainpart">
  <div class="title">
       <span>修改密码</span>
  </div>
  <div class="empty"></div>

  <div class="content">
    <div>
      <p><span>原密码</span><input /></p>
      <p><span>新密码</span><input /></p>
      <p><span>确认新密码</span><input /></p>
    </div>
    <div class="savebtn">保存</div>
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
  }

}
</script>

<style>

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
    width:5rem;                      /*修改新密码的宽度*/
    height: 2rem;
    margin-left: 2.7rem;
    margin-right:1.1rem;
    display: flex;
    justify-content:flex-end;
    align-items: center;
  }

  input{
    height: 2rem;
    padding-left: 1rem;
    border: 1px solid #C6CBD4;
    border-radius: 20px;
  }

  .savebtn{
    width: 7.5rem;
    height: 2rem;
    background: #4B74FF;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .savesuccessful{
    position: absolute;
    top:16.95rem;
    height:3rem;
    width:15rem;
    background: rgba(51,51,51,0.50);
    display: flex;
    justify-content: center;
    align-items: center;}

</style>
