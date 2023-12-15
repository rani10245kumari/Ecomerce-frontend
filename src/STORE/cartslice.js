
import { createSlice } from "@reduxjs/toolkit";
const cartslice = createSlice({
    name: "cart",
    initialState: {

        cartitems: localStorage.getItem("myOrder") ? JSON.parse(localStorage.getItem("myOrder")) : [],
        quantity: 0
    },
    reducers: {
        addtocart: (state, action) => {

            // const value = localStorage.getItem('myOrder');
            // console.log(value);
            // const value2 = value.indexOf(action.payload)
            // console.log(value2)

            // if (value2 !== -1) {
            //     state.quantity += 1;
            // }
            // else {

            //     const temp = { ...action.payload }
            //     //state.push({ ...action.payload, qty: 1 })
            //     state.cartitems.push(temp)
            //     state.quantity += 1;
            //     localStorage.setItem("myOrder", JSON.stringify(state.cartitems));
            // }
            const value = localStorage.getItem('myOrder');
            console.log(value);

            if (value) {
                const cartItems = JSON.parse(value);

                // Check if the item is already in the cart
                const existingItem = cartItems.find(item => item.id === action.payload.id);

                if (existingItem) {
                    // If the item exists, update the quantity
                    existingItem.qty += 1;
                } else {
                    // If the item does not exist, add it to the cart
                    const newItem = { ...action.payload, qty: 1 };
                    cartItems.push(newItem);
                }

                // Update the local storage and state
                localStorage.setItem("myOrder", JSON.stringify(cartItems));
            }

            // Update the state based on the modified cartItems
            state.cartitems = JSON.parse(localStorage.getItem('myOrder')) || [];
            state.quantity = state.cartitems.reduce((total, item) => total + item.qty, 0);

        }

    },
})


export const { addtocart } = cartslice.actions
export default cartslice.reducer