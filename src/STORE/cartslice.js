
import { createSlice } from "@reduxjs/toolkit";
const cartslice = createSlice({
    name: "cart",
    initialState: {

        cartitems: localStorage.getItem("myOrder") ? JSON.parse(localStorage.getItem("myOrder")) : []
    },
    reducers: {
        addtocart: (state, action) => {
            const temp = { ...action.payload }
            //state.push({ ...action.payload, qty: 1 })
            state.cartitems.push(temp)
            localStorage.setItem("myOrder", JSON.stringify(state.cartitems));
        }
    },
})


export const { addtocart } = cartslice.actions
export default cartslice.reducer