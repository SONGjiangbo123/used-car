<template>
    <div class="seater_a">
        <div class="brand_a">
            <router-link to="./home">
                <em class="header_goback"></em>
            </router-link>
            
            <p>选择品牌</p>
        </div>
        <div class="brand_e">
            热门品牌
        </div>
        <div class="brand_c">
            <div class="brand_b">
                <img src="../../static/img/2.png" >
                <span>大众</span>
            </div>
            <div class="brand_b">
                <img src="../../static/img/3.png" >
                <span>大众</span>
            </div>
            <div class="brand_b">
                <img src="../../static/img/4.png" >
                <span>大众</span>
            </div>
            <div class="brand_b">
                <img src="../../static/img/5.png" >
                <span>大众</span>
            </div>
            <div class="brand_b">
                <img src="../../static/img/6.png" >
                <span>大众</span>
            </div>
            <div class="brand_b">
                <img src="../../static/img/7.png" >
                <span>大众</span>
            </div>
            <div class="brand_b">
                <img src="../../static/img/8.png" >
                <span>大众</span>
            </div>
            <div class="brand_b">
                <img src="../../static/img/9.png" >
                <span>大众</span>
            </div>
            <div class="brand_b">
                <img src="../../static/img/10.png" >
                <span>大众</span>
            </div>
            <div class="brand_b">
                <img src="../../static/img/11.png" >
                <span>大众</span>
            </div>
        </div>
        <div class="brand_s">
            <p>A</p>
            <Brander class="brand_d"></Brander>
            <p>b</p>
            <Brander class="brand_d"></Brander>
            <p>c</p>
            <Brander class="brand_d"></Brander>
        </div>
       

    </div>
</template>
<script>
import Brander from '../components/brander/brander'
export default {
    components:{
       Brander
    }
    
}
</script>
<style scoped>
    .brand_s p{
        padding-left:.3rem;
        height: 0.6rem;
        line-height: .6rem;
        float: left;
    }
    .brand_a{
        width: 100%;
        height: 0.8rem;
        line-height: .8rem;
        text-align: center;
        font-size: .4rem;
        /* border:1px solid red; */
        background-color: #fff;
    }
    .header_goback{
        position: absolute;
        top: .34rem;
        left: .28rem;
        width: .2rem;
        height: .2rem;
        border:solid #ff5a37;
        border-width: 0 0 1.5px 1.5px;
        transform: rotate(45deg);
    }
    .brand_e{
        height: .6rem;
        background-color: #f6f6f9;
        padding-left:.3rem;
        line-height: .6rem;
    }
    .brand_c{
        width: 100%;
        height: 3.5rem;
        background-color: #fff;
        float: left;
    }
    img{
        width: 50%;
        padding-left:25%;
    }
    .brand_b{
        width: 20%;
        height: 1.3rem;
        /* border:1px solid red; */
        float: left;
        padding-top:.3rem;
        line-height: .8rem;
        text-align: center;
    }
    .brand_d{
        float: left;
    }
</style>