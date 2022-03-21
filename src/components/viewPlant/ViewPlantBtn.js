import ViewPlant from "./ViewPlant";
import { Modal } from 'antd';
import { useState } from "react";
import useHook from "../../hooks/useHook";



export default function ViewPlantBtn({ plant, gardenerName , greenCardVisible, setGreenCardVisible }) {
  // const [greenCardVisible, setGreenCardVisible] = useState(false);
  const { selectIcon } = useHook();

  // Sets modal to be visible
  // const onClick = (event) => {
  //   event.preventDefault();
  //   setGreenCardVisible(true)
  // }
  console.log('ViewPlantBtn', plant)

  return (
    //Image you need to click for ViewPlant modal to pop up
    <>
      {/* <img
        onClick={onClick}
        alt={plant.plantIcon}
        src={selectIcon(plant.plantIcon)}
        width={'20%'} 
        /> */}
      <Modal
        title={`United Shelves of ${gardenerName}`}
        centered
        visible={greenCardVisible}
        maskClosable={true}
        closable={true}
        onCancel={() => setGreenCardVisible(false)}
        width={'80%'}
        // footer={
        //   <Button key='back' onClick={onClick}>
        //     Return to shelf
        //   </Button> }
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