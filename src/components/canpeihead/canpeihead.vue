<template>
	<div>
		<div class="headbox">
			<a class="head-bcak"></a>
			
			<span class="head-box-sp1" @click="fun1()">{{xingneng}}</span>
			<span class="head-box-sp1" @click="fun2">{{wanzheng}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:{

			xingneng:String,
			wanzheng:String
		},
			methods:{
			fun1(){
				this.pzshow =! this.pzshow;
			},
			fun2(){
				this.xnshow =! this.xnshow;
			}
		}
	}
	

</script>

<style scoped>
	.headbox{
		width: 100%;
		height: 44px;
		background:white;
		border-bottom: 1px solid #e5e5e5;
		text-align: center;
		z-index: 9;
		line-height: 44px;
		position: fixed;
		margin-top: 0;
		/*overflow: hidden;*/
	}	
	.head-bcak{
		display: block;
	    width: 11px;
	    height: 11px;
	    border: solid #ff5a37;
	    border-width: 0 0 2px 2px;
	    transform: rotate(45deg);
	    position: absolute;
	    top: 15px;
	    left:18px;
	}
	.headbox span{
		font-size: 16px;
		display: inline-block;
		width: 67px;
		height: 44px;
		box-sizing: border-box;
		border-bottom:2px solid #f85d00;
	}
	.headbox span:nth-child(2){
		margin-right: 30px;
	}
</style>