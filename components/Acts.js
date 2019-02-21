import React, { Fragment, useState } from 'react';
import {Query} from 'react-apollo';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops';
import ActCard from './ActCard';
import Error from './ErrorMessage';
import * as queries from './globals/queries/queries';
import {Center, ActsGrid, ActsList} from './styles/ActsViewStyles';
import Pagination from './Pagination';
import { perPage } from '../config';
import ViewPicker from './ActsViewPicker';

const Composed = adopt({
  allActs: ({skip, render}) => <Query query={queries.ALL_ACTS_QUERY_PAGINATION} variables={skip}>{render}</Query>,
  spring: ({render}) => <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{render}</Spring>,
})

const Acts = ({page}) => {
  const [view, setView] = useState('grid');
  function changeView(view) {
    setView(view)
  }

  return (
    <Center>
      <ViewPicker changeView={changeView} activeView={view}/>
        <Pagination page={page}/>
          <Composed skip={{skip: page*perPage-perPage}}>
            {({allActs, spring}) => {
              if (allActs.error) return <Error error={allActs.error} />
              if (allActs.loading) return <p>Loading</p>
              const acts = allActs.data.acts;
              return (
                <div style={spring}>
                  {view === 'grid' && <ActsGrid>{acts.map(act => <ActCard act={act} key={act.id} view={view}/>)}</ActsGrid>}
                  {view === 'list' && <ActsList>{acts.map(act => <ActCard act={act} key={act.id} view={view}/>)}</ActsList>}
                </div>
              )
            }}
          </Composed>
        <Pagination page={page}/>
    </Center>
  );
}
export default Acts;

