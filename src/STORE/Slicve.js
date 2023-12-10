import { createSlice } from "@reduxjs/toolkit";
const Slice = createSlice({
    name: "slice",
    initialState: { data: {} },
    reducers: {
        filterdata: (state, action) => {
            state.data = action.payload
        }
    },
})


export const { filterdata } = Slice.actions
export default Slice.reducer