import React, {FC, useEffect} from "react";
import ShopContent from "./components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddProductForm from "./components/AddProductForm";
import useGetProductsData from "./hooks/useGetProductsData";

const App: FC = () => {
    const {getProductsData} = useGetProductsData()
    useEffect(()=>getProductsData(),[])

    return (
        <BrowserRouter basename={'/Product-Store-application/'}>
            <Routes>
                <Route path={'/'} element={<ShopContent/>}/>
                <Route path={'/createNewProduct'} element={<AddProductForm/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
