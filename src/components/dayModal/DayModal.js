import './dayModal.css'
/*
-Wrap each one in a button that can be clicked. 
  --on click each button opens a modal for that specfic day. 
*/
export default function CalendarDay({ day }) {

  return (

    <div >
    

{/*
  -add a button tag around each
  --modal should be inside each button
  -- ONCLICK: The date of the specific day clicked should show
  Modal
  -populate each plant 
    -- CONDITIONS:
      -Current Date - Last Watering Date % WateringFrequency = 0 
      -if (Fertilize = true) => Current Date - Last Fertilize Date % FertilizingFrequency = 0  
    --<button>
      --<div> with dots indicating if need water or fertiziler. </div>
        --dots with be determined by the same conditions as the plant. 
      --<div> with plant icon  
*/}

    </div>
  )
}

/*
  STYLING
    -add another div around the calendar day data so that we can add a border around the number 
*/