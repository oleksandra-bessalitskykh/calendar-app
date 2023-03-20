import styled from 'styled-components';
import {CreateButtonComponent} from './components/Days/Days.styles';
import {ICalendarComponent, IDaysComponent, IRowComponent} from './Calendar.types';

export const CalendarComponent = styled.div<ICalendarComponent>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${props => props.isHeader ? '#ffffff' : '#B176FE'};
  ${props => props.isHeader && 'border-bottom: 1px solid #B176FE'};
  ${props => props.scrollable && 'height: 100%'};
`;

export const DaysComponent = styled.div<IDaysComponent>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 160px;
  ${props => props.isHeader ? 'height: 22px' : 'min-height: 100px'};
  ${props => props.maxHeight && 'height: 220px'};
  background-color: #ffffff;
  color: ${props => props.isCurrentMonth ? '#000000' : 'darkgray'};
  padding-bottom: 10px;

  &:hover ${CreateButtonComponent} {
    visibility: visible;
  }
`;

export const RowComponent = styled.div<IRowComponent>`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  ${props => props.isHeader && 'padding-right: 8px'};
`;
