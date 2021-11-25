<template>
	<el-container>
		<el-main>
			<TopBar></TopBar>
			<router-view />
		</el-main>
	</el-container>
</template>

<script>
import TopBar from "./components/TopBar.vue";
export default {
	name: "App",
	components: { TopBar },
};
</script>
<style>
.el-header,
.el-footer {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
}
</style>
