import {Moment} from 'moment';
import {IGetTasks, IFilterState} from '../Calendar/Calendar.types';
import {IFormData} from '../Calendar/components/Days/Days.types';

export interface ITask {
    title: string;
    label: string;
    color: string;
}

export interface ITasks {
    getTasks: IGetTasks;
    day: Moment;
    setFormData: (data: IFormData) => void;
    filterState: IFilterState;
}

export interface ITaskTextComponent {
    color?: string;
}

export type IEditButtonHandler = (index: number, text: string, label: string, color: string) => () => void;

