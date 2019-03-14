import SingleEvent from '../components/SingleEvent';
import PleaseSignIn from '../components/PleaseSignIn';

const Event = (props) => (
  <div>
    <PleaseSignIn>
      <SingleEvent id={props.query.id}/>
    </PleaseSignIn>
  </div>
);

export default Event;