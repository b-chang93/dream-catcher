import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import DreamContainer from '../DreamContainer/DreamContainer'
import {addDream, fetchDream} from '../../actions';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDream());
  }

  render() {
    return (
      <div className="Dashboard">
        <header className="My_Dreams">My Dreams</header>
        <DreamContainer fetchedData={this.props.dreams}/>
      </div>
    );
  }
};

Dashboard.defaultProps = {
  title: 'Dream Board'
};

const mapStateToProps = state => ({
  dreams: state.dreams
});

export default connect(mapStateToProps)(Dashboard);
