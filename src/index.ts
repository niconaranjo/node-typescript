import { sumTotal } from "./common/index";

const sales: number[] = [10, 40, 50];
const total = sumTotal(sales);

const message = `Sales January ${total}`;

console.log(message);