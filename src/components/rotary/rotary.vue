<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,i) in itemdata" :key="i">
                    <img :src="v.image" >
                    <p>{{v.item}}</p>
                </div>        
            </div> 
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    props:{
        itemdata:Array,
    },
    name: 'HelloWorld',
    data () {
        return {
        msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted(){
        new Swiper ('.swiper-container', {
            autoplay:true,
            loop: true,
            delay: 500,
        })        
    }

}
</script>
<style scoped>
    .swiper-container img{
        width: 100%;
        /* height: 100px; */
        background: pink;
    }
    .swiper-slide{
        position: relative;
    }

    .swiper-slide p{
        width: 100%;
        position: absolute;
        bottom: 0;
        font-size: .28rem;
        line-height: .76rem;
        color: white;
        font-weight: normal;
        padding: 0 .18rem;
        background: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.6));
    }
    
</style>
