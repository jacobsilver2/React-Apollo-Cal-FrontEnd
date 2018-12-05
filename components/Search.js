import React, { Component } from 'react';
import Downshift, {resetIdCounter} from 'downshift';
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

function routeToEvent(event) {
  console.log(event);
  Router.push({
    pathname: '/event',
    query: {
      id: event.id
    }
  })
}

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
    resetIdCounter();
    return (
      <SearchStyles>
      <Downshift onChange={routeToEvent} itemToString={item => (item === null ? '' : item.title)} >
        {({getInputProps, getItemProps, isOpen, inputValue, highlightedIndex}) => (
          <div>
            <ApolloConsumer>
              {(client) => (
                <input 
                  {...getInputProps({
                    type: "search",
                    placeholder: 'search for an event',
                    id: 'search',
                    className: this.state.loading ? 'loading' : '',
                    onChange: e => {
                    e.persist();
                    this.onChange(e, client);
                  },
                  })}
                />
              )}
            </ApolloConsumer>
            { isOpen && (
              <DropDown>
                {this.state.events.map((item, index) => 
                  <DropDownItem 
                    {...getItemProps({ item }) } 
                    key={item.id}
                    highlighted={index === highlightedIndex} 
                  >
                  <img width="50" src={item.image} alt={item.title}/>
                  {item.title}
                </DropDownItem>)}
                {!this.state.events.length && !this.state.loading && (
                  <DropDownItem>Nothing Found for {inputValue}</DropDownItem>
                )}
              </DropDown>
            )}
          </div>
        )}
      </Downshift>
      </SearchStyles>    
    );
  }
}

export default Autocomplete;