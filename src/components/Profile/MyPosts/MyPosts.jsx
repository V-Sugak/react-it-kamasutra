import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = () => {

  let postsData = [
    { id: 1, massege: "Hi, how are you?", likeCount: 15 },
  { id: 1, massege: "It's my first post.", likeCount: 20 }
  ]

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
        <Post massege={postsData[0].massege} likeCount={postsData[0].likeCount} />
        <Post massege={postsData[1].massege} likeCount={postsData[1].likeCount} />
      </div>
    </div>

  )
}

export default MyPosts;

