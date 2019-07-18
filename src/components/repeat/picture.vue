<template>
    <div>
        <img v-for="(v,i) in itemdata" :key="i" :src="v.image">
    </div>
</template>
<script>
export default {
    props:{
        itemdata:Array,
        // imgurl:String
    }
}
</script>
<style scoped>
    img{
        width: 100%;
        display: block;
    }
</style>
