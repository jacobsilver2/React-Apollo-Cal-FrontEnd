import React, { Component } from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';
import { SEARCH_ACTS_QUERY } from './globals/queries/queries';



function routeToAct(act) {
  Router.push({
    pathname: '/act',
    query: {
      id: act.id
    }
  })
}

class Autocomplete extends Component {
  state = {
    acts: [],
    loading: false,
  }

  onChange = debounce(async (e, client) => {
    // turn loading on
    this.setState({ loading: true });
    const res = await client.query({
      query: SEARCH_ACTS_QUERY,
      variables: { searchTerm: e.target.value }
    });
    this.setState({ acts: res.data.acts, loading: false });
  }, 350);

  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift onChange={routeToAct} itemToString={item => (item === null ? '' : item.name)} >
          {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
            <div>
              <ApolloConsumer>
                {(client) => (
                  <input
                    {...getInputProps({
                      type: "search",
                      placeholder: 'search for an act',
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
              {isOpen && (
                <DropDown>
                  {this.state.acts.map((item, index) =>
                    <DropDownItem
                      {...getItemProps({ item })}
                      key={item.id}
                      highlighted={index === highlightedIndex}
                    >
                      <img width="50" src={item.image} alt={item.name} />
                      {item.name}
                    </DropDownItem>)}
                  {!this.state.acts.length && !this.state.loading && (
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