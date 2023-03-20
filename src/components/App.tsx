import React, {useState} from 'react';
import moment from 'moment/moment';
import Calendar from './Calendar/Calendar';
import SubHeader from './SubHeader/SubHeader';
import {AppComponent} from './App.styles';

function App() {
    moment.updateLocale('en', {week: {dow: 1}});
    const [currentDate, setCurrentDate] = useState(moment());

    const startDay = currentDate.clone().startOf('month').startOf('week');

    const prevMonthHandler = () => {
        setCurrentDate(prev => prev.clone().subtract(1, 'month'));
    };
    const nextMonthHandler = () => {
        setCurrentDate(prev => prev.clone().add(1, 'month'));
    };
    const currentMonthHandler = () => {
        setCurrentDate(moment());
    };

    return (
        <AppComponent>
            <SubHeader
                currentDate={currentDate}
                prevMonthHandler={prevMonthHandler}
                nextMonthHandler={nextMonthHandler}
                currentMonthHandler={currentMonthHandler}
            />
            <Calendar startDay={startDay} currentDate={currentDate}/>
        </AppComponent>
    );
}

export default App;
