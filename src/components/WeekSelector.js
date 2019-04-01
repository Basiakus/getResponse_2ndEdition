import React, { useContext } from 'react';
import { AppContext } from './App';

/*const Navigation = () => {
	return (
		<AppContext.Consumer>
			{
				value => {
					return (
						<div>
							<button onClick={value.increase}>+</button>
							<button onClick={value.decrease}>-</button>
						</div>
					)
				} 
			}
		</AppContext.Consumer>
	);
};*/


const WeekSelector = () => {
	const value = useContext(AppContext);
	return (
		<div className='calendarHeader__element calendarHeader__element--weekSelector'>	
				<span onClick={value.decrease}>&#706;</span>
				<h2>{`week ${value.currentWeek + 1}`}</h2>
				<span onClick={value.increase}>&#707;</span>
		</div>
	);
} 
export default WeekSelector;