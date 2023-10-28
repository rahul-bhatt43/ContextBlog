import React, { useContext, useEffect } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import Blogs from '../comps/Blogs';
import '../comps/Blogs.css'
import Pagination from '../comps/Pagination';
import { AppContext } from '../context/Appcontext';

const TagPage = () => {

  const { tag } = useParams();
  const { fetchData, page } = useContext(AppContext)
  const location = useLocation();
  const navi = useNavigate();
  // const tag = location.pathname.split('/').at(-1);

  useEffect(() => {
    fetchData(page, tag, null)
  }, [page, tag])
  return (
    <div>
      <div className="" style={{ padding: "5px 15px" }}>
        <button className='backme' onClick={() => navi(-1)}>back</button>
      </div>
      <h2 style={{ textAlign: "center", padding: "0px 15px" }}>Blogs Tagged <span style={{color:"blueviolet"}} >{tag}</span></h2>
      <Blogs />
      <Pagination />
    </div>
  )
}

export default TagPage