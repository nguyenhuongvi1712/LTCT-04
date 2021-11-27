import faker from "faker";
import { sample } from "lodash";
// utils

// ----------------------------------------------------------------------

const customers = [...Array(24)].map((_, index) => ({
	id: faker.datatype.uuid(),
	avatarUrl: faker.image.avatar(),
    username : faker.internet.userName(),
	name: faker.name.findName(),
	status: sample(["active", "banned"]),
    gender : sample(["male","female"]),
    email : faker.internet.email(),
    phoneNumber : faker.phone.phoneNumber(),
    address : faker.address.city()
}));

export default customers;
