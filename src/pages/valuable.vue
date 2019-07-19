<template>
    <div>
        <Slide item="宝典"></Slide>
        <Rotary :itemdata="arr"></Rotary>
    </div>
</template>
<script>
import Slide from '../components/slide/slide'
import Rotary from '../components/rotary/rotary'
export default {
    components:{
        Slide,
        Rotary
    },
    data(){
        return {
            arr:[]
        }
    },
    created() {
        this.axios({
            url:"/contract/item",
            method: "get"
        }).then((ok)=>{
            this.arr = ok.data.rotary
        })
    },
}
</script>
<style scoped>

</style>
