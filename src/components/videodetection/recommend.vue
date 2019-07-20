<template>
    <div>
        <!-- 推荐组件 -->
        <div class="section-header"><span>{{recom}}</span></div>
    </div>
</template>
<script>
export default {
    props:{    
        recom:String
    }
}
</script>
<style scoped>
    .section-header{
        text-align: center;
        border-bottom: .01rem solid #f6f6f6;
    }
    .section-header span{
        display: inline-block;
        width: 3.4rem;
        height: 1.18rem;
        line-height: 1.2rem;
        font-size: .34rem;
        background: url("../../../static/img/landing.png") no-repeat left;
        background-size: 100%;
    }
</style>
