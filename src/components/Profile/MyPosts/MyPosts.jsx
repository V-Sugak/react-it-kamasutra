import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post massege={p.massege} likeCount={p.likeCount} />)

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost()
  }

  let postOnChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);

  }

  return (
    <div className={s.postsBlock}>
      <h3> My posts </h3>
      <div>
        <div>
          <textarea onChange={postOnChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost} > Add post </button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  )
}

export default MyPosts;

