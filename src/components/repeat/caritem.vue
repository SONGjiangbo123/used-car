<template>
    <div>
         <div class="item">
            <div class="caritem-left">
                <img :src="imgurl" class="listimg">
                <img :src="newcar" :class="hot">
                <img :src="video"  class="video">
            </div>
            <div class="caritem-right">
                <h4>{{name}}</h4>
                <span class="list-data">{{data}}</span>
                <span :class="whole">{{price}}</span>
                <span :class="count">{{discount}}</span>
                <span class="list-price">{{payments}}</span>
                <span class="list-price">{{supply}}</span>
            </div>           
        </div>

        <div class="labels">
            <div class="label" :id="idname" v-if="reason">
                <img :src="medals">       
                <span>{{item}}</span>
                <span class="shool"></span>
                <span>{{guarantee}}</span>
            </div>
            <div v-else>
                <div class="label" :id="idname" >
                    <img :src="medals">       
                    <span>{{item}}</span>             
                </div>
                <div class="stwly">
                    <p>{{stwly}}</p>
                </div>
            </div>
            
            
        </div>
    </div>
   
</template>
<script>
export default {
    props:{
        imgurl:String,
        hot:String,
        newcar:String,
        video:String,
        name:String,
        data:String,
        price:String,
        whole:String,
        discount:String,
        count:String,
        payments:String,
        supply:String,
        idname:String,
        item:String,
        reason:Boolean,
        guarantee:String,
        medals:String,
        stwly:String
    },
    data(){
        return {
            bool:true
        }
    }
}
</script>
<style scoped>
    .item{
        padding: 15px;
        display:flex;
    }
    .caritem-left{
        width: 3.45rem;
        height: 1.75rem;
        margin-right: .26rem;  
        overflow:hidden;
        position: relative;
    }
    .hot{
        position: absolute;
        top:0;
        width: .53rem;
        height: .65rem;
    }
    .newcar{
        position: absolute;
        top:0;
        width: .79rem;
        height: .26rem;
    }
    .video{
        position: absolute;
        left: 2rem;
        bottom: .1rem;
        width: .44rem;
        height: .44rem;

    }
    .listimg{     
        width:100%;
    }
    
    .caritem-right{
        height: 1.71rem;
        position: relative;
    }
    .caritem-right h4{
        font-size: .28rem;
        color: #1b1b1b;
        margin-bottom: .1rem;
        line-height: .4rem;
        max-height: .76rem;
        font-weight: 400;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        margin-top: -.05rem;
    }
    .list-data{
        display: block;
        color: #999;
        font-size: .2rem;
        margin-bottom: .06rem;
    }
    .price{
        position: absolute;
        bottom: 0;
        font-size: .26rem;
        color: #f85d00;
        display:block;
    }
    .whole{
        font-size: .26rem;
        color: #333;
        display:block;
    }
    .discount{  
        display: inline-block;
        width: .8rem;
        height: .26rem;
        line-height: .3rem;
        border-radius: .03rem;
        -webkit-border-radius: .03rem;
        background: #f85d00;
        font-size: .18rem;
        color: #fff;
        text-align: center;
        margin-right: .06rem;
    }
    .list-price{
        color:#f85d00;
    }
    .labels{
        margin-right: 15px;
        border-top: 1px solid #eee;
        height: .6rem;
        margin-left: 3.14rem;
    }
    .label{
        display: inline-block;
        margin: .16rem 0;
        position: relative;
        padding-left:.3rem; 
    }
    .label img{
        display: inline-block;
        width: .22rem;
        height: .22rem;
        margin-left: .05rem;
        position: absolute;
        left: .03rem;
        top:.05rem;
    }
    .shool::before{
        display: inline-block;
        content: '|';
    }
    .label span{
        padding: .06rem .05rem .04rem;
        vertical-align: middle;
        border-radius: .04rem;
        text-align: center;
        font-size: .18rem;
        white-space: nowrap;
        margin: .06rem auto;
        line-height: .3rem;
        
    }
    .stwly{
        display: inline-block;
        border:0.01rem solid #ABD5FF;
        padding: .06rem .1rem .04rem;
        border-radius: .04rem;
        text-align: center;
        font-size: .18rem;
        white-space: nowrap;
        margin: .06rem auto;
        color: #ABD5FF;
    }
    #silver{
        border:0.01rem solid #E0C189;
    }
    #silver span{
        color: #E0C189;
    }
    #gold{
        border:0.01rem solid #AFB6C5;
    }
    #gold span{
        color: #AFB6C5;
    }
</style>
