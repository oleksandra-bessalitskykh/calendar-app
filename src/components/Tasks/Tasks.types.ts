import { Moment } from 'moment';
import { IGetTasks } from '../Calendar/Calendar.types';
import { IFormData } from '../Calendar/components/Days/Days.types';

export interface ITask {
    title: string;
    label: string;
    color: string;
}

export interface ITasks {
    getTasks: IGetTasks;
    day: Moment;
    setFormData: (data: IFormData) => void;
    filterState: any;
}


