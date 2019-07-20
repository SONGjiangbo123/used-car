<template>
	<div>
		<div class="video">
			<img src="../../static/img/5cbbe79b4705a369060_19.jpg" />
			<div class="video-mb">
				<p> 共183段视频，500项检测 ,播放时长23分钟 </p>
				<a>开始播放</a>
			</div>
		</div>
		<!---------事故排查-->
		<div class="paicha">
			<h3>事故排查</h3>
			<div class="paicha-div1">
				<span class="paicha-sp1" @click="fun1()">排除重大事故</span>
				<div class="jiatou"></div>
				<div class="xiang">67项<img src="../../static/img/ic-pass_41af74e.png" ></div>
			</div>
			<div class="xiala" v-show="bools">
				<span>
					左前纵梁
					<p><img src="../../static/img/ic-pass_41af74e.png" /></p> 
				</span>
				<span>
					右前纵梁
					<p><img src="../../static/img/ic-pass_41af74e.png" /></p> 
				</span>
				<span>
					左后纵梁
					<p><img src="../../static/img/ic-pass_41af74e.png" /></p> 
				</span>
				<span>
					又后纵梁
					<p><img src="../../static/img/ic-pass_41af74e.png" /></p> 
				</span>
			</div>
			<div class="paicha-div1">
				<span class="paicha-sp1">排除水泡火烧</span>
				<div class="jiatou"></div>
				<div class="xiang">65项<img src="../../static/img/ic-pass_41af74e.png" ></div>
			</div>
		</div>
		<!----------轻微碰撞-->
		<div class="paicha">
			<h3>事故排查</h3>
			<div class="paicha-div1">
				<span class="paicha-sp1">轻微碰撞</span>
				<div class="jiatou"></div>
				<div class="xiang">36项<img src="../../static/img/ic-pass_41af74e.png" ></div>
			</div>
		</div>
		<!-----------易损耗部件-->
		<div class="paicha">
			<h3>易损耗部件</h3>
			<div class="paicha-div1">
				<span class="paicha-sp1">易损耗部件</span>
				<div class="jiatou"></div>
				<div class="xiang">6项<img src="../../static/img/ic-pass_41af74e.png" ></div>
			</div>
		</div>
		<!--------------常用功能-->
		<div class="paicha">
			<h3 class="h3-1">常用功能</h3>
			<div class="paicha-div1">
				<span class="paicha-sp1">外部配置</span>
				<div class="jiatou"></div>
				<div class="xiang">6项<img src="../../static/img/ic-pass_41af74e.png" ></div>
			</div>
			<div class="paicha-div1">
				<span class="paicha-sp1">内部配置</span>
				<div class="jiatou"></div>
				<div class="xiang">74项<img src="../../static/img/ic-pass_41af74e.png" ></div>
			</div>
			<div class="paicha-div1">
				<span class="paicha-sp1">灯光系统</span>
				<div class="jiatou"></div>
				<div class="xiang">13项<img src="../../static/img/ic-pass_41af74e.png" ></div>
			</div>
			<div class="paicha-div1">
				<span class="paicha-sp1">随车工具</span>
				<div class="jiatou"></div>
				<div class="xiang">7项<img src="../../static/img/ic-pass_41af74e.png" ></div>
			</div>
		</div>
		<!-----------------客服咨询-->
		<div class="btm-kf">
			<a class="btm-kf-a1">在线客服</a>
			<a class="btm-kf-a2">
				<img src="../../static/img/tel_3ce0430.png" />免费咨询 
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				bools:false
			}
		},
		methods:{
			fun1(){
			this.bools = !this.bools;
			
			}
		}
	}
	
</script>

<style scoped>
	.video{
		width: 100%;
		height: 4.2rem;
		background: red;
		
	}
	.video img{
		height:4.2rem ;
		width: 100%;
	}
	.video-mb{
		position: absolute;
	    top: 0;
	    margin-top: 44px;
	    z-index: 110;
	    width: 100%;
	    height: 4.2rem;
	    background: rgba(0,0,0,.8);
	}
	.video-mb p{
		 z-index: 111;
		padding-bottom: .5rem;
		padding-top: 18%;
	    text-align: center;
	    font-size: .28rem;
	    color: #e5e5e5;
	}
	.video-mb a{
		
		display:block;
		height: 30px;
		width: 2.24rem;
		margin: 0 auto;
	    padding: .18rem 0 .14rem;
	    font-size: .28rem;
	    border-radius: 3px;
	    text-align: center;
	    background: #f85d00;
	    color: #fff;
	 
	    
	}
	.paicha{
		width: 100%;
	}
	.paicha h3{
		width: 100%;
		height: 1.05rem;
		background: #fff;
		box-sizing: border-box;
		border-left: 2px solid #f85d00;
		margin-top: 18px;
		padding-left: 17.5px;
		line-height:1.05rem ;
	}
	.paicha-div1{
		padding: 0 20px;
		border-top: 1px solid #eee;
		line-height:45px ;
		width: 100%;
		height: 45px;
		background: #fff;
	}
	.paicha-sp1{
		font-size: 14px;
		color: #585858;
	}
	.jiatou{
		content: "";
	    width: 5px;
	    height: 5px;
	    border: solid #c5c5c5;
	    border-width: 0 1px 1px 0;
	    transform: rotate(45deg);
	    display: inline-block;
	    margin-left: .14rem;
	    vertical-align: .06rem;
}
 	.xiang{
 		font-size: 12px;
 		color: #C5C5C5;
 		float: right;
 		display: inline-block;
 	}
 	.xiang img{
 		margin-left: 3px;
 		vertical-align:middle;
 		display: inline-block;
 		width: 16px;
 	}
 	.btm-kf{
 		width: 100%;
 		height: 44px;
 		background: saddlebrown;
 		position: fixed;
 		bottom: 0;
 	}
 	.btm-kf-a1{
 		float: left;
 		display: inline-block;
 		width: 50%;
 		height: 44px;
 		background:#ffa800 ;
 		color: #fff; ;
 		font-size:.3rem ;
 		text-align: center;
		line-height: 44px;
 	}
 	.btm-kf-a2{
 		float: left;
 		display: inline-block;
 		font-size:.3rem ;
 		text-align: center;
		line-height: 44px;
		width: 50%;
		color: #fff; 
		background: linear-gradient(90deg,#fc9600,#f85d00)
 	}
 	.btm-kf-a2 img{
 		display: inline-block;
 		width: .32rem;
 		vertical-align:middle;
 	}
 	.xiala{
 		width: 100%;
 	}
 	.xiala span{
 		
 		color: #999999;
 		font-size: 12px;
 		display: block;
 		height: 35px;
 		width: 100%;
 		padding: 0 20px;
 		line-height: 35px;
 		overflow: hidden;
 	}
 	.xiala img{
 		display: inline-block;
 		width: 16px;
 		vertical-align: middle;
 	}
 	.xiala p{
 		display: inline-block;
 		float: right;
 		width: 16px;
 	}
</style>