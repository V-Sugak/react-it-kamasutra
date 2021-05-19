import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = (props) => {

   let postsElements = props.postsData.map(p => <Post massege={p.massege} likeCount={p.likeCount} />)

  return (
    <div className={s.postsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button> Add post </button>
        </div>
      </div>
      <div>New post</div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  )
} 

export default MyPosts;

