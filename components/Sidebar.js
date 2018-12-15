import React from 'react';
import Link from 'next/link';
import { adopt } from 'react-adopt';
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

/* eslint-disable */
const Composed = adopt({
  toggleSidebar: ({render}) => <Mutation mutation={TOGGLE_SIDEBAR_MUTATION}>{render}</Mutation>,
  localState: ({render}) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>
})
/* eslint-enable */


const Sidebar = (props) => (
  <Composed>
        {({toggleSidebar, localState}) =>
          (
          <SidebarStyles open={localState.data.sidebarOpen}>
            <header>
              <CloseButton onClick={toggleSidebar} title="close">&times;</CloseButton>
              <Supreme>Sidebar</Supreme>
            </header>
            <ul>
              <li>
                <Link href="/newAct">
                  <a>New Act</a>
                </Link>
              </li>
              <li>
                <Link href="/acts">
                  <a>All Acts</a>
                </Link>
              </li>
            </ul>
          </SidebarStyles>
    )}
  </Composed>
);

export { LOCAL_STATE_QUERY, TOGGLE_SIDEBAR_MUTATION };
export default Sidebar;
