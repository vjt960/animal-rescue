import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  storeError,
  startLoading,
  endLoading,
  storeAnimals,
  storeDonations
} from './actions';
import { getAnimals, getDonations, postNewDonation } from './apiCalls';
import AnimalsContainer from './AnimalsContainer';
import Donations from './Donations';
import Form from './Form';
import './App.css';

class App extends Component {
  componentDidMount = () => {
    const {
      storeError,
      startLoading,
      endLoading,
      storeAnimals,
      storeDonations
    } = this.props;
    startLoading();
    getAnimals()
      .then(animals => storeAnimals(animals))
      .then(() =>
        getDonations()
          .then(donations => storeDonations(donations))
          .then(() => endLoading())
      )
      .catch(error => storeError(error.message));
  };

  addNewDonation = newDonation => {
    postNewDonation(newDonation);
  };

  render() {
    return (
      <main>
        <Form addNewDonation={this.addNewDonation} />
        {this.props.isLoading ? (
          <h1>Loading</h1>
        ) : (
          <div className="main_container">
            <AnimalsContainer />
            <Donations />
          </div>
        )}
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
  storeAnimals: animals => dispatch(storeAnimals(animals)),
  storeDonations: donations => dispatch(storeDonations(donations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
