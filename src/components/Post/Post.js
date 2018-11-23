import React from 'react';
import './Post.css'
import PostForm from '../PostForm/PostForm'

export default function Post(props) {
  return(
    <div className="post_panel">
      <div className="post_info">
        <div className="post_heading">
          <h2 className="dream_title">{props.title}</h2>
        </div>
        <p className="story">{props.content}</p>
      </div>
      <PostForm />
    </div>
  );
};
