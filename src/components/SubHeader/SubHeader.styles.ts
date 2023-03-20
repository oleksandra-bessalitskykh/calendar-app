import styled from 'styled-components';

export const SubHeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000000;
  background-color: #ffffff;
  padding: 10px 16px 0;
`;

export const ContentComponent = styled.span`
  font-size: 24px;
`;

export const TitleComponent = styled(ContentComponent)`
  font-weight: bold;
  margin: 0 8px 0 0;
`;

export const ButtonsGroupComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonComponent = styled.button`
  border: unset;
  background-color: #B176FE;
  height: 28px;
  margin-right: 2px;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
`;

export const TodayButtonComponent = styled(ButtonComponent)`
  padding: 0 16px;
  font-weight: bold;
`;
