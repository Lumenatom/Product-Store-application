import {useCallback, useEffect} from "react";
import axios from "axios";
import {setProducts} from "../store/productsSlice";
import {useAppDispatch, useAppSelector} from "./useHooksRedux";

const API_URL = 'https://dummyjson.com/products';
const useGetProductsData = () => {
    const dispatch = useAppDispatch()

    const getProductsData = useCallback(() => {
        axios.get(API_URL).then(res => {
            dispatch(setProducts(res.data.products))
        })
    }, [])

    return {
        getProductsData
    }
}

export default useGetProductsData;