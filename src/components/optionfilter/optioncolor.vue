<template>
    <div class="right_option_color_box">
        <span class="right_option_color_boxtitle">
            颜色
        </span>
        <ul class="right_option_box">
            <li class="right_option_box_4_list_color js_option_list_1">
                黑色
            </li>
            <li class="right_option_box_4_list_color js_option_list_2">
                深灰色
            </li>
            <li class="right_option_box_4_list_color js_option_list_3">
                银灰色
            </li>
            <li class="right_option_box_4_list_color js_option_list_4">
                白色
            </li>
            <li class="right_option_box_4_list_color js_option_list_5">
                香槟色
            </li>
            <li class="right_option_box_4_list_color js_option_list_6">
                黄色
            </li>
            <li class="right_option_box_4_list_color js_option_list_7">
                橙色
            </li>
            <li class="right_option_box_4_list_color js_option_list_8">
                红色
            </li>
            <li class="right_option_box_4_list_color js_option_list_9">
                蓝色
            </li>
            <li class="right_option_box_4_list_color js_option_list_10">
                粉红色
            </li>
            <li class="right_option_box_4_list_color js_option_list_11">
                紫色
            </li>
            <li class="right_option_box_4_list_color js_option_list_12">
                咖啡色
            </li>
            <li class="right_option_box_4_list_color js_option_list_13">
                绿色
            </li>
            <li class="right_option_box_4_list_color js_option_list_14">
                多彩色
            </li>
            <li class="right_option_box_4_list_color js_option_list_15">
                其他
            </li>
        </ul> 
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        listtitle:String,
        more:String
    }
}
</script>
<style scoped>
.right_option_color_box{
    overflow: hidden;
    float: left;
    margin-bottom: .18rem;
}
.right_option_color_boxtitle{
    display: block;
    font-size: .3rem;
    height: 1.1rem;
    line-height: 1.1rem;
    font-weight: 900;
    color: #1b1b1b;
}
.right_option_color_box .right_option_box_4_list_color{
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
    position: relative;
}
.right_option_color_box .right_option_box_4_list_color::before{
    content:"";
    width: .1rem;
    border-radius: 4px 0 0 4px;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
}
.right_option_color_box .js_option_list_1::before{
    background:#1b1b1b;
}
.right_option_color_box .js_option_list_2::before{
    background:#8a8a8a;
}
.right_option_color_box .js_option_list_3::before{
    background:#8b8b8b;
}
.right_option_color_box .js_option_list_4::before{
    background:#ffffff;
    border-right: 1px solid #ffffff;
}
.right_option_color_box .js_option_list_5::before{
    background:#D6C38A;
}
.right_option_color_box .js_option_list_6::before{
    background:#F0B453;
}
.right_option_color_box .js_option_list_7::before{
    background:#EF680E;
}
.right_option_color_box .js_option_list_8::before{
    background:#B70224;
}
.right_option_color_box .js_option_list_9::before{
    background:#1658AC;
}
.right_option_color_box .js_option_list_10::before{
    background:#D85793;
}
.right_option_color_box .js_option_list_11::before{
    background:#1658AC;
}
.right_option_color_box .js_option_list_12::before{
    background:#257D40;
}
.right_option_color_box .js_option_list_13::before{
    background:#A631C8;
}   
.right_option_color_box .js_option_list_14::before{
    background:#623812;
}
.right_option_color_box .js_option_list_15::before{
    background:#257D40;
}
.right_option_color_box .js_option_list_14::before{
    background:url(https://s4.xinstatic.com/static/newcar-m/widget/high-filter/option-color/imgs/more-color_2a89290.png);
    background-size: cover;
}
.right_option_color_box .js_option_list_15::before{
    background:url(https://s3.xinstatic.com/static/newcar-m/widget/high-filter/option-color/imgs/other-color_e1c67b1.png);
    background-size: cover;
}
</style>