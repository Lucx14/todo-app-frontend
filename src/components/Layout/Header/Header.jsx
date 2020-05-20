import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: gray;
  opacity: 0.7;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 5rem;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Header component</h1>
    </Wrapper>
  );
};

export default Header;
