import { Modal, Button } from 'antd';
import { useState } from 'react';
import AddPlantForm from '../addPlant/AddPlantForm';
import '../addPlant/plantForm.css'


export default function AddPlantButton({ setGardenerData, loading, gardenerData }) {
  const [addPlantVisible, setAddPlantVisible] = useState(false);
  return (
    <>
      <Button className="add-plant-btn" type="primary" onClick={() => setAddPlantVisible(true)}>
        +
      </Button>
      <Modal
        title={`United Shelves of ${gardenerData.name}`}
        style={{ top: 20 }}
        visible={addPlantVisible}
        maskClosable={true}
        footer={null}
        closable={true}
        onCancel={() => setAddPlantVisible(false)}
        width={'80%'}
        // Unmounts PlantForm from the DOM on close
        destroyOnClose={true}
      >
        <AddPlantForm
          setGardenerData={setGardenerData}
          setAddPlantVisible={setAddPlantVisible}
          addPlantVisible={addPlantVisible}
        />
      </Modal>

    </>

  )
}