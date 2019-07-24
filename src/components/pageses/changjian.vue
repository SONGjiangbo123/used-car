<template>
    <div class="faq-wrap">
        <Uvintips></Uvintips>
        <ul class="faq-flex-item">
            <li>免费服务</li>
            <li>优信认证</li>
            <li>全国购</li>
            <li>一成购车</li>
            <li class="faq-item-long">检测是否收费</li>
            <li class="faq-item-long">车辆检测标准</li>
        </ul>
    </div>
</template>

<script>

const Uvintips = () => import("./uvintips")

export default {
    components:{
        Uvintips
    }
}
</script>

<style scoped>
    .faq-wrap {
        margin-top: .2rem;
    }
    .faq-flex-item, .faq-flex-item li {
        display: flex;
    }
    .faq-flex-item li {
        background-color: #f6f6f6;
        width: 1.44rem;
        height: .6rem;
        margin-left: .2rem;
        margin-top: .2rem;
        color: #1b1b1b;
        font-size: .26rem;
        justify-content: center;
        align-items: center;
    }
    .faq-flex-item {
        flex-wrap: wrap;
        background-color: #fff;
        padding: .3rem .2rem;
    }
    .faq-flex-item .faq-item-long {
        width: 2rem;
    }
</style>