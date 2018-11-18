import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>Calendar</a>
    </Link>
    <Link href="/newCalEvent">
      <a>New Event</a>
    </Link>
  </NavStyles>
);

export default Nav;