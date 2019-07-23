<template>
    <div>
        
        <Picture :itemdata="arr"></Picture>
        
    </div>
</template>
<script>

const Picture = () => import("../components/repeat/picture")

export default {
    components:{
        Picture
    },
    data(){
        return {
            arr:[],
        }
    },
    created() {
        this.axios({
            url:"/link/data",
            methods:"get"
        }).then((ok)=>{
            this.arr = ok.data.contract
            console.log(this.arr);
        })
    },
}
</script>
<style scoped>

</style>
