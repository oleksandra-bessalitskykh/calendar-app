import { Moment } from 'moment';

export interface IDays {
    getTasks: (day: string) => any;
    day: Moment;
    currentDate: Moment;
    addTask: (day: string, inputText: string, index: number) => any;
    filterState: any;
}

export interface IFormData {
    index: number;
    isVisible: boolean;
    text: string;
    label: string;
    color: string;
}
