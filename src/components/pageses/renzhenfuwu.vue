<template>
    <div class="out-div-item" v-if="matt">
        <div class="obscure">
            <section class="purchase-modal-wrap purchase-modal-active">
                    <h3 class="city-wide-title">认证服务
                        <i class="icon-close"></i>
                    </h3>
                    <dl class="purchase-modal-content">
                        <dt>
                            <i class="purchase-icon-confirm purchase-icon-mr"></i>315项检测
                        </dt>
                        <dd>
                            由资深行业权威专家制定的315项全面深度检测，并且由经过专业培训、经验丰富的检测师严格执行检测项及流程，包括车辆外部检测、内部检测、重大事故损伤排查、涉水及火烧车排查、发动机室检测等，点滴细节，保障您的购车权益
                        </dd>
                        <dt>
                            <i class="purchase-icon-confirm purchase-icon-mr"></i>无重大事故 无水泡 无火烧
                        </dt>
                        <dd>
                            确保发动机舱前尾板、纵梁及横梁、避震器塔座、ABC柱无修整或变形痕迹 <br> · 确保没有因撞击导致的气囊弹出 <br> · 确保非水泡车、非火烧车
                        </dd>
                    </dl>
            </section> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            matt:false
        }
    },
}
</script>

<style scoped>
    .obscure {
        width: 100%;
        height: 120%;
        background-color: rgba(0,0,0,.6);
        position: fixed;
        z-index: 100;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
    .purchase-modal-wrap {
        width: 100%;
        position: absolute;
        transition: bottom .5s;
        background: #fff;
        max-height: 100%;
        overflow-y: scroll;
    }
    .purchase-modal-active {
        bottom: 16%;
    }
    .purchase-modal-wrap .city-wide-title {
        text-align: center;
        font-size: .32rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #333;
        padding-top: .4rem;
    }
    .purchase-modal-wrap .icon-close {
        position: absolute;
        top: 0;
        right: 0;
        display: inline-block;
        width: 1rem;
        height: 1.2rem;
        background: url("../../assets/cuowu_123.png") no-repeat 50%;
        background-size: .4rem .4rem;
        background-position: 50%;
    }
    .purchase-modal-wrap .purchase-modal-content {
        padding-bottom: .4rem;
    }
    .purchase-modal-wrap .purchase-modal-content dt {
        margin: .4rem 0 0 .3rem;
        font-size: .28rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #333;
    }
    .purchase-icon-mr {
        margin-right: .12rem;
    }
    .purchase-icon-confirm {
        display: inline-block;
        width: .24rem;
        height: .24rem;
        background: url("../../assets/duihao_1.png") no-repeat;
        background-size: 100% 100%;
    }
    .purchase-modal-wrap .purchase-modal-content dd {
        margin: 0 .3rem 0 .7rem;
        line-height: .4rem;
        font-size: .26rem;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: #9b9b9b;
    }
</style>

