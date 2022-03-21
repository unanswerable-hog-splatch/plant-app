import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import Calendar from '../../components/calendar/Calendar';
import cactus from '../../img/cactus-1.png'
import { Modal, Button } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
// import AddPlantForm from '../../components/addPlant/AddPlantForm';

import LoginFormButton from './LoginFormButton'
import './home.css'
import SignupFormButton from './SignupFormButton';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

export default function Home() {

  const { loading, data } = useQuery(QUERY_ME);
  const gardenerData = data?.me || [];

  return (

    <div className="landing-screen">
      {/* If user is logged in, the calendar is displayed. If not, Login and Sign Up buttons are displayed */}
      {Auth.isLoggedIn() ?
        <>
          <div className="home-screen">
            <Calendar gardenerData={gardenerData} loading={loading} />
           
          </div>
        </>
        : (
          <>
    
              <div className="landing-title">              
                <h1 >Shelf</h1>
                <img src={cactus}/>
                <h1>Care</h1>

              </div>

              <div className="landing-buttons">
                < LoginFormButton />

                < SignupFormButton />

              </div>
          
          </>
        )
      }
    </div>
  );
}