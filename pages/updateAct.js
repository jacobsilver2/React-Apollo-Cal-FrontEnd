import UpdateActComponent from '../components/UpdateAct';

const UpdateAct = (props) => (
  <div>
    <UpdateActComponent id={props.query.id}/>
  </div>
);

export default UpdateAct;