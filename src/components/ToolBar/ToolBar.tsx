import React, {useRef} from 'react';
import {saveAs} from 'file-saver';
import html2canvas from 'html2canvas';
import Filter from '../Filter/Filter';
import {ToolBarButtonComponent, ToolBarComponent, ToolBarInputComponent} from './ToolBar.styles';
import {IToolBar} from './ToolBar.types';
import {IFilterState} from '../Calendar/Calendar.types';

const ToolBar: React.FC<IToolBar> = React.memo(
    ({tasks, setTasks, filterState, setFilterState}) => {
        const fileInputRef: any = useRef(null);
        const saveDataToFile = () => {
            const blob = new Blob([JSON.stringify(tasks)], {type: 'text/plain'});
            saveAs(blob, "calendar.json");
        };

        const makeImage = async () => {
            const element = document.getElementById('content-container'),
                canvas = await html2canvas(element as HTMLElement),
                data = canvas.toDataURL('image/jpg'),
                link = document.createElement('a');

            link.href = data;
            link.download = 'downloaded-image.jpg';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        const importCalendarFile = () => {
            const file = fileInputRef.current.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = () => {
                setTasks(JSON.parse(reader.result as string));
            };
            reader.readAsText(file);
        };

        return (
            <ToolBarComponent>
                <ToolBarInputComponent>
                    <label htmlFor="file-input" title="Import saved data from file">Import file</label>
                    <input ref={fileInputRef} type="file" id="file-input" onChange={() => importCalendarFile()}/>
                </ToolBarInputComponent>
                <ToolBarButtonComponent title="Save data to file" onClick={() => saveDataToFile()}>
                    &#10515;
                </ToolBarButtonComponent>
                <ToolBarButtonComponent title="Download data as an image" onClick={() => makeImage()}>
                    &#128197;
                </ToolBarButtonComponent>
                <Filter filterState={filterState} setFilterState={(newState: IFilterState) => setFilterState(newState)}/>
            </ToolBarComponent>
        );
    },
);

export default ToolBar;
