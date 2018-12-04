import React, { Component } from 'react';
import Downshift from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
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

  onChange = async (e, client) => {
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: {searchTerm: e.target.value}
    });
    console.log(res);
  }

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
            <p>Items Will Go Here</p>
          </DropDown>
        </div>
      </SearchStyles>    
    );
  }
}

export default Autocomplete;