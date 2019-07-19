<template>
    <div class="nav">
        <p onclick="history.go(-1)"> </p>
        <span>{{item}}</span>
        <router-link to="">
            <span class="search"></span>
        </router-link>
    </div>
</template>
<script>
export default {
    props:{
        item:String
    }
}
</script>
<style scoped>
    .nav{
        line-height: .9rem;
        background: #fff;
        font-size: .3rem;
        color: #1b1b1b;
        text-align: center;
        position: relative;
        border-bottom: 1px solid #ebe9e9;  
    }
    .nav p{
        /* display: block; */
        width: .24rem;
        height: .24rem;
        border: solid #ff5a37;
        border-width: 0 0 1.5px 1.5px;
        -webkit-transform: rotate(45deg);
        position: absolute;
        top: .35rem;
        left: .3rem;
    }
    .search{
        content: "";
        width: .28rem;
        height: .28rem;
        background: url("../../../static/img/search.png") no-repeat;
        background-size: 100%;
        position: absolute;
        top: .31rem;
        right: .3rem;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

</style>
