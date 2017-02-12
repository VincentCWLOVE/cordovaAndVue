<template>
	<div class="tab">
		<span>
			<router-link to="/page1">
				page1
			</router-link>
		</span>
		<span>
			<router-link to="/page2">
				page2
			</router-link>
		</span>
		<span>
			<router-link to="/page3">
				page3
			</router-link>
		</span>
	</div>	
</template>

<script>
	

</script>

<style scoped>
	a {
		text-decoration: none;
	}
	.tab {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		height: 44px;
		padding-left: .1rem;
		padding-right: .1rem;
		font-size: .16rem;
		background: #fff;
		border-top: 1px solid #E2E3E8;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.tab span {
		display: block;
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		height: 100%;
		line-height: 44px;
		text-align: center;
		font-size: 1.2rem;

	}
</style>