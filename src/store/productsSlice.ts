import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductData} from "../types/types";

type ProductsState = {
    products: ProductData[]
}
const initialState: ProductsState = {
    products: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, actions:PayloadAction<ProductData[]>) {
            state.products = actions.payload
        }
    }
})

export const {setProducts} = productsSlice.actions

export default productsSlice.reducer