import styled from 'styled-components';

export const DayComponent = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  outline: unset;
  font-size: 14px;
`;

export const CurrentDayComponent = styled.div`
  height: 100%;
  width: 100%;
  background-color: #B176FE;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CreateButtonComponent = styled.div`
  position: absolute;
  left: 2px;
  top: 2px;
  width: 25px;
  border-radius: 4px;
  background-color: ghostwhite;
  border: none;
  font-size: 16px;
  cursor: pointer;
  outline: unset;
  text-align: center;
  visibility: hidden;
  
  &:hover {
    background-color: lavender;
  }
`;
