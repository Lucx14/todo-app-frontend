import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: black;
  color: white;
  opacity: 0.5;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LinkTag = styled.a`
  padding-top: 10px;
  color: white;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <Wrapper>
      <LinkTag href="https://github.com/Lucx14/todo-app-backend">
        View backend code
      </LinkTag>
      <LinkTag href="https://github.com/Lucx14/todo-app-frontend">
        View frontend code
      </LinkTag>
    </Wrapper>
  );
};

export default Footer;
