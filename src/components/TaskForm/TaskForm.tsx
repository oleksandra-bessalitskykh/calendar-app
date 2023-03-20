import React, {useState} from 'react';
import {ITaskForm} from './TaskForm.types';
import {
    AddTextButtonComponent,
    TaskComponent,
    InputComponent,
    CloseButtonComponent,
} from './TaskForm.styles';
import {FilterSelectComponent} from '../Filter/Filter.styles';

const TaskForm: React.FC<ITaskForm> = React.memo(
    ({day, addTask, onClick, index, text, label, color}) => {
        const [selectedLabel, setSelectedLabel] = useState(label);
        const [selectedColor, setSelectedColor] = useState(color);
        const [inputText, setInputText] = useState(text);

        const taskHandler = () => {
            addTask(day.format('YYYY-MM-DD'), {title: inputText, label: selectedLabel, color: selectedColor}, index);
            onClick();
        };

        return (
            <TaskComponent>
                <div className="form-header">
                    <h5>Create a new task</h5>
                    <div className="form-buttons">
                        <AddTextButtonComponent onClick={taskHandler}>
                            Add
                        </AddTextButtonComponent>
                        <CloseButtonComponent
                            onClick={() => onClick()}
                            title="Close"
                        >
                            X
                        </CloseButtonComponent>
                    </div>
                </div>
                <div className="task-content">
                    <InputComponent
                        value={inputText}
                        type="text"
                        placeholder="Task..."
                        title="Add a new task"
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </div>
                <div className="task-content">
                    <FilterSelectComponent
                        value={selectedLabel}
                        onChange={e => setSelectedLabel(e.target.value)}
                    >
                        <option value="high priority">High priority</option>
                        <option value="optional">Optional</option>
                        <option value="important">Important</option>
                    </FilterSelectComponent>
                </div>
                <div className="task-content">
                    <FilterSelectComponent
                        value={selectedColor}
                        onChange={e => setSelectedColor(e.target.value)}
                    >
                        <option value="white">white</option>
                        <option value="red">red</option>
                        <option value="yellow">yellow</option>
                    </FilterSelectComponent>
                </div>
            </TaskComponent>
        );
    },
);

export default TaskForm;
