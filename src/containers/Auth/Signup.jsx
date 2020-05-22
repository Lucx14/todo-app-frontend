import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/index';

const Wrapper = styled.div`
  margin: 20px auto;
  border-radius: 5px;
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

const StyledError = styled.div`
  color: #808080;
  padding: 5px;
  font-style: italic;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 1rem;
  cursor: pointer;
  color: #808080;
`;

const StyledIcon = styled.i`
  padding-right: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: none;
  font: inherit;
  padding: 6px 10px;
  display: block;
  :focus {
    outline: none;
    background-color: #ccc;
  }
  border: ${(props) => (props.errors ? '1px solid #D6705C' : '1px solid #ccc')};
  background-color: ${(props) => (props.errors ? '#FFF8F7' : 'white')};
`;

const StyledHelper = styled.div`
  text-align: left;
  color: #808080;
  font-size: 0.625rem;
  font-style: italic;
  padding-top: ${(props) => (props.errors ? '6px' : '0px')};
`;

const FieldWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Signup = (props) => {
  const { isAuthenticated, onAuthSignup, error } = props;

  let authRedirect;
  if (isAuthenticated) {
    authRedirect = <Redirect to="/" />;
  }

  let errorMessage;
  if (error) {
    errorMessage = (
      <StyledError>
        There was a problem with your request, please try again
      </StyledError>
    );
  }

  return (
    <Wrapper>
      {authRedirect}
      {errorMessage}
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          password_confirmation: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(30, 'Must be 30 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Must be 6 characters or more')
            .required('Required'),
          password_confirmation: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          onAuthSignup(
            values.name,
            values.email,
            values.password,
            values.password_confirmation
          );
          setSubmitting(false);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <FieldWrapper>
                <Field
                  name="name"
                  type="text"
                  as={StyledInput}
                  placeholder="Name"
                  errors={errors.name && touched.name}
                />
                <StyledHelper errors={errors.name && touched.name}>
                  <ErrorMessage name="name" />
                </StyledHelper>
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="email"
                  type="email"
                  as={StyledInput}
                  placeholder="Email"
                  errors={errors.email && touched.email}
                />
                <StyledHelper errors={errors.email && touched.email}>
                  <ErrorMessage name="email" />
                </StyledHelper>
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="password"
                  type="text"
                  as={StyledInput}
                  placeholder="Password"
                  errors={errors.password && touched.password}
                />
                <StyledHelper errors={errors.password && touched.password}>
                  <ErrorMessage name="password" />
                </StyledHelper>
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="password_confirmation"
                  type="text"
                  as={StyledInput}
                  placeholder="Password Confirmation"
                  errors={
                    errors.password_confirmation &&
                    touched.password_confirmation
                  }
                />
                <StyledHelper
                  errors={
                    errors.password_confirmation &&
                    touched.password_confirmation
                  }
                >
                  <ErrorMessage name="password_confirmation" />
                </StyledHelper>
              </FieldWrapper>
              <StyledButton type="submit">
                <StyledIcon className="fas fa-user-plus" />
                Sign Up
              </StyledButton>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error !== null,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onAuthSignup: (name, email, password, passwordConfirmation) =>
    dispatch(actions.authSignup(name, email, password, passwordConfirmation)),
});

Signup.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onAuthSignup: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
