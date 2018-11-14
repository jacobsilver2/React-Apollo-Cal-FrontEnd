import Link from 'next/link';
import NavStyles from '../components/styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/newCalEvent">
      <a>New Event</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </NavStyles>
);

export default Nav;