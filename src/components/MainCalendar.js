import React, { useContext } from 'react';
import { AppContext } from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDumbbell, faCheck, faGrin, faPrint } from '@fortawesome/free-solid-svg-icons';
library.add(faDumbbell, faCheck, faGrin, faPrint);

import done from '../../public/images/done.png'; 
import cup from '../../public/images/cup.png';//
// use image <img src='./public/images/done.png' />

const MainCalendar = () => {
	const value = useContext(AppContext);
	const currentWeek = value.currentWeek + 1;
	return (
		<div className='mainCalendar'>
			<div className='mainCalendar__column mainCalendar__column--hours'>
				<div className='mainCalendar__row mainCalendar__row--first'></div>
				<div className='mainCalendar__row'><p>6:00</p><span>AM</span></div>
				<div className='mainCalendar__row'><p>9:00</p><span>AM</span></div>
				<div className='mainCalendar__row'><p>12:00</p><span>PM</span></div>
				<div className='mainCalendar__row'><p>3:00</p><span>PM</span></div>
				<div className='mainCalendar__row'><p>6:00</p><span>PM</span></div>
				<div className='mainCalendar__row mainCalendar__row--last'>
					<div className='mainCalendar__subRow'></div>
					<div className='mainCalendar__subRow'> Workout</div>
				</div>
			</div>

			<div className='mainCalendar__column'>
				<div className='mainCalendar__row mainCalendar__row--first'>
					<h3>DAY {currentWeek === 1 ? currentWeek : currentWeek * 7} </h3>
				</div>
				<div onClick={()=> {value.mondaysDone(value.currentWeek, 'am6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day1.am6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day1.am6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
						{/*<img src='./public/images/cup.png' />*/}
				</div>
				<div onClick={()=> {value.mondaysDone(value.currentWeek, 'am9done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day1.am9}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day1.am9done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.mondaysDone(value.currentWeek, 'pm12done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day1.pm12}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day1.pm12done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.mondaysDone(value.currentWeek, 'pm3done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day1.pm3}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day1.pm3done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.mondaysDone(value.currentWeek, 'pm6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day1.pm6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day1.pm6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div className='mainCalendar__row mainCalendar__row--last'>
					<div className='mainCalendar__subRow'>{value.menuPlan[value.currentWeek].day1.carb}</div>
					<div className='mainCalendar__subRow'>
						<span className='carbIcons'>
							<i onClick={()=>{ value.mondaysCarbDone(value.currentWeek) }} className='dumbbell'>
								<FontAwesomeIcon  icon="dumbbell" />
							</i>

							<i 
								className={
									`
										check
										${value.menuPlan[value.currentWeek].day1.carbDone ? 'checkActive' : 'checkDeactive' }

									`
								}
							>
								<FontAwesomeIcon icon="check" />
							</i>
						</span>
					</div>
				</div>
			</div>

			<div className='mainCalendar__column'>
				<div className='mainCalendar__row mainCalendar__row--first'>
					<h3>DAY {currentWeek === 1 ? currentWeek + 1 : currentWeek * 7 + 1} </h3>
				</div>
				<div onClick={()=> {value.tuesdaysDone(value.currentWeek, 'am6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day2.am6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day2.am6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.tuesdaysDone(value.currentWeek, 'am9done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day2.am9}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day2.am9done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.tuesdaysDone(value.currentWeek, 'pm12done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day2.pm12}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day2.pm12done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.tuesdaysDone(value.currentWeek, 'pm3done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day2.pm3}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day2.pm3done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.tuesdaysDone(value.currentWeek, 'pm6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day2.pm6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day2.pm6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div className='mainCalendar__row mainCalendar__row--last'>
					<div className='mainCalendar__subRow'>{value.menuPlan[value.currentWeek].day2.carb}</div>
					<div className='mainCalendar__subRow'>
						<span className='carbIcons'>
							<i onClick={()=>{ value.tuesdaysCarbDone(value.currentWeek) }} className='dumbbell'>
								<FontAwesomeIcon  icon="dumbbell" />
							</i>

							<i 
								className={
									`
										check
										${value.menuPlan[value.currentWeek].day2.carbDone ? 'checkActive' : 'checkDeactive' }

									`
								}
							>
								<FontAwesomeIcon icon="check" />
							</i>
						</span>
					</div>
				</div>
			</div>

			<div className='mainCalendar__column'>
				<div className='mainCalendar__row mainCalendar__row--first'>
					<h3>DAY {currentWeek === 1 ? currentWeek + 2 : currentWeek * 7 + 2} </h3>
				</div>
				<div onClick={()=> {value.wednesdaysDone(value.currentWeek, 'am6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day3.am6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day3.am6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.wednesdaysDone(value.currentWeek, 'am9done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day3.am9}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day3.am9done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.wednesdaysDone(value.currentWeek, 'pm12done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day3.pm12}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day3.pm12done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.wednesdaysDone(value.currentWeek, 'pm3done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day3.pm3}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day3.pm3done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.wednesdaysDone(value.currentWeek, 'pm6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day3.pm6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day3.pm6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>


				</div>
				<div className='mainCalendar__row mainCalendar__row--last'>
					<div className='mainCalendar__subRow'>{value.menuPlan[value.currentWeek].day3.carb}</div>
					<div className='mainCalendar__subRow'>
						<span className='carbIcons'>
							<i onClick={()=>{ value.wednesdaysCarbDone(value.currentWeek) }} className='dumbbell'>
								<FontAwesomeIcon  icon="dumbbell" />
							</i>

							<i 
								className={
									`
										check
										${value.menuPlan[value.currentWeek].day3.carbDone ? 'checkActive' : 'checkDeactive' }

									`
								}
							>
								<FontAwesomeIcon icon="check" />
							</i>
						</span>
					</div>
				</div>
			</div>

			<div className='mainCalendar__column'>
				<div className='mainCalendar__row mainCalendar__row--first'>
					<h3>DAY {currentWeek === 1 ? currentWeek + 3 : currentWeek * 7 + 3} </h3>
				</div>
				<div onClick={()=> {value.thursdaysDone(value.currentWeek, 'am6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day4.am6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day4.am6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.thursdaysDone(value.currentWeek, 'am9done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day4.am9}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day4.am9done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.thursdaysDone(value.currentWeek, 'pm12done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day4.pm12}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day4.pm12done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.thursdaysDone(value.currentWeek, 'pm3done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day4.pm3}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day4.pm3done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.thursdaysDone(value.currentWeek, 'pm6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day4.pm6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day4.pm6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div className='mainCalendar__row mainCalendar__row--last'>
					<div className='mainCalendar__subRow'>{value.menuPlan[value.currentWeek].day4.carb}</div>
					<div className='mainCalendar__subRow'>
						<span className='carbIcons'>
							<i onClick={()=>{ value.thursdaysCarbDone(value.currentWeek) }} className='dumbbell'>
								<FontAwesomeIcon  icon="dumbbell" />
							</i>

							<i 
								className={
									`
										check
										${value.menuPlan[value.currentWeek].day4.carbDone ? 'checkActive' : 'checkDeactive' }

									`
								}
							>
								<FontAwesomeIcon icon="check" />
							</i>
						</span>
					</div>
				</div>
			</div>

			<div className='mainCalendar__column'>
				<div className='mainCalendar__row mainCalendar__row--first'>
					<h3>DAY {currentWeek === 1 ? currentWeek + 4 : currentWeek * 7 + 4} </h3>
				</div>
				<div onClick={()=> {value.fridaysDone(value.currentWeek, 'am6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day5.am6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day5.am6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.fridaysDone(value.currentWeek, 'am9done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day5.am9}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day5.am9done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.fridaysDone(value.currentWeek, 'pm12done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day5.pm12}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day5.pm12done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.fridaysDone(value.currentWeek, 'pm3done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day5.pm3}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day5.pm3done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.fridaysDone(value.currentWeek, 'pm6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day5.pm6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day5.pm6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div className='mainCalendar__row mainCalendar__row--last'>
					<div className='mainCalendar__subRow'>{value.menuPlan[value.currentWeek].day5.carb}</div>
					<div className='mainCalendar__subRow'>
						<span className='carbIcons'>
							<i onClick={()=>{ value.fridaysCarbDone(value.currentWeek) }} className='dumbbell'>
								<FontAwesomeIcon  icon="dumbbell" />
							</i>

							<i 
								className={
									`
										check
										${value.menuPlan[value.currentWeek].day5.carbDone ? 'checkActive' : 'checkDeactive' }

									`
								}
							>
								<FontAwesomeIcon icon="check" />
							</i>
						</span>
					</div>
				</div>
			</div>

			<div className='mainCalendar__column'>
				<div className='mainCalendar__row mainCalendar__row--first'>
					<h3>DAY {currentWeek === 1 ? currentWeek + 5 : currentWeek * 7 + 5} </h3>
				</div>
				<div  onClick={()=> {value.saturdaysDone(value.currentWeek, 'am6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day6.am6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day6.am6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.saturdaysDone(value.currentWeek, 'am9done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day6.am9}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day6.am9done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.saturdaysDone(value.currentWeek, 'pm12done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day6.pm12}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day6.pm12done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.saturdaysDone(value.currentWeek, 'pm3done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day6.pm3}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day6.pm3done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div onClick={()=> {value.saturdaysDone(value.currentWeek, 'pm6done')}} className='mainCalendar__row mainCalendar__row--foodInfo '>
						<p>{value.menuPlan[value.currentWeek].day6.pm6}</p>
						<span
							className={
								`
									doneIcon
									${value.menuPlan[value.currentWeek].day6.pm6done ? 'doneIconActive': 'doneIconDeactive'}
								
								`
							}
						>
							<img src='./public/images/done.png' />
						</span>
				</div>
				<div className='mainCalendar__row mainCalendar__row--last'>
					<div className='mainCalendar__subRow'>{value.menuPlan[value.currentWeek].day6.carb}</div>
					<div className='mainCalendar__subRow'>
						<span className='carbIcons'>
							<i onClick={()=>{ value.saturdaysCarbDone(value.currentWeek) }} className='dumbbell'>
								<FontAwesomeIcon  icon="dumbbell" />
							</i>

							<i 
								className={
									`
										check
										${value.menuPlan[value.currentWeek].day6.carbDone ? 'checkActive' : 'checkDeactive' }

									`
								}
							>
								<FontAwesomeIcon icon="check" />
							</i>
						</span>
					</div>
				</div>
			</div>



			<div className='mainCalendar__column mainCalendar__column--last'>
				<div className='mainCalendar__row mainCalendar__row--first'>
					<h3>DAY {currentWeek === 1 ? currentWeek + 6 : (currentWeek * 7) + 6 } </h3>
				</div>
				<div className='mainCalendar__row mainCalendar__row--weekend'>
					<div className='content'>
						<i><FontAwesomeIcon  icon="grin" /></i>
						<h2>guilt-free day</h2>
					</div>
				</div>
				<div className='mainCalendar__row mainCalendar__row--last'>
					<i><FontAwesomeIcon  icon="print" /></i>
					<h2>Print</h2>
				</div>
			</div>

		</div>
	);
}

export default MainCalendar;