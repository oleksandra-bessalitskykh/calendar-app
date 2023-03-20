import {Moment} from 'moment/moment';
import {IAddTask} from '../Calendar/Calendar.types';

export interface ITaskForm {
    day: Moment;
    addTask: IAddTask;
    onClick: () => void;
    index: number;
    text: string;
    label: string;
    color: string;
}
