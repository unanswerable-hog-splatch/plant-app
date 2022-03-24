import './viewPlantBtn.css'
import ViewPlant from '../viewPlant/ViewPlant.js'
import { useState } from "react";
import { Modal, Button } from 'antd';
import useHook from "../../hooks/useHook";



export default function ViewPlantBtn({ plantArr, gardenerName }) {
  const [greenCardVisible, setGreenCardVisible] = useState(false);
  const { selectIcon } = useHook()

  const plant = plantArr[0];

  const handleOk = (e) => {
    e.preventDefault();
    setGreenCardVisible(false);
  }

  const destroyAll = () => {
    Modal.destroyAll();
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
        onCancel={handleOk}
        onOk={handleOk}
        footer={[
          <Button key="back" onClick={destroyAll()}>
            Return to Calendar
          </Button>,
          <Button key="submit" onClick={handleOk}>
            OK
          </Button>]}
        width={'80%'}
      >
        <ViewPlant plant={plant} />
      </Modal>
    </>
  )
}



// ***************** YOU NEED THIS STUFF TO MAKE BUTTONS AND MODALS APPEAR

// import ViewPlantBtn from "../viewPlant/ViewPlantBtn";

// {loading ? 'Something wonderful is happening' :
//   gardenerData.plants.map(plant=> <ViewPlantBtn 
//   key={plant._id} 
//   plant={plant}
//   gardenerName={gardenerData.name} />)}