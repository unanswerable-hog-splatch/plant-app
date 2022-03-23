import './dayModalInfo.css'
import ViewPlantBtn from '../viewPlant/ViewPlantBtn'
export default function DayModalInfo({ dailyPlantList, gardenerData }) {



  const plantList = dailyPlantList.map((plantArr, i) => {
    return (
      <div key={i} className='indivdual-plant'>
        <div className='task-indicators'>

        </div>
        <ViewPlantBtn plantArr={plantArr} gardenerName={gardenerData.name} />
      </div>
    )
  })

  return (

    <div className='entire-cubby'>
      {plantList}
    </div>

  )
}