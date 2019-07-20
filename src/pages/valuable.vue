<template>
    <div>
        <Slide item="宝典"></Slide>
        <Rotary :itemdata="arr"></Rotary>
        <Rotnav :itemdata="arra"></Rotnav>
        <div class="titles">
            <Slidemore title="热门文章"></Slidemore>
            <Article :itemdata="arrb"></Article>
        </div>
        <div class="titles">
            <Slidemore title="百科"></Slidemore>
            <Clopedias :itemdata="arrc"></Clopedias>
        </div>
        <div class="titles">
            <Slidemore title="热门问答"></Slidemore>
            <Popular :itemdata="arrd"></Popular>
        </div>
    </div>
</template>
<script>
import Slide from '../components/slide/slide'
import Rotary from '../components/rotary/rotary'
import Rotnav from '../components/rotary/rotnav'
import Slidemore from '../components/repeat/slidemore'
import Article from '../components/treasury/article'
import Clopedias from '../components/treasury/clopedias'
import Popular from '../components/treasury/popular'
export default {
    components:{
        Slide,
        Rotary,
        Rotnav,
        Slidemore,
        Article,
        Clopedias,
        Popular
    },
    data(){
        return {
            arr:[],
            arra:[
                {
                    "image":"../../../static/img/remo1.png",
                    "item":"问答"
                },
                {
                    "image":"../../../static/img/remo2.png",
                    "item":"文章"
                },
                {
                    "image":"../../../static/img/remo3.png",
                    "item":"百科"
                }
            ],
            arrb:[],
            arrc:[],
            arrd:[]
        }
    },
    created() {
        this.axios({
            url:"/link/data",
            method: "get"
        }).then((ok)=>{
            console.log(ok);
            this.arr = ok.data.rotary
            this.arrb=ok.data.article.splice(0,2)
            this.arrc=ok.data.clopedias
            this.arrd=ok.data.popular
        })
    },
}
</script>
<style scoped>
    .titles{
        background: #fff;
        overflow: hidden;
        margin-bottom: .2rem;
    }
  
</style>
