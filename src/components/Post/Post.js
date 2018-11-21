import React from 'react';
import './Post.css'

export default function Post(props) {
  return(
    <div className="post_panel">
      <div className="post_info">
        <h2 className="dream_title">{props.title}</h2>
        <p className="story">{props.content}</p>
      </div>
      <div className="post_button_container">
        <button className="btn post_edit_btn">Edit</button>
        <button className="btn post_comment_btn">Comment</button>
      </div>
    </div>
  );
};
