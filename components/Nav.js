import Link from 'next/link';
const Nav = () => (
  <div>
    <Link href="/newCalEvent">
      <a>New Calendar Event</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);

export default Nav;