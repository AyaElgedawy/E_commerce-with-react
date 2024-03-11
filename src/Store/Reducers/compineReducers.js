import { combineReducers } from "redux";
import FavReducer from "./FavReducer";
import ProductsReducer from "./ProductsReducer";
import CartReducer from "./CartReducer"

export default combineReducers({
    combineFav: FavReducer,
    combineProducts: ProductsReducer,
    combineCart: CartReducer
})