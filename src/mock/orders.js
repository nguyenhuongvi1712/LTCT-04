import faker from "faker";
import { max, sample } from "lodash";
// utils

// ----------------------------------------------------------------------

// state
// 1= "Chờ xác nhận",
// 2= "Đang giao hàng",
// 3= "Đã giao hàng",
// 4= "Đã hủy",

const PRODUCT_NAME = [
	"Nike Air Force 1 NDESTRUKT",
	"Nike Space Hippie 04",
	"Nike Air Zoom Pegasus",
	"Nike Blazer Low 77 Vintage",
	"Nike ZoomX SuperRep Surge",
	"Zoom Freak 2",
	"Nike Air Max Zephyr",
	"Jordan Delta",
	"Air Jordan XXXV PF",
	"Nike Waffle Racer Crater",
	"Kyrie 7 EP Sisterhood",
	"Nike Air Zoom BB NXT",
	"Nike Air Force 1 07 LX",
	"Nike Air Force 1 Shadow SE",
	"Nike Air Zoom Tempo NEXT%",
	"Nike DBreak-Type",
	"Nike Air Max Up",
	"Nike Air Max 270 React ENG",
	"NikeCourt Royale",
	"Nike Air Zoom Pegasus 37",
	"Nike Air Zoom SuperRep",
	"NikeCourt Royale",
	"Nike React Art3mis",
	"Nike React Infinity Run ",
];

export const orders = [...Array(24)].map((_, index) => ({
	id: faker.datatype.uuid(),
	state: sample([1, 2, 3, 4]),
	userId: sample([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
	products: [
		{
			productId: 1,
			quantity: 2,
			price: 30,
			imageUrl:
				"https://cf.shopee.vn/file/b417608ae21b0a046525c69991597882",
			name: "Áo thun POLO BASIC",
		},
		{
			productId: 2,
			quantity: 1,
			price: 50,
			imageUrl:
				"https://cf.shopee.vn/file/861e2ab223c92986d940fabfac0a7dfa",
			name: "Áo kaki dáng lỡ ",
		},
		{
			productId: 3,
			quantity: 2,
			price: 70,
			imageUrl:
				"https://cf.shopee.vn/file/f08d74f551c84b377ed34b60d29aaf31",
            name : "Áo Khoác Varsity"
		},
	],
	date: faker.datatype.datetime(),
	discount: faker.datatype.number(10),
}));


export const products = [...Array(24)].map((_, index) => ({
	id: index,
	name: PRODUCT_NAME[index],
	imageUrl: faker.image.fashion(),
	price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
}));
