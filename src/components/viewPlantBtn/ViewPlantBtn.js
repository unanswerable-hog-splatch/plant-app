import './viewPlantBtn.css'
import ViewPlant from '../viewPlant/ViewPlant.js'
import { useState } from "react";
import { Modal, Button } from 'antd';
import useHook from "../../hooks/useHook";



export default function ViewPlantBtn({ plantArr, gardenerName, isModalVisible, setIsModalVisible }) {
  const [greenCardVisible, setGreenCardVisible] = useState(false);
  const { selectIcon } = useHook()

  const plant = plantArr[0];

const setFalse = () => {
  setGreenCardVisible(false);
  setIsModalVisible(false)
}


  return (
    //Image you need to click for ViewPlant modal to pop up
    <>
        <img className='individual-plant-img' onClick={() => { setGreenCardVisible(true) }} alt={plant.plantIcon} src={selectIcon(plant.plantIcon)} />

      <Modal
        title={`United Shelves of ${gardenerName}`}
        centered
        visible={greenCardVisible}
        maskClosable={true}
        closable={true}
        onCancel={() => setGreenCardVisible(false)}
        onOk={() => setGreenCardVisible(false)}
        footer={[
          <Button key="back" onClick={() => setFalse()}>
            Return to Calendar
          </Button>,
          <Button key="submit" onClick={() => setGreenCardVisible(false)}>
            OK
          </Button>]}
        width={'80%'}
      >
        <ViewPlant plant={plant} />
      </Modal>
    </>
  )
}
