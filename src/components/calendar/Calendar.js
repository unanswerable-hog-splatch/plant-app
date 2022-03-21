import CalendarDay from "../calendarDay/CalendarDay"
import './calendar.css'
import { Modal, Button } from 'antd';
import AddPlantButton from "../addPlantButton/AddPlantButton";
export default function Calendar({ loading, gardenerData }) {

  // Info from current month
  const today = new Date().setHours(0, 0, 0, 0);
  const currentMonth = new Date(today).getMonth();
  const currentYear = new Date(today).getFullYear();
  const firstDay = new Date(today).setDate(1);
  // Figure out what day of the week the first one falls on
  const firstDayOfWeek = new Date(firstDay).getDay();
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // List of month names to populate in front of number
  const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const currentMonthName = monthList[currentMonth].toUpperCase()
  
  let currentWeek = 0;
  let currentDayOfWeek = firstDayOfWeek;

  // Empty array full of empty arrays for each week
  const monthArray = [new Array(7), new Array(7), new Array(7), new Array(7), new Array(7), new Array(7)];

/*-------------------------------- ADD NUMBERS TO EACH CALENDAR DAY -----------------------------------*/

  // Fill first week with 'filler' until it hits the actual first day of the month
  monthArray[0].fill(<CalendarDay week={currentWeek} day={'filler'} />, 0, firstDayOfWeek)

  // Loop until last day of month is hit
  for (let i = 0; i < lastDayOfMonth; i++) {
    // monthArray[currentWeek][currentDayOfWeek] = <CalendarDay week={currentWeek} day={`${monthList[currentMonth]} ${i + 1}`} />;
    monthArray[currentWeek][currentDayOfWeek] = <CalendarDay week={currentWeek} day={i + 1} />;

    // Tried doing this in a ternary, react didn't like it
    // (currentDayOfWeek >= 6) ? (saturdayCount++, currentDayOfWeek = 0) : currentDayOfWeek++;
    // If the current day of the week is Saturday (6), we move on to the next week and reset currentDayOfWeek
    if (currentDayOfWeek >= 6) {
      currentWeek++;
      currentDayOfWeek = 0;
    } else {
      currentDayOfWeek++;
    }
    // If we hit the end of the month, fill in the rest of the current week array
    if (i + 1 === lastDayOfMonth) {
      monthArray[currentWeek].fill(<CalendarDay week={currentWeek} day={'filler'} />, currentDayOfWeek);
    }

  }
  console.log(monthArray)
  if (currentWeek < 5) monthArray[5].fill(<CalendarDay week={currentWeek} day={'filler'} />)
  // currentWeek < 5 ? monthArray[5].fill('filler') : null


/*------------------------------- CALENDAR JSX -------------------------------*/
  return (
    // Calendar class is a flex column

    /* 
    -Create a div with the current month about the days of the week OR have each individual day have the calendar month before the number.
      --if do in the return, need to add <> </> around because it would not be a flex column 
    - Create the header with each individual week day name - should be inside the calendar div but no styling the same of the day
    
    */
    <>
      <div className="calendar-header">
        <div className="calendar-add"> 
       <AddPlantButton loading={loading} gardenerData={gardenerData} />
            </div>
        <h1 className="currentMonth">{currentMonthName}</h1>
      </div>
      
      <div className="calendar-day">
      {/* Add in the days of the week here in its own div so that the flex column align with the daily ones */}
        {monthArray.map(week => {
        // Week class is a flex row
        /* Would it make since to have the day be living ere and then within the created boxes have the plants and date stuff??? */ 
          return (<div className="week">
            {week}
          </div>
          )
        })}
      </div>
    </>
  )
}