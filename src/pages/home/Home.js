import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import Calendar from '../../components/calendar/Calendar';

import { Modal, Button } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import AddPlantForm from '../../components/addPlant/AddPlantForm';

import LoginFormButton from './LoginFormButton'
import './home.css'
import SignupFormButton from './SignupFormButton';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

export default function Home() {
  const [addPlantVisible, setAddPlantVisible] = useState(false);
  const { loading, data } = useQuery(QUERY_ME);
  const gardenerData = data?.me || [];


  return (

    <div className="landing-screen">
      {/* <Calendar /> */}
      {/* If user is logged in, the calendar is displayed. If not, Login and Sign Up buttons are displayed */}
      {Auth.isLoggedIn() ?
        <>
          <div className="home-screen">
            <Calendar />
            <Button className="adopt-btn" type="primary" onClick={() => setAddPlantVisible(true)}>
              Add Plant Child
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
              // Unmounts PlantForm from the DOM
              destroyOnClose={true}
            >
              <AddPlantForm
                setAddPlantVisible={setAddPlantVisible}
                addPlantVisible={addPlantVisible}
              />
            </Modal>
          </div>
        </>
        : (
          <>
            <div className="landing-title">
              <h1 className="app-title">SHELF CARE</h1>
              <div className="landing-buttons">
                < LoginFormButton />

                < SignupFormButton />

              </div>
            </div>
          </>
        )
      }
    </div>
  );
}