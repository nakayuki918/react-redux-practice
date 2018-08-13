import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { postEvent } from "../actions/index";

class EventsNew extends Component {
  render() {
    return(
      <React.Fragment>
        <div>test</div>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps =  ({ postEvent });

export default connect(null, null)(EventsNew)
