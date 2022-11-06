import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import {Form, ContactFormLabel, AddContactBtn} from './FormFormik.styled'

class ContactFormFormik extends React.Component {
  state = {
    name: '',
    number: '',
  };



  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitData(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  // !!!!!!!!!!!!!!!!!!!!!!!

  handleSubmitFormik = (values, action) => {
    console.log(values);
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmitFormik}
      >
        <Form>
          <label htmlFor="">
            Name
            <Field type="text" name="name"></Field>
          </label>

          <label htmlFor="">
            Number
            <Field type="tel" name="number"></Field>
          </label>
          <br />
          <button type="submit">Add contact</button>
        </Form>

        {/* <Form>
          <label htmlFor="">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label> */}
        {/* <br /> */}
        {/* <label htmlFor="">
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>
          <br /> */}
        {/* <button type="submit">Add contact</button> */}
        {/* </Form> */}
      </Formik>
    );
  }
}
export default ContactFormFormik;
