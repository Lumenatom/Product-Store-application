import {FC} from "react";
import {ProductData} from "../types/types";

type Props = {}

const ProductItem: FC<ProductData> = (product) => {
    const {id, title, description, price, images, rating, stock, category} = product

    return (
        <div className="wrapperProductItem">
            <p className='id'>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <img src={images[0]} alt={title}/>
            <p>{rating}</p>
            <p>{stock}</p>
            <p>{category}</p>
        </div>
    )
}

export default ProductItem;