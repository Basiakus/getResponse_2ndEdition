import React , { useState, createContext } from 'react';
import CalendarHeader from './CalendarHeader';
import MainCalendar from './MainCalendar';
import Footer from './Footer';
import menu from '../menu';
export let AppContext = createContext();

const App = () => {
	const [menuPlan, setMenuPlan] = useState(menu);
	const [currentWeek, setWeek] = useState(0);
	const [fishSelected, setFishSelected] = useState(false);
	const [cheeseSelected, setCheeseSelected] = useState(false);
	const [eggSelected, setEggSelected] = useState(false);
	const [carrotSelected, setCarrotSelected] = useState(false);
	const [baconSelected, setBaconSelected] = useState(false);

	const isFishSelected = () => {
		setFishSelected(!fishSelected);
	}
	const isCheeseSelected = () => {
		setCheeseSelected(!cheeseSelected);
	}
	const isEggSelected = () => {
		setEggSelected(!eggSelected);
	}
	const isCarrotSelected = () => {
		setCarrotSelected(!carrotSelected);
	}
	const isBaconSelected = () => {
		setBaconSelected(!baconSelected);
	}
	const weekChanger = (week) => {
		setWeek(week);
	}
	const mondaysDone = (week, time) => {

		if (time === 'am6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day1.am6done = !prevMenu[week].day1.am6done ]);
		} else if (time === 'am9done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day1.am9done = !prevMenu[week].day1.am9done ]);
		} else if (time === 'pm12done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day1.pm12done = !prevMenu[week].day1.pm12done ]);
		} else if (time === 'pm3done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day1.pm3done = !prevMenu[week].day1.pm3done ]);
		} else if (time === 'pm6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day1.pm6done = !prevMenu[week].day1.pm6done ]);
		}
	}
	const tuesdaysDone = (week, time) => {

		if (time === 'am6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day2.am6done = !prevMenu[week].day2.am6done ]);
		} else if (time === 'am9done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day2.am9done = !prevMenu[week].day2.am9done ]);
		} else if (time === 'pm12done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day2.pm12done = !prevMenu[week].day2.pm12done ]);
		} else if (time === 'pm3done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day2.pm3done = !prevMenu[week].day2.pm3done ]);
		} else if (time === 'pm6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day2.pm6done = !prevMenu[week].day2.pm6done ]);
		}
	}
	const wednesdaysDone = (week, time) => {

		if (time === 'am6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day3.am6done = !prevMenu[week].day3.am6done ]);
		} else if (time === 'am9done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day3.am9done = !prevMenu[week].day3.am9done ]);
		} else if (time === 'pm12done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day3.pm12done = !prevMenu[week].day3.pm12done ]);
		} else if (time === 'pm3done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day3.pm3done = !prevMenu[week].day3.pm3done ]);
		} else if (time === 'pm6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day3.pm6done = !prevMenu[week].day3.pm6done ]);
		}
	}
	const thursdaysDone = (week, time) => {

		if (time === 'am6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day4.am6done = !prevMenu[week].day4.am6done ]);
		} else if (time === 'am9done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day4.am9done = !prevMenu[week].day4.am9done ]);
		} else if (time === 'pm12done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day4.pm12done = !prevMenu[week].day4.pm12done ]);
		} else if (time === 'pm3done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day4.pm3done = !prevMenu[week].day4.pm3done ]);
		} else if (time === 'pm6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day4.pm6done = !prevMenu[week].day4.pm6done ]);
		}
	}
	const fridaysDone = (week, time) => {

		if (time === 'am6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day5.am6done = !prevMenu[week].day5.am6done ]);
		} else if (time === 'am9done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day5.am9done = !prevMenu[week].day5.am9done ]);
		} else if (time === 'pm12done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day5.pm12done = !prevMenu[week].day5.pm12done ]);
		} else if (time === 'pm3done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day5.pm3done = !prevMenu[week].day5.pm3done ]);
		} else if (time === 'pm6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day5.pm6done = !prevMenu[week].day5.pm6done ]);
		}
	}
	const saturdaysDone = (week, time) => {

		if (time === 'am6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day6.am6done = !prevMenu[week].day6.am6done ]);
		} else if (time === 'am9done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day6.am9done = !prevMenu[week].day6.am9done ]);
		} else if (time === 'pm12done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day6.pm12done = !prevMenu[week].day6.pm12done ]);
		} else if (time === 'pm3done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day6.pm3done = !prevMenu[week].day6.pm3done ]);
		} else if (time === 'pm6done') {
			return setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day6.pm6done = !prevMenu[week].day6.pm6done ]);
		}
	}
	const mondaysCarbDone = (week) => {
		setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day1.carbDone = !prevMenu[week].day1.carbDone]);
	}
	const tuesdaysCarbDone = (week) => {
		setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day2.carbDone = !prevMenu[week].day2.carbDone]);
	}
	const wednesdaysCarbDone = (week) => {
		setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day3.carbDone = !prevMenu[week].day3.carbDone]);
	}
	const thursdaysCarbDone = (week) => {
		setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day4.carbDone = !prevMenu[week].day4.carbDone]);
	}
	const fridaysCarbDone = (week) => {
		setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day5.carbDone = !prevMenu[week].day5.carbDone]);
	}
	const saturdaysCarbDone = (week) => {
		setMenuPlan(prevMenu => [...prevMenu, prevMenu[week].day6.carbDone = !prevMenu[week].day6.carbDone]);
	}
	const increase = () => {
		currentWeek >= 11 ? setWeek(11) : setWeek(currentWeek + 1);
	};

	const decrease = () => {
		currentWeek <= 0 ? setWeek(0) : setWeek(currentWeek - 1);
	};

	return (
		<div className='app'>
			<AppContext.Provider 
				value={{ 
					fishSelected, 
					cheeseSelected,
					eggSelected, 
					carrotSelected, 
					baconSelected,
					menuPlan,
					currentWeek, 
					increase, 
					decrease,
					isFishSelected,
					isCheeseSelected,
					isEggSelected,
					isCarrotSelected,
					isBaconSelected, 
					mondaysDone,
					tuesdaysDone,
					wednesdaysDone,
					thursdaysDone,
					fridaysDone,
					saturdaysDone,
					mondaysCarbDone,
					tuesdaysCarbDone,
					wednesdaysCarbDone,																										
					thursdaysCarbDone,																										
					fridaysCarbDone,																										
					saturdaysCarbDone,
					weekChanger
				}}
			>
				<CalendarHeader />
				<MainCalendar />
				<Footer />
				
			</AppContext.Provider>
		</div>
	);

}

export default App;