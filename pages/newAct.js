import NewAct from '../components/CreateAct/NewAct';
import PleaseSignIn from '../components/PleaseSignIn';

const newAct = () => (
  <div>
    <PleaseSignIn>
      <NewAct />
    </PleaseSignIn>
  </div>
);

export default newAct;