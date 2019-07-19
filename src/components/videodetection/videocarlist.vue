<template>
    <div class="list">
        <Recommend landing="为你推荐"></Recommend>
        <div class="video">
            <Caritem v-for="(v,i) in itemdata" :key="i" :imgurl="v.image" :hot="v.hot?'hot':'newcar'"
             :newcar="v.newcar" :video="v.video" :name="v.name" :data="v.data" :price="v.price" 
             :discount="v.discount" :count="v.count?'discount':''" :whole="v.whole?'price':'whole'" 
             :reason="v.reason" :payments="v.payments" :supply="v.supply" :medals="v.medals"  :item="v.item" 
             :guarantee="v.guarantee" :idname="v.idname?'silver':'gold'" :stwly="v.stwly" ></Caritem>           
        </div> 
    </div>
</template>
<script>
import Recommend from './recommend'
import Caritem from '../repeat/caritem'
export default {
    components:{
        Caritem,
        Recommend
    },
    props:{
        itemdata:Array
    }
}
</script>
<style scoped>
    .list{
        background: white;
    }
    .video{
        padding-bottom:40px; 
    }
</style>
