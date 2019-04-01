import React, { useContext } from 'react';
import { AppContext } from './App';
import WeekSelector from './WeekSelector';
import WeekProgressBar from './WeekProgressBar';
import ProteinSelector from './ProteinSelector';

const CalendarHeader = () => {
	return (
		<div className='calendarHeader'>	
			<WeekProgressBar />
			<WeekSelector />
			<ProteinSelector />
		</div>
	);
} 
export default CalendarHeader;