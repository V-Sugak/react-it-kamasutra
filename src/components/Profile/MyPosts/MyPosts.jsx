import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () => {
  return (

    <div>
      My posts
      <div>
        <textarea></textarea>
        <button> Add post </button>
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

