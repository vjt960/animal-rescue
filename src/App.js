import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeError, startLoading, endLoading } from './actions';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    const { storeError, startLoading, endLoading } = this.props;
    fetch('http://localhost:3001/api/v1/rescue-animals')
      .then(response => response.json())
      .then(data => data);
  };

  render() {
    return <h1>Hello</h1>;
  }
}

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  storeError: errorMessage => dispatch(storeError(errorMessage))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
