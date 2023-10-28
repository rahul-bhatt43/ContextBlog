import { useContext } from "react";
import './Blogs.css'
import { Link } from "react-router-dom";

import { AppContext } from "../context/Appcontext";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="blogs">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="blogscard">
          {posts.map((post, i) => (
            <div key={i} className="blogwrapper">
              <Link to={`/blog/${post.id}`} style={{color:"#0ae448"}} ><h2>{post.title}</h2></Link>
              <p>
                by <em>{post.author}</em> on <Link to={`/categories/${post.category}`} ><strong style={{color:"gray"}}>{post.category}</strong></Link>
              </p>
              <p>Posted on {post.date}</p>
              <p>{post.content}</p>
              <div className="tagWrapper">
                {post.tags.map((tag,i) => (
                  <Link to={`/tags/${tag}`} key={i} >#{tag} </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
