<template>
	<div class="m-5">
        <!-- <el-header>Advertising List</el-header> -->
		<el-table :data="users" border style="width: 100%" height="250">
			<el-table-column prop="adId" label="Ad ID"> </el-table-column>
			<el-table-column prop="name" label="Ad Name"> </el-table-column>
			<el-table-column prop="status" label="Ad Status"> </el-table-column>
			<el-table-column prop="type" label="Ad Type"> </el-table-column>
			<el-table-column prop="bidModifier" label="Bid Modifier">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name: "Users",
	data() {
		return {
            users : []
        };
	},
	// computed: {
	// 	ads() {
	// 		return this.$store.state.ads.map((ad) => {
	// 			return {
	// 				...ad,
	// 				adId: ad.id,
	// 			};
	// 		});
	// 	},
	// },
};
</script>
<style>

</style>
