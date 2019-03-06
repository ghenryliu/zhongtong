<template>
<div class="mainpart">
  <div class="title">
      <div>
       <span>维修人员列表</span>
       <!--<span @click="toAddAdmin" >添加管理员  + </span>-->
       </div>
       <span><img src="@/assets/search.png"/> <input value="search" /></span>
  </div>
  <div class="empty">
      <div><span>全部</span>
          <span>已审核</span>
          <span>未审核</span>
      </div>
      <p>查看第<span>{{}}</span>-<span>{{}}</span>,共<span>{{}}</span>项</p>
      <img src="@/assets/left.png"/>
      <img src="@/assets/right.png"/>
  </div>

  <div  class="columnname">
    <ul>
      <li v-for="item in arrList">
      <!--{{item}}-->

        <p class="itemname">{{item.name}}</p>
        <p class="itemcompanyname">{{item.companyName}}</p>
        <p class="itemphoneno">{{item.phoneNumber}}</p>
        <p class="itemstatus">{{item.status}}</p>
        <p class="itemcreatetime">{{item.createTime}}</p>
        <p class="itemoperation">{{item.operation}}</p>
      </li>
    </ul>
  </div>

  <div class="content">
    <ul>
      <li v-for=" item in adminList" class="columncontent">

        <p class="itemname">{{item.name}}</p>
        <p class="itemcompanyname">{{item.companyName}}</p>
        <p class="itemphoneno">{{item.phoneNumber}}</p>
        <p class="itemstatus">{{item.status}}</p>
        <p class="itemcreatetime">{{item.createTime}}</p>
        <p class="itemoperation">{{item.operation}}</p>
      </li>
    </ul>
  </div>

  <div v-if="displayComfirm" class="confirmdel">
    <div>确定删除该管理员吗</div>
    <div><span @click="delItem">确定</span><span @click="cancelDel">取消</span></div>
  </div>


</div>
</template>
<script>


export default {


  data(){
    return {
      total:"31",
      indexStart:'1',
      page:'1',
      indexEnd:'10',

      displayComfirm:false,


      arrList:[{name:"姓名",companyName:"公司名称",phoneNumber:"手机号",status:"状态",createTime:"申请时间",operation:"操作"}],
      adminList:[{name:"hello",companyName:"yellfun",phoneNumber:"12345676789",status:"未审核",createTime:"2018-12-12",operation:"审核"},
        {name:"hello",companyName:"yellfun",phoneNumber:"12345676789",status:"未审核",createTime:"2018-12-12",operation:'详情'},
        {name:"hello",companyName:"yellfun",phoneNumber:"12345676789",status:"未审核",createTime:"2018-12-12",operation:"审核"},
      ]
    }
  },

  methods:{
    del(){
      this.displayComfirm=true
    },
    cancelDel(){
      this.displayComfirm=false

    },
    delItem(){
      console.log("访问服务器删除数据")
    },
    toEditPage(){
      console.log("去编辑管理员信息页面")
    },
    toAddAdmin(){
      this.$router.push({path: 'charts/addAdmin'})
      console.log("去添加管理员信息页面")
    }

  }


}
</script>

<style>

  * {list-style: none}

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


  .title >div{
    margin-left: 3rem;
    display: flex;
    align-items: center;

  }

  .title >div>span:first-child{
    margin-right: 1.5rem;
    font-family: PingFangSC-Semibold;
    font-size: 1.6rem;
    color: #333333;
    letter-spacing: 0;
    line-height: 48px;
  }

  .title>div>span:last-child{
    height: 1.6rem;
    width:6rem;
    background: #4B74FF;
    border-radius: 24px;
    font-family: Avenir-Book;
    font-size: 0.7rem;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.title>span{
  margin-right: 2.3rem;
  width: 10rem;
  height: 1.6rem;
  border: 1px solid #4B74FF;
  border-radius: 24px;
  display: flex;
  align-items: center;
}

  .title>span>img{
    margin-left: 0.5rem;

  }

  .title>span>input{
    width: 6.23rem;
    height: 1.2rem;
    border: none;
    font-family: Avenir-Book;
    font-size: 0.7rem;
    color: #4B74FF;
    letter-spacing: 0;
    line-height: 24px;
  }




  .empty{
    padding-right: 2.3rem;
    background-color: #fff;
    height:3.13rem;
    width: 100%;
    margin-bottom: 1rem;

    display: flex;

    justify-content: flex-end;
    align-items: center;
  }








  input{
    height: 2rem;
    padding-left: 1rem;
    border: 1px solid #C6CBD4;
    border-radius: 20px;
  }




   .columnname {
     height: 3rem;
     width: 92%;
     /*background-color: green;*/
  }


  .columnname>ul { /*将columnname 设置成一行*/
    width: 100%;
  }
  .columnname>ul>li{
    height: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


  .content{
    width: 92%;
    height: 78%;
    /*margin-top: 0.5rem;*/
    margin-bottom: 1.5rem;
    background-color: #fff;
  }


  .content>ul{
    width: 100%;
  }


  .columncontent{
    height:3.2rem ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: yellow;
  }

  /*.item{*/
    /*width:9rem;*/
    /*height:1.2rem;*/
    /*background-color: #1e6abc;*/
  /*}*/
  /*.itemoperation{*/
    /*width:9rem;*/
    /*height:1.2rem;*/
    /*background-color: #1e6abc;*/
  /*}*/
[class^="item"]{
  width:7.5rem;
  height:1.2rem;
  /*background-color: #1e6abc;*/
}
.itemcreatetime{
  width:7.5rem;
  height:1.2rem;
  /*background-color:brown ;*/
}

.itemstatus{
  width:5rem;
  height:1.2rem;
}

  .itemoperation{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .itemoperation span{
    width:3.7rem;
    height: 1.6rem;
  }

  .itemoperation span:first-child{
    background: #4B74FF;
    border-radius: 24px;

    font-family: Avenir-Book;
    font-size: 0.6rem;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .itemoperation span:last-child{
    background: #F06E64;
    border-radius: 24px;
    font-family: Avenir-Book;
    font-size: 0.6rem;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

  }

  .confirmdel{
    position:absolute;
    top:16.2rem;
    height:10rem ;
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    z-index: 999;
  }

  .confirmdel div:first-child{
    margin-top: 2.5rem;
    margin-bottom: 3rem;

    font-family: PingFangSC-Regular;
    font-size: 1rem;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
    /*background-color: #1e6abc;*/

  }

  .confirmdel div:last-child{
    width: 8.4rem;
    display: flex;
    justify-content: space-between;

  }

  .confirmdel div>span{
    width:3.7rem;
  }

  .confirmdel div>span:first-child{
    font-family: PingFangSC-Regular;
    font-size: 0.7rem;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 24px;
    background: #4B74FF;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .confirmdel div>span:last-child{
    font-family: PingFangSC-Regular;
    font-size: 0.7rem;
    color: #4B74FF;
    letter-spacing: 0;
    text-align: center;
    line-height: 24px;
    border:1px solid #4B74FF; ;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }





</style>
