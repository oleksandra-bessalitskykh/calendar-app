import { Moment } from 'moment';
import {IFilterState, IGetTasks, IAddTask, IHoliday} from '../../Calendar.types';

export interface IDays {
    getTasks: IGetTasks;
    day: Moment;
    currentDate: Moment;
    addTask: IAddTask;
    filterState: IFilterState;
    getHolidays: (day: string) => IHoliday[] | [];
}

export interface IFormData {
    index: number;
    isVisible: boolean;
    text: string;
    label: string;
    color: string;
}
