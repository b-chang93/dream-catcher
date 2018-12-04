import React from 'react';
import './Dream.css'
import Panel from '../Panel/Panel'

export default function Dream(props) {
  return(
    <div className="dream_panel">
      <div className="dream_info">
        <div className="dream_heading">
          <h2 className="dream_title">{props.dream.title}</h2>
          <div className="create-by">
            <img
            className="avatar"
            src={props.dream.creator.avatar}
            alt="user-avatar"/>
            <span className="creator">
              {props.dream.creator.firstName} {props.dream.creator.lastName}
            </span>
          </div>
        </div>
        <p className="story">{props.dream.content}</p>
      </div>
      <Panel
        dispatch={props.dispatch}
        userId={props.dream.creator._id}
        dreamId={props.dream.id}
        title={props.dream.title}
        content={props.dream.content}
        comments={props.dream.comments}/>
    </div>
  );
};
