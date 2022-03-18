import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import Calendar from '../components/calendar/Calendar';

import { Modal, Button } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import AddPlantForm from '../components/addPlant/AddPlantForm';
import SignupForm from '../components/nav/SignupForm'
import LoginForm from '../components/nav/LoginForm'
import './home.css'



export default function Home() {
  const [addPlantVisible, setAddPlantVisible] = useState(false);
  const [visible, setVisible] = useState(false);


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
            <div className="landing-title">
              <h1 className="app-title">SHELF CARE</h1>
              <div className="landing-buttons">
                  <Button className="login-btn" type="primary" onClick={() => setVisible(true)}>
                    Login
                  </Button>
                  <Modal
                    title="Get back to being shelfish!"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                  >
                    < LoginForm />
                  </Modal>

                  <Button className="sign-in-btn" type="primary" onClick={() => setVisible(true)}>
                    Get Gardening!
                  </Button>
                  <Modal
                    title="Sign up to start your shelf!"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                  >
                    < SignupForm />
                  </Modal>

                </div>
              </div>
          </>
            )
      }
          </div>
        );
}