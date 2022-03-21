
import Auth from '../../utils/auth';

import Calendar from '../../components/calendar/Calendar';
import cactus from '../../img/cactus-1.png'
import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';

import LoginFormButton from './LoginFormButton'
import './home.css'
import SignupFormButton from './SignupFormButton';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

export default function Home() {
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || [];

  const [gardenerData, setGardenerData] = useState({});

  useEffect(() => {
  setGardenerData(userData);

  }, [])
  return (

    <div className="landing-screen">
      {/* If user is logged in, the calendar is displayed. If not, Login and Sign Up buttons are displayed */}
      {Auth.isLoggedIn() ?
        <>
          <div className="home-screen">
            <Calendar setGardenerData={setGardenerData} gardenerData={gardenerData} loading={loading} />
           
          </div>
        </>
        : (
          <>
    
              <div className="landing-title">              
                <h1 >Shelf</h1>
                <img alt='A watered cactus' src={cactus}/>
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