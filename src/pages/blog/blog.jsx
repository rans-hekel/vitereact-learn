// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';


function Blog() {
    // const [posts, setPosts] = useState([])
    const posts = useLoaderData()


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(Response => Response.json())
    //     .then(json => setPosts(json))
    //   }, [posts])
      
    return (
        <>
        <h2>Blog Posts</h2>
        <div>{posts.map((item, index) => (
          <div key={index}>
            <Link to={`/blog/${item.id}`}>- {item.title}</Link>
          </div>
        ))}</div>
        </>
    )
}

export default Blog;
