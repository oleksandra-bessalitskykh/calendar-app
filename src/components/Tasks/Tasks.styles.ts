import styled from 'styled-components';

export const TasksComponent = styled.ul`
  list-style: none;
  padding: 0;
  color: #000000;
  font-family: sans-serif;
  margin: 0 2px;
`;

export const TaskComponent = styled.li`
  display: flex;
  align-items: start;
`;

export const EditButtonComponent = styled.span`
  width: 25px;
  padding: 1px 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: lavender;
  border: none;
  cursor: pointer;
  outline: unset;
`;

export const TaskTextComponent = styled.span`
  display: inline-block;
  height: 24px;
  width: 100%;
  margin: 0;
  padding: 2px 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-size: 14px;
  font-weight: normal;
  word-break: break-all;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ${(props: any) => `background-color: ${props.color}`}
`;
