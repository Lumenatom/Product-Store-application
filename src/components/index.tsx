import {FC, useCallback, useEffect, useState} from "react";
import "./style.scss"
import Header from "./Header";
import Search from "./Search";
import Goods from "./Goods";
import useGetProductsData from "../hooks/useGetProductsData";
import {ProductData} from "../types/types";
import {useAppSelector} from "../hooks/useHooksRedux";


const ShopContent: FC = () => {
    const [valueSearch, setValueSearch] = useState<string>("");
    const [isReverse, setIsReverse] = useState<boolean>(false);

    return (
        <div className="ShopWrapper">
            <Header/>
            <Search setValueSearch={setValueSearch} valueSearch={valueSearch}/>
            <Goods valueSearch={valueSearch} isReverse={isReverse} setIsReverse={setIsReverse} />
        </div>
    )
}

export default ShopContent;