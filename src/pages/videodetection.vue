<template>
    <div>
        <!-- 大图片组件   repeat（复用）文件-->
        <Picture :itemdata="arr"></Picture>
        <!-- 视频组件 videodetetection文件 -->
        <Videocarlist :itemdata="arra"></Videocarlist>
        <More more="更多视频车源" :itemdata="arrb"></More>
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
            url:"/link/data",
            methods:"get"
        }).then((ok)=>{
            this.arr = ok.data.video.splice(0,1);
            this.arra = ok.data.carlist
            this.arrb = ok.data.more.splice(0,1);
        })
    },

}
</script>
<style scoped>

</style>
