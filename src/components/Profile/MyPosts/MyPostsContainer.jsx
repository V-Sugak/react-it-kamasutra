import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostAC());
  }

  let postOnChange = (text) => {
    props.store.dispatch(updateNewPostTextAC(text));
  }

  return (<MyPosts updateNewPostText={postOnChange} addPost={addPost} posts={state.posts} newPostText={state.newPostText} />)
}

export default MyPostsContainer;

