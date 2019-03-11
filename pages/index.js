import Link from 'next/link';
import Calendar from '../components/BigCalendar';
import PleaseSignIn from '../components/PleaseSignIn';
import Center from '../components/styles/Center';

const Home = () => (
  <Center>
    <PleaseSignIn>
      <Calendar />
    </PleaseSignIn>
  </Center>
);

export default Home;