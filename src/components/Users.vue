<template>
	<div class="m-5">
        <!-- <el-header>Advertising List</el-header> -->
		<el-table :data="users.filter(data => !search || data.username.toLowerCase().includes(search.toLowerCase()) ||  data.id.toLowerCase().includes(search.toLowerCase()))" border style="width: 100%" height="800">
			<el-table-column prop="id" label="Product Id" width="180">
			</el-table-column>
			<el-table-column prop="username" label="Username" width="180">
                <template slot-scope="scope">
                    <div class="block">
                        <p class="title">{{ scope.row.username }}</p>
                        <el-avatar :src="scope.row.avatarUrl" v-if="scope.row.avatarUrl"></el-avatar>
                        <el-avatar icon="el-icon-user-solid" v-else></el-avatar>
                    </div>
                </template>
			</el-table-column>
			<el-table-column prop="name" label="Name">
			</el-table-column>
            <el-table-column prop="email" label="Email">
            </el-table-column>
			<el-table-column prop="gender" label="Gender"  :filters="[{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]"
            :filter-method="filterGender"
            filter-placement="bottom-end">
			</el-table-column>
            <el-table-column prop="phoneNumber" label="Phone Number">
			</el-table-column>
            <el-table-column prop="address" label="Address">
			</el-table-column>
            <el-table-column prop="status" label="Status"  :filters="[{ text: 'Active', value: 'active' }, { text: 'Banned', value: 'banned' }]"
            :filter-method="filterStatus"
            filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                    :type="scope.row.status === 'banned' ? 'danger' : 'success'"
                    disable-transitions>{{scope.row.status}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column
                align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                    v-model="search"
                    size="mini"
                    placeholder="Type to search"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>
		</el-table>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: "Users",
	data() {
		return {
             search: '',
        };
	},
	computed: {
		...mapState(["users"]),
	},
    methods : {
        filterStatus(value,row) {
            return row.status == value;
        },
        filterGender(value,row){
            return row.gender == value
        }
    }
};
</script>
<style>

</style>
