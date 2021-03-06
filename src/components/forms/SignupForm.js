import React from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InlineError from '../messages/InlineError';

class SignupForm extends React.Component {
  state = {
    loading: false,
    data: {
      email: '',
      password: ''
    },
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);

    this.setState({ errors });

    if(Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err => this.setState({
          errors: err.response.data.errors,
          loading: false
        }));
    }
  };

  validate = (data) => {
    const errors = {};

    if(!Validator.isEmail(data.email))
      errors.email = "Digite um e-mail válido";
    if(!data.password)
      errors.password = "A senha é um campo obrigatório";

    return errors;
  };

  render () {
    const { data, errors, loading } = this.state;

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
        {
          errors.global &&
          <Message negative>
            <p>{ errors.global }</p>
          </Message>
        }

        <Form.Field error={ !!errors.email }>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            value={data.email}
            onChange={this.onChange}
          />
          { errors.email && <InlineError text={errors.email} /> }
        </Form.Field>

        <Form.Field error={ !!errors.password }>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            value={data.password}
            onChange={this.onChange}
          />
          { errors.password && <InlineError text={errors.password} /> }
        </Form.Field>

        <Button primary>Cadastre-se</Button>
      </Form>
    )
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;