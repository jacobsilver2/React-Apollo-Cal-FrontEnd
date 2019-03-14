import UpdateActComponent from '../components/UpdateAct';
import PleaseSignIn from '../components/PleaseSignIn';

const UpdateAct = (props) => (
  <div>
    <PleaseSignIn>
      <UpdateActComponent id={props.query.id}/>
    </PleaseSignIn>
  </div>
);

export default UpdateAct;