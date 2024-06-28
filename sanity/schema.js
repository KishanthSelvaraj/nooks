import { category } from "./schemaTypes/category";
//main two sections
import product from "./schemaTypes/product";
import productcart from "./schemaTypes/productcart";
//institutionals sections
import classroom from "./schemaTypes/institutional/classroom";
import cafteria from "./schemaTypes/institutional/c&d";
import hostal from "./schemaTypes/institutional/hostal";
import library from "./schemaTypes/institutional/library";
import lockers from "./schemaTypes/institutional/lockers";
import office from "./schemaTypes/institutional/office";
//office sections
export const schema = {
  types: [
    category,
    product,
    classroom,
    cafteria,
    office,
    lockers,
    library,
    hostal,
    productcart,
  ],
};
