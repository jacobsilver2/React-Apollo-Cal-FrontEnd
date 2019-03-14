import SingleAct from '../components/SingleAct';
import PleaseSignIn from '../components/PleaseSignIn';

const Item = props => (
  <div>
    <PleaseSignIn>
      <SingleAct id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default Item;
