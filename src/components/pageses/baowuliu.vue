<template>
    <div class="cd-il-wrap">
        <span class="tag">包物流</span>
        <span class="conton">由西南仓运往重庆</span>
        <span class="conton cont-space">可迁本市</span>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{

    }
}
</script>

<style scoped>
    .cd-il-wrap{
        padding: .3rem 0 0 .4rem;
        background-color: #fff;
    }
    .cd-il-wrap .tag {
        font-size: .22rem;
        margin-right: .12rem;
        text-align: center;
        padding: .04rem .05rem;
        background: -webkit-linear-gradient(right,#ff8b67,#ff5131);
        background: linear-gradient(270deg,#ff8b67,#ff5131);
        border-radius: .04rem;
        color: #fff;
    }
    .cd-il-wrap .conton{
        font-size: .24rem;
        color: #969da8;
        line-height: .26rem;
    }
    .cd-il-wrap .cont-space{
        margin-left: .2rem;
    }
</style>
