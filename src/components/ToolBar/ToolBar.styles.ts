import styled from "styled-components";
import {EditButtonComponent} from '../Tasks/Tasks.styles';

export const ToolBarComponent = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 5px;
  background-color: white;
`;

export const ToolBarButtonComponent = styled(EditButtonComponent)`
  margin-right: 5px;
  color: black;
  text-align: center;
  padding: 0;
`;

export const ToolBarInputComponent = styled.div`
  width: 100px;
  height: 22px;
  margin-right: 5px;
  border-radius: 4px;
  background-color: lavender;
  font-size: 14px;
  color: #B176FE;
  text-align: center;

  & label {
    cursor: pointer;
  }

  & input {
    visibility: hidden;
  }
`;
