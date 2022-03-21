import './dayModalInfo.css'
import useHook from '../../hooks/useHook'
export default function DayModalInfo ({ dailyPlantList, day }) {
  const { selectIcon } = useHook()
  console.log('day modal info:',dailyPlantList)
  return(
    <>
      <h1>Let's GOOOOOOOO</h1>
      <div>
        {dailyPlantList.map(plant => {return (<img alt={plant[0].plantIcon} src={selectIcon(plant[0].plantIcon)}/>)})}
      </div>


    </>
  )
}