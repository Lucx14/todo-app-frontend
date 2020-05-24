import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const Count = styled.div`
  position: absolute;
  right: 0;
  padding: 16px 0;
  font-weight: bold;
  color: #222222;
`;

export const UpdateTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Input = styled.input`
  padding: 5px;
  margin-left: 5px;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: black solid 1px;
  outline: none;
  font-size: 1rem;
  color: #808080;
`;

export const Icon = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: #339af0;
  border-radius: 50%;
  color: white;
`;

export const Title = styled.div`
  width: 100%;
  padding: 15px 5px;
  color: #222222;
`;
