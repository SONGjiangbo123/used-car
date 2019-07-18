<template>
    <div class="list">
        <div class="section-header"><span>{{landing}}</span></div>
        
        <div class="video">
            <Caritem v-for="(v,i) in itemdata" :key="i" :imgurl="v.image" :newcar="v.newcar"
            :video="v.video" :name="v.name" :data="v.data" :price="v.price" :discount="v.discount" 
            :count="v.count?'discount':''" :whole="v.whole?'price':'whole'" :reason="v.reason"
            :payments="v.payments" :supply="v.supply" :medals="v.medals"  :item="v.item" 
            :guarantee="v.guarantee" :idname="v.idname?'silver':'gold'" ></Caritem>           
        </div> 
    </div>
</template>
<script>
import Caritem from '../repeat/caritem'
export default {
    components:{
        Caritem
    },
    props:{
        landing:String,
        itemdata:Array
    }
}
</script>
<style scoped>
    .list{
        background: white;
    }
    .section-header{
        text-align: center;
        border-bottom: .01rem solid #f6f6f6;
    }
    .section-header span{
        display: inline-block;
        width: 3.4rem;
        height: 1.18rem;
        line-height: 1.2rem;
        font-size: .34rem;
        background: url("../../../static/img/landing.png") no-repeat left;
        background-size: 100%;
    }
    .video{
        padding-bottom:40px; 
    }
</style>
