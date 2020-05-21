import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: pink;
  color: white;
  opacity: 0.5;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 5rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <h1>Footer component</h1>
    </Wrapper>
  );
};

export default Footer;
