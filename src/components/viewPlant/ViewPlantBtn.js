import ViewPlant from "./ViewPlant";
import { Modal } from 'antd';
import { useState } from "react";
import useHook from "../../hooks/useHook";



export default function ViewPlantBtn({ plant, gardenerName }) {
  const [greenCardVisible, setGreenCardVisible] = useState(false);

  const { selectIcon } = useHook();

  const onClick = (event) => {
    event.preventDefault();
    setGreenCardVisible(true)
  }


  return (
    <div>
      <img
        onClick={onClick}
        alt={plant.plantIcon}
        src={selectIcon(plant.plantIcon)}
        width={'20%'} 
        />
      <Modal
        title={`United Shelves of ${gardenerName}`}
        centered
        visible={greenCardVisible}
        maskClosable={true}
        closable={true}
        onCancel={() => setGreenCardVisible(false)}
        width={'75%'}
      >
        <ViewPlant plant={plant} />
      </Modal>
      {/* </Avatar> */}
    </div>
  )
}