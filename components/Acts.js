import React, { Component } from 'react';
import {Query} from 'react-apollo';
import { adopt } from 'react-adopt';
import { Spring } from 'react-spring';
import styled from 'styled-components';
import ActCard from './ActCard';
import Error from './ErrorMessage';
import * as queries from './globals/queries/queries';
import Pagination from './Pagination';
import { perPage } from '../config';
import ViewPicker from './ActsViewPicker';


const Center = styled.div`
  text-align: center;
`;

const ActsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const ActsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Composed = adopt({
  allActs: ({skip, render}) => <Query query={queries.ALL_ACTS_QUERY_PAGINATION} variables={skip}>{render}</Query>,
  spring: ({render}) => <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>{render}</Spring>,
})

class Acts extends Component {
  state = {
    viewAs: 'grid',
  };

  handleChangeView = view => {
    this.setState({ viewAs: view });
  }

  render() {
    return (
      <>
        <Center>
        <ViewPicker changeView={this.handleChangeView} activeView={this.state.viewAs}/>
          <Pagination page={this.props.page}/>
          <Composed skip={{skip: this.props.page*perPage-perPage}}>
            {({allActs, spring}) => {
              if (allActs.error) return <Error error={allActs.error} />
              if (allActs.loading) return <p>Loading</p>
              const acts = allActs.data.acts;
              return (
                <div style={spring}>
                  {this.state.viewAs === 'grid' && <ActsGrid>{acts.map(act => <ActCard act={act} key={act.id} view={this.state.viewAs}/>)}</ActsGrid>}
                  {this.state.viewAs === 'list' && <ActsList>{acts.map(act => <ActCard act={act} key={act.id} view={this.state.viewAs}/>)}</ActsList>}
                </div>
              )
            }}
          </Composed>
          <Pagination page={this.props.page}/>
        </Center>
      </>
    );
  }
}


export default Acts;
