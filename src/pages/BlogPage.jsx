import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/Appcontext';
import BlogDetails from '../comps/BlogDetails';
import '../comps/Blogs.css'


const BlogPage = () => {

    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();

    const { blogId } = useParams();

    const navi = useNavigate();

    const { loading, setLoading } = useContext(AppContext)

    // const blogId = location.pathname.split('/').at(-1);

    async function fetchRelatedData() {
        setLoading(true);
        let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs)
        } catch (error) {
            console.error(error)
            setBlog(null)
            setRelatedBlogs([])
        }
        setLoading(false)
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedData();
        }
    }, [location.pathname])

    return (
        <div style={{padding:"5px 15px"}}>
            <div className='backme'>
                <button
                    onClick={() => navi(-1)}
                >
                    Back
                </button>
            </div>
            {
                loading ?
                    (<div className="loading">
                        <p> Loading</p>
                    </div>) :
                    blog ?
                        (<div>
                                <BlogDetails post={blog} />
                                <div className="blogwrapper" style={{width:"60%", margin:"0 auto"}}></div>
                            <h2 style={{ textAlign: "center" }}> Related Blogs </h2>
                            {
                                relatedblogs.map((post) => (
                                    <div key={post.id}>
                                        <BlogDetails post={post} />
                                    </div>
                                ))
                            }

                        </div>) :
                        (<div>
                            <p>No Blog Found</p>
                        </div>)

            }


        </div>
    )
}

export default BlogPage