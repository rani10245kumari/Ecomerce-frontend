
import { createSlice } from "@reduxjs/toolkit";
const cartslice = createSlice({
    name: "cart",
    initialState: {

        cartitems: localStorage.getItem("myOrder") ? JSON.parse(localStorage.getItem("myOrder")) : [],
        quantity: 0,
        authentication: localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : false,
    },
    reducers: {
        addtocart: (state, action) => {


            const existingItem = state.cartitems.find(item => item.id === action.payload.id);
            if (existingItem) {
                // If the item exists, update the quantity
                existingItem.quantity += 1;
            } else {
                // If the item does not exist, add it to the cart
                const newItem = { ...action.payload, quantity: 1 };
                state.cartitems.push(newItem);
            }
            localStorage.setItem("myOrder", JSON.stringify(state.cartitems));



        },
        RemoveItem: (state, action) => {
            const reomveitem = state.cartitems.filter((items) => items.id !== action.payload)
            state.cartitems = reomveitem;
            localStorage.setItem("myOrder", JSON.stringify(state.cartitems));
        },

        IncreaseQuantity: (state, action) => {
            const item = state.cartitems.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                item.total = item.Dprice * item.quantity;
            }

        },
        DecreaseQuantity: (state, action) => {
            const item = state.cartitems.find((item) => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                item.total = item.Aprice * item.quantity;
            }
        },
        authenticationUser: (state, action) => {
            state.authentication = action.payload
            localStorage.setItem("auth", JSON.stringify(state.authentication));

        }
    },


})


export const { addtocart, RemoveItem, IncreaseQuantity, DecreaseQuantity, authenticationUser } = cartslice.actions
export default cartslice.reducer