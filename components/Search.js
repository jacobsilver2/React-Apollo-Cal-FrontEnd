import React, { Component } from 'react';
import Downshift from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_EVENTS_QUERY = gql`
  query SEARCH_EVENTS_QUERY($searchTerm: String!) {
    events(where: {
      OR: [
        {title_contains: $searchTerm},
        {description_contains: $searchTerm},
      ] }) 
      {
        id 
        image
        title
      }
  }
`;

class Autocomplete extends Component {
  state = {
    events: [],
    loading: false,

  }
  onChange = debounce(async (e, client) => {
    // turn loading on
    this.setState({ loading: true });
    const res = await client.query({
      query: SEARCH_EVENTS_QUERY,
      variables: {searchTerm: e.target.value}
    });
    this.setState({ events: res.data.events, loading: false });
  }, 350);

  render() {
    return (
      <SearchStyles>
        <div>
          <ApolloConsumer>
            {(client) => (
              <input type="search" onChange={(e) => {
                e.persist();
                this.onChange(e, client);
              }}/>
            )}
          </ApolloConsumer>
          <DropDown>
            {this.state.events.map(event => <DropDownItem key={event.id}>
              <img width="50" src={event.image} alt={event.title}/>
              {event.title}
            </DropDownItem>)}
          </DropDown>
        </div>
      </SearchStyles>    
    );
  }
}

export default Autocomplete;