import { useContext } from "react";
import { AppContext } from "../context/Appcontext";
import './PAginaiton.css'

export default function Pagination() {
    const { page, totalpage, setPage } = useContext(AppContext);
    const {toggle} = useContext(AppContext)

    return (
        <div className="pagination" style={{backgroundColor: toggle?"#e2e1e1":"#242424", boxShadow:toggle?"0px 2px 5px #242424":"0px 2px 5px rgba(234, 234, 234, 0.5)", color:toggle?"#242424":"#e2e1e1"}}>
            <div className="paginationButtons">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Prev
                </button>
                <button onClick={() => setPage(page + 1)} disabled={page === totalpage}>
                    Next
                </button>
            </div>
            <div className="pagecount">
                <p>
                    Page {page} of {totalpage}
                </p>
            </div>
        </div>
    );
}
