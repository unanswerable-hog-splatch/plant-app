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
export default function DayModal({ dailyPlantList, day,setCalendarDayVisible, calendarDayVisible, gardenerData }) {
  const { selectIcon } = useHook()

  const today = new Date()
  const currentMonth = new Date(today).getMonth();
  const currentYear = new Date(today).getFullYear();
  const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  const suffixesList = ['st','nd', 'rd', 'th']
  let suffix;
  const selectSuffix = (day) => {
    switch(day) {
      case (1 || 21 || 31) : suffix = suffixesList[0];
        break;
      case (2 || 22) : suffix = suffixesList[1];
        break;
      case (3 || 33) : suffix = suffixesList[2];
        break;
      default: suffix = suffixesList[3];
    }
    return suffix
  }
  const dateTitle = `${monthList[currentMonth]} ${day}${selectSuffix(day)}, ${currentYear}`

  return (
<>
    <Modal 
      title={dateTitle}
      centered
      visible={calendarDayVisible}
      okButtonProps={{ disabled: true }}
      onCancel={() => setCalendarDayVisible(false)}
      width={1500}>
      <DayModalInfo dailyPlantList={dailyPlantList} gardenerData={gardenerData} />
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