<template>
<!-- 搜索 -->
    <div class="sousuo_wrap">
        <HomePageSearchF></HomePageSearchF>
    </div>
</template>
<script>

const HomePageSearchF = () => import("../components/HomePage/HomePageSearchF")

export default {
    components:{
        HomePageSearchF
    }   
}
</script>
<style scoped>
.sousuo_wrap{
    height: 100%;
    width: 100%;
}
</style>
