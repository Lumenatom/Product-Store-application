import {FC, useCallback, useState} from "react";
import "./style.scss"
import Header from "./Header";
import Search from "./Search";
import Goods from "./Goods";
import useGetProductsData from "../hooks/useGetProductsData";
import {ProductData} from "../types/types";


const ShopContent: FC = () => {
    const [valueSearch, setValueSearch] = useState<string>("");
    const {products} = useGetProductsData()

    const findProduct = useCallback((): ProductData[] => {
        return products.filter(({title, category}) =>
            title.toLowerCase().includes(valueSearch.toLowerCase()) || category.toLowerCase().includes(valueSearch.toLowerCase())
        );
    }, [products, valueSearch]);

    return (
        <div className="ShopWrapper">
            <Header/>
            <Search setValueSearch={setValueSearch} valueSearch={valueSearch}/>
            <Goods findProduct={findProduct}/>
        </div>
    )
}

export default ShopContent;