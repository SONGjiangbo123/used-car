<template>
  <div>
    <div class="sell">
        <div class="sellcarprice">
            北京
        </div>
        <span class="sellcarprice_span">李先生 近期成交</span>
        <div class="sellcarprice_img">
            <img src="../../assets/z-10.jpg" alt="">
            <h2>奥迪/A4L/3013款 2.0T 自动 35TFSI舒适型</h2>
            <span>2013年 / 6.34万公里</span>
        </div>
    </div>
    <span class="mack">相比重庆本地报价</span>
    <div class="territory">
      <div class="territory_soochow" @click="add(0)">
        <span>苏州</span>
        <span>报价多25%</span>
      </div>
      <div class="territory_Peking" @click="add(1)">
        <span>北京</span>
        <span>报价多19%</span>
      </div>
      <div class="territory_city" @click="add(2)">
        <span>长沙</span>
        <span>报价多23%</span>
      </div>
      <div class="territory_river" @click="add(3)">
        <span>河源</span>
        <span>报价多25%</span>
      </div>
    </div>
    <router-link to>
      <p class="mack_p">查看更多成交记录 ></p>
    </router-link>
  </div>
</template>
<script>
export default {
  
  
};
</script>
<style scoped>
.sell{
    margin-left: .4rem;
    margin-bottom: .3rem;
}
.sellcarprice {
    color: #f85d00;
    border: 1px solid #f85d00;
    display: inline-block;
    font-size: .2rem;
    padding: .03rem .05rem;
    border-radius: .04rem;
    margin-bottom: .4rem;
}
.sellcarprice_span{
  font-size: .24rem;
    color: #f85d00;
    vertical-align: -.02rem;
    margin-left: .12rem;
}
.sellcarprice_img{
    position: relative;
    overflow: hidden;
}
.sellcarprice_img img{
    float: left;
    width: 1.8rem;
    margin-right: .2rem;
}
.sellcarprice_img h2{
    width: 57%;
    font-size: .32rem;
    color: #444;
    line-height: 1.44;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
}
.sellcarprice_img span{
    position: absolute;
    left: 2rem;
    bottom: 0;
    font-size: .22rem;
    color: #999;
}
.mack {
  padding-left: 0.5rem;
  padding-bottom: 0.4rem;
  color: #999;
  font-size: 0.24rem;
  margin-bottom: 0.4rem;
}
.territory {
  width: 100%;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
}
.territory span {
  border: #999 1px solid;
  color: #999;
}
.territory_soochow {
  float: left;
  width: 50%;
}
.territory_soochow span:nth-child(2n) {
  border: 0;
}
.territory_Peking span:nth-child(2n) {
  border: 0;
}
.territory_city {
  float: left;
  width: 50%;
  padding-top: 0.5rem;
}
.territory_city span:nth-child(2n) {
  border: 0;
}
.territory_river {
  padding-top: 0.5rem;
}
.territory_river span:nth-child(2n) {
  border: 0;
}
.mack_p {
  height: 0.7rem;
  line-height: 0.7rem;
  background: #fdf8ef;
  font-size: 0.24rem;
  color: #c5a879;
  text-align: center;
  margin: 0.4rem;
}





</style>
