import './dayModalInfo.css'
import useHook from '../../hooks/useHook'
import { useState } from "react";
import { Button } from "antd";
import ViewPlantBtn from '../viewPlant/ViewPlantBtn'
export default function DayModalInfo ({ dailyPlantList, gardenerData }) {

  const { selectIcon } = useHook()
  // console.log('day modal info:',dailyPlantList[0][0])
  
  const [ greenCardVisible, setGreenCardVisible] = useState(false);
  return(
    <>
      <div className='entire-cubby'>
          {dailyPlantList.map(plant => {
            return (
              <div className='indivdual-plant'>
                <div className='task-indicators'>
                  
                </div>
                  <img className='individual-plant-img' onClick={() => { setGreenCardVisible(true) }} alt={plant[0].plantIcon} src={selectIcon(plant[0].plantIcon)}/>
                <ViewPlantBtn plant={dailyPlantList[0][0]} gardenerName={gardenerData.name} greenCardVisible={greenCardVisible} setGreenCardVisible={setGreenCardVisible}/>
              
              </div>
            
            )})}
      </div>
    </>
  )
}