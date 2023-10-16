import { useState } from 'react'
import postsData from '../posts.json'
import Article from '../components/Article'
import Search from '../components/Search'

function Homepage() {
  const [posts, setPosts] = useState(postsData)
  const [totalposts, setTotalPosts] = useState(0)

  const onChangeSearch = (value) => {
    const filteredPosts = postsData.filter((item) =>
    item.title.includes(value)
  );

  setPosts(filteredPosts);
  setTotalPosts(filteredPosts.length)
  }

    return(
        <>
        <h1>Simple Blog</h1>
        <Search onChangeSearch={onChangeSearch} totalposts={totalposts}/>
        {posts.map((props,index) => {
          // return  <Article key={id} title={title} date={date} isi={isi} tags={tags} />
          return <Article {...props}key={index} />
        })}
        </>
    ) 
}

export default Homepage;
