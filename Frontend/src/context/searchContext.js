import { createContext, useReducer, useState } from "react";
import taskReducer from "../reducer/taskReducer"; // Adjust the import path as necessary

const SearchContext = createContext(null);

export const SearchProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <SearchContext.Provider value={{ tasks, dispatch, searchQuery, setSearchQuery }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContext;
