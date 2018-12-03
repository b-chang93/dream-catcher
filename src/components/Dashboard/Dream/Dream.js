import React from 'react';
import './Dream.css'
import Panel from '../Panel/Panel'

export default function Dream(props) {
  return(
    <div className="dream_panel">
      <div className="dream_info">
        <div className="dream_heading">
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
      <Panel dreamId={props.id} dreamDetails={props.dreamDetails} title={props.title} content={props.content} comments={props.comments}/>
    </div>
  );
};
