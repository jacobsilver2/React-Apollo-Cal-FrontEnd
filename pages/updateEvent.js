import UpdateEvent from '../components/UpdateEvent';
import PleaseSignIn from '../components/PleaseSignIn';

const UpdateCalEvent = (props) => (
  <div>
    <PleaseSignIn>
      <UpdateEvent id={props.query.id}/>
    </PleaseSignIn>
  </div>
);

export default UpdateCalEvent;