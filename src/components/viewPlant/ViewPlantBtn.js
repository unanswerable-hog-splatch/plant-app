import ViewPlant from "./ViewPlant";
import { Modal, Button } from 'antd';



export default function ViewPlantBtn({ plant, gardenerName, greenCardVisible, setGreenCardVisible }) {


  const handleOk = (e) => {
    e.preventDefault();
    setGreenCardVisible(false);
  }

  // const destroyAll = () => {
  //   Modal.destroyAll();
  // }

  return (
    //Image you need to click for ViewPlant modal to pop up
    <>
      <Modal
        title={`United Shelves of ${gardenerName}`}
        centered
        visible={greenCardVisible}
        maskClosable={true}
        closable={true}
        onOk={handleOk}
        footer={
          // <Button key="back" onClick={destroyAll()}>
          //   Return to Calendar
          // </Button>,
          <Button key="submit" onClick={handleOk}>
            Ok
          </Button>}
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