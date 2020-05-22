import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const InputWrapper = styled.input`
  outline: none;
  border: ${(props) =>
    props.invalid && props.shouldValidate && props.touched
      ? '1px solid #D6705C'
      : '1px solid #ccc'};
  background-color: ${(props) =>
    props.invalid && props.shouldValidate && props.touched
      ? '#FFF8F7'
      : 'white'};
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  :focus {
    outline: none;
    background-color: #ccc;
  }
`;

const Input = (props) => {
  const {
    elementConfig,
    value,
    changed,
    invalid,
    shouldValidate,
    touched,
  } = props;

  const inputElement = (
    <InputWrapper
      type={elementConfig.type}
      placeholder={elementConfig.placeholder}
      value={value}
      onChange={changed}
      invalid={invalid}
      shouldValidate={shouldValidate}
      touched={touched}
    />
  );

  return <Wrapper>{inputElement}</Wrapper>;
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired,
  elementConfig: PropTypes.shape({
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  invalid: PropTypes.bool.isRequired,
  shouldValidate: PropTypes.oneOfType([
    PropTypes.shape({
      required: PropTypes.bool.isRequired,
      isEmail: PropTypes.bool.isRequired,
    }),
    PropTypes.shape({
      required: PropTypes.bool.isRequired,
      minLength: PropTypes.number.isRequired,
    }),
  ]).isRequired,
  touched: PropTypes.bool.isRequired,
};

export default Input;
