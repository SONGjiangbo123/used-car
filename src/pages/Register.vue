<template>
<!-- 登录 -->
    <div class="body">
        <RegisterOK></RegisterOK>
    </div>
</template>
<script>

const RegisterOK = () => import("../components/Register/RegisterOk")

export default {
    components:{
        RegisterOK
    }
}
</script>
<style scoped>
.body{
    position: absolute;
    width: 100%;
    height: 100%;
    /* top: 0;
    left: 0;
    overflow-y: auto; */
    background: -webkit-linear-gradient(top,#FFF8F2,#fff);
}
</style>
