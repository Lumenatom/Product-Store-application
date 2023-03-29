import React, {FC, useCallback, useEffect, useState} from "react";
import "./style.scss"
import Header from "./Header";
import Search from "./Search";
import Goods from "./Goods";
import useGetProductsData from "../hooks/useGetProductsData";
import {ProductData} from "../types/types";
import {useAppSelector} from "../hooks/useHooksRedux";
import {useNavigate} from "react-router-dom";


const ShopContent: FC = () => {
    const [valueSearch, setValueSearch] = useState<string>("");
    const [isReverse, setIsReverse] = useState<boolean>(false);
    const navigate = useNavigate()

    const handleNavigate = useCallback(() => {
        navigate('/createNewProduct/')
    }, [])

    return (
        <div className="ShopWrapper">
            <div className="headerShopWrapper">
                <Header/>
                <Search setValueSearch={setValueSearch} valueSearch={valueSearch}/>
            </div>

            <Goods valueSearch={valueSearch} isReverse={isReverse} setIsReverse={setIsReverse}/>
            <button className="createNewProductBtn" onClick={handleNavigate}>Add product</button>
        </div>
    )
}

export default ShopContent;