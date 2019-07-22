<template>
    <div >
       
        <div class="list" v-for="(v,i) in itemdata" :key="i">
            <router-link to="">
                <h3>{{v.title}}</h3>
                <p>{{v.context}}</p>
            </router-link>
            <p class="cornes">
                <router-link to="">{{v.business}}</router-link>
                <span class="number">{{v.number}}</span>
                <span class="times">{{v.time}}</span>
            </p> 
        </div>
        
        
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
        padding: .3rem;
        border-bottom: 0.2rem solid #f1f1f1;
        overflow: hidden;
    }
    .list h3{
        width: 100%;
        line-height: .34rem;
        font-size: .3rem;
        color: #1b1b1b;
        font-weight: normal;
        margin-bottom: .2rem;
        word-wrap: break-word;
    }
    .list p{
        line-height: .42rem;
        font-size: .26rem;
        color: #838383;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .cornes{
        overflow: hidden;
        margin-top: .24rem;
        border-top: 1px solid #f1f1f1;
    }
    .cornes a{
        display: block;
        float: left;
        font-size: .24rem;
        color: #838383;
        padding: .08rem .21rem;
        background: #f5f5f5;
        -webkit-border-radius: .34rem;
        border-radius: .34rem;
        margin-right: .15rem;
        margin-top: .26rem;
    }
    .cornes span{
        float: right;
        font-size: .24rem;
        color: #838383;
        margin-left: .4rem;
        margin-top: .38rem;
    }
    .number::before{
        content: "";
        width: .32rem;
        height: .2rem;
        background: url("../../../static/img/browse.png") no-repeat;
        background-size: 100%;
        display: inline-block;
        margin-right: .1rem;
    }
</style>
