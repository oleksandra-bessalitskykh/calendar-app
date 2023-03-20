import React from 'react';
import {HolidaysComponent, HolidayTitleComponent} from './Holidays.styles';
import {IHoliday} from '../Calendar/Calendar.types';
import {IHolidaysType} from './Holidays.types';

const Holidays: React.FC<IHolidaysType> = React.memo(
    ({day, getHolidays}) => {
        return (
            <HolidaysComponent>
                {
                    getHolidays(day.format('YYYY-MM-DD'))
                        .map((holiday: IHoliday, index: number) => (
                            <HolidayTitleComponent key={index}>
                                {holiday.name}
                            </HolidayTitleComponent>
                        ))
                }
            </HolidaysComponent>
        );
    },
);

export default Holidays;
