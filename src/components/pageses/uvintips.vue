<template>
    <div>
        <h3 class="uxin-tips">
            <span>车辆档案</span>
            <span class="files-car-number">编号:62902059</span>
        </h3> 
    </div>
</template>

<script>
export default {
    props:{
        gh:String
    }
}
</script>

<style scoped>
    .uxin-tips {
        font-size: .3rem;
        color: #1b1b1b;
        line-height: 1.05rem;
        font-weight: 700;
        padding-left: .35rem;
        position: relative;
        background-color: #fff;
        border-bottom: 1px solid #f1f1f1;
    }
    .uxin-tips:before {
        content: "";
        width: .04rem;
        height: 1.05rem;
        background: #f85d00;
        display: inline-block;
        position: absolute;
        left: 0;
    }
    .files-car-number {
        font-size: .24rem;
        color: #999;
        float: right;
        font-weight: 400;
        margin-right: .4rem;
    }
</style>
