import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import updateObject, { checkValidity } from '../../shared/utility';
import * as actions from '../../store/actions/index';

const Wrapper = styled.div`
  margin: 20px auto;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 3px #ccc;
  border: 1px solid #eee;
  padding: 10px;
  box-sizing: border-box;
  @media (min-width: 600px) {
    width: 500px;
  }
`;

const Auth = (props) => {
  const { onAuthInit, isAuthenticated } = props;
  const [authForm, setAuthForm] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Email Address',
      },
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password',
      },
      value: '',
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  });

  const inputChangedHandler = (event, controlName) => {
    const updatedAuthForm = updateObject(authForm, {
      [controlName]: updateObject(authForm[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          authForm[controlName].validation
        ),
        touched: true,
      }),
    });
    setAuthForm(updatedAuthForm);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    onAuthInit(authForm.email.value, authForm.password.value);
  };

  const formElementArray = [];
  // eslint-disable-next-line
  for (const key in authForm) {
    formElementArray.push({
      id: key,
      config: authForm[key],
    });
  }

  const form = formElementArray.map((formElement) => (
    <Input
      key={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  // const errorMessage = 'There was a problem!';
  // if (error) {
  //   errorMessage = <p>{error.message}</p>;
  // }

  let authRedirect;
  if (isAuthenticated) {
    authRedirect = <Redirect to="/" />;
  }

  return (
    <Wrapper>
      {authRedirect}
      {/* {errorMessage} */}
      <form onSubmit={authSubmitHandler}>
        {form}
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    // error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAuthInit: (email, password) => dispatch(actions.authInit(email, password)),
});

Auth.propTypes = {
  onAuthInit: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
