import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().profilePage;

        let addPost = () => {
          store.dispatch(addPostAC());
        }

        let postOnChange = (text) => {
          store.dispatch(updateNewPostTextAC(text));
        }

        return (<MyPosts updateNewPostText={postOnChange}
          addPost={addPost}
          posts={state.posts}
          newPostText={state.newPostText} />)
      }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;

