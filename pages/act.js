import SingleAct from '../components/SingleAct';

const Item = props => (
  <div>
    <SingleAct id={props.query.id} />
  </div>
);

export default Item;
