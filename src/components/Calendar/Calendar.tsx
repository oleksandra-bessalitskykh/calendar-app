import React, {useEffect, useState} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import Days from './components/Days/Days';
import WeekDays from './components/WeekDays/WeekDays';
import ToolBar from '../ToolBar/ToolBar';
import {CalendarComponent} from './Calendar.styles';
import {filterInitialState, tasksInitialState} from './Calendar.constants';
import {
    ICalendar,
    IFilterState,
    IAddTask,
    IHandleOnDragEnd,
    ITasksList,
    IHolidays,
} from './Calendar.types';

const Calendar: React.FC<ICalendar> = React.memo(
    ({startDay, currentDate}) => {
        const totalDays = 42;
        let day = startDay.clone().subtract(1, 'day');
        const days = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
        const [filterState, setFilterState] = useState<IFilterState>(filterInitialState);
        const [holidays, setHolidays] = useState<IHolidays>({});
        const [tasks, setTasks] = useState<ITasksList>(tasksInitialState);

        useEffect(() => {
            const loadHolidays = async () => {
                try {
                    const result = await fetch('https://date.nager.at/api/v3/NextPublicHolidaysWorldwide');
                    const data = await result.json();
                    const holidays: IHolidays = {};

                    data.forEach((holidayObj: any) => {
                        if (!holidays[holidayObj.date]) {
                            holidays[holidayObj.date] = [];
                        }

                        holidays[holidayObj.date].push({name: holidayObj.name});
                    })

                    setHolidays(holidays);

                } catch (e) {
                    console.log('Error! Failed to fetch holidays');
                }
            };

            loadHolidays();
        }, []);

        const getTasks = (day: string) => {
            return tasks[day] || [];
        };

        const getHolidays = (day: string) => {
            return holidays[day] || [];
        };

        const addTask: IAddTask = (date, task, index) => {
            const tasks = [...getTasks(date)];
            tasks[index] = task;

            setTasks((prev: ITasksList) => ({
                ...prev,
                [date]: tasks,
            }));
        };

        const handleOnDragEnd: IHandleOnDragEnd = ({destination, source}) => {
            if (!destination) return;

            const destinationArray = Array.from(getTasks(destination.droppableId));
            const sourceArray = Array.from(getTasks(source.droppableId));
            const [reorderedItem] = sourceArray.splice(source.index, 1);
            destinationArray.splice(destination.index, 0, reorderedItem);

            setTasks((prev: ITasksList) => ({
                ...prev,
                [destination.droppableId]: destinationArray,
                [source.droppableId]: sourceArray,
            }));
        };

        return (
            <div id="content-container">
                <ToolBar
                    tasks={tasks}
                    setTasks={setTasks}
                    filterState={filterState}
                    setFilterState={setFilterState}
                />
                <CalendarComponent isHeader>
                    {[...Array(7)].map((_, index) => (
                        <WeekDays key={index} index={index}/>
                    ))}
                </CalendarComponent>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <CalendarComponent scrollable>
                        {days.map(day => (
                            <Days
                                key={day.unix()}
                                day={day.clone()}
                                getHolidays={getHolidays}
                                getTasks={getTasks}
                                currentDate={currentDate}
                                addTask={addTask}
                                filterState={filterState}
                            />
                        ))}
                    </CalendarComponent>
                </DragDropContext>
            </div>
        );
    },
);

export default Calendar;
