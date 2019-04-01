import React, { useContext } from 'react';
import { AppContext } from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish, faCheese, faBacon, faEgg, faCarrot } from '@fortawesome/free-solid-svg-icons';
library.add(faFish, faCheese, faBacon, faEgg, faCarrot);

const ProteinSelector = () => {
	const value = useContext(AppContext);
	return (
		<div className='calendarHeader__element calendarHeader__element--proteinSelector'>	
			<h3>SELECT YOUR PROTEIN OPTIONS</h3>
			<div className='calendarHeader__proteinIcons'>
				<i 
					className={value.fishSelected ? 'calendarHeader__proteinIcons--isSelected' : ''} 
					onClick={value.isFishSelected}
				>
					<FontAwesomeIcon icon="fish" />
				</i>
				<i 
					className={value.cheeseSelected ? 'calendarHeader__proteinIcons--isSelected' : ''} 
					onClick={value.isCheeseSelected}
				>
					<FontAwesomeIcon icon="cheese" />
				</i>
				<i
					className={value.baconSelected ? 'calendarHeader__proteinIcons--isSelected' : ''} 
					onClick={value.isBaconSelected}
				>
					<FontAwesomeIcon icon="bacon" />
				</i>
				<i
					className={value.eggSelected ? 'calendarHeader__proteinIcons--isSelected' : ''} 
					onClick={value.isEggSelected}
				>
					<FontAwesomeIcon icon="egg" />
				</i>
				<i
					className={value.carrotSelected ? 'calendarHeader__proteinIcons--isSelected' : ''} 
					onClick={value.isCarrotSelected}
				>
					<FontAwesomeIcon icon="carrot" />
				</i>

				
			</div>
		</div>
	);
} 
export default ProteinSelector;