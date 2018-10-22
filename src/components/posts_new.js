import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  // The fancy JSX {...field.input} is an object that
  // contains a bunch of event handlers and props
  // such as onChange={field.input.onChange}
  renderField(field) {
    // destructuring the meta property
    // also destructuring the nested properties touched and erro
    const { meta: { touched, error } } = field;
    // className with ternary value assigned
    // to display the red outline and red erros message when
    // the input is empty and has been touched
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;


    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

function validate(values) {
  // console.log(values); => { title: "hello", categories: "fun", content: "blah blah blah" }
  const errors = {};

  // Validate the inputs from 'values'
  // can add any specific validations that you want
  // if (values.title.length < 3) {
  //   errors.title = "Title must be at least 3 char";
  // }

  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories";
  }
  if (!values.content) {
    errors.content = "Enter some content please";
  }

  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form
  // assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
