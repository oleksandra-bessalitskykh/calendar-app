import {IFilterState, ITasksList} from '../Calendar/Calendar.types';

export interface IToolBar {
    tasks: ITasksList;
    setTasks: (prev: ITasksList) => void;
    filterState: IFilterState;
    setFilterState: ({titleFilter, labelFilter, colorFilter}: IFilterState) => void;
}
