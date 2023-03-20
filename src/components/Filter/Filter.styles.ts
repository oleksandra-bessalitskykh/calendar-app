import styled from 'styled-components';
import {ButtonComponent} from '../SubHeader/SubHeader.styles';
import {
    TaskComponent,
    AddTextButtonComponent,
    CloseButtonComponent,
    InputComponent
} from '../TaskForm/TaskForm.styles';

export const FilterButtonComponent = styled(ButtonComponent)`
  width: 50px;
  height: 22px;
  border-radius: 4px;
  background-color: lavender;
  font-size: 14px;
  color: #B176FE;
  cursor: pointer
`;

export const FilterContainerComponent: any = styled(TaskComponent)`
  position: absolute;
  display: ${(props: any) => props.isFilterFormVisible ? 'flex' : 'none'};
  justify-content: center;
  height: 250px;

  & .filter-wrapper {
    position: relative;
  }

  & .filter-header {
    display: flex;
    justify-content: space-between;
    height: 24px;
  }

  & h5 {
    margin: 0 0 10px 0;
    padding: 0;
    align-self: flex-start;
  }

  & .filter-buttons {
    display: flex;
  }

  & .filter-items {
    display: flex;
    margin-bottom: 10px;
  }

  & .filter-input {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  & ${CloseButtonComponent} {
    margin: 0 0 2px 0;
  }

  & ${InputComponent} {
    width: 100%;
  }
`;

export const FilterDataComponent = styled(AddTextButtonComponent)`
  width: auto;
  background-color: white;
  font-size: 14px;

  &:hover {
    background-color: lavender;
  }
`;

export const FilterSelectComponent = styled.select`
  width: 100%;
  font-size: 14px;
  padding: 0 0.5rem;
  height: 2rem;
  border: 1px solid gray;
  border-radius: 4px;
  color: black;
  outline: unset;
`
