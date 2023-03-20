export const DEFAULT_LABEL_FILTER_VALUE = 'all';
export const DEFAULT_COLOR_FILTER_VALUE = 'all';

export const filterInitialState = {
    labelFilter: DEFAULT_LABEL_FILTER_VALUE,
    titleFilter: '',
    colorFilter: DEFAULT_COLOR_FILTER_VALUE,
}

export const tasksInitialState = {
    '2023-03-25': [
        {
            title: 'task 1',
            label: 'optional',
            color: 'white',
        },
        {
            title: 'task 2',
            label: 'optional',
            color: 'white',
        }
    ],
    '2023-03-20': [
        {
            title: 'task 77',
            label: 'important',
            color: 'yellow',
        }
    ],
};
