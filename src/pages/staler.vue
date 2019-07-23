<template>
<!-- 首页城市定位 -->
    <div>
        <Stale></Stale>
        <!-- <nav>将从全国为您挑选该城市可购买的车辆</nav> -->
        <Stalem></Stalem>
    </div>
</template>
<script>
import Stale from '../hunder/location/stale'
import Stalem from '../hunder/location/stalem'
export default {
    components:{
        Stale,
        Stalem
    }
}
</script>
<style scoped>
nav{
    height: .8rem;
    padding: .2rem 0;
    text-align: center;
    background: #fef4e4;
    font-size: .28rem;
    color: #f85d00;
}
</style>
