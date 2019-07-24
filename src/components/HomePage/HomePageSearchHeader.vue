<template>
<!-- 主页搜索头部 -->
   <header class="Search_header">
      <form class="Search_header_bar">
         <i class="header_log"></i>
         <input type="text" class="header_input" placeholder="搜索您想要的车">
      </form>
      <a href="javascript:history.go(-1);" class="header_btn">取消</a>
   </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.Search_header{
   width: 100%;
   border-bottom: 1px solid #dbdada;
   padding: .2rem 0 .2rem .3rem;
   height: 1.2rem;
   line-height: 1.2rem;
   position: relative; 
   align-items: center;
   display: flex;
}
.Search_header_bar{
   width: 80%;
}
.Search_header_bar .header_log{
   position: absolute;
   top: 36%;
   left: 7%;
   width: .32rem;
   height: .32rem;
   background: url(../../../static/img/home-sug_9b6b8da.png);
   background-size: 100%;
}
.Search_header_bar .header_input{
   border:0;
   outline: 0;
   background: #f5f5f5;
   width: 100%;
   padding: .12rem 0;
   padding-left: .7rem;
   padding-right: 15%;
   font-size: .26rem;
   border-radius: .1rem;
}
/* 修改字体颜色 */
input::-webkit-input-placeholder { /* WebKit browsers */ 
   color: #dfa5a5; 
} 
.header_btn{
   display: inline-block;
   width: 20%;
   text-align: center;
   color: #ff5a37;
   font-size: .28rem;
}
</style>
