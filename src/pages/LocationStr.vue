<template>
<!-- 首页城市定位 -->
    <div>
        <LocationHearder></LocationHearder>
        <nav>将从全国为您挑选该城市可购买的车辆</nav>
        <LocationBody></LocationBody>
    </div>
</template>
<script>
import LocationHearder from '../components/location/locationHearder'
import LocationBody from '../components/location/locationBody'
export default {
    components:{
        LocationHearder,
        LocationBody
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
