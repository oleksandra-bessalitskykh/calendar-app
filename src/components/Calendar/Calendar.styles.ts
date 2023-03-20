import styled from 'styled-components';
import { CreateButtonComponent } from './components/Days/Days.styles';

export const CalendarComponent: any = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${(props: any) => props.isHeader ? '#ffffff' : '#B176FE'};
  ${(props: any) => props.isHeader && 'border-bottom: 1px solid #B176FE'};
  ${(props: any) => props.scrollable && 'height: 100%'};
`;

export const DaysComponent: any = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 160px;
  ${(props: any) => props.isHeader ? 'height: 22px' : 'min-height: 100px'};
  ${(props: any) => props.isBigCell && 'height: 200px'};
  background-color: #ffffff;
  color: ${(props: any) => props.isCurrentMonth ? '#000000' : 'darkgray'};
  padding-bottom: 10px;

  &:hover ${CreateButtonComponent} {
    visibility: visible;
  }
`;

export const RowComponent: any = styled.div`
  display: flex;
  justify-content: ${(props: any) => props.justifyContent ? props.justifyContent : 'flex-start'};
  ${(props: any) => props.isHeader && 'padding-right: 8px'};
`;
