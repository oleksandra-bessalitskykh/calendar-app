import {Moment} from 'moment';
import {DropResult} from 'react-beautiful-dnd';

export interface ICalendar {
    startDay: Moment;
    currentDate: Moment;
}

export interface IFilterState {
    labelFilter: string;
    titleFilter: string;
    colorFilter: string;
}

export interface ITask {
    color: string;
    label: string;
    title: string;
}

export interface ITasksList {
    [key: string]: ITask[]
}

export interface IHoliday {
    name: string;
}

export interface IHolidays {
    [key: string]: IHoliday[];
}

export interface ICalendarComponent {
    isHeader?: boolean;
    scrollable?: boolean;
}

export interface IDaysComponent {
    isHeader?: boolean;
    maxHeight?: boolean;
    isCurrentMonth?: boolean;
}

export interface IRowComponent {
    isHeader?: boolean;
    justifyContent?: string;
}

export type IAddTask = (date: string, task: ITask, index: number) => void;
export type IGetTasks = (day: string) => ITask[] | [];
export type IHandleOnDragEnd = ({destination, source}: DropResult) => void;
