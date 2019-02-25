import CreateEvent from '../components/CreateEvent/CreateEvent.js';
import PleaseSignIn from '../components/PleaseSignIn';

const NewCalEvent = () => (
  <div>
    <PleaseSignIn>
      <CreateEvent />
    </PleaseSignIn>
  </div>
);

export default NewCalEvent;