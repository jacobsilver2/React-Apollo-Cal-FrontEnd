import Link from 'next/link';
import { Mutation } from 'react-apollo';
// import { TOGGLE_SIDEBAR_MUTATION } from './Sidebar';
import NavStyles from '../components/styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => (
  <User>
    { ({data: { me } }) => (
      <NavStyles>
        {me && (
          <>
            <Link href="/">
              <a>Calendar</a>
            </Link>
            <Link href="/newCalEvent">
              <a>New Event</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyles>
    )}  
  </User>
);

export default Nav;