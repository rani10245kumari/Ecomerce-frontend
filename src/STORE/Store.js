import { configureStore } from "@reduxjs/toolkit";
import Slicve from "./Slicve";
import cartslice from "./cartslice";

const Store = configureStore({
    reducer: {
        data: Slicve,
        cart: cartslice
    }


})
export default Store