import React from 'react';
import {connect} from 'react-redux';
import './DreamContainer.css'
import Post from '../Post/Post'
import {addDream} from '../../actions';

export class DreamContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  addDream(title) {
    this.props.dispatch(addDream(title));
  }

  render() {
    this.props.dreams.map(dream => console.log(dream))
    const dreams = this.props.dreams.map((dream, index) => (
      <li className="post_item" key={index}>
          <Post index={index} {...dream} />
      </li>
    ));

    return (
      <div className="DreamContainer">
        <ul className="dreams_post_list">{dreams}</ul>
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
