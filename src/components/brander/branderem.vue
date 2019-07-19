<template>
    <div>
        
        <div class="brander_a">
            
            <span class="brander_b">
                <img :src="images" >
                <p>{{name}}</p>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        images:String,     
        name:String
    }
}
</script>
<style scoped>
    .brander_a{
        width: 100%;
        height: 1rem;
        padding-top:.3rem;
        padding-left:.3rem;
        background-color: #fff;
    }
    img{
        width: 8%;
        float: left;
        padding-top:4%;
    }
    p{
        float: left;
        line-height: 1.2rem;
        padding-left:.3rem;
        font-size: .3rem;

    }
    
</style>