<template>
<div>
    <div class="sellcar">
        <h3>卖的快</h3>
        <div class="sellcar_text">
            <p>最快当天预约</p>
            <p>当天成交 当天付款</p>
            <img src="../../assets/z-8.png" alt="">
        </div>
    </div>
    <h3 class="lucency">透明交易</h3>
        <div class="business">
            <p>买卖交易面对面</p>
            <p>中间环节无干扰</p>
            <img src="../../assets/z-9.png" alt="">
        </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.sellcar h3{
    padding: .08rem 0 .28rem .4rem;
    font-size: .38rem;
    color: #333;
    position: relative;
    background: #fff;
}
.sellcar h3::before{
    content: "";
    width: .6rem;
    height: .05rem;
    background-color: #f85d00;
    position: absolute;
    bottom: 0;
    left: .4rem;
}

.sellcar_text{
    margin: 0 .4rem .13rem;
}
.sellcar_text{
    font-size: .36rem;
    color: rgba(88,88,88,1);
    line-height: 1.55;
    font-weight: 500;
    padding-top: .2rem;
}
.sellcar_text img{
    width: 100%;
}
.lucency{
    padding: .08rem 0 .28rem .4rem;
    font-size: .38rem;
    color: #333;
    position: relative;
    background: #fff;
}
.lucency::before{
    content: "";
    width: .6rem;
    height: .05rem;
    background-color: #f85d00;
    position: absolute;
    bottom: 0;
    left: .4rem;
}
.business{
    margin: 0 .4rem .13rem;
    font-size: .36rem;
    color: rgba(88,88,88,1);
    line-height: 1.55;
    font-weight: 500;
    padding-top: .2rem;
}
.business img{
    width: 100%;
}
</style>
