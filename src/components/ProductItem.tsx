import {FC} from "react";
import {ProductData} from "../types/types";
import {useAppDispatch} from "../hooks/useHooksRedux";
import {deleteProduct} from "../store/productsSlice";

type Props = {}

const ProductItem: FC<ProductData> = (product) => {
    const {id, title, description, price, images, rating, stock, category} = product
    const dispatch = useAppDispatch()

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
            <button onClick={()=>dispatch(deleteProduct(id))}>Delete</button>
        </div>
    )
}

export default ProductItem;