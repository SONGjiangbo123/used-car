<template>
    <div>       
        <Picture :itemdata="arr"></Picture>       
    </div>
</template>
<script>
import Picture from '../components/repeat/picture'
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
            url:"/contract/item",
            method:"get"
        }).then((ok)=>{
            this.arr = ok.data.contract.splice(0,7);
        })
    },
}
</script>
<style scoped>

</style>
