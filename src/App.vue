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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.text-xx {
  font-size: 26px;
}

.text-bold {
  font-weight: bold;
}

.text-small {
  font-size: 12px;
  color: rgba(0,0,0,.54);
}

.text-line {
  text-decoration-line: line-through;
}

.cursor-pointer {
  cursor: pointer;
}

.text-label {
  color: rgba(0,0,0,.54);
  font-size: 16px;
}

.mr-2, .mx-2 {
    margin-right: 0.5rem !important;
}
</style>

