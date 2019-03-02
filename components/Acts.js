import React, { useState } from 'react';
import {Query} from 'react-apollo';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops';
import ActCard from './ActCard';
import Error from './ErrorMessage';
import * as queries from './globals/queries/queries';
import {Center, ActsGrid, ActsListStyles} from './styles/ActsViewStyles';
import Pagination from './Pagination';
import { perPage } from '../config';
import ViewPicker from './ActsViewPicker';
import ActsListContainer from './ActsList/ActsListContainer';

const Composed = adopt({
  allActs: ({skip, render}) => <Query query={queries.ALL_ACTS_QUERY_PAGINATION} variables={skip}>{render}</Query>,
  spring: ({render}) => <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{render}</Spring>,
})

const Acts = ({page}) => {
  const [view, setView] = useState('grid');
  function changeView(view) {
    setView(view);
    changePerPage(view);
  }

  const [perPage, setPerPage] = useState(12);
  function changePerPage(view){
    view === 'grid' ? setPerPage(12) : setPerPage(100)
  }

  return (
    <Center>
        <Pagination page={page} view={view} perPage={perPage}/>
        <ViewPicker changeView={changeView} activeView={view}/>
          <Composed skip={{skip: page*perPage-perPage}}>
            {({allActs, spring}) => {
              if (allActs.error) return <Error error={allActs.error} />
              if (allActs.loading) return <p>Loading</p>
              const acts = allActs.data.acts;
              return (
                <div style={spring}>
                  {view === 'grid' && <ActsGrid>{acts.map(act => <ActCard act={act} key={act.id} view={view}/>)}</ActsGrid>}
                  {view === 'list' && <ActsListContainer acts={acts}/>}
                </div>
              )
            }}
          </Composed>
        <Pagination page={page} perPage={perPage}/>
    </Center>
  );
}
export default Acts;

