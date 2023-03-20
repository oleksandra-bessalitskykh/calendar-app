import React from 'react';
import moment from 'moment/moment';
import {DaysComponent, RowComponent} from '../../Calendar.styles';

const WeekDays: React.FC<{ index: number }> = React.memo(
    ({index}) => {
        return (
            <DaysComponent key={index} isHeader isCurrentMonth>
                <RowComponent justifyContent={'flex-end'} isHeader>
                    {moment().day(index + 1).format('dd')}
                </RowComponent>
            </DaysComponent>
        );
    },
);

export default WeekDays;
