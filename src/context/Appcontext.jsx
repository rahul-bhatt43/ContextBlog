import { createContext, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState(null);

    const fetchData = async (page = 1, tag=null, category) => {
        setLoading(true);
        let url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
        if(tag){
            url+=`&tag=${tag}`
        }
        if(category){
            url+=`&category=${category}`
        }
        try {
            // console.log(url)
            const res = await fetch(url);
            const data = await res.json();
            // console.log(url);
            // console.log(data);
            // console.log(data.posts);
            setPosts(data.posts);
            // setLoading(false)
            setPage(data.page);
            setTotalPage(data.totalPages);
            // console.log(data.totalPages);
        } catch (error) {
            console.error(error);
            setPage(1);
            setTotalPage(null);
            setPosts([]);
        }
        setLoading(false);
    };

    const handletheme = ()=>{
        setToggle(!toggle);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchData(page);
    }

    return (
        <AppContext.Provider
            value={{
                loading,
                setLoading,
                setPosts,
                setPage,
                totalpage,
                page,
                posts,
                fetchData,
                handlePageChange,
                handletheme,
                toggle
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };
