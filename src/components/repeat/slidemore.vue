<template>
    <div class="item"> 
        <!-- 宝典小标题    -->
        <router-link to="" class="more">更多</router-link>
        <h3>{{title}}</h3>
    </div>
</template>
<script>
export default {
    props:{
        title:String
    }
}
</script>
<style scoped>
    .item{
        overflow: hidden;
    }
    .item h3{
        line-height: .9rem;
        border-bottom: 1px solid #f1f1f1;
        padding: 0 .3rem;
        font-size: .28rem;
        color: #2e2e2e;
        font-weight: normal;
    }
    .item h3::before{
        content: "";
        width: .05rem;
        height: .28rem;
        background: #ff5a37;
        display: inline-block;
        margin-bottom: -.03rem;
        margin-right: .1rem;
    }
    .more{
        float: right;
        font-size: .26rem;
        color: #ff5a37;
        margin-top: .33rem;
        margin-right: .3rem;
    }
    .more::after{
        content: "";
        width: .14rem;
        height: .14rem;
        border: solid #ff5a37;
        border-width: 1px 1px 0 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        display: inline-block;
        margin-bottom: .01rem; 
    }
</style>
