<template>
    <!-- 百科 -->
     <div class="ency-list">
        <div class="scroller">
            <router-link to="" class="list" v-for="(v,i) in itemdata" :key="i">
                <img :src="v.image" class="carimg">
                <h4>{{v.title}}</h4>
                <span class="icon">{{v.item}}</span>
            </router-link>
        </div>  
    </div>
</template>
<script>
export default {
    props:{
        itemdata:Array
    }
}
</script>
<style scoped>
    .ency-list{
        margin: .3rem;
        white-space: nowrap;
        overflow: auto;
        /* box-sizing: border-box; */
    }
    .list{
        display: inline-block;
        overflow: hidden;
        margin-right: .2rem;
    }
    .carimg{
        width: 4rem;
        height: 2rem;
        display: inline-block;
    }
   
    .ency-list::-webkit-scrollbar{
        display:none;
    }
    .scroller h4{
        font-size: .24rem;
        line-height: 0.44rem;
        color: #1b1b1b;
        font-weight: normal;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 0.2rem;
        overflow: hidden;
    }
    .icon{
        float: left;
        height: 0.42rem;
        font-size: .2rem;
        color: #ff5a37;
        padding: 0.06rem .1rem;
        border: 1px solid #ff5a37;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        line-height: .3rem;
        margin-bottom: .1rem;
    }

</style>

