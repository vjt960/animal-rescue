import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDonation } from './actions';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      donation: ''
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, donation } = this.state;
    const newDonation = {
      id: Date.now(),
      name,
      donation
    };
    this.props.addDonation(newDonation);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ name: '', donation: '' });
  };

  render() {
    return (
      <form className="donation-form">
        <h1>Animal Rescue!</h1>
        <input
          className="donation-input"
          type="text"
          name="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
          placeholder="name"
        />
        <input
          className="donation-input"
          type="text"
          name="donation"
          value={this.state.donation}
          onChange={event => this.handleChange(event)}
          placeholder="donation"
        />
        <button onClick={event => this.handleSubmit(event)}>Donate!</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addDonation: donation => dispatch(addDonation(donation))
});

export default connect(
  null,
  mapDispatchToProps
)(Form);
