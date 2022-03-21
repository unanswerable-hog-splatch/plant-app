import './dayModal.css'
import  { Modal } from 'antd'
import { useState } from "react";
import useHook from '../../hooks/useHook'
import DayModalInfo from '../dayModalInfo/DayModalInfo'
// let setCalendarDayVisible;
/*
-Wrap each one in a button that can be clicked. 
  --on click each button opens a modal for that specfic day. 
*/
export default function DayModal({ plantList, day,setCalendarDayVisible, calendarDayVisible }) {
  // [ calendarDayVisible, setCalendarDayVisible] = useState(false);
  // [calendarDayVisible,setCalendarDayVisible]=useState();
  console.log(calendarDayVisible)
  const { selectIcon } = useHook()
  // console.log('plantlist:',plantList)
  return (
<>
    <Modal 
      title={day}
      centered
      visible={calendarDayVisible}
      okButtonProps={{ disabled: true }}
      onCancel={() => setCalendarDayVisible(false)}
      width={800}>
      <DayModalInfo />
    </Modal>
    
</>

/*{/*
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
*/

  )
}

/*
  STYLING
    -add another div around the calendar day data so that we can add a border around the number 
*/