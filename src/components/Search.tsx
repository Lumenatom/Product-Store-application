import React, {FC} from "react";
import "./style.scss"

type Props = {
    setValueSearch: (value: string) => void;
    valueSearch: string;
}
const Search: FC<Props> = ({setValueSearch, valueSearch}) => {

    const handleSearchProducts = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValueSearch(e.target.value)
    }

    return (
        <div className="wrapperSearch">
            <input type="text" placeholder="Enter name or category" value={valueSearch}
                   onChange={handleSearchProducts}/>
        </div>
    )
}

export default Search;