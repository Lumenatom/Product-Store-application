import React, {FC, useCallback} from "react";
import {useNavigate} from "react-router-dom";


const Header: FC = () => {
    const navigate = useNavigate()

    const handleNavigate = useCallback(() => {
        navigate('/createNewProduct/')
    }, [])

    return (
        <div className="wrapperHeader">
            <h2>Products Shop</h2>
            <button onClick={handleNavigate}>Add product</button>
        </div>
    )
}

export default Header;