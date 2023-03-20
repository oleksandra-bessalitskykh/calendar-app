import React from 'react';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import {
    EditButtonComponent,
    TaskComponent,
    TasksComponent,
    TaskTextComponent
} from './Tasks.styles';
import {ITasks, ITask} from './Tasks.types';

const Tasks: React.FC<ITasks> = ({getTasks, day, setFormData, filterState}) => {
    const editButtonHandler = (index: number, text: string, label: string, color: string) => () => setFormData({
        index,
        isVisible: true,
        text,
        label,
        color,
    });

    const taskFilter = (task: ITask) => {
        let result = true;

        if (filterState.titleFilter !== '') {
            result = result && task.title.toLowerCase().includes(filterState.titleFilter.toLowerCase());
        }

        if (filterState.labelFilter !== 'all') {
            result = result && filterState.labelFilter === task.label;
        }

        if (filterState.colorFilter !== 'all') {
            result = result && filterState.colorFilter === task.color;
        }

        return result;
    };

    return (
        <Droppable droppableId={day.format('DD/MM/YYYY')}>
            {(provided) => (
                <TasksComponent {...provided.droppableProps} ref={provided.innerRef}>
                    {
                        getTasks(day.format('DD/MM/YYYY'))
                            .filter(taskFilter)
                            .map((task: ITask, index: number) => (
                                <Draggable
                                    key={task.title}
                                    draggableId={task.title}
                                    index={index}
                                >
                                    {(provided) => (
                                        <TaskComponent
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <EditButtonComponent
                                                onClick={editButtonHandler(index, task.title, task.label, task.color)}>
                                                &#128393;
                                            </EditButtonComponent>
                                            <TaskTextComponent color={task.color}>
                                                {task.title}
                                            </TaskTextComponent>
                                        </TaskComponent>
                                    )}
                                </Draggable>
                            ))
                    }
                    {provided.placeholder}
                </TasksComponent>
            )}
        </Droppable>
    );
};

export default Tasks;
