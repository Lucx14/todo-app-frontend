import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  height: 100%;
`;

export const ItemsContentWrapper = styled.div`
  max-height: 250px;
  overflow-y: auto;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #339af0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ToggleWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const InputControls = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const ItemWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;

export const NewItemWrapper = styled.div`
  padding: 5px;
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

export const TextInput = styled.input`
  padding: 5px;
  width: 100%;
  margin-left: 10px;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #a6a6a6;
  font-size: 1rem;
  color: #222222;
`;

export const TrashButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: #808080;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const Label = styled.label`
  border-bottom: 1px solid #a6a6a6;
  width: 100%;
  margin-left: 10px;
  padding: 5px 0;
  color: #222222;
`;

export const Input = styled.input`
  cursor: pointer;
`;
