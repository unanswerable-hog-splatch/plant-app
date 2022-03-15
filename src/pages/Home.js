import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import Calendar from '../components/calendar/Calendar';

export default function Home() {
  return (
    <>
    <Calendar />
      {/* If user is logged in, the calendar is displayed. If not, Login and Sign Up buttons are displayed */}
      {Auth.isLoggedIn() ? <Calendar />
        : (
          <>
            {/* <Link to='/login'>
              <button className=''>
                Login
              </button>
            </Link>
            <Link to='/signup'>
              <button className=''>
                Signup
              </button>
            </Link> */}
          </>)}
    </>
  );
}