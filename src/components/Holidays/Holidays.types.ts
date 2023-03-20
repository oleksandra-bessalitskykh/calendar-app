import {Moment} from 'moment';
import {IHoliday} from "../Calendar/Calendar.types";

export interface IHolidaysType {
    day: Moment;
    getHolidays: (day: string) => IHoliday[] | [];
}
