import AllActs from '../components/Acts';

const Acts = (props) => (
  <div>
    <AllActs page={parseFloat(props.query.page) || 1}/>
  </div>
);

export default Acts;