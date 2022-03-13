import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import Calendar from '../components/Calendar';

export default function Home() {
  return (
    <>
      {/* If user is logged in, the calendar is displayed. If not, Login and Sign Up buttons are displayed */}
      {Auth.isLoggedIn() ? <Calendar />
        : (
          <>
            <Link to='/login'>
              <button className='btn btn-lg btn-primary'>
                Login
              </button>
            </Link>
            <Link to='/signup'>
              <button className='btn btn-lg btn-primary'>
                Signup
              </button>
            </Link>
          </>)}
    </>
  );
}