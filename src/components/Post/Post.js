import React from 'react';
import './Post.css'
import PostForm from '../PostForm/PostForm'

export default function Post(props) {
  console.log(props)
  return(
    <div className="post_panel">
      <div className="post_info">
        <div className="post_heading">
        <div className="create-by">
          <span className="creator">
            by {props.creator.firstName} {props.creator.lastName}
          </span>
        </div>
          <h2 className="dream_title">{props.title}</h2>
        </div>
        <p className="story">{props.content}</p>
      </div>
      <PostForm />
    </div>
  );
};
