import {Moment} from "moment";

export interface ISubHeader {
    currentDate: Moment;
    prevMonthHandler: () => void;
    currentMonthHandler: () => void;
    nextMonthHandler: () => void;
}
