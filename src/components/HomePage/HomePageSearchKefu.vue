<template>
<!-- 主页搜索登录客服 -->
    <div class="search_kefu">
        <router-link to="/Register" class="search_kefu_a">
            <span class="text">帮我找车</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.search_kefu{
    position: fixed;
    top: 4.6rem;
    right: 0;
    width: 1.3rem;
    height:.88rem;
    z-index: 5;
    border-radius: .44rem 0 0 .44rem;
    box-shadow: 0 0.06rem 0.1rem 0 rgba(248,93,0,.1);
    background: #fff8f2;
}
.search_kefu_a{
    font-size: .22rem;
    color: #f85d00;
}
.search_kefu_a::before{
    content: "";
    display: inline-block;
    width: .38rem;
    height: .4rem;
    background: url(../../../static/img/kefu.5c777217.png);
    background-size: 100%;
    margin: 0 .1rem 0 .24rem;
}
.search_kefu .text{
    display: inline-block;
    width: .48rem;
    height: .48rem;
    margin: .24rem 0 .2rem;
    line-height: .24rem;
}
</style>
