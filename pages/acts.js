import AllActs from '../components/Acts';
import PleaseSignIn from '../components/PleaseSignIn';

const Acts = (props) => (
  <div>
    <PleaseSignIn>
      <AllActs page={parseFloat(props.query.page) || 1}/>
    </PleaseSignIn>
  </div>
);

export default Acts;