<template>
<!-- 主页搜索父组件 -->
    <div class="search_suggest_w">
        <section class="search_suggest">
            <HomePageSearchHeader></HomePageSearchHeader>
            <HomePageSearchTage></HomePageSearchTage>
            <HomePageSearchKefu></HomePageSearchKefu>
        </section>  
    </div>
</template>
<script>
import HomePageSearchHeader from '../HomePage/HomePageSearchHeader'
import HomePageSearchTage from '../HomePage/HomePageSearchTage'
import HomePageSearchKefu from '../HomePage/HomePageSearchKefu'
export default {
    components:{
        HomePageSearchHeader,
        HomePageSearchTage,
        HomePageSearchKefu
    }
}
</script>
<style scoped>
.search_suggest_w{
    position: absolute;
    background: #ffffff;
    height: 100%;
    width: 100%;
    z-index: 8;
}
.search_suggest{
    background: #ffffff;
    position: relative;
    z-index: 1;
}
</style>
