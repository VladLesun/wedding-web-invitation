import { sum } from "./functions/func";
import { vendor } from "./vendor/sidelib";

const obj = {};
const prop = obj?.prop;
console.log("prop: ", prop);

sum(1, 1);
vendor();
