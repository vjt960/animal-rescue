import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeError, startLoading, endLoading, storeAnimals } from './actions';
import { getAnimals } from './apiCalls';
import AnimalsContainer from './AnimalsContainer';
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
    return (
      <main>
        {this.props.isLoading ? <h1>Loading</h1> : <AnimalsContainer />}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored,
  animals: state.animals
});

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  storeError: errorMessage => dispatch(storeError(errorMessage)),
  storeAnimals: animals => dispatch(storeAnimals(animals))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
