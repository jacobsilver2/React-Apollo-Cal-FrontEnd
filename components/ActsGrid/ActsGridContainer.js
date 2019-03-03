import React from 'react';
import Container from '../styles/Container';
import Pagination from '../Pagination';
import ViewPicker from '../ActsViewPicker';
import Error from '../ErrorMessage';
import {Center, ActsGrid, ActsListStyles} from '../styles/ActsViewStyles';
import ActCard from '../ActCard';

const ActsGridContainer = ({ Composed, page, view, changeView, perPage }) => (
  <Container>
    <Center>
      <Pagination page={page} view={view} />
      <ViewPicker changeView={changeView} activeView={view}/>
        <Composed skip={{skip: page*perPage-perPage}}>
          {({allActsPaginated, allActs, spring}) => {
            if (allActsPaginated.error) return <Error error={allActsPaginated.error} />
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
);

export default ActsGridContainer;