import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: gray;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Header component</h1>
    </Wrapper>
  );
};

export default Header;
