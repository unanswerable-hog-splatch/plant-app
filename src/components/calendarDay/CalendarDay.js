import './calendarDay.css'
import useHook from '../../hooks/useHook'
/*
-Wrap each one in a button that can be clicked. 
  --on click each button opens a modal for that specfic day. 
*/
export default function CalendarDay({ day, plantList }) {
  const { selectIcon } = useHook()
  const plantIconList = []
  
  // for (let i =0 ; i< plantList.length; i++) {
  console.log(plantList[0])
  return (
    <>
      <div className='calendar-day'>
        {  
          (typeof(plantList) !== 'number' ) ? 
           plantList.map(plant => {return (<div> <img alt={plant[0].plantIcon} src={selectIcon(plant[0].plantIcon)}/></div>)}): null
        }
          
        

        <div className='plaque'>
          <p>{day}</p> 
        </div>{/*day should be on the bottom of the flex box so that the plants are sitting on top of each number/filler like a shelf so all other code goes above*/}
      </div>
    </>

  )
}
{/*

  -add a button tag around each
    -- CONDITIONS:
      -Current Date - Last Watering Date % WateringFrequency = 0 
      -if (Fertilize = true) => Current Date - Last Fertilize Date % FertilizingFrequency = 0  
    --<button>
      --<div> with dots indicating if need water or fertiziler. </div>
        --dots with be determined by the same conditions as the plant. 
      --<div> with plant icon  
*/}


{/* Add div tag around date */}
/*
  STYLING
    -add another div around the calendar day data so that we can add a border around the number 
*/