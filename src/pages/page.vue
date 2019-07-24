<template>
    <div id="page">
        <Pagecar></Pagecar>
        <!-- 包物流 -->
        <Baowuliu></Baowuliu>
        <!-- body部分 -->
        <Pagebody></Pagebody>
        <!-- 档案部分  -->
        <Cardangan></Cardangan>
        <!-- 检测部分 -->
        <Carjiance></Carjiance>
        <!-- 顶部bang -->

    </div>
</template>

<script>
import Pagecar from '../components/pageses/pagecar'
import Baowuliu from '../components/pageses/baowuliu'
import Pagebody from '../components/pageses/pagebody'
import Cardangan from '../components/pageses/cardangan'
import Carjiance from '../components/pageses/carjiance'


export default {
    components:{
        Pagecar,
        Baowuliu,
        Pagebody,
        Cardangan,
        Carjiance
    }
}
</script>

<style scoped>
    #page{
        width: 100%;
    }
</style>
