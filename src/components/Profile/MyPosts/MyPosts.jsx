import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post"

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post massege={p.massege} likeCount={p.likeCount} />)
  const newPostElement = React.createRef();
  const addPost = () => {
      const text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value="";
  }
  return (
    <div className={s.postsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea ref={newPostElement} ></textarea>
        </div>
        <div>
          <button onClick={addPost} > Add post </button>
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

