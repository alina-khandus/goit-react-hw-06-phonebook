import PropTypes from 'prop-types';

import React, { Component } from 'react';
import s from './contactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  static propTypes = {
    onAddContact: PropTypes.func,
  };

  static defaultProps = {};

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();

    if (name === '' || number === '') {
      alert('Enter the data.');
    } else {
      this.props.onAddContact(name, number);
      this.setState({
        name: '',
        number: '',
      });
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.contactForm} onSubmit={this.handleSubmit}>
        <label className={s.labelForm} htmlFor="name">
          Name
        </label>
        <input
          className={s.inputForm}
          value={name}
          id="name"
          type="text"
          name="name"
          onChange={this.handleChange}
        />
        <label className={s.labelForm} htmlFor="number">
          Number
        </label>
        <input
          className={s.inputForm}
          value={number}
          id="number"
          type="number"
          name="number"
          onChange={this.handleChange}
        />
        <button className={s.buttonContactForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default ContactForm;
