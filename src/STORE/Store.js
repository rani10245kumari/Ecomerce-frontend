import { configureStore } from "@reduxjs/toolkit";
import Slicve from "./Slicve";
const Store = configureStore({
    reducer: {
        data: Slicve
    }
})
export default Store