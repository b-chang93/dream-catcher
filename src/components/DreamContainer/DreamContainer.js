import React from 'react';
import {connect} from 'react-redux';
import './DreamContainer.css'
import Post from '../Post/Post'
import {addDream, fetchDream} from '../../actions';
import ScrollButton from '../ScrollButton/ScrollButton'

export class DreamContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchDream());
  }

  render() {
    let scrollBtn;
    const dreamsArray = this.props.dreams;

    if(dreamsArray.length > 1) {
      scrollBtn = <ScrollButton
      dreamsArray={dreamsArray}
      buttonText="Scroll to Top"
      onClick={window.scrollTo(0, 0)}/>
    }

    const dreams = this.props.dreams.map((dream, index) => (
      <li className="post_item" key={index}>
          <Post index={index} {...dream} />
      </li>
    ));

    console.log(this.props)

    return (
      <div className="DreamContainer">
        <button
          // onAdd={title => this.addList(title)}
          className="btn create_dream">Dreaming</button>
        <ul className="dreams_post_list">{dreams}</ul>
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
      </div>
    );
  }
};

DreamContainer.defaultProps = {
  title: 'Dream Board'
};

const mapStateToProps = state => ({
  dreams: state.dreams
});

export default connect(mapStateToProps)(DreamContainer);
