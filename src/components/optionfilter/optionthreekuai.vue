<template>
    <div class="right_option_col_3_box">
        <span class="right_option_col_3_boxtitle">
            {{title}}
        <span class="right_option_col_3_boxtitle_unit">{{more}}</span>    
        </span>
        <ul class="right_option_box">
            <li class="right_option_box_3_list js_option_list" v-for="(v,i) in listtitle" :key="i">
                <span>{{v.price}}</span>        
            </li>
        </ul> 
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        listtitle:Array,
        more:String
    }
}
</script>
<style scoped>
.right_option_col_3_box{
    overflow: hidden;
    float: left;
    margin-bottom: .18rem;
}
.right_option_col_3_boxtitle{
    display: block;
    font-size: .3rem;
    height: 1.1rem;
    line-height: 1.1rem;
    font-weight: 900;
    color: #1b1b1b;
}
.right_option_box .right_option_box_3_list{
    float: left;
    width: 1.5rem;
    border:1px solid #eeeeee;
    border-radius: 4px;
    text-align: center;
    line-height: .38rem;
    padding: .17rem 0 .13rem;
    color: #585858;
    font-size: .28rem;
    margin-bottom: .2rem;
    margin-right: .2rem;
}
.right_option_col_3_boxtitle_unit{
    font-size: .24rem;
    color: #999999;
    font-weight: 400;
}
</style>
