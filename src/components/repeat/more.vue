<template>
    <div>
        <router-link to="/">
            <p class="jump" v-for="(v,i) in itemdata" :key="i" :style="{'background':v.color}">{{more}}</p>
        </router-link> 
    </div>
</template>
<script>
export default {
    props:{
        more:String,
        itemdata:Array
    }

}
</script>
<style scoped>
    .jump{
        position: fixed;
        height: .71rem;
        line-height: .71rem;
        width: 3rem;
        bottom: .3rem;
        left: 50%;
        margin-left: -1.5rem;
        font-size: .28rem;
        border-radius: .4rem;
        text-align: center;
        color: #fff;
        display: inline-block;
        opacity: .9;
        z-index: 3;
        letter-spacing: .04rem;
    }
</style>
