<template>
    <div class="m-5">
        <el-header>Báo cáo doanh số theo sản phẩm</el-header>
        <el-table
            :data="
                productsList.filter(
                    (data) =>
                        !search ||
                        data.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        '' + data.productId == search
                )
            "
            border
            style="width: 100%"
            height="700"
            show-summary
        >
            <el-table-column prop="productId" label="Product Id" width="180">
            </el-table-column>
            <el-table-column prop="name" label="Name" width="280">
                <template slot-scope="scope">
                    <div class="block">
                        <p class="title">{{ scope.row.name }}</p>
                        <el-image
                            style="width: 100px; height: 100px"
                            :src="scope.row.imageUrl"
                            :preview-src-list="[scope.row.imageUrl]"
                        >
                        </el-image>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="totalValue" label="Total" sortable>
            </el-table-column>
            <el-table-column
                prop="quantity"
                label="Quantity"
                sortable
                :filters="[
                    { text: '=0', value: '=0' },
                    { text: '>0', value: '>0' },
                ]"
                :filter-method="filterQuantity"
            >
            </el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                        v-model="search"
                        size="mini"
                        placeholder="Type to search"
                    />
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" @click="viewDetail(scope.row)"
                        ><i class="el-icon-view"></i
                    ></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="Detail"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
        >
            <div v-for="order in orderDetailList" :key="order.id">
                <p>OrderId : {{ order.id }}</p>
                <p>Quantity : {{ order.productInOrder.quantity }}</p>
                <p>Price : {{ order.productInOrder.price }}</p>
                <hr>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { orders, products } from "../mock/orders";
export default {
    name: "Products",
    data() {
        return {
            search: "",
            productsList: [],
            orderDetailList : [],
            dialogVisible: false
        };
    },
    mounted() {
        const soldProduct = [];
        const productMap = [];
        orders.forEach((order) => {
            productMap.push(...order.products);
        });

        productMap.forEach((p) => {
            const element = soldProduct.find((o) => o.productId == p.productId);
            if (element) {
                (element.quantity += p.quantity),
                    (element.totalValue += p.quantity * p.price);
            } else
                soldProduct.push({
                    ...p,
                    totalValue: p.quantity * p.price,
                });
        });
        const unSoldProduct = [];
        products
            .map((product) => ({
                ...product,
                productId: product.id,
            }))
            .forEach((products) => {
                if (!soldProduct.find((p) => p.productId == products.id))
                    unSoldProduct.push({
                        ...products,
                        quantity: 0,
                        totalValue: 0,
                    });
            });
        this.productsList.push(...soldProduct, ...unSoldProduct);
    },
    methods: {
        filterQuantity(value, row) {
            if (value == "=0") return row.quantity === 0;
            else return row.quantity > 0;
        },
        viewDetail(product) {
            const orderList = orders.filter((order) =>
                order.products.find((o) => o.productId == product.productId)
            );

            orderList.forEach((order) => {
                const productInOrder = order.products.find(
                    (o) => o.productId == product.productId
                );
                order.productInOrder = productInOrder;
            });
            this.orderDetailList =  orderList;
            this.dialogVisible = true
        },
    },
};
</script>
<style>
