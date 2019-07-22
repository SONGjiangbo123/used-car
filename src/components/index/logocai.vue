<template>
    <div>
        <img :src="titleimg" class="img_box_img" />
        <span class="img_box_text">{{titlename}}</span>
    </div>
</template>

<script>
export default {
        props:{
            titlename:String,
            titleimg:String
        }
}
</script>

<style>
    .img_box_img {
        margin: 0;
        width: 1.38rem;
        height: 1rem;
        display: inline-block;
    }
    .img_box_text {
        font-size: 0.22rem;
        color: #7f7f7f;
        display: block;
        line-height: 1;
    }
</style>