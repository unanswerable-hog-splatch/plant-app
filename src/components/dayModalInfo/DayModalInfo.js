import './dayModalInfo.css'
import ViewPlantBtn from '../viewPlantBtn/ViewPlantBtn'
export default function DayModalInfo({ dailyPlantList, gardenerData, isModalVisible, setIsModalVisible }) {



  const plantList = dailyPlantList.map((plantArr, i) => {
    return (
      <div key={i} className='indivdual-plant'>
        <div className='task-indicators'>

        </div>
        <ViewPlantBtn
        plantArr={plantArr}
        gardenerName={gardenerData.name}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        />
      </div>
    )
  })

  return (

    <div className='entire-cubby'>
      {plantList}
    </div>

  )
}