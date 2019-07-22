<template>
    <div>
        <div class="header">
            <span>全部</span>
            <span>购物车</span>
            <span>咨询</span> 
            <span class="retuen"></span>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header{
        text-align: center;
        background: white;
       
    }
    .header span{
        display: inline-block;
        line-height: .9rem;
        font-size: .3rem;
        margin:0 .12rem;
    }
    .return{
        display: block;
        content: "";
        width: .28rem;
        height: .28rem;
        background: url(//s3.xinstatic.com/m/img/canon/search.png) no-repeat;
        background-size: 100%;
        position: absolute;
        top: .31rem;
        right: .3rem;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }


</style>
