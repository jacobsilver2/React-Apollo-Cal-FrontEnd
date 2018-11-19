import UpdateEvent from '../components/UpdateEvent';

const UpdateCalEvent = (props) => (
  <div>
    <UpdateEvent id={props.query.id}/>
  </div>
);

export default UpdateCalEvent;