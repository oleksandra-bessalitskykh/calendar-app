import React, {useState} from 'react';
import moment, {Moment} from 'moment/moment';
import TaskForm from '../../../TaskForm/TaskForm';
import Tasks from '../../../Tasks/Tasks';
import {IDays, IFormData} from './Days.types';
import {DaysComponent, RowComponent} from '../../Calendar.styles';
import {DayComponent, CurrentDayComponent, CreateButtonComponent} from './Days.styles';
import {DEFAULT_LABEL_VALUE, DEFAULT_COLOR_VALUE, DEFAULT_LIST_SIZE, CREATE_BUTTON_TITLE} from './Days.constants';

const Days: React.FC<IDays> = React.memo(
    ({getTasks, day, currentDate, addTask, filterState}) => {
        const index = getTasks(day.format('DD/MM/YYYY')).length;
        const formDataInitialState = {
            index,
            isVisible: false,
            text: '',
            label: DEFAULT_LABEL_VALUE,
            color: DEFAULT_COLOR_VALUE,
        };
        const [formData, setFormData] = useState<IFormData>(formDataInitialState);

        const isBigCell = index >= DEFAULT_LIST_SIZE;

        const isCurrentDay = (day: Moment) => moment().isSame(day, 'day');
        const isCurrentMonth = (month: Moment) => currentDate.isSame(month, 'month');

        return (
            <DaysComponent isCurrentMonth={isCurrentMonth(day)} scrollable isBigCell={isBigCell}>
                <RowComponent justifyContent={'flex-end'}>
                    <DayComponent>
                        {!isCurrentDay(day)
                            ? day.format('D')
                            : (
                                <CurrentDayComponent>
                                    {day.format('D')}
                                </CurrentDayComponent>
                            )}
                    </DayComponent>
                </RowComponent>
                <Tasks getTasks={getTasks} day={day} setFormData={(data: IFormData) => setFormData(data)}
                       filterState={filterState}/>
                {!formData.isVisible && (
                    <CreateButtonComponent
                        title={CREATE_BUTTON_TITLE}
                        onClick={() => setFormData({
                            text: '',
                            label: DEFAULT_LABEL_VALUE,
                            isVisible: true,
                            index,
                            color: DEFAULT_COLOR_VALUE,
                        })}
                    >
                        +
                    </CreateButtonComponent>
                )}
                {formData.isVisible && (
                    <TaskForm
                        day={day}
                        addTask={addTask}
                        onClick={() => setFormData({...formData, isVisible: false})}
                        index={formData.index}
                        text={formData.text}
                        label={formData.label}
                        color={formData.color}
                    />
                )}
            </DaysComponent>
        );
    },
);

export default Days;
