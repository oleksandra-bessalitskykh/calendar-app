import React, {useState} from 'react';
import {
    FilterButtonComponent,
    FilterContainerComponent,
    FilterDataComponent,
    FilterSelectComponent
} from './Filter.styles';
import {CloseButtonComponent, InputComponent} from '../TaskForm/TaskForm.styles';
import {IFilter} from './Filter.types';

export const Filter: React.FC<IFilter> = React.memo(
    ({filterState, setFilterState}) => {
        const [isFilterFormVisible, setIsFilterFormVisible] = useState(false);
        const [titleFilter, setTitleFilter] = useState(filterState.titleFilter);
        const [labelFilter, setLabelFilter] = useState(filterState.labelFilter);
        const [colorFilter, setColorFilter] = useState(filterState.colorFilter);

        const sortTasks = () => {
            setIsFilterFormVisible(true);
        };

        const setFilterHandler = () => {
            setFilterState({titleFilter, labelFilter, colorFilter});
        };
        const resetFilterHandler = () => {
            setTitleFilter('');
            setLabelFilter('all');
            setColorFilter('all');
            setFilterState({titleFilter: '', labelFilter: 'all', colorFilter: 'all'});
        };

        return (
            <>
                <FilterButtonComponent onClick={() => sortTasks()}>Filter</FilterButtonComponent>
                <FilterContainerComponent isFilterFormVisible={isFilterFormVisible}>
                    <div className="filter-wrapper">
                        <div className="filter-header">
                            <h5>Filter tasks</h5>
                            <div className="filter-buttons">
                                <FilterDataComponent title="Apply filter" onClick={setFilterHandler}>
                                    Apply
                                </FilterDataComponent>
                                <FilterDataComponent title="Reset filter" onClick={resetFilterHandler}>
                                    Reset
                                </FilterDataComponent>
                                <CloseButtonComponent onClick={() => setIsFilterFormVisible(false)} title="Close">
                                    X
                                </CloseButtonComponent>
                            </div>
                        </div>
                        <div className="filter-items">
                            <div className="filter-input">
                                <label htmlFor="label-filter">Filter tasks by labels</label>
                                <FilterSelectComponent
                                    id="label-filter"
                                    value={labelFilter}
                                    onChange={(e) => setLabelFilter(e.target.value)}
                                >
                                    <option value="all">All</option>
                                    <option value="high priority">High priority</option>
                                    <option value="optional">Optional</option>
                                    <option value="important">Important</option>
                                </FilterSelectComponent>
                            </div>
                        </div>
                        <div className="filter-items">
                            <div className="filter-input">
                                <label htmlFor="custom-text-filter">Filter tasks by searching text</label>
                                <InputComponent
                                    value={titleFilter}
                                    id="custom-text-filter"
                                    type="text"
                                    placeholder="Add text"
                                    onChange={(e) => setTitleFilter(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="filter-items">
                            <div className="filter-input">
                                <label htmlFor="color-filter">Filter tasks by labels</label>
                                <FilterSelectComponent
                                    id="color-filter"
                                    value={colorFilter}
                                    onChange={(e) => setColorFilter(e.target.value)}
                                >
                                    <option value="all">All</option>
                                    <option value="yellow">yellow</option>
                                    <option value="white">white</option>
                                    <option value="red">red</option>
                                </FilterSelectComponent>
                            </div>
                        </div>
                    </div>
                </FilterContainerComponent>
            </>
        );
    },
);

export default Filter;
