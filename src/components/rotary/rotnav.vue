<template>
    <div class="list">
        <!-- 宝典导航条 -->
        <router-link to="/" class="item" v-for="(v,i) in itemdata" :key="i" >
            <img :src="v.image" alt="">
            {{v.item}}
        </router-link>
    </div>
</template>
<script>
export default {
    props:{
        itemdata:Array
    }
}
</script>
<style scoped>
    .list{
        display: -webkit-box;
        padding: .56rem 0;
        overflow: hidden;
        margin-bottom: .2rem;
        background: #fff;
    }
    .list a{
        -webkit-box-flex: 1;
        display: block;
        width: 33.3%;
        font-size: .3rem;
        color: #1b1b1b;
        text-align: center;
        box-sizing: border-box;
        position: relative;
    }
    .list img{
        width: .75rem;
        height: .86rem;
        margin: 0 auto .2rem;
    }
    .list a::after{
        content: "";
        width: 1px;
        height: .83rem;
        background: #f1f1f1;
        position: absolute;
        top: 0;
        right: 0;
    }
    .list a:last-child:after {
        display: none;
    }
</style>

