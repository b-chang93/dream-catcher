import React from 'react';
import './Post.css'
import PostForm from '../PostForm/PostForm'

export default function Post(props) {
  return(
    <div className="post_panel">
      <div className="post_info">
        <div className="post_heading">
          <h2 className="dream_title">{props.title}</h2>
          <div className="create-by">
            <img
            className="avatar"
            src={props.creator.avatar}
            alt="user-avatar"/>
            <span className="creator">
              {props.creator.firstName} {props.creator.lastName}
            </span>
          </div>
        </div>
        <p className="story">{props.content}</p>
      </div>
      <PostForm content={props.content} comments={props.comments}/>
    </div>
  );
};
