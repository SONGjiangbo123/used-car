<template>
<div>
    <div class="nav">
        <router-link to="" class="nav-aBack">
        </router-link>
            <span>我要卖车</span>
        <router-link to="" class="nav-sell">
            卖车记录
        </router-link>
    </div>
    <div class="sellcar_img">
        <img src="../../assets/z-5.png" alt="">
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav{
    width: 100%;
    position: relative;
    margin: 3%
}
.nav-aBack{
    display: block;
    width: .3rem;
    height: .3rem;
    border: solid #ff5a37;
    border-width: 0 0 1.5px 1.5px;
    -webkit-transform: rotate(45deg);
    position: absolute;
    top: .1rem;
    left: .1rem;
}
.nav span{
    padding-top: .5rem;
    font-size: .3rem;
    padding-left: 2.9rem;
    padding-top:.3rem;
}
.nav-sell{
    font-size: .3rem;
    right: .2rem;
    color: #f85d00;
    position: absolute;
    padding-right: .2rem
}
.sellcar_img img{
    width: 100%;
    height: 4rem;
    display: block;
}
</style>
