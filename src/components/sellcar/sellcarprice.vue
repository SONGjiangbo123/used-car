<template>
<div>
    <div class="sellcarprice">
        <div class="sellcarprice_text">
                <div class="sellcarprice_span">
                    <span>深圳</span>
                    <span>李先生 近期成交</span>
                </div>
                <div class="sellcarprice_item">
                    <div class="sellcarprice_img">
                        <img src="../../assets/z-8.jpg" alt="">
                        <h2>日产/奇骏/2014款 2.0自动 XL舒适版前驱</h2>
                        <span>2015年 / 5.97万公里</span>
                    </div>
                </div>
        </div>
    </div>
    <span class="mack">相比重庆本地报价</span>
        <div class="territory">
            <div class="territory_soochow ">
                <span>苏州</span>
                <span>报价多25%</span>
            </div>
            <div class="territory_Peking ">
                <span>北京</span>
                <span>报价多19%</span>
            </div>
            <div class="territory_city">
                <span>长沙</span>
                <span>报价多23%</span>
            </div>
            <div class="territory_river">
                <span>河源</span>
                <span>报价多25%</span>
            </div>
        </div>
        <router-link to="">
            <p class="mack_p">查看更多成交记录 ></p>
        </router-link>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.sellcarprice{
    display: flex;
    width: 90%;
    height: 3.45rem;
    margin: 5%;
}
.sellcarprice_item{
    width: 100%;
    height: 1.3rem;
}
.sellcarprice_text{
    box-shadow: 0 -10px 20px #efefef;
    padding: 4%;
    border-bottom: #999 1px solid;
    border-radius: 4px;
}
.sellcarprice_span{
    width: 100%;

}
.sellcarprice_span span{
    color: #f85d00;
}
.sellcarprice_span span:first-child{
    border: #f85d00 1px solid;
    
}
.sellcarprice_img{
    margin-top: .4rem;
}
.sellcarprice_img img{
    width: 2rem;
    height: 1.3rem;
    float: left;
   
}
.sellcarprice_img h2{
    font-size: .32rem;
    padding-left: 2.3rem;
}
.sellcarprice_img span{
    display: block;
    padding-left: 2.3rem;
    padding-top: .24rem;
    font-size: .22rem;
    color: #999;
}

.mack{
    padding-left: .5rem;
    padding-bottom: .4rem;
    color: #999;
    font-size: .24rem;
    margin-bottom: .4rem;
}
.territory{
    width: 100%;
    padding-left: .5rem;
    padding-top: .3rem;
}
.territory span{
    border: #999 1px solid;
    color: #999;
    
}
.territory_soochow{
    float: left;
    width: 50%;
}
.territory_soochow span:nth-child(2n){
    border: 0;
}
.territory_Peking span:nth-child(2n){
    border: 0;
}
.territory_city{
    float: left;
    width: 50%;
    padding-top: .5rem;
}
.territory_city span:nth-child(2n){
    border: 0;
}
.territory_river{
    padding-top: .5rem;
}
.territory_river span:nth-child(2n){
    border: 0;
}
.mack_p{
    height: .7rem;
    line-height: .7rem;
    background: #fdf8ef;
    font-size: .24rem;
    color: #C5A879;
    text-align: center;
    margin: .4rem;
}
</style>
