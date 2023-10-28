import React, { useContext, useEffect } from 'react'
import { useNavigation, useLocation, useNavigate, useParams } from 'react-router-dom'
import Blogs from '../comps/Blogs';
import Pagination from '../comps/Pagination';
import { AppContext } from '../context/Appcontext';
import '../comps/Blogs.css'

const CategoryPage = () => {
  const location = useLocation();
  const { category } = useParams();
  const navi = useNavigate();
  // const category = location.pathname.split('/').at(-1);

  const { fetchData, page, } = useContext(AppContext)

  useEffect(() => {
    fetchData(page, null, category)
  }, [page, category])
  return (
    <div>
    <div className="" style={{padding:"5px 15px"}}>
    <button className='backme' onClick={() => navi(-1)}>back</button>
    </div>
      <h2 style={{textAlign:"center", padding:"0px 15px"}}>Blogs Tagged <span style={{color:"blueviolet"}}>{category}</span></h2>
      <Blogs />
      <Pagination />
    </div>
  )
}

export default CategoryPage