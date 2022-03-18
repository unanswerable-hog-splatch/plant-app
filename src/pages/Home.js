import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import Calendar from '../components/calendar/Calendar';

import { Modal, Button } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import AddPlantForm from '../components/addPlant/AddPlantForm';


export default function Home() {
  const [addPlantVisible, setAddPlantVisible] = useState(false);

  return (

    <>
      {/* <Calendar /> */}
      {/* If user is logged in, the calendar is displayed. If not, Login and Sign Up buttons are displayed */}
      {Auth.isLoggedIn() ? 
      <>
      <Calendar />
                  <Button type="primary" onClick={() => setAddPlantVisible(true)}>
                  Add Plant Child
                </Button>
                <Modal
                  title='United Shelf of (name)'
                  centered
                  visible={addPlantVisible}
                  okButtonProps={{ disabled: true }}
                  onCancel={() => setAddPlantVisible(false)}
                  width={1000}>
                  <AddPlantForm />
                </Modal>
                </>
        : (
          <>
            HELLOOOOOOO
          </>
        )
      }
    </>
  );
}