import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import Calendar from '../components/calendar/Calendar';

import { Modal, Button } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import AddPlantForm from '../components/addPlant/AddPlantForm';
import SignupForm from '../components/nav/SignupForm'
import LoginForm from '../components/nav/LoginForm'
import LoginFormButton from './LoginFormButton'
import './home.css'
import SignupFormButton from './SignupFormButton';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';


export default function Home() {
  const [addPlantVisible, setAddPlantVisible] = useState(false);
  const { loading, data } = useQuery(QUERY_ME);
  const gardenerData = data?.me || [];
  console.log(gardenerData)
  // const [visible, setVisible] = useState(false);


  return (

    <div className="landing-screen">
      {/* <Calendar /> */}
      {/* If user is logged in, the calendar is displayed. If not, Login and Sign Up buttons are displayed */}
      {Auth.isLoggedIn() ?
        <>
          <Calendar />
          <Button type="primary" onClick={() => setAddPlantVisible(true)}>
            Add Plant Child
          </Button>
          <Modal
            title={`United Shelves of ${gardenerData.name}`}
            centered
            visible={addPlantVisible}
            footer={null}
            onCancel={() => setAddPlantVisible(false)}
            maskClosable={true}
            closable={true}
            width={1000}
            destroyOnClose={true}
            >
            <AddPlantForm 
            setAddPlantVisible={setAddPlantVisible} 
            addPlantVisible={addPlantVisible}/>
          </Modal>

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