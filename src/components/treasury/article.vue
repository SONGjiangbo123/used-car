<template>
    <div>
        <router-link to="" class="list" v-for="(v,i) in itemdata" :key="i">
            <img :src="v.image" alt="">
            <h3>{{v.title}}</h3>
            <span class="times">{{v.time}}</span>
            <span class="browse">{{v.strength}}</span>
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
        display: block;
        padding: .3rem;
        border-bottom: 1px solid #f1f1f1;
        overflow: hidden;
        position: relative;
        background: white;
    }
    .list img{
        float: left;
        width: 2.16rem;
        height: 1.44rem;
        margin-right: .26rem;
    }
    .list h3{
        line-height: .34rem;
        font-size: .3rem;
        color: #1b1b1b;
        font-weight: normal;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    .list span{
        font-size: .24rem;
        color: #b7b7b7;
        position: absolute;
    }
    .times{
        bottom: .3rem;
        left: 2.71rem;
    }
    .browse{
        bottom: .3rem;
        right: .3rem;
    }
    .browse::before{
        content: "";
        width: .32rem;
        height: .2rem;
        background: url("../../../static/img/browse.png") no-repeat;
        background-size: 100%;
        display: inline-block;
        margin-right: .1rem;
    }
</style>
