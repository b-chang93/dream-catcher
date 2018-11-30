import React from 'react';
import './DreamContainer.css'
import Post from '../Post/Post'
import ScrollButton from '../ScrollButton/ScrollButton'
import DreamForm from '../DreamForm/DreamForm'

export default function DreamContainer(props){
  let scrollBtn;
  const dreamsArray = props.fetchedData.dreams;

  if(dreamsArray.length > 1) {
    scrollBtn = <ScrollButton
    dreamsArray={dreamsArray}
    buttonText="Scroll to Top"
    onClick={window.scrollTo(0, 0)}/>
  }

  const dreams = props.fetchedData.dreams.map((dream, index) => (
    <li className="post_item" key={index}>
        <Post index={index} {...dream} />
    </li>
  ));
  return (
    <div className="DreamContainer">
      <DreamForm />
      <ul className="dreams_post_list">{dreams}</ul>
      <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    </div>
  );
};
