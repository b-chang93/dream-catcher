import React from 'react';
import {connect} from 'react-redux';
import './DreamContainer.css'
import Post from '../Post/Post'
import {addDream, fetchDream} from '../../actions';

export class DreamContainer extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchDream());
  }

  // addDream(title) {
  //   this.props.dispatch(addDream(title));
  // }

  render() {

    const dreams = this.props.dreams.map((dream, index) => (
      <li className="post_item" key={index}>
          <Post index={index} {...dream} />
      </li>
    ));

    return (
      <div className="DreamContainer">
        <button
          // onAdd={title => this.addList(title)}
          className="btn create_dream">Dreaming</button>
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
