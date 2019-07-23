<template>
    <div class="body">
        <Kefus></Kefus>
    </div>
</template>
<script>

const Kefus = () => import("../components/kefu/kefus")

export default {
    components:{
        Kefus
    }
}
</script>
<style scoped>
.body{
    width: 100%;
    height: 100%;
    background: #e0f4fe;
}
</style>
