<template>
    <div>
        <Picture :itemdata="arr"></Picture>
        <Videocarlist :itemdata="arra"></Videocarlist>
        <More more="更多超值车源" :itemdata="arrb"></More>
    </div>
</template>
<script>

const Picture = () => import("../components/repeat/picture")
const Videocarlist = () => import("../components/videodetection/videocarlist")
const More = () => import("../components/repeat/more")

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
            url:"/link/data",
            methods:"get"
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
