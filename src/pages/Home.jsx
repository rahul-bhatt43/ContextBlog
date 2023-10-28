import React, { useContext, useEffect } from 'react'
import Blogs from '../comps/Blogs'
import Pagination from '../comps/Pagination'
import { AppContext } from '../context/Appcontext'

const Home = () => {

  const {fetchData, page} = useContext(AppContext)


  useEffect(()=>{
    fetchData(page);
  },[page])

  return (
    <div>
    <Blogs/>
    <Pagination />
    </div>
  )
}

export default Home