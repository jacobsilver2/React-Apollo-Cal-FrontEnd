import CreateEvent from '../components/CreateEvent';
import PleaseSignIn from '../components/PleaseSignIn';

const NewCalEvent = () => (
  <div>
    <PleaseSignIn>
      <CreateEvent />
    </PleaseSignIn>
  </div>
);

export default NewCalEvent;