import React, { Component } from 'react';

class ContactForm extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name || this.props.number !== prevProps.number) {
      const contactData = {
        name: this.props.name,
        number: this.props.number,
      };

      localStorage.setItem('contactData', JSON.stringify(contactData));
    }
  }

  render() {
    const { name, number, onNameChange, onNumberChange, onAddContact } = this.props;
    return (
      <form onSubmit={onAddContact}>
        <div>
          <label>
            <span className="label-text">Name:</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={onNameChange}
              className="contact-input"
            />
          </label>
        </div>
        <div>
          <label>
            <span className="label-text">Phone Number:</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={onNumberChange}
              className="contact-input"
            />
          </label>
        </div>
        <button type="submit" className="add-button">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;