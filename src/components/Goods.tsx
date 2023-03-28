import {FC} from "react";
import {ProductData} from "../types/types";
import ProductItem from "./ProductItem";

type Props = {
    findProduct: () => ProductData[];
}
const Goods: FC<Props> = ({findProduct}) => {

    return (
        <div className="wrapperGoods">
            <div className="headerProducts">
                <h2>ID</h2>
                <h2>Title</h2>
                <h2>Description</h2>
                <h2>Price</h2>
                <h2>Image</h2>
                <h2>Rating</h2>
                <h2>Stock</h2>
                <h2>Category</h2>
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