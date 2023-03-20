import React from 'react';
import {
    SubHeaderComponent,
    TitleComponent,
    ContentComponent,
    ButtonsGroupComponent,
    ButtonComponent,
    TodayButtonComponent
} from './SubHeader.styles';
import {ISubHeader} from './SubHeader.types';

const SubHeader: React.FC<ISubHeader> = React.memo(
    ({currentDate, prevMonthHandler, currentMonthHandler, nextMonthHandler}) => {
        const currentMonth: string = currentDate.format('MMMM');
        const currentYear: string = currentDate.format('YYYY');

        return (
            <SubHeaderComponent>
                <div>
                    <TitleComponent>{currentMonth}</TitleComponent>
                    <ContentComponent>{currentYear}</ContentComponent>
                </div>
                <ButtonsGroupComponent>
                    <ButtonComponent onClick={prevMonthHandler}> &#8249; </ButtonComponent>
                    <TodayButtonComponent onClick={currentMonthHandler}>Today</TodayButtonComponent>
                    <ButtonComponent onClick={nextMonthHandler}> &#8250; </ButtonComponent>
                </ButtonsGroupComponent>
            </SubHeaderComponent>
        );
    },
);

export default SubHeader;
