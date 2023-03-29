import {useAppSelector} from "./useHooksRedux";
import {useCallback} from "react";
import {ProductData} from "../types/types";

const useFindProduct = (valueSearch: string) => {
    const products = useAppSelector(state => state.productsReducer.products)

    const findProduct = useCallback((): ProductData[] => {
        return products.filter(({title, category}) =>
            title.toLowerCase().includes(valueSearch.toLowerCase()) || category.toLowerCase().includes(valueSearch.toLowerCase())
        );
    }, [products, valueSearch]);

    return {
        findProduct
    }
}

export default useFindProduct