import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductData} from "../types/types";

type ProductsState = {
    products: ProductData[]
}
const initialState: ProductsState = {
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, actions: PayloadAction<ProductData[]>) {
            state.products = actions.payload
        },
        addNewProduct(state, actions: PayloadAction<ProductData>) {
            state.products.unshift(actions.payload)
        },
        deleteProduct(state, actions: PayloadAction<number | string>) {
            state.products = state.products.filter(product => product.id !== actions.payload)
        },
        sortBy(state, actions: PayloadAction<{ sortBy: string, isReverse: boolean }>) {
            switch (actions.payload.sortBy) {
                // case "id" :
                //     actions.payload.isReverse
                //         ? state.products = state.products.sort((a, b) => a.id - b.id)
                //         : state.products = state.products.sort((a, b) => b.id - a.id)
                //
                //     break
                case "title" :
                    actions.payload.isReverse
                        ? state.products = state.products.sort((a, b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()))
                        : state.products = state.products.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))

                    break
                case "description" :
                    actions.payload.isReverse
                        ? state.products = state.products.sort((a, b) => b.description.toLowerCase().localeCompare(a.description.toLowerCase()))
                        : state.products = state.products.sort((a, b) => a.description.toLowerCase().localeCompare(b.description.toLowerCase()))

                    break
                case "price" :
                    actions.payload.isReverse
                        ? state.products = state.products.sort((a, b) => b.price - a.price)
                        : state.products = state.products.sort((a, b) => a.price - b.price)

                    break
                case "rating" :
                    actions.payload.isReverse
                        ? state.products = state.products.sort((a, b) => b.rating - a.rating)
                        : state.products = state.products.sort((a, b) => a.rating - b.rating)

                    break
                case "stock":
                    actions.payload.isReverse
                        ? state.products = state.products.sort((a, b) => b.stock - a.stock)
                        : state.products = state.products.sort((a, b) => a.stock - b.stock)

                    break
                case "category" :
                    actions.payload.isReverse
                        ? state.products = state.products.sort((a, b) => b.category.toLowerCase().localeCompare(a.category.toLowerCase()))
                        : state.products = state.products.sort((a, b) => a.category.toLowerCase().localeCompare(b.category.toLowerCase()))
                    break

                default :
                    break
            }
        }

    }
})

export const {setProducts, addNewProduct, deleteProduct, sortBy} = productsSlice.actions

export default productsSlice.reducer