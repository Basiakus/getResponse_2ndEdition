import React, { useContext } from 'react';
import { AppContext } from './App';


const WeekProgressBar = () => {
	const value = useContext(AppContext);
	const points = Array.from({length: 12}, (v, k) => k);
	return (
		<div className='calendarHeader__element calendarHeader__element--weekProgressBar'>
			<h3>YOUR 12 WEEK PROGRESS</h3>
			<div className='bar'>
				<div className={
					`
						${value.currentWeek === 0 ? 'bar bar--week1' : ''}
						${value.currentWeek === 1 ? 'bar bar--week2' : ''}
						${value.currentWeek === 2 ? 'bar bar--week3' : ''}
						${value.currentWeek === 3 ? 'bar bar--week4' : ''}
						${value.currentWeek === 4 ? 'bar bar--week5' : ''}
						${value.currentWeek === 5 ? 'bar bar--week6' : ''}
						${value.currentWeek === 6 ? 'bar bar--week7' : ''}
						${value.currentWeek === 7 ? 'bar bar--week8' : ''}
						${value.currentWeek === 8 ? 'bar bar--week9' : ''}
						${value.currentWeek === 9 ? 'bar bar--week10' : ''}
						${value.currentWeek === 10 ? 'bar bar--week11' : ''}
						${value.currentWeek === 11 ? 'bar bar--week12' : ''}
					`
				}>
				</div>
				{ 
					points.map( point => {
						return (
							<div onClick={()=> {value.weekChanger(point)}}
								className={
									`
										point 
										point__week${points[point] + 1}
										${value.currentWeek === points[point] ? 'point--current-week' : ''}
										${value.currentWeek > points[point] ? 'point--before-week' : ''}
										${value.currentWeek < points[point] ? 'point--after-week' : ''}

									`
								} 
								key={`point${points[point]}`}>
								<span className='point__number'>{ points[point] + 1 }</span>
							</div>
						)
					})
				}
			</div>
		</div>
	);
} 
export default WeekProgressBar;