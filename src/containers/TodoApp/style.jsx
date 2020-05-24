import styled from 'styled-components';
import LoadingOverlay from 'react-loading-overlay';

export const Wrapper = styled.div`
  display: flex;
  height: 500px;
  border-radius: 5px;
`;

export const StyledLoader = styled(LoadingOverlay)`
  ._loading_overlay_overlay {
    border-radius: 5px;
  }
`;

export const ListWrapper = styled.div`
  position: relative;
  background-color: #f3f2f8;
  padding: 0.625rem;
  width: 50%;
  border-radius: 5px 0 0 5px;
  opacity: 0.9;
`;

export const ListContentWrapper = styled.div`
  max-height: 280px;
  overflow-y: auto;
`;

export const ItemsWrapper = styled.div`
  position: relative;
  background-color: #fff;
  width: 50%;
  border-radius: 0 5px 5px 0;
`;

export const ItemsPlaceholder = styled.div`
  position: absolute;
  background: url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80')
    no-repeat center;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 0 5px 5px 0;
`;

export const CustomOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 0 5px 5px 0;
  background-color: white;
  opacity: 0.9;
`;

export const PlaceholderText = styled.div`
  text-align: center;
  padding-top: 180px;

  color: #808080;
  font-size: 7rem;
  font-style: italic;
  font-family: Lato;
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
`;

export const NewListWrapper = styled.div`
  display: flex;
  margin: 0.5rem;
  align-items: center;
`;

export const Icon = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: #339af0;
  border-radius: 50%;
  color: white;
`;

export const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  background: ${(props) => (props.active ? 'rgba(160, 184, 201, 0.3)' : null)};
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  outline: none;
  width: 10%;
  color: #808080;
  font-size: 1rem;
  margin-left: 0.5rem;
  margin-right: -0.5rem;
  cursor: pointer;
`;

export const ControlsWrapper = styled.div`
  padding: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
`;

export const HeadingWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  padding: 10px 10px;
  color: #222222;
`;
