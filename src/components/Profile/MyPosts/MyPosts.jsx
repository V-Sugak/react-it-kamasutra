import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () => {
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
        <Post massege="Hi, how are you?" likeCount="15" />
        <Post massege="It's my first post." likeCount="20" />
      </div>
    </div>

  )
}

export default MyPosts;

