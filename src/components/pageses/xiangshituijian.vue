<template>
    <div class="car-details-recommend">
        <Uvintips></Uvintips>
        <Shoppingbottomone></Shoppingbottomone>
    </div>
</template>

<script>

const Uvintips = () => import("./uvintips")
const Shoppingbottomone = () => import("../shopping/shoppingbottomone")

export default {
   components:{
       Uvintips,
       Shoppingbottomone
   } 
}
</script>

<style scoped>

</style>
