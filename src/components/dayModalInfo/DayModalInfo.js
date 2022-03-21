import './dayModalInfo.css'
import useHook from '../../hooks/useHook'
import { useState } from "react";
import { Button } from "antd";
import ViewPlantBtn from '../viewPlant/ViewPlantBtn'
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
export default function DayModalInfo ({ dailyPlantList }) {
  const { data } = useQuery(QUERY_ME);
  const { selectIcon } = useHook()
  console.log('day modal info:',dailyPlantList)
  const gardenerData = data?.me || [];
  const [ greenCardVisible, setGreenCardVisible] = useState(false);
  return(
    <>
      <div className='entire-cubby'>
          {dailyPlantList.map(plant => {
            return (
              <div className='indivdual-plant'>
                <div className='task-indicators'>
                  
                </div>
                <Button className='individual-plant-btn' onClick={() => { setGreenCardVisible(true) }}>
                  <img className='individual-plant-img' alt={plant[0].plantIcon} src={selectIcon(plant[0].plantIcon)}/>
                </Button>
                <ViewPlantBtn plant={plant[0].plantIcon} gardenerName={gardenerData.name} greenCardVisible={greenCardVisible} setGreenCardVisible={setGreenCardVisible}/>
              
              </div>
            
            )})}
      </div>
    </>
  )
}