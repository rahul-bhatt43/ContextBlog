import React from 'react'
import { Link } from 'react-router-dom'
import './Blogs.css'

const BlogDetails = ({ post }) => {
    return (
        <div className='blogscard'>
            <div className="blogwrapper">
                <Link to={`/blog/${post.id}`} ><h2 style={{color:"#0ae448"}}>{post.title}</h2></Link>
                <p>
                    by <em>{post.author}</em> on <Link to={`/categories/${post.category}`} ><strong style={{ color: "gray" }}>{post.category}</strong></Link>
                </p>
                <p>Posted on {post.date}</p>
                <p>{post.content}</p>
                <div className="tagWrapper">
                    {post.tags.map((tag) => (
                        <Link to={`/tags/${tag}`} >#{tag} </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
