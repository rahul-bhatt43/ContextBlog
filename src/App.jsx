import Header from "./comps/Header";
import { useContext, useEffect } from "react";

import { AppContext } from "./context/Appcontext";
import { useLocation, useSearchParams, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const location = useLocation();

  // const { page, fetchData } = useContext(AppContext);

  // useEffect(() => {
  //   const page = searchParams.get('page') ?? 1;

  //   if (location.pathname.includes('tags')) {
  //     const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ');
  //     fetchData(Number(page), tag);
  //   }
  //   else if (location.pathname.includes('categories')) {
  //     const category = location.pathname.split('/').at(-1).replaceAll('-', ' ');
  //     fetchData(Number(page), null, category);
  //   } else {
  //     fetchData(Number(page));
  //   }
  // }, [page, location.pathname, location.search]);

  const {toggle} = useContext(AppContext)

  return (
    <div className="App" style={{backgroundColor: toggle?"#e2e1e1":"#242424", boxShadow:toggle?"0px 2px 5px #242424":"0px 2px 5px rgba(234, 234, 234, 0.5)", color:toggle?"#111":"#e2e1e1"}}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog/:blogId" element={<BlogPage />}></Route>
        <Route path="/tags/:tag" element={<TagPage />}></Route>
        <Route path="/categories/:category" element={<CategoryPage />}></Route>
      </Routes>

    </div>
  );
}
