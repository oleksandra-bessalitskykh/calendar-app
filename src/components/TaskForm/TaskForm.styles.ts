import styled from 'styled-components';

export const TaskComponent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  height: 200px;
  padding: 20px;
  background-color: white;
  border: 1px solid lavender;
  border-radius: 8px;
  box-shadow: 0 0 0 1px lavender, 0 4px 8px 6px lavender;
  z-index: 1;

  & .form-header {
    display: flex;
    justify-content: space-between;
    height: 24px;
    margin-bottom: 15px;
  }

  & h5 {
    margin: 0 0 10px 0;
    padding: 0;
    align-self: flex-start;
  }

  & .form-buttons {
    display: flex;
  }

  & .task-content {
    display: flex;
    margin-bottom: 5px;
  }
`;

export const AddTextButtonComponent = styled.div`
  width: 50px;
  height: auto;
  padding: 1px 8px;
  border-radius: 4px;
  background-color: white;
  border: none;
  font-size: 14px;
  cursor: pointer;
  outline: unset;
  text-align: center;
  color: #B176FE;

  &:hover {
    background-color: lavender;
  }
`;

export const InputComponent = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  padding: 0 0.5rem;
  height: 2rem;
  border: 1px solid gray;
  border-radius: 4px;
  color: black;
  outline: unset;
`;

export const CloseButtonComponent = styled(AddTextButtonComponent)`
  background-color: white;
  width: 25px;
  height: auto;

  &:hover {
    background-color: lavender;
  }
`;
