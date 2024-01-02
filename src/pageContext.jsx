import { createContext, useState } from "react";

export const PageContext = createContext({
    currentPage: (""),
    setCurrentPage: () => {},
});

export const PageProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState("main");
    const value = {currentPage, setCurrentPage};
    return <PageProvider.Provider value={value}>{children}</PageProvider.Provider>
} 

export default PageContext;