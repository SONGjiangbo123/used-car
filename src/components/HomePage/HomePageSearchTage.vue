<template>
<!-- 主页搜索热门搜索 -->
    <ul class="search_tages">
        <li>热门搜索</li>
        <li>
            <router-link to="#" class="search_list_a" v-for="(v,i) in hot" :key="i">{{v.title}}</router-link>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            hot:[]
        }
    },
    props:{
        hot:String
    },
    created() {
        this.axios({
            url:"/shou/sou",
            methods:"get"
        }).then((data)=>{
            console.log(data.data.hot)
            this.hot = data.data.hot;
        })
    },
}
</script>
<style scoped>
.search_tages{
    padding: .4rem .3rem .2rem;
}
.search_tages>li:first-child{
    color: #999999;
    font-size: .24rem;
    margin-left: .08rem;
}
.search_tages>li:last-child{
    display: flex;
    flex-flow: wrap;
}
.search_tages .search_list_a{
    padding: .12rem .3rem;
    margin: .12rem .08rem;
    /* border: none; */
    background: #f2f2f2;
    text-align: center;
    border-radius: 2px;
    color: #585858;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .26rem;
}
</style>
