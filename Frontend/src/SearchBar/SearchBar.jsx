// components/SearchBar.jsx
import React, { useContext } from "react";
import SearchContext from "../context/searchContext";

function SearchBar() {
    const { searchQuery, setSearchQuery } = useContext(SearchContext);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-2 border rounded-lg"
        />
    );
}

export default SearchBar;
