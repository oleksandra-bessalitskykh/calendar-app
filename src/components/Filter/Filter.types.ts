import {IFilterState} from '../Calendar/Calendar.types';

export interface IFilter {
    filterState: IFilterState;
    setFilterState: ({titleFilter, labelFilter, colorFilter}: IFilterState) => void;
}

export interface IFilterContainerComponent {
    isFilterFormVisible?: boolean;
}
