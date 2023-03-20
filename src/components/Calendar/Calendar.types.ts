import { Moment } from 'moment';
import { DropResult } from 'react-beautiful-dnd';

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
    string: ITask[]
}

export type IAddTask = (date: string, task: any, index: number) => void;
export type IGetTasks = (day: string) => ITask[] | [];
export type IHandleOnDragEnd = ({destination, source}: DropResult) => void;
