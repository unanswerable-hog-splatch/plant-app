import 'antd/dist/antd.css';
import './home.css'
import './form.css'
import Auth from '../../utils/auth';

import Calendar from '../../components/calendar/Calendar';
import useHook from '../../hooks/useHook'
import { useState, useEffect } from 'react';

import LoginFormButton from '../../components/login/LoginFormButton'
import SignupFormButton from '../../components/signup/SignupFormButton';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

export default function Home() {
  const { selectIcon } = useHook();

  const { loading, data } = useQuery(QUERY_ME);

  const [gardenerData, setGardenerData] = useState({});

  useEffect(() => {
    const userData = data?.me || [];
    setGardenerData(userData);

  }, [])
  return (

    <div>
      {/* If user is logged in, the calendar is displayed. If not, Login and Sign Up buttons are displayed */}
      {Auth.isLoggedIn() ?
        <>

          <div className="home-screen">

            <Calendar setGardenerData={setGardenerData} gardenerData={gardenerData} loading={loading} />

          </div>

        </>
        : (
          <>
            <div className="landing-screen">

              <div className="landing-title">
                <h1 >Shelf</h1>
                <img alt='A watered cactus' src={selectIcon('cactus')} />
                <h1>Care</h1>

              </div>

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