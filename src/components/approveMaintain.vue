<template>
<div class="mainpart">
  <div class="title">
       <span>审核维修人员</span>
  </div>
  <div class="empty"></div>

  <div class="content">
    <div>
      <p><span>账号</span><span>{{name}}</span></p>
      <p><span>身份证号</span><span>{{id}}</span></p>
      <p><span>公司名称</span><span>{{companyName}}</span></p>
      <p><span>企业识别码</span><span>{{companyId}}</span></p>
    </div>
    <div><span @click="submit">通过</span><span @click="showFillReason">不通过</span></div>
  </div>

  <div v-if="isDisplay" class="notapprove">
    <input placeholder="请输入不通过原因"/>
    <div><span @click="saveReason">确定</span><span @click="cancelSave">取消</span></div>
  </div>

  <div v-if="isApprove">审核通过
  </div>







</div>
</template>

<script>


export default {

  data(){
    return{
    isDisplay:false,
      name:"张亚东",
      id:'347648298574638391',
      companyName:'航宇科技',
      companyId:'36523659239823'
    }
  },

  methods: {
    submit() {
      console.log("将维修人员数据保存至服务器")
    },
    showFillReason(){
      this.isDisplay=true
      console.log("请输入不通过原因")

    },

    saveReason(reason){
      console.log("提交不通过的原因至服务器",reason)

    },
    cancelSave(){
        this.isDisplay=false
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
   /*background-color: brown;*/
 }

  .content div:first-child{
    width:95%;
    display: flex;
    flex-direction: column;
    align-items: center;

    /*background-color: yellow;*/
  }

  .content div:first-child>p{
    width: 95%;
    height: 4rem;
    border-bottom:1px solid rgba(51,51,51,0.1);
    display: flex;

    justify-content: flex-start;
    align-items: center;
  }


  .content div:first-child>p >span:first-child{
    width:5vw;
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

  .content div:first-child>p >span:last-child{
    font-weight: bold;
    font-family: PingFangSC-Regular;
    font-size: 0.8rem;
    color: #C6CBD4;
    letter-spacing: 0;

  }

  .content div:last-child{
    margin-top: 1.53rem;
    width:100%;
    display: flex;

  }

  .content div:last-child >span:first-child{
    margin-left: 8.5rem;
    margin-right: 1.5rem;
    width: 7.5rem;
    height:2rem;
    background: #4B74FF;
    border-radius: 24px;
    font-family: PingFangSC-Regular;
    font-size: 0.7rem;
    color: #FFFFFF;
    letter-spacing: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content div:last-child >span:last-child{
    width: 7.5rem;
    height:2rem;
    background: #fff;
    border-radius: 24px;
    font-family: PingFangSC-Regular;
    font-size: 0.7rem;
    color: #4B74FF;
    letter-spacing: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 24px;
    border: 1px solid #4B74FF;
  }

  .notapprove{
    position: absolute;
    top:4.3rem;
    width:25rem;
    height: 10rem;
    background-color:#FBFBFB;
    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: 0 0 80px 35px rgba(0,0,0,.1);

  }
  .notapprove>input{
    margin-top:1.75rem ;
    width:20rem;
    height:3rem;
    border: 1px solid #C6CBD4;
    border-radius: 30px;
    padding-left: 1.5rem;
  }

  .notapprove>div{
    margin-top: 2.15rem;
    width: 7.4rem;
    height: 1.6rem;
    display: flex;
    justify-content: space-between;
  }

  .notapprove>div>span{
    width:3.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .notapprove>div>span:first-child{
    margin-right: 1rem;
    font-family: PingFangSC-Regular;
    font-size: 0.7rem;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 24px;
    background: #4B74FF;
    border-radius: 24px;
  }

  .notapprove>div>span:last-child{
    font-family: PingFangSC-Regular;
    font-size: 0.7rem;
    color: #4B74FF;
    letter-spacing: 0;
    text-align: center;
    line-height: 24px;

    border: 1px solid #4B74FF;
    border-radius: 24px;
  }






</style>
