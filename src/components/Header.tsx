import React, {FC} from "react";
import Logo from "../assets/LOGO-2.png"


const Header: FC = () => {


    return (
        <div className="wrapperHeader">
            <span>
                            <img src={Logo} alt="name shop"/>

            </span>
        </div>
    )
}

export default Header;