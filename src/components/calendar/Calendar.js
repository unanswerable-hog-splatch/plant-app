import CalendarDay from "../day/CalendarDay"
import './calendar.css'

export default function Calendar() {

  // Info from current month
  const today = new Date().setHours(0, 0, 0, 0);
  const currentMonth = new Date(today).getMonth();
  const currentYear = new Date(today).getFullYear();
  const firstDay = new Date(today).setDate(1);
  // Figure out what day of the week the first one falls on
  const firstDayOfWeek = new Date(firstDay).getDay();
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  let currentWeek = 0;
  let currentDayOfWeek = firstDayOfWeek;

  // Empty array full of empty arrays for each week
  const monthArray = [new Array(7), new Array(7), new Array(7), new Array(7), new Array(7), new Array(7)];

  // Fill first week with 'filler' until it hits the actual first day of the month
  monthArray[0].fill(<CalendarDay week={currentWeek} day={'filler'}/>, 0, firstDayOfWeek)

  // Loop until last day of month is hit
  for (let i = 0; i < lastDayOfMonth; i++) {
    monthArray[currentWeek][currentDayOfWeek] = <CalendarDay week={currentWeek} day={i+1}/>;

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
      monthArray[currentWeek].fill(<CalendarDay week={currentWeek} day={'filler'}/>, currentDayOfWeek);
    }

  }
  console.log(monthArray)
  if(currentWeek < 5) monthArray[5].fill(<CalendarDay week={currentWeek} day={'filler'}/>)
  // currentWeek < 5 ? monthArray[5].fill('filler') : null

  return (
    // Calendar class is a flex column
    <div className="calendar">
      {monthArray.map(week => {
        // Week class is a flex row
        return (<div className="week">
          {week}
          </div>
          )
      })}
    </div>
  )
}