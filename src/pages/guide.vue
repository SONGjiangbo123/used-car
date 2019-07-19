<template>
    <div class="guide">
        <Pricture :itemdata="arr"></Pricture>
        <router-link to="/">
            <p class="shopcar"></p>
        </router-link>
    </div>
</template>
<script>
import Pricture from '../components/repeat/picture'
export default {
    components:{
        Pricture
    },
    data(){
        return {
            arr:[]
        }
    },
    created() {
        this.axios({
            url:"/contract/item",
            method:"get"
        }).then((ok)=>{
            this.arr=ok.data.contract.splice(8,5);
        })
    },
}
</script>
<style scoped>
    .guide{
        position: relative;
    }
    .shopcar{
        position: absolute;
        bottom: .52rem;
        left: 1rem;
        right: 1rem;
        height: .9rem;
        z-index: 9;
        background-color: transparent;
    }
</style>
