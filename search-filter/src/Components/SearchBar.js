import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({placeholder, data}) {
    return (
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder={placeholder}/>
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>
            <div className="dataResult">
                {data.map((value, key) => {
                    return <div> {value.title} </div>
                })}
            </div>
        </div>
    )
}

export default SearchBar