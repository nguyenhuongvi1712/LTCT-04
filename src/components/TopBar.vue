<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-demo"
		mode="horizontal"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b"
		@select="handleSelect"
	>
		<el-menu-item index="1"> Home </el-menu-item>
		<el-menu-item index="2"> Products </el-menu-item>
		<el-menu-item index="3"> Users </el-menu-item>
	</el-menu>
</template>

<script>
export default {
	name: "TopBar",
	computed: {
		activeIndex() {
			if (this.$route.name == "products.index") return "2";
			else if (this.$route.name == "userss.index") return "3";
			else return "1";
		},
	},
	methods: {
		handleSelect(key) {
			if (key == "1") this.$router.push({ name: "homepage" });
			else if (key == "2") this.$router.push({ name: "products.index" });
			else this.$router.push({ name: "users.index" });
		},
	},
};
</script>
<style>
.route-link {
	text-decoration: none;
}
</style>
