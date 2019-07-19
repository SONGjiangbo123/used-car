<template>
    <div>
        <Picture :itemdata="arr"></Picture>
        <Videocarlist :itemdata="arra"></Videocarlist>
        <More more="更多超值车源" :itemdata="arrb"></More>    
    </div>
</template>
<script>
import Picture from '../components/repeat/picture'
import Videocarlist from '../components/videodetection/videocarlist'
import More from '../components/repeat/more'

export default {
    components:{
        Picture,
        Videocarlist,
        More
    },
    data(){
        return {
            arr:[],
            arra:[],
            arrb:[]
        }
    },
    created(){
        this.axios({
            url:"/contract/item",
            method:"get"
        }).then((ok)=>{
            this.arr = ok.data.video.splice(1,1);
            this.arra = ok.data.goodcar;
            this.arrb = ok.data.more.splice(1,1);
        })
    },
}
</script>
<style scoped>

</style>
