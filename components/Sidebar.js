import React from 'react';
import Link from 'next/link';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import SidebarStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';


const LOCAL_STATE_QUERY = gql`
  query {
    sidebarOpen @client
  }
`;

const TOGGLE_SIDEBAR_MUTATION = gql`
  mutation {
    toggleSidebarOpen @client
  }
`;


const Sidebar = (props) => (
  <Mutation mutation={TOGGLE_SIDEBAR_MUTATION}>
    {(toggleSidebarOpen) => (
      <Query query={LOCAL_STATE_QUERY}>
        {({data}) =>
          (
          <SidebarStyles open={data.sidebarOpen}>
            <header>
              <CloseButton onClick={toggleSidebarOpen} title="close">&times;</CloseButton>
              <Supreme>Sidebar</Supreme>
            </header>
            <Link href="/newAct">
              <a>New Act</a>
            </Link>
            <Link href="/acts">
              <a>All Acts</a>
            </Link>
            
          </SidebarStyles>
        )}
      </Query>
    )}
  </Mutation>
);

export { LOCAL_STATE_QUERY, TOGGLE_SIDEBAR_MUTATION };
export default Sidebar;
