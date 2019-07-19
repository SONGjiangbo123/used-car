<template>
    <div>
        <div class="color">
            <div class="box1">
                <em class="header_goback"></em>
                <p class="nav">车辆估价</p>
            </div>
            <div class="box">
                <span>卖车城市</span>
                <router-link to="./LocationStr"><input type="text" class=text placeholder="请输入你想说的 >"></router-link>
                
            </div>
            <div class="box">
                <span>车辆牌照</span>
                <input type="text" class=text placeholder="泸 > A >">

            </div>
            <div class="box">
                <span>品牌车系</span>
                <router-link to="./brand">
                     <input type="text" class=text placeholder="请选择品品牌&车系" >
                </router-link>
               

            </div>
            <div class="box">
                <span>上牌时间</span>
                <input type="text" class=text placeholder="请选择上牌时间 >">

            </div>
            <div class="box">
                <span>行驶里程</span>
                <input type="text_a" class=text value="万公里">
               

            </div>
            <div class="box item"  @click="!show()" >
                <span>车况自评</span>
            
                <input type="text" class=text placeholder="请选择车况 >">
           
                <Car class="box2" v-show="bool"></Car>
            </div>
        </div>   
    </div>
          
</template>
<script>
import LocationStr from './LocationStr'
import Car from './car'  //引入组件
  export default {
    components:{
      Car ,
      LocationStr//引用组件
    },
    data(){
      return{
        date:'',
        bool:false,
      }
    },
    
    methods:{
      show(){
          this.bool=true
      }
    }
  }

</script>
<style scoped>
    .color{
        background-color: #fff;
        font-size: .3rem;
    }
   .item:hover Car{
       display: block;
   }
   
    .nav_a{
        width: 10%;
        float: left;
        margin-left:5%;
    }
    .nav{
        width: 80%;
        text-align: center;
        float: left;
    }
    .box1{
        width: 100%;
        height: 1.1rem;
        border-bottom:1px solid #f1efef;
        line-height: 1.1rem;
    }
    .box{
        width: 95%;
        height: 1.1rem;
        /* border-top:1px solid red; */
        border-bottom:1px solid #f1efef;
        /* float: left; */
        line-height: 1.1rem;
        margin-left:5%;
        background-color: #fff;

    }
    .text{
        width: 50%;
        height: 1.1rem;
        float: right;
        outline: none;
        border:transparent;
        text-align: right;
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
   
</style>
