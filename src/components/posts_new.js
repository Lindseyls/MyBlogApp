import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  // The fancy JSX {...field.input} is an object that
  // contains a bunch of event handlers and props
  // such as onChange={field.input.onChange}
  renderTitleField(field) {
    return (
      <div>
        <input
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  render() {

    return (
      <form>
        <Field
          name="title"
          component={this.renderTitleField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
