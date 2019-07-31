import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeError, startLoading, endLoading, storeAnimals } from './actions';
import { getAnimals } from './apiCalls';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    const { storeError, startLoading, endLoading, storeAnimals } = this.props;
    startLoading();
    getAnimals()
      .then(animals => storeAnimals(animals))
      .then(() => endLoading())
      .catch(error => storeError(error.message));
  };

  render() {
    return <h1>Hello</h1>;
  }
}

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  storeError: errorMessage => dispatch(storeError(errorMessage)),
  storeAnimals: animals => dispatch(storeAnimals(animals))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
