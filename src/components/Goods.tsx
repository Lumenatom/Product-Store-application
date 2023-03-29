import {FC} from "react";
import ProductItem from "./ProductItem";
import useFindProduct from "../hooks/useFindProduct";
import SortIcon from "../assets/sort.svg";
import {useAppDispatch} from "../hooks/useHooksRedux";
import {sortBy} from "../store/productsSlice";

type Props = {
    valueSearch: string;
    isReverse: boolean;
    setIsReverse: (e: boolean) => void;
}
const Goods: FC<Props> = ({valueSearch, isReverse, setIsReverse}) => {
    const {findProduct} = useFindProduct(valueSearch)
    const dispatch = useAppDispatch()

    const handleSort = (e: string) => {
        dispatch(sortBy({sortBy: e, isReverse: !isReverse}));
        setIsReverse(!isReverse)
    }

    return (
        <div className="wrapperGoods">
            <div className="headerProducts">
                <h2 onClick={() => handleSort('id')}>ID <img src={SortIcon} alt=""/></h2>
                <h2 onClick={() => handleSort('title')}>Title <img src={SortIcon} alt=""/></h2>
                <h2 onClick={() => handleSort('description')}>Description <img src={SortIcon} alt=""/>
                </h2>
                <h2 onClick={() => handleSort('price')}>Price <img src={SortIcon}
                                                                   alt=""/></h2>
                <h2>Image <img src={SortIcon} alt=""/></h2>
                <h2 onClick={() => handleSort('rating')}>Rating <img src={SortIcon} alt=""/></h2>
                <h2 onClick={() => handleSort('stock')}>Stock <img src={SortIcon} alt=""/></h2>
                <h2 onClick={() => handleSort('category')}>Category <img src={SortIcon} alt=""/></h2>
            </div>
            <div className="productItems">
                {
                    findProduct().map((product) => (
                        <ProductItem {...product} key={product.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Goods;