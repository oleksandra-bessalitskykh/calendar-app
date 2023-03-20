import {Moment} from 'moment/moment';

export interface ITaskForm {
    day: Moment;
    addTask: (day: string, task: any, index: number) => void;
    onClick: () => void;
    index: number;
    text: string;
    label: string;
    color: string;
}
