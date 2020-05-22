import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

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
  border: ${(props) => (props.errors ? '1px solid red' : '1px solid #ccc')};
  background-color: ${(props) => (props.errors ? '#fda49a' : 'white')};
`;

const FieldWrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Signup = () => {
  return (
    <Wrapper>
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
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
                <ErrorMessage name="name" />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="email"
                  type="email"
                  as={StyledInput}
                  placeholder="Email"
                  errors={errors.email && touched.email}
                />
                <ErrorMessage name="email" />
              </FieldWrapper>
              <FieldWrapper>
                <Field
                  name="password"
                  type="text"
                  as={StyledInput}
                  placeholder="Password"
                  errors={errors.password && touched.password}
                />
                <ErrorMessage name="password" />
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
                <ErrorMessage name="password_confirmation" />
              </FieldWrapper>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

export default Signup;
