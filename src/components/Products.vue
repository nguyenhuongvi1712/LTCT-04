<template>
	<div class="m-5">
        <!-- <el-header>Campaigns List</el-header> -->
		<el-table :data="products.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) ||  data.id.toLowerCase().includes(search.toLowerCase()))" border style="width: 100%" height="800">
			<el-table-column prop="id" label="Product Id" width="180">
			</el-table-column>
			<el-table-column prop="name" label="Name" width="180">
                <template slot-scope="scope">
                    <div class="block">
                        <p class="title">{{ scope.row.name }}</p>
                        <el-avatar shape="square" :size="100" fit="fill" :src="scope.row.cover"></el-avatar>
                    </div>
                </template>
			</el-table-column>
			<el-table-column prop="price" label="Price" sortable>
			</el-table-column>
			<el-table-column prop="value" label="Value" sortable>
			</el-table-column>
			<el-table-column prop="quantity" label="Quantity" sortable>
            </el-table-column>
			<el-table-column prop="status" label="Status" :filters="[{ text: 'Sale', value: 'sale' }, { text: 'New', value: 'new' },{ text: 'Disable', value: 'disable' },{ text: 'Active', value: 'active' }]"
            :filter-method="filterStatus"
            filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                    :type="scope.row.status === 'sale' ? 'primary' : 'new' ? 'danger' : 'disable' ? 'warning' : 'success'"
                    disable-transitions>{{scope.row.status}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="category" label="Category"  :filters="[{ text: 'Shoes', value: 'Shoes' }, { text: 'Apparel', value: 'Apparel' },{ text: 'Accessories', value: 'Accessories' }]"
            :filter-method="filterCategory"
            filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag
                    :type="scope.row.category === 'Shoes' ? 'primary' : 'Apparel' ? 'success' : 'danger'"
                    disable-transitions>{{scope.row.category}}</el-tag>
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
	name: "Products",
	data() {
		return {
             search: '',
        };
	},
	computed: {
		...mapState(["products"]),
	},
    methods: {
        filterCategory(value, row) {
            return row.category === value;
        },
        filterStatus(value,row) {
            return row.status == value;
        }
    }
};
</script>
<style>

