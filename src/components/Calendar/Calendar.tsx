import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Days from './components/Days/Days';
import WeekDays from './components/WeekDays/WeekDays';
import ToolBar from '../ToolBar/ToolBar';
import { CalendarComponent } from './Calendar.styles';
import {filterInitialState, tasksInitialState} from './Calendar.constants';
import { ICalendar, IFilterState, IAddTask, IGetTasks, IHandleOnDragEnd } from './Calendar.types';

const Calendar: React.FC<ICalendar> = ({startDay, currentDate}) => {
    const totalDays = 42;
    let day = startDay.clone().subtract(1, 'day');
    const days = [...Array(totalDays)].map(() => day.add(1, 'day').clone());
    const [filterState, setFilterState] = useState<IFilterState>(filterInitialState);

    // state як таски
    const [tasks, setTasks] = useState<any>(tasksInitialState);

    const getTasks: IGetTasks = (day) => {
        return tasks[day] || [];
    };

    const addTask: IAddTask = (date, task, index) => {
        const tasks = [...getTasks(date)];
        tasks[index] = task;

        setTasks((prev: any) => ({
            ...prev,
            [date]: tasks,
        }));
    };

    const handleOnDragEnd:IHandleOnDragEnd = ({destination, source}) => {
        if (!destination) return;

        const destinationArray: any = Array.from(getTasks(destination.droppableId));
        const sourceArray: any = Array.from(getTasks(source.droppableId));
        const [reorderedItem] = sourceArray.splice(source.index, 1);
        destinationArray.splice(destination.index, 0, reorderedItem);

        setTasks((prev: any) => ({
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
                    <WeekDays index={index} />
                ))}
            </CalendarComponent>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <CalendarComponent scrollable>
                    {days.map(day => (
                        <Days
                            key={day.unix()}
                            day={day.clone()}
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
};

export default Calendar;
