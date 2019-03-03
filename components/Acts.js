import React, { useState } from 'react';
import {Query} from 'react-apollo';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring/renderprops';
import ActCard from './ActCard';
import Error from './ErrorMessage';
import * as queries from './globals/queries/queries';
import {Center, ActsGrid, ActsListStyles} from './styles/ActsViewStyles';
import Container from './styles/Container';
import Pagination from './Pagination';
import ViewPicker from './ActsViewPicker';
import ActsListContainer from './ActsList/ActsListContainer';

// this will conditionally render different views based on user choice.  
// Grid View is paginated, List View is not.

const Composed = adopt({
  allActsPaginated: ({skip, render}) => <Query query={queries.ALL_ACTS_QUERY_PAGINATION} variables={skip}>{render}</Query>,
  allActs: ({render}) => <Query query={queries.ALL_ACTS_QUERY}>{render}</Query>,
  spring: ({render}) => <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{render}</Spring>,
})

const Acts = ({page}) => {
  const [view, setView] = useState('grid');
  const [perPage, setPerPage] = useState(12);


  function changeView(view) {
    setView(view);
    changePerPage(view);
  }

  function changePerPage(view){
    view === 'grid' ? setPerPage(12) : setPerPage(100)
  }

  const renderGridView = 
  <Container>
  <Center>
  <Pagination page={page} view={view} />
  <ViewPicker changeView={changeView} activeView={view}/>
    <Composed skip={{skip: page*perPage-perPage}}>
      {({allActsPaginated, allActs, spring}) => {
        if (allActsPaginated.error) return <Error error={allActs.error} />
        if (allActsPaginated.loading) return <p>Loading</p>
        const acts = allActsPaginated.data.acts;
        return (
          <div style={spring}>
            <ActsGrid>{acts.map(act => <ActCard act={act} key={act.id} view={view}/>)}</ActsGrid>
          </div>
        )
      }}
    </Composed>
  <Pagination page={page} />
</Center>
</Container>

const renderListView = 
<Container>
  <Center>
  <ViewPicker changeView={changeView} activeView={view}/>
    <Composed>
      {({allActsPaginated, allActs , spring}) => {
        if (allActs.error) return <Error error={allActs.error} />
        if (allActs.loading) return <p>Loading</p>
        const acts = allActs.data.acts;
        return (
          <div style={spring}>
           <ActsListContainer acts={acts}/>
          </div>
        )
      }}
    </Composed>
  </Center>
</Container>

  return (
    view === 'grid' ? renderGridView : renderListView
  );
}
export default Acts;

