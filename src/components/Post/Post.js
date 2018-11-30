import React from 'react';
import './Post.css'
import PostForm from '../PostForm/PostForm'

export default function Post(props) {
  console.log(props.creator.avatar)
  return(
    <div className="post_panel">
      <div className="post_info">
        <div className="post_heading">
        <div className="create-by">
          <img
          className="avatar"
          src={props.creator.avatar}
          alt="user-avatar"/>
          <span className="creator">
            {props.creator.firstName} {props.creator.lastName}
          </span>
        </div>
          <h2 className="dream_title">{props.title}</h2>
        </div>
        <p className="story">{props.content}</p>
      </div>
      <PostForm comments={props.comments}/>
    </div>
  );
};
