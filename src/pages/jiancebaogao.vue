<template>
	<div>
		<Head title="检测报告"></Head>
		<Jiance></Jiance>
	</div>
	
</template>

<script>

	const Head = () => import("../components/head/head")
	const Jiance = () => import("../components/jiance/jiance")

	export default{
		components:{
			Head,
			Jiance
			
		},
		data(){
			return{
			
			}
		},

		
	}
</script>

<style>
</style>