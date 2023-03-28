import {useEffect} from "react";
import axios from "axios";
import {setProducts} from "../store/productsSlice";
import {useAppDispatch, useAppSelector} from "./useHooksRedux";

const API_URL = 'https://dummyjson.com/products';
const useGetProductsData = () => {
    // const [products, setProducts] = useState<ProductData[]>([])
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.productsReducer.products)
    console.log(products)

    useEffect(() => {
        axios.get(API_URL).then(res => dispatch(setProducts(res.data.products)))
    }, [])

    return {
        products
    }
}

export default useGetProductsData;